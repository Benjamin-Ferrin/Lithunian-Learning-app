/** UI copy keyed by locale code (app interface language, not the language you study). */

const en = {
  homeTitle: 'Labas',
  reviewWords: 'Review Words',
  wordsDue: (n) =>
    n > 0 ? `${n} word${n !== 1 ? 's' : ''} due` : 'All caught up!',
  addNewWord: 'Add New Word',
  addNewWordHint: 'Expand your vocabulary',
  myWords: 'My Words',
  wordsStats: (total, mastered) =>
    `${total} word${total !== 1 ? 's' : ''} · ${mastered} mastered`,
  openDaily: 'Open daily. Stay consistent.',
  language: 'Language',
  languageHint: 'App interface',
  streakLabel: 'day streak',
  doneToday: 'Done for today ✓',
  reviewTitle: 'Review',
  allCaughtUp: 'All caught up!',
  noWordsDue: 'No words due for review right now.',
  addOrLater: 'Add new words or check back later.',
  sessionComplete: 'Session complete!',
  correctOfTotal: (c, t) => `${c} of ${t} correct`,
  streakFire: (n) => `🔥 ${n} day streak`,
  backHome: 'Back to Home',
  tapReveal: 'Tap to reveal',
  didntKnow: "Didn't know",
  knewIt: 'I knew it',
  knowsBadge: (n) => `${n}× known`,
  cardKnowHint: (n) =>
    n === 0
      ? 'Not marked known yet'
      : `${n} time${n !== 1 ? 's' : ''} you knew it`,
  wordLevelNew: 'New',
  addWordTitle: 'Add Word',
  labelWordDefinition: 'Definition in English',
  addWordDefinitionPlaceholder: 'e.g. Thank you',
  saveWord: 'Save Word',
  saved: 'Saved!',
  wordAddedToast: 'Word added!',
  tipAddWords: 'Tip: Add 3-5 new words per day for best results',
  myWordsTitle: 'My Words',
  wordCount: (n) => `${n} word${n !== 1 ? 's' : ''}`,
  noWordsYet: 'No words yet',
  addFirstWord: 'Add your first word →',
  pickLanguageTitle: 'What are you learning?',
  pickLanguageSubtitle: 'Choose a language to start. You can change it anytime from the top of the app.',
  studyLanguageSwitch: 'Practice language',
  tapToChangeStudyLanguage: 'Switch which language you drill',
};

const lt = {
  homeTitle: 'Labas',
  reviewWords: 'Kartoti žodžius',
  wordsDue: (n) => (n > 0 ? `Kartoti: ${n}` : 'Viskas padaryta!'),
  addNewWord: 'Naujas žodis',
  addNewWordHint: 'Plėsk žodyną',
  myWords: 'Mano žodžiai',
  wordsStats: (total, mastered) =>
    `${total} žod${total === 1 ? 'is' : 'žiai'} · ${mastered} įminta`,
  openDaily: 'Užeik kasdien. Būk nuoseklus.',
  language: 'Kalba',
  languageHint: 'Programėlės sąsaja',
  streakLabel: 'dienų serija',
  doneToday: 'Šiandien jau padaryta ✓',
  reviewTitle: 'Kartojimas',
  allCaughtUp: 'Viskas padaryta!',
  noWordsDue: 'Šiuo metu nėra žodžių kartojimui.',
  addOrLater: 'Pridėk žodžių ar užsuk vėliau.',
  sessionComplete: 'Sesija baigta!',
  correctOfTotal: (c, t) => `Teisingai: ${c} iš ${t}`,
  streakFire: (n) => `🔥 ${n} dienų serija`,
  backHome: 'Atgal į pradžią',
  tapReveal: 'Bakstelėk, kad pamatytum',
  didntKnow: 'Nežinojau',
  knewIt: 'Žinojau',
  knowsBadge: (n) => `${n}× žinoma`,
  cardKnowHint: (n) =>
    n === 0 ? 'Dar nežymėta kaip žinoma' : `${n} kart. žinojai`,
  wordLevelNew: 'Naujas',
  addWordTitle: 'Naujas žodis',
  labelWordDefinition: 'Reikšmė lietuviškai',
  addWordDefinitionPlaceholder: 'pvz. ačiū',
  saveWord: 'Išsaugoti',
  saved: 'Išsaugota!',
  wordAddedToast: 'Žodis pridėtas!',
  tipAddWords: 'Patarimas: geriausia pridėti 3–5 naujus žodžius per dieną',
  myWordsTitle: 'Mano žodžiai',
  wordCount: (n) => `Žodžių: ${n}`,
  noWordsYet: 'Dar nėra žodžių',
  addFirstWord: 'Pridėk pirmą žodį →',
  pickLanguageTitle: 'Ko mokaisi?',
  pickLanguageSubtitle: 'Pasirink kalbą. Vėliau gali pakeisti viršuje.',
  studyLanguageSwitch: 'Kalba praktikai',
  tapToChangeStudyLanguage: 'Pakeisk, kurią kalbą kartoji',
};

const de = {
  homeTitle: 'Labas',
  reviewWords: 'Wörter wiederholen',
  wordsDue: (n) =>
    n > 0
      ? n === 1
        ? '1 Wort fällig'
        : `${n} Wörter fällig`
      : 'Alles erledigt!',
  addNewWord: 'Neues Wort',
  addNewWordHint: 'Wortschatz erweitern',
  myWords: 'Meine Wörter',
  wordsStats: (total, mastered) =>
    `${total === 1 ? '1 Wort' : `${total} Wörter`} · ${mastered} gemeistert`,
  openDaily: 'Täglich öffnen. Bleib dran.',
  language: 'Sprache',
  languageHint: 'App-Oberfläche',
  streakLabel: 'Tage-Serie',
  doneToday: 'Heute erledigt ✓',
  reviewTitle: 'Wiederholung',
  allCaughtUp: 'Alles erledigt!',
  noWordsDue: 'Gerade keine Wörter fällig.',
  addOrLater: 'Wörter hinzufügen oder später wiederkommen.',
  sessionComplete: 'Sitzung beendet!',
  correctOfTotal: (c, t) => `${c} von ${t} richtig`,
  streakFire: (n) => `🔥 ${n}-Tage-Serie`,
  backHome: 'Zur Startseite',
  tapReveal: 'Tippen zum Aufdecken',
  didntKnow: 'Wusste ich nicht',
  knewIt: 'Wusste ich',
  knowsBadge: (n) => `${n}× gewusst`,
  cardKnowHint: (n) =>
    n === 0
      ? 'Noch nicht als gewusst markiert'
      : `${n}-Mal gewusst`,
  wordLevelNew: 'Neu',
  addWordTitle: 'Wort hinzufügen',
  labelWordDefinition: 'Bedeutung auf Deutsch',
  addWordDefinitionPlaceholder: 'z. B. Danke',
  saveWord: 'Speichern',
  saved: 'Gespeichert!',
  wordAddedToast: 'Wort hinzugefügt!',
  tipAddWords: 'Tipp: Am besten 3–5 neue Wörter pro Tag',
  myWordsTitle: 'Meine Wörter',
  wordCount: (n) => (n === 1 ? '1 Wort' : `${n} Wörter`),
  noWordsYet: 'Noch keine Wörter',
  addFirstWord: 'Erstes Wort hinzufügen →',
  pickLanguageTitle: 'Welche Sprache lernst du?',
  pickLanguageSubtitle: 'Tippe auf eine Flagge zum Start. Oben kannst du wechseln.',
  studyLanguageSwitch: 'Übungssprache',
  tapToChangeStudyLanguage: 'Sprache für das Üben wechseln',
};

const es = {
  homeTitle: 'Labas',
  reviewWords: 'Repasar palabras',
  wordsDue: (n) =>
    n > 0
      ? n === 1
        ? '1 palabra pendiente'
        : `${n} palabras pendientes`
      : '¡Todo al día!',
  addNewWord: 'Añadir palabra',
  addNewWordHint: 'Amplía tu vocabulario',
  myWords: 'Mis palabras',
  wordsStats: (total, mastered) =>
    `${total} palabra${total !== 1 ? 's' : ''} · ${mastered} dominadas`,
  openDaily: 'Abre la app a diario. Sé constante.',
  language: 'Idioma',
  languageHint: 'Interfaz de la app',
  streakLabel: 'racha (días)',
  doneToday: 'Listo por hoy ✓',
  reviewTitle: 'Repaso',
  allCaughtUp: '¡Todo al día!',
  noWordsDue: 'No hay palabras pendientes ahora.',
  addOrLater: 'Añade palabras o vuelve más tarde.',
  sessionComplete: '¡Sesión terminada!',
  correctOfTotal: (c, t) => `${c} de ${t} correctas`,
  streakFire: (n) => `🔥 Racha de ${n} días`,
  backHome: 'Volver al inicio',
  tapReveal: 'Toca para ver',
  didntKnow: 'No la sabía',
  knewIt: 'La sabía',
  knowsBadge: (n) => `${n}× aciertos`,
  cardKnowHint: (n) =>
    n === 0
      ? 'Aún sin marcar como sabida'
      : `${n} vez${n !== 1 ? 'es' : ''} que la sabías`,
  wordLevelNew: 'Nueva',
  addWordTitle: 'Añadir palabra',
  labelWordDefinition: 'Definición en español',
  addWordDefinitionPlaceholder: 'p. ej. gracias',
  saveWord: 'Guardar',
  saved: '¡Guardado!',
  wordAddedToast: '¡Palabra añadida!',
  tipAddWords: 'Consejo: lo ideal son 3–5 palabras nuevas al día',
  myWordsTitle: 'Mis palabras',
  wordCount: (n) => `${n} palabra${n !== 1 ? 's' : ''}`,
  noWordsYet: 'Aún no hay palabras',
  addFirstWord: 'Añade tu primera palabra →',
  pickLanguageTitle: '¿Qué idioma estudias?',
  pickLanguageSubtitle: 'Toca una bandera para empezar. Puedes cambiar arriba.',
  studyLanguageSwitch: 'Idioma de práctica',
  tapToChangeStudyLanguage: 'Cambiar el idioma que practicas',
};

