import { getWords, saveWord } from './storage';

const SEED_KEY = 'lt_seeded';

const starterWords = [
  { lt: 'Labas', en: 'Hello' },
  { lt: 'Ačiū', en: 'Thank you' },
  { lt: 'Prašau', en: 'Please / You\'re welcome' },
  { lt: 'Taip', en: 'Yes' },
  { lt: 'Ne', en: 'No' },
  { lt: 'Atsiprašau', en: 'Sorry / Excuse me' },
  { lt: 'Viso gero', en: 'Goodbye' },
  { lt: 'Vanduo', en: 'Water' },
  { lt: 'Maistas', en: 'Food' },
  { lt: 'Namas', en: 'House' },
  { lt: 'Draugas', en: 'Friend' },
  { lt: 'Šeima', en: 'Family' },
  { lt: 'Laikas', en: 'Time' },
  { lt: 'Diena', en: 'Day' },
  { lt: 'Naktis', en: 'Night' },
];

export function seedIfNeeded() {
  if (localStorage.getItem(SEED_KEY)) return;
  if (getWords().length > 0) {
    localStorage.setItem(SEED_KEY, 'true');
    return;
  }
  
  starterWords.forEach(w => saveWord(w.lt, w.en));
  localStorage.setItem(SEED_KEY, 'true');
}