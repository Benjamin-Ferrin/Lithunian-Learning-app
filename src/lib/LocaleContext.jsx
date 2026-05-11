import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import { messages, supportedLocaleCodes } from '@/lib/locales';
import {
  getHomeSubtitleLearn,
  getLabelStudyTarget,
} from '@/lib/studyLanguageUiCopy';

const LOCALE_KEY = 'lt_ui_locale';

function readStoredLocale() {
  const raw = localStorage.getItem(LOCALE_KEY);
  if (supportedLocaleCodes.includes(raw)) return raw;
  return 'en';
}

const LocaleContext = createContext(null);

export function LocaleProvider({ children }) {
  const [locale, setLocaleState] = useState(readStoredLocale);

  const setLocale = useCallback((code) => {
    if (!supportedLocaleCodes.includes(code)) return;
    localStorage.setItem(LOCALE_KEY, code);
    setLocaleState(code);
  }, []);

  const t = useCallback(
    (key, ...args) => {
      if (key === 'homeSubtitleLearn') {
        return getHomeSubtitleLearn(locale, args[0]);
      }
      if (key === 'labelStudyTarget') {
        return getLabelStudyTarget(locale, args[0]);
      }
      const entry = messages[locale]?.[key] ?? messages.en[key];
      if (typeof entry === 'function') return entry(...args);
      return entry ?? key;
    },
    [locale]
  );

  const value = useMemo(
    () => ({ locale, setLocale, t }),
    [locale, setLocale, t]
  );

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    throw new Error('useLocale must be used within LocaleProvider');
  }
  return ctx;
}