const fr = {
  homeTitle: 'Labas',
  reviewWords: 'Réviser les mots',
  wordsDue: (n) =>
    n > 0
      ? n === 1
        ? '1 mot à réviser'
        : `${n} mots à réviser`
      : 'Tout est à jour !',
  addNewWord: 'Ajouter un mot',
  addNewWordHint: 'Enrichis ton vocabulaire',
  myWords: 'Mes mots',
  wordsStats: (total, mastered) =>
    `${total} mot${total !== 1 ? 's' : ''} · ${mastered} maîtrisé${mastered !== 1 ? 's' : ''}`,
  openDaily: 'Ouvre l’app chaque jour. Reste régulier.',
  language: 'Langue',
  languageHint: 'Interface de l’app',
  streakLabel: 'série (jours)',
  doneToday: 'C’est bon pour aujourd’hui ✓',
  reviewTitle: 'Révision',
  allCaughtUp: 'Tout est à jour !',
  noWordsDue: 'Aucun mot à réviser pour le moment.',
  addOrLater: 'Ajoute des mots ou repasse plus tard.',
  sessionComplete: 'Séance terminée !',
  correctOfTotal: (c, t) => `${c} sur ${t} corrects`,
  streakFire: (n) => `🔥 Série de ${n} jours`,
  backHome: "Retour à l'accueil",
  tapReveal: 'Touche pour afficher',
  didntKnow: 'Je ne savais pas',
  knewIt: 'Je savais',
  knowsBadge: (n) => `${n}× réussite${n !== 1 ? 's' : ''}`,
  cardKnowHint: (n) =>
    n === 0
      ? 'Pas encore marqué comme su'
      : `${n} fois où tu l’as su`,
  wordLevelNew: 'Nouveau',
  addWordTitle: 'Ajouter un mot',
  labelWordDefinition: 'Définition en français',
  addWordDefinitionPlaceholder: 'ex. : merci',
  saveWord: 'Enregistrer',
  saved: 'Enregistré !',
  wordAddedToast: 'Mot ajouté !',
  tipAddWords: 'Conseil : vise 3 à 5 nouveaux mots par jour',
  myWordsTitle: 'Mes mots',
  wordCount: (n) => `${n} mot${n !== 1 ? 's' : ''}`,
  noWordsYet: 'Pas encore de mots',
  addFirstWord: 'Ajoute ton premier mot →',
  pickLanguageTitle: 'Quelle langue apprends-tu ?',
  pickLanguageSubtitle: 'Touche un drapeau pour commencer. Change en haut quand tu veux.',
  studyLanguageSwitch: 'Langue d’entraînement',
  tapToChangeStudyLanguage: 'Changer la langue pratiquée',
};

const it = {
  homeTitle: 'Labas',
  reviewWords: 'Ripassa le parole',
  wordsDue: (n) =>
    n > 0
      ? n === 1
        ? '1 parola in coda'
        : `${n} parole in coda`
      : 'Tutto fatto!',
  addNewWord: 'Aggiungi parola',
  addNewWordHint: 'Amplia il vocabolario',
  myWords: 'Le mie parole',
  wordsStats: (total, mastered) =>
    `${total} parol${total !== 1 ? 'e' : 'a'} · ${mastered} padroneggiate`,
  openDaily: 'Apri l’app ogni giorno. Costanza.',
  language: 'Lingua',
  languageHint: "Interfaccia dell'app",
  streakLabel: 'serie (giorni)',
  doneToday: 'Fatto per oggi ✓',
  reviewTitle: 'Ripasso',
  allCaughtUp: 'Tutto fatto!',
  noWordsDue: 'Nessuna parola in coda al momento.',
  addOrLater: 'Aggiungi parole o torna più tardi.',
  sessionComplete: 'Sessione completata!',
  correctOfTotal: (c, t) => `${c} su ${t} corrette`,
  streakFire: (n) => `🔥 Serie di ${n} giorni`,
  backHome: 'Torna alla home',
  tapReveal: 'Tocca per mostrare',
  didntKnow: 'Non lo sapevo',
  knewIt: 'Lo sapevo',
  knowsBadge: (n) => `${n}× imparata${n !== 1 ? 'e' : ''}`,
  cardKnowHint: (n) =>
    n === 0
      ? 'Non ancora segnata come nota'
      : `${n} volt${n !== 1 ? 'e' : 'a'} che la sapevi`,
  wordLevelNew: 'Nuova',
  addWordTitle: 'Aggiungi parola',
  labelWordDefinition: 'Significato in italiano',
  addWordDefinitionPlaceholder: 'es. grazie',
  saveWord: 'Salva',
  saved: 'Salvato!',
  wordAddedToast: 'Parola aggiunta!',
  tipAddWords: 'Suggerimento: 3–5 parole nuove al giorno vanno bene',
  myWordsTitle: 'Le mie parole',
  wordCount: (n) => `${n} parol${n !== 1 ? 'e' : 'a'}`,
  noWordsYet: 'Ancora nessuna parola',
  addFirstWord: 'Aggiungi la tua prima parola →',
  pickLanguageTitle: 'Che lingua stai imparando?',
  pickLanguageSubtitle: 'Tocca una bandiera per iniziare. Puoi cambiare in alto.',
  studyLanguageSwitch: 'Lingua di pratica',
  tapToChangeStudyLanguage: 'Cambia la lingua che eserciti',
};

const pt = {
  homeTitle: 'Labas',
  reviewWords: 'Revisar palavras',
  wordsDue: (n) =>
    n > 0
      ? n === 1
        ? '1 palavra na fila'
        : `${n} palavras na fila`
      : 'Tudo em dia!',
  addNewWord: 'Adicionar palavra',
  addNewWordHint: 'Amplie o vocabulário',
  myWords: 'Minhas palavras',
  wordsStats: (total, mastered) =>
    `${total} palavra${total !== 1 ? 's' : ''} · ${mastered} dominada${mastered !== 1 ? 's' : ''}`,
  openDaily: 'Abra o app todo dia. Seja consistente.',
  language: 'Idioma',
  languageHint: 'Interface do app',
  streakLabel: 'sequência (dias)',
  doneToday: 'Feito por hoje ✓',
  reviewTitle: 'Revisão',
  allCaughtUp: 'Tudo em dia!',
  noWordsDue: 'Nenhuma palavra na fila agora.',
  addOrLater: 'Adicione palavras ou volte mais tarde.',
  sessionComplete: 'Sessão concluída!',
  correctOfTotal: (c, t) => `${c} de ${t} corretas`,
  streakFire: (n) => `🔥 Sequência de ${n} dias`,
  backHome: 'Voltar ao início',
  tapReveal: 'Toque para revelar',
  didntKnow: 'Não sabia',
  knewIt: 'Sabia',
  knowsBadge: (n) => `${n}× acertos`,
  cardKnowHint: (n) =>
    n === 0
      ? 'Ainda não marcada como sabida'
      : `${n} vez${n !== 1 ? 'es' : ''} que você sabia`,
  wordLevelNew: 'Nova',
  addWordTitle: 'Adicionar palavra',
  labelWordDefinition: 'Significado em português',
  addWordDefinitionPlaceholder: 'ex.: obrigado',
  saveWord: 'Salvar',
  saved: 'Salvo!',
  wordAddedToast: 'Palavra adicionada!',
  tipAddWords: 'Dica: 3–5 palavras novas por dia é um bom ritmo',
  myWordsTitle: 'Minhas palavras',
  wordCount: (n) => `${n} palavra${n !== 1 ? 's' : ''}`,
  noWordsYet: 'Ainda não há palavras',
  addFirstWord: 'Adicione sua primeira palavra →',
  pickLanguageTitle: 'O que você está aprendendo?',
  pickLanguageSubtitle: 'Toque numa bandeira para começar. Troque no topo quando quiser.',
  studyLanguageSwitch: 'Idioma da prática',
  tapToChangeStudyLanguage: 'Trocar o idioma que você pratica',
};

export const messages = { en, lt, de, es, fr, it, pt };

/** Valid `lt_ui_locale` values (keep in sync with `messages`). */
export const supportedLocaleCodes = Object.keys(messages);

export const localeOptions = [
  { code: 'en', label: 'English', short: 'EN' },
  { code: 'de', label: 'Deutsch', short: 'DE' },
  { code: 'es', label: 'Español', short: 'ES' },
  { code: 'fr', label: 'Français', short: 'FR' },
  { code: 'it', label: 'Italiano', short: 'IT' },
  { code: 'lt', label: 'Lietuvių', short: 'LT' },
  { code: 'pt', label: 'Português', short: 'PT' },
];
