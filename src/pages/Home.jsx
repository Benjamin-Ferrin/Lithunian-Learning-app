import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpen, Plus, Library } from 'lucide-react';
import StreakCounter from '@/components/StreakCounter';
import ThemeToggle from '@/components/ThemeToggle';
import { getStreak, hasReviewedToday, getStats, getReviewWords, initTheme } from '@/lib/storage';
import { useLocale } from '@/lib/LocaleContext';
import { useLearningLanguage } from '@/lib/LearningLanguageContext';
import LanguageButton from '@/components/LanguageButton';
import StudyLanguageHeader from '@/components/StudyLanguageHeader';

export default function Home() {
  const { t } = useLocale();
  const { studyLanguage } = useLearningLanguage();
  const [streak, setStreak] = useState(0);
  const [reviewedToday, setReviewedToday] = useState(false);
  const [stats, setStats] = useState({ totalWords: 0, mastered: 0 });
  const [dueCount, setDueCount] = useState(0);

  useEffect(() => {
    initTheme();
    setStreak(getStreak());
    setReviewedToday(hasReviewedToday());
    setStats(getStats(studyLanguage));
    setDueCount(getReviewWords(studyLanguage).length);
  }, [studyLanguage]);

  return (
    <div className="min-h-screen bg-background px-6 pb-10 pt-6 flex flex-col max-w-lg mx-auto">
      <StudyLanguageHeader className="mb-5" />

      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <div>
          <h1 className="text-2xl font-bold text-foreground tracking-tight">{t('homeTitle')}</h1>
          <p className="text-sm text-muted-foreground">{t('homeSubtitleLearn', studyLanguage)}</p>
        </div>
        <ThemeToggle />
      </div>

      {/* Streak */}
      <StreakCounter streak={streak} reviewedToday={reviewedToday} />

      {/* Main Actions */}
      <div className="space-y-3 mt-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          <Link to="/review" className="block">
            <div className="bg-primary text-primary-foreground rounded-2xl p-5 flex items-center gap-4 active:scale-[0.98] transition-transform shadow-lg shadow-primary/20">
              <div className="w-12 h-12 rounded-xl bg-primary-foreground/15 flex items-center justify-center">
                <BookOpen className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-lg">{t('reviewWords')}</p>
                <p className="text-sm opacity-80">{t('wordsDue', dueCount)}</p>
              </div>
            </div>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
        >
          <Link to="/add" className="block">
            <div className="bg-card border border-border rounded-2xl p-5 flex items-center gap-4 active:scale-[0.98] transition-transform shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                <Plus className="w-6 h-6 text-secondary-foreground" />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-lg text-foreground">{t('addNewWord')}</p>
                <p className="text-sm text-muted-foreground">{t('addNewWordHint')}</p>
              </div>
            </div>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
        >
          <Link to="/words" className="block">
            <div className="bg-card border border-border rounded-2xl p-5 flex items-center gap-4 active:scale-[0.98] transition-transform shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                <Library className="w-6 h-6 text-secondary-foreground" />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-lg text-foreground">{t('myWords')}</p>
                <p className="text-sm text-muted-foreground">
                  {t('wordsStats', stats.totalWords, stats.mastered)}
                </p>
              </div>
            </div>
          </Link>
        </motion.div>
      </div>

      {/* Bottom subtle info + language */}
      <div className="mt-auto flex w-full flex-col items-end gap-3 pt-8">
        <p className="w-full text-center text-xs text-muted-foreground/60">
          {t('openDaily')}
        </p>
        <LanguageButton />
      </div>
    </div>
  );
}