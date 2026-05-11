import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import {
  STUDY_LT,
  isValidStudyLanguage,
  studyLanguageMeta,
  studyLanguageOrder,
  studyAddWordExamples,
} from '@/lib/learningLanguages';

const STUDY_KEY = 'lt_study_language';
const ONBOARDING_KEY = 'lt_study_onboarding_done';

function readStoredStudyLanguage() {
  const raw = localStorage.getItem(STUDY_KEY);
  if (isValidStudyLanguage(raw)) return raw;
  return STUDY_LT;
}

function readOnboardingDone() {
  if (localStorage.getItem(ONBOARDING_KEY) === '1') return true;
  try {
    const raw = localStorage.getItem('lt_words');
    const words = raw ? JSON.parse(raw) : [];
    if (Array.isArray(words) && words.length > 0) {
      localStorage.setItem(ONBOARDING_KEY, '1');
      return true;
    }
  } catch {
    /* ignore */
  }
  return false;
}

const LearningLanguageContext = createContext(null);

export function LearningLanguageProvider({ children }) {
  const [studyLanguage, setStudyLanguageState] = useState(readStoredStudyLanguage);
  const [onboardingDone, setOnboardingDoneState] = useState(readOnboardingDone);

  const setStudyLanguage = useCallback((code) => {
    if (!isValidStudyLanguage(code)) return;
    localStorage.setItem(STUDY_KEY, code);
    setStudyLanguageState(code);
  }, []);

  const completeOnboarding = useCallback((code) => {
    if (!isValidStudyLanguage(code)) return;
    localStorage.setItem(STUDY_KEY, code);
    localStorage.setItem(ONBOARDING_KEY, '1');
    setStudyLanguageState(code);
    setOnboardingDoneState(true);
  }, []);

  const meta = studyLanguageMeta[studyLanguage] ?? studyLanguageMeta[STUDY_LT];
  const addExamples = studyAddWordExamples[studyLanguage] ?? studyAddWordExamples[STUDY_LT];

  const value = useMemo(
    () => ({
      studyLanguage,
      setStudyLanguage,
      studyLanguageOrder,
      studyLanguageMeta,
      meta,
      addExamples,
      onboardingDone,
      completeOnboarding,
    }),
    [studyLanguage, setStudyLanguage, meta, addExamples, onboardingDone, completeOnboarding]
  );

  return (
    <LearningLanguageContext.Provider value={value}>
      {children}
    </LearningLanguageContext.Provider>
  );
}

export function useLearningLanguage() {
  const ctx = useContext(LearningLanguageContext);
  if (!ctx) {
    throw new Error('useLearningLanguage must be used within LearningLanguageProvider');
  }
  return ctx;
}
