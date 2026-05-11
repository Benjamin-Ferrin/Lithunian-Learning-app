/** Languages you can study (separate from app UI locale). */

export const STUDY_RU = 'ru';
export const STUDY_LT = 'lt';
export const STUDY_LV = 'lv';
export const STUDY_BE = 'be';
export const STUDY_SGS = 'sgs';
export const STUDY_LTG = 'ltg';
export const STUDY_PL = 'pl';
export const STUDY_SV = 'sv';
export const STUDY_FI = 'fi';
export const STUDY_DE = 'de';
export const STUDY_NO = 'no';
export const STUDY_EN = 'en';

/** Display / storage order (matches your list). */
export const studyLanguageOrder = [
  STUDY_RU,
  STUDY_LT,
  STUDY_LV,
  STUDY_BE,
  STUDY_SGS,
  STUDY_LTG,
  STUDY_PL,
  STUDY_SV,
  STUDY_FI,
  STUDY_DE,
  STUDY_NO,
  STUDY_EN,
];

const valid = new Set(studyLanguageOrder);

/** Example pairs for add-word placeholders per study language. */
export const studyAddWordExamples = {
  [STUDY_RU]: { target: 'Спасибо', english: 'Thank you' },
  [STUDY_LT]: { target: 'Ačiū', english: 'Thank you' },
  [STUDY_LV]: { target: 'Paldies', english: 'Thank you' },
  [STUDY_BE]: { target: 'Дзякуй', english: 'Thank you' },
  [STUDY_SGS]: { target: 'Dėkui', english: 'Thank you' },
  [STUDY_LTG]: { target: 'Paldies', english: 'Thank you' },
  [STUDY_PL]: { target: 'Dziękuję', english: 'Thank you' },
  [STUDY_SV]: { target: 'Tack', english: 'Thank you' },
  [STUDY_FI]: { target: 'Kiitos', english: 'Thank you' },
  [STUDY_DE]: { target: 'Danke', english: 'Thank you' },
  [STUDY_NO]: { target: 'Takk', english: 'Thank you' },
  [STUDY_EN]: { target: 'Thank you', english: 'Thank you' },
};

export const studyLanguageMeta = {
  [STUDY_RU]: {
    code: STUDY_RU,
    nativeName: 'Русский',
    cardGradient:
      'from-slate-100 via-blue-700/90 to-red-600/90 dark:from-slate-600/90 dark:via-blue-600/85 dark:to-red-700/80',
    ringColor: 'ring-blue-300/35',
  },
  [STUDY_LT]: {
    code: STUDY_LT,
    nativeName: 'Lietuvių',
    cardGradient:
      'from-emerald-600/90 via-teal-600/85 to-amber-500/80 dark:from-emerald-500/80 dark:via-teal-600/75 dark:to-amber-600/70',
    ringColor: 'ring-emerald-400/40',
  },
  [STUDY_LV]: {
    code: STUDY_LV,
    nativeName: 'Latviešu',
    cardGradient:
      'from-rose-900/85 via-white/40 to-rose-900/80 dark:from-rose-950/80 dark:via-rose-900/50 dark:to-rose-950/75',
    ringColor: 'ring-rose-400/30',
  },
  [STUDY_BE]: {
    code: STUDY_BE,
    nativeName: 'Беларуская',
    cardGradient:
      'from-white via-red-500/75 to-white dark:from-zinc-600 dark:via-red-600/70 dark:to-zinc-600',
    ringColor: 'ring-red-300/30',
  },
  [STUDY_SGS]: {
    code: STUDY_SGS,
    nativeName: 'Žemaitėškā',
    cardGradient:
      'from-green-800/90 via-zinc-900/80 to-amber-600/70 dark:from-green-700/75 dark:via-zinc-950 dark:to-amber-700/60',
    ringColor: 'ring-green-500/35',
  },
  [STUDY_LTG]: {
    code: STUDY_LTG,
    nativeName: 'Latgalīšu',
    cardGradient:
      'from-[#7b1c3a] via-rose-700/80 to-amber-900/70 dark:from-[#5c1428] dark:via-rose-900/70 dark:to-amber-950/60',
    ringColor: 'ring-rose-300/35',
  },
  [STUDY_PL]: {
    code: STUDY_PL,
    nativeName: 'Polski',
    cardGradient:
      'from-white via-red-600/85 to-white dark:from-zinc-500/60 dark:via-red-700/75 dark:to-zinc-600/60',
    ringColor: 'ring-red-400/25',
  },
  [STUDY_SV]: {
    code: STUDY_SV,
    nativeName: 'Svenska',
    cardGradient:
      'from-blue-700/90 via-blue-600/80 to-amber-400/75 dark:from-blue-800/85 dark:via-blue-700/75 dark:to-amber-500/50',
    ringColor: 'ring-amber-300/30',
  },
  [STUDY_FI]: {
    code: STUDY_FI,
    nativeName: 'Suomi',
    cardGradient:
      'from-white via-sky-600/80 to-white dark:from-slate-600 dark:via-sky-700/75 dark:to-slate-700',
    ringColor: 'ring-sky-400/30',
  },
  [STUDY_DE]: {
    code: STUDY_DE,
    nativeName: 'Deutsch',
    cardGradient:
      'from-zinc-900 via-red-700/85 to-amber-500/80 dark:from-zinc-950 dark:via-red-800/70 dark:to-amber-700/55',
    ringColor: 'ring-amber-400/25',
  },
  [STUDY_NO]: {
    code: STUDY_NO,
    nativeName: 'Norsk',
    cardGradient:
      'from-red-700/90 via-blue-900/85 to-red-700/88 dark:from-red-900/80 dark:via-blue-950 dark:to-red-900/75',
    ringColor: 'ring-blue-300/30',
  },
  [STUDY_EN]: {
    code: STUDY_EN,
    nativeName: 'English',
    cardGradient:
      'from-blue-900/80 via-indigo-700/75 to-red-700/75 dark:from-blue-950 dark:via-indigo-900/70 dark:to-red-900/65',
    ringColor: 'ring-indigo-300/30',
  },
};

export function isValidStudyLanguage(code) {
  return valid.has(code);
}
