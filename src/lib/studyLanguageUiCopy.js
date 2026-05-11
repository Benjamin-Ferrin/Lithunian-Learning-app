/**
 * Study-language names and home subtitle lines for each app UI locale.
 * Keeps `locales.js` free of huge per-language matrices.
 */

import {
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
} from '@/lib/learningLanguages';

const CODES = [
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

const labelStudyTargetEn = {
  [STUDY_RU]: 'Russian',
  [STUDY_LT]: 'Lithuanian',
  [STUDY_LV]: 'Latvian',
  [STUDY_BE]: 'Belarusian',
  [STUDY_SGS]: 'Samogitian',
  [STUDY_LTG]: 'Latgalian',
  [STUDY_PL]: 'Polish',
  [STUDY_SV]: 'Swedish',
  [STUDY_FI]: 'Finnish',
  [STUDY_DE]: 'German',
  [STUDY_NO]: 'Norwegian',
  [STUDY_EN]: 'English',
};

const homeSubtitleLearnEn = {
  [STUDY_RU]: 'Learn Russian today',
  [STUDY_LT]: 'Learn Lithuanian today',
  [STUDY_LV]: 'Learn Latvian today',
  [STUDY_BE]: 'Learn Belarusian today',
  [STUDY_SGS]: 'Learn Samogitian today',
  [STUDY_LTG]: 'Learn Latgalian today',
  [STUDY_PL]: 'Learn Polish today',
  [STUDY_SV]: 'Learn Swedish today',
  [STUDY_FI]: 'Learn Finnish today',
  [STUDY_DE]: 'Learn German today',
  [STUDY_NO]: 'Learn Norwegian today',
  [STUDY_EN]: 'Learn English today',
};

const labelStudyTargetLt = {
  [STUDY_RU]: 'Rusų',
  [STUDY_LT]: 'Lietuvių',
  [STUDY_LV]: 'Latvių',
  [STUDY_BE]: 'Baltarusių',
  [STUDY_SGS]: 'Žemaičių',
  [STUDY_LTG]: 'Latgalių',
  [STUDY_PL]: 'Lenkų',
  [STUDY_SV]: 'Švedų',
  [STUDY_FI]: 'Suomių',
  [STUDY_DE]: 'Vokiečių',
  [STUDY_NO]: 'Norvegų',
  [STUDY_EN]: 'Anglų',
};

const homeSubtitleLearnLt = {
  [STUDY_RU]: 'Mokykitės rusų šiandien',
  [STUDY_LT]: 'Mokykitės lietuvių šiandien',
  [STUDY_LV]: 'Mokykitės latvių šiandien',
  [STUDY_BE]: 'Mokykitės baltarusių šiandien',
  [STUDY_SGS]: 'Mokykitės žemaičių šiandien',
  [STUDY_LTG]: 'Mokykitės latgalių šiandien',
  [STUDY_PL]: 'Mokykitės lenkų šiandien',
  [STUDY_SV]: 'Mokykitės švedų šiandien',
  [STUDY_FI]: 'Mokykitės suomių šiandien',
  [STUDY_DE]: 'Mokykitės vokiečių šiandien',
  [STUDY_NO]: 'Mokykitės norvegų šiandien',
  [STUDY_EN]: 'Mokykitės anglų šiandien',
};

const labelStudyTargetDe = {
  [STUDY_RU]: 'Russisch',
  [STUDY_LT]: 'Litauisch',
  [STUDY_LV]: 'Lettisch',
  [STUDY_BE]: 'Weißrussisch',
  [STUDY_SGS]: 'Samogitisch',
  [STUDY_LTG]: 'Letgallisch',
  [STUDY_PL]: 'Polnisch',
  [STUDY_SV]: 'Schwedisch',
  [STUDY_FI]: 'Finnisch',
  [STUDY_DE]: 'Deutsch',
  [STUDY_NO]: 'Norwegisch',
  [STUDY_EN]: 'Englisch',
};

const homeSubtitleLearnDe = {
  [STUDY_RU]: 'Lerne heute Russisch',
  [STUDY_LT]: 'Lerne heute Litauisch',
  [STUDY_LV]: 'Lerne heute Lettisch',
  [STUDY_BE]: 'Lerne heute Weißrussisch',
  [STUDY_SGS]: 'Lerne heute Samogitisch',
  [STUDY_LTG]: 'Lerne heute Letgallisch',
  [STUDY_PL]: 'Lerne heute Polnisch',
  [STUDY_SV]: 'Lerne heute Schwedisch',
  [STUDY_FI]: 'Lerne heute Finnisch',
  [STUDY_DE]: 'Lerne heute Deutsch',
  [STUDY_NO]: 'Lerne heute Norwegisch',
  [STUDY_EN]: 'Lerne heute Englisch',
};

const labelStudyTargetEs = {
  [STUDY_RU]: 'Ruso',
  [STUDY_LT]: 'Lituano',
  [STUDY_LV]: 'Letón',
  [STUDY_BE]: 'Bielorruso',
  [STUDY_SGS]: 'Samogitiano',
  [STUDY_LTG]: 'Letgaliano',
  [STUDY_PL]: 'Polaco',
  [STUDY_SV]: 'Sueco',
  [STUDY_FI]: 'Finlandés',
  [STUDY_DE]: 'Alemán',
  [STUDY_NO]: 'Noruego',
  [STUDY_EN]: 'Inglés',
};

const homeSubtitleLearnEs = {
  [STUDY_RU]: 'Aprende ruso hoy',
  [STUDY_LT]: 'Aprende lituano hoy',
  [STUDY_LV]: 'Aprende letón hoy',
  [STUDY_BE]: 'Aprende bielorruso hoy',
  [STUDY_SGS]: 'Aprende samogitiano hoy',
  [STUDY_LTG]: 'Aprende letgaliano hoy',
  [STUDY_PL]: 'Aprende polaco hoy',
  [STUDY_SV]: 'Aprende sueco hoy',
  [STUDY_FI]: 'Aprende finlandés hoy',
  [STUDY_DE]: 'Aprende alemán hoy',
  [STUDY_NO]: 'Aprende noruego hoy',
  [STUDY_EN]: 'Aprende inglés hoy',
};

const labelStudyTargetFr = {
  [STUDY_RU]: 'Russe',
  [STUDY_LT]: 'Lituanien',
  [STUDY_LV]: 'Letton',
  [STUDY_BE]: 'Biélorusse',
  [STUDY_SGS]: 'Samogitien',
  [STUDY_LTG]: 'Letgalien',
  [STUDY_PL]: 'Polonais',
  [STUDY_SV]: 'Suédois',
  [STUDY_FI]: 'Finnois',
  [STUDY_DE]: 'Allemand',
  [STUDY_NO]: 'Norvégien',
  [STUDY_EN]: 'Anglais',
};

const homeSubtitleLearnFr = {
  [STUDY_RU]: 'Apprends le russe aujourd’hui',
  [STUDY_LT]: 'Apprends le lituanien aujourd’hui',
  [STUDY_LV]: 'Apprends le letton aujourd’hui',
  [STUDY_BE]: 'Apprends le biélorusse aujourd’hui',
  [STUDY_SGS]: 'Apprends le samogitien aujourd’hui',
  [STUDY_LTG]: 'Apprends le letgalien aujourd’hui',
  [STUDY_PL]: 'Apprends le polonais aujourd’hui',
  [STUDY_SV]: 'Apprends le suédois aujourd’hui',
  [STUDY_FI]: 'Apprends le finnois aujourd’hui',
  [STUDY_DE]: 'Apprends l’allemand aujourd’hui',
  [STUDY_NO]: 'Apprends le norvégien aujourd’hui',
  [STUDY_EN]: 'Apprends l’anglais aujourd’hui',
};

const labelStudyTargetIt = {
  [STUDY_RU]: 'Russo',
  [STUDY_LT]: 'Lituano',
  [STUDY_LV]: 'Lettone',
  [STUDY_BE]: 'Bielorusso',
  [STUDY_SGS]: 'Samogitiano',
  [STUDY_LTG]: 'Letgallo',
  [STUDY_PL]: 'Polacco',
  [STUDY_SV]: 'Svedese',
  [STUDY_FI]: 'Finlandese',
  [STUDY_DE]: 'Tedesco',
  [STUDY_NO]: 'Norvegese',
  [STUDY_EN]: 'Inglese',
};

const homeSubtitleLearnIt = {
  [STUDY_RU]: 'Impara il russo oggi',
  [STUDY_LT]: 'Impara il lituano oggi',
  [STUDY_LV]: 'Impara il lettone oggi',
  [STUDY_BE]: 'Impara il bielorusso oggi',
  [STUDY_SGS]: 'Impara il samogitiano oggi',
  [STUDY_LTG]: 'Impara il letgallo oggi',
  [STUDY_PL]: 'Impara il polacco oggi',
  [STUDY_SV]: 'Impara lo svedese oggi',
  [STUDY_FI]: 'Impara il finlandese oggi',
  [STUDY_DE]: 'Impara il tedesco oggi',
  [STUDY_NO]: 'Impara il norvegese oggi',
  [STUDY_EN]: 'Impara l’inglese oggi',
};

const labelStudyTargetPt = {
  [STUDY_RU]: 'Russo',
  [STUDY_LT]: 'Lituano',
  [STUDY_LV]: 'Letão',
  [STUDY_BE]: 'Bielorrusso',
  [STUDY_SGS]: 'Samogitiano',
  [STUDY_LTG]: 'Latgaliano',
  [STUDY_PL]: 'Polonês',
  [STUDY_SV]: 'Sueco',
  [STUDY_FI]: 'Finlandês',
  [STUDY_DE]: 'Alemão',
  [STUDY_NO]: 'Norueguês',
  [STUDY_EN]: 'Inglês',
};

const homeSubtitleLearnPt = {
  [STUDY_RU]: 'Aprenda russo hoje',
  [STUDY_LT]: 'Aprenda lituano hoje',
  [STUDY_LV]: 'Aprenda letão hoje',
  [STUDY_BE]: 'Aprenda bielorrusso hoje',
  [STUDY_SGS]: 'Aprenda samogitiano hoje',
  [STUDY_LTG]: 'Aprenda latgaliano hoje',
  [STUDY_PL]: 'Aprenda polonês hoje',
  [STUDY_SV]: 'Aprenda sueco hoje',
  [STUDY_FI]: 'Aprenda finlandês hoje',
  [STUDY_DE]: 'Aprenda alemão hoje',
  [STUDY_NO]: 'Aprenda norueguês hoje',
  [STUDY_EN]: 'Aprenda inglês hoje',
};

const labelTables = {
  en: labelStudyTargetEn,
  lt: labelStudyTargetLt,
  de: labelStudyTargetDe,
  es: labelStudyTargetEs,
  fr: labelStudyTargetFr,
  it: labelStudyTargetIt,
  pt: labelStudyTargetPt,
};

const homeTables = {
  en: homeSubtitleLearnEn,
  lt: homeSubtitleLearnLt,
  de: homeSubtitleLearnDe,
  es: homeSubtitleLearnEs,
  fr: homeSubtitleLearnFr,
  it: homeSubtitleLearnIt,
  pt: homeSubtitleLearnPt,
};

function fallbackCode(code) {
  return CODES.includes(code) ? code : STUDY_LT;
}

export function getLabelStudyTarget(uiLocale, code) {
  const c = fallbackCode(code);
  const table = labelTables[uiLocale] ?? labelTables.en;
  return table[c] ?? labelStudyTargetEn[c];
}

export function getHomeSubtitleLearn(uiLocale, code) {
  const c = fallbackCode(code);
  const table = homeTables[uiLocale] ?? homeTables.en;
  return table[c] ?? homeSubtitleLearnEn[c];
}
