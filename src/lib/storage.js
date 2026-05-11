import { isValidStudyLanguage, STUDY_LT } from '@/lib/learningLanguages';

// Simple localStorage wrapper for offline-first data

const WORDS_KEY = 'lt_words';
const STREAK_KEY = 'lt_streak';
const LAST_ACTIVE_KEY = 'lt_last_active';
const LAST_REVIEW_KEY = 'lt_last_review';
const THEME_KEY = 'lt_theme';

function getToday() {
  return new Date().toISOString().split('T')[0];
}

function recordActiveDay() {
  const today = getToday();
  const lastActive = getLastActive();
  let streak = getStreak();

  if (lastActive === today) return;

  if (lastActive) {
    const lastDate = new Date(lastActive);
    const todayDate = new Date(today);
    const diffDays = Math.floor(
      (todayDate.getTime() - lastDate.getTime()) / (1000 * 60 * 60 * 24)
    );

    if (diffDays === 1) {
      streak += 1;
    } else if (diffDays > 1) {
      streak = 1; // Reset
    }
    // diffDays === 0 means same day (handled above); streak stays
  } else {
    streak = 1; // First ever activity
  }

  localStorage.setItem(STREAK_KEY, streak.toString());
  localStorage.setItem(LAST_ACTIVE_KEY, today);
}

// --- Words ---
export function getWords() {
  const raw = localStorage.getItem(WORDS_KEY);
  return raw ? JSON.parse(raw) : [];
}

function wordLanguage(w) {
  const raw = w.language || STUDY_LT;
  return isValidStudyLanguage(raw) ? raw : STUDY_LT;
}

export function saveWord(lithuanian, english, language = STUDY_LT) {
  const words = getWords();
  const lang = isValidStudyLanguage(language) ? language : STUDY_LT;
  const newWord = {
    id: Date.now().toString(),
    lithuanian: lithuanian.trim(),
    english: english.trim(),
    language: lang,
    level: 0, // legacy display / migration
    knowCount: 0,
    nextReview: getToday(),
    created: getToday(),
  };
  words.push(newWord);
  localStorage.setItem(WORDS_KEY, JSON.stringify(words));
  recordActiveDay();
  return newWord;
}

export function updateWord(id, updates) {
  const words = getWords();
  const idx = words.findIndex(w => w.id === id);
  if (idx !== -1) {
    words[idx] = { ...words[idx], ...updates };
    localStorage.setItem(WORDS_KEY, JSON.stringify(words));
  }
}

export function deleteWord(id) {
  const words = getWords().filter(w => w.id !== id);
  localStorage.setItem(WORDS_KEY, JSON.stringify(words));
}

// --- Review queue (all words stay in rotation; order by know-count + jitter) ---
const SORT_JITTER = 0.45;

export function getWordsForStudyLanguage(language) {
  return getWords().filter((w) => wordLanguage(w) === language);
}

export function getReviewWords(language) {
  const words = language ? getWordsForStudyLanguage(language) : getWords();
  if (words.length === 0) return [];
  return words
    .map(w => ({
      w,
      score: (w.knowCount || 0) + (Math.random() - 0.5) * SORT_JITTER,
    }))
    .sort((a, b) => a.score - b.score)
    .map(x => x.w);
}

export function markCorrect(id) {
  const words = getWords();
  const word = words.find(w => w.id === id);
  if (!word) return;
  const knowCount = (word.knowCount || 0) + 1;
  updateWord(id, {
    knowCount,
    nextReview: getToday(),
  });
}

export function markIncorrect(id) {
  const words = getWords();
  const word = words.find(w => w.id === id);
  if (!word) return;
  const knowCount = Math.max(0, (word.knowCount || 0) - 1);
  updateWord(id, {
    level: 0,
    knowCount,
    nextReview: getToday(),
  });
}

// --- Streak ---
export function getStreak() {
  return parseInt(localStorage.getItem(STREAK_KEY) || '0', 10);
}

export function getLastActive() {
  return localStorage.getItem(LAST_ACTIVE_KEY) || null;
}

export function getLastReview() {
  return localStorage.getItem(LAST_REVIEW_KEY) || null;
}

export function hasReviewedToday() {
  return getLastReview() === getToday();
}

export function recordReviewSession() {
  const today = getToday();
  const lastReview = getLastReview();
  
  if (lastReview === today) return; // Already recorded today
  
  recordActiveDay();
  localStorage.setItem(LAST_REVIEW_KEY, today);
}

// --- Theme ---
export function getTheme() {
  return localStorage.getItem(THEME_KEY) || 'light';
}

export function setTheme(theme) {
  localStorage.setItem(THEME_KEY, theme);
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}

export function initTheme() {
  const theme = getTheme();
  setTheme(theme);
}

// --- Stats ---
export function getStats(language) {
  const words = language ? getWordsForStudyLanguage(language) : getWords();
  const knows = w => w.knowCount || 0;
  return {
    totalWords: words.length,
    mastered: words.filter(w => knows(w) >= 6).length,
    learning: words.filter(w => knows(w) > 0 && knows(w) < 6).length,
    newWords: words.filter(w => knows(w) === 0).length,
    streak: getStreak(),
    lastActive: getLastActive(),
  };
}