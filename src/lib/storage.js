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
    const diffDays = Math.floor((todayDate - lastDate) / (1000 * 60 * 60 * 24));

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

export function saveWord(lithuanian, english) {
  const words = getWords();
  const newWord = {
    id: Date.now().toString(),
    lithuanian: lithuanian.trim(),
    english: english.trim(),
    level: 0, // 0 = new, higher = more known
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

// --- Spaced Repetition ---
export function getReviewWords() {
  const today = getToday();
  const words = getWords();
  return words.filter(w => w.nextReview <= today);
}

export function markCorrect(id) {
  const words = getWords();
  const word = words.find(w => w.id === id);
  if (!word) return;
  const newLevel = Math.min(word.level + 1, 5);
  const daysUntilNext = [1, 2, 4, 7, 14, 30][newLevel];
  const next = new Date();
  next.setDate(next.getDate() + daysUntilNext);
  updateWord(id, {
    level: newLevel,
    nextReview: next.toISOString().split('T')[0],
  });
}

export function markIncorrect(id) {
  updateWord(id, {
    level: 0,
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
export function getStats() {
  const words = getWords();
  return {
    totalWords: words.length,
    mastered: words.filter(w => w.level >= 4).length,
    learning: words.filter(w => w.level > 0 && w.level < 4).length,
    newWords: words.filter(w => w.level === 0).length,
    streak: getStreak(),
    lastActive: getLastActive(),
  };
}