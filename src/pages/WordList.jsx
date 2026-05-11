import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Trash2 } from 'lucide-react';
import { getWordsForStudyLanguage, deleteWord } from '@/lib/storage';
import { useLocale } from '@/lib/LocaleContext';
import { useLearningLanguage } from '@/lib/LearningLanguageContext';
import StudyLanguageHeader from '@/components/StudyLanguageHeader';

const knowTierColors = [
  'bg-muted text-muted-foreground',
  'bg-accent text-accent-foreground',
  'bg-accent text-accent-foreground',
  'bg-primary/10 text-primary',
  'bg-primary/15 text-primary',
  'bg-primary/20 text-primary',
];

function knowTierIndex(k) {
  const n = k || 0;
  if (n === 0) return 0;
  if (n < 3) return 1;
  if (n < 6) return 3;
  return 5;
}

export default function WordList() {
  const { t } = useLocale();
  const { studyLanguage } = useLearningLanguage();
  const [words, setWords] = useState([]);

  useEffect(() => {
    setWords(getWordsForStudyLanguage(studyLanguage).sort((a, b) => b.id - a.id));
  }, [studyLanguage]);

  const handleDelete = (id) => {
    deleteWord(id);
    setWords(prev => prev.filter(w => w.id !== id));
  };

  return (
    <div className="min-h-screen bg-background px-6 pb-10 pt-6 flex flex-col max-w-lg mx-auto">
      <StudyLanguageHeader className="mb-5" />

      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <Link
          to="/"
          className="p-2.5 rounded-xl bg-secondary text-secondary-foreground active:scale-90 transition-transform"
        >
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <div className="flex-1">
          <h1 className="text-xl font-bold text-foreground">{t('myWordsTitle')}</h1>
        </div>
        <span className="text-sm text-muted-foreground font-medium">
          {t('wordCount', words.length)}
        </span>
      </div>

      {/* Word list */}
      {words.length === 0 ? (
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <p className="text-lg font-medium text-muted-foreground mb-2">{t('noWordsYet')}</p>
            <Link
              to="/add"
              className="text-primary font-medium"
            >
              {t('addFirstWord')}
            </Link>
          </div>
        </div>
      ) : (
        <div className="space-y-2">
          <AnimatePresence>
            {words.map((word) => (
              <motion.div
                key={word.id}
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: -100 }}
                className="bg-card border border-border rounded-xl p-4 flex items-center gap-3"
              >
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-foreground truncate">
                    {word.lithuanian}
                  </p>
                  <p className="text-sm text-muted-foreground truncate">
                    {word.english}
                  </p>
                </div>
                <span
                  className={`text-xs font-medium px-2.5 py-1 rounded-full whitespace-nowrap ${
                    knowTierColors[knowTierIndex(word.knowCount)] || knowTierColors[0]
                  }`}
                >
                  {(word.knowCount || 0) === 0
                    ? t('wordLevelNew')
                    : t('knowsBadge', word.knowCount || 0)}
                </span>
                <button
                  onClick={() => handleDelete(word.id)}
                  className="p-2 rounded-lg text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors active:scale-90"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
}