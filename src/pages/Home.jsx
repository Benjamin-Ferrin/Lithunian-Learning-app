import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpen, Plus, Library } from 'lucide-react';
import StreakCounter from '@/components/StreakCounter';
import ThemeToggle from '@/components/ThemeToggle';
import { getStreak, hasReviewedToday, getStats, getReviewWords, initTheme } from '@/lib/storage';

export default function Home() {
  const [streak, setStreak] = useState(0);
  const [reviewedToday, setReviewedToday] = useState(false);
  const [stats, setStats] = useState({ totalWords: 0, mastered: 0 });
  const [dueCount, setDueCount] = useState(0);

  useEffect(() => {
    initTheme();
    setStreak(getStreak());
    setReviewedToday(hasReviewedToday());
    setStats(getStats());
    setDueCount(getReviewWords().length);
  }, []);

  return (
    <div className="min-h-screen bg-background px-6 pb-10 pt-6 flex flex-col max-w-lg mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <div>
          <h1 className="text-2xl font-bold text-foreground tracking-tight">Labas</h1>
          <p className="text-sm text-muted-foreground">Lithuanian daily</p>
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
                <p className="font-semibold text-lg">Review Words</p>
                <p className="text-sm opacity-80">
                  {dueCount > 0
                    ? `${dueCount} word${dueCount !== 1 ? 's' : ''} due`
                    : 'All caught up!'}
                </p>
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
                <p className="font-semibold text-lg text-foreground">Add New Word</p>
                <p className="text-sm text-muted-foreground">Expand your vocabulary</p>
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
                <p className="font-semibold text-lg text-foreground">My Words</p>
                <p className="text-sm text-muted-foreground">
                  {stats.totalWords} word{stats.totalWords !== 1 ? 's' : ''} · {stats.mastered} mastered
                </p>
              </div>
            </div>
          </Link>
        </motion.div>
      </div>

      {/* Bottom subtle info */}
      <div className="mt-auto pt-8 text-center">
        <p className="text-xs text-muted-foreground/60">
          Open daily. Stay consistent.
        </p>
      </div>
    </div>
  );
}