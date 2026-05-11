import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, PartyPopper } from 'lucide-react';
import FlashCard from '@/components/FlashCard';
import {
  getReviewWords,
  markCorrect,
  markIncorrect,
  recordReviewSession,
  getStreak,
  hasReviewedToday,
} from '@/lib/storage';

export default function Review() {
  const [words, setWords] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sessionDone, setSessionDone] = useState(false);
  const [correct, setCorrect] = useState(0);
  const [total, setTotal] = useState(0);
  const [streak, setStreak] = useState(0);
  const [oldReviewedCount, setOldReviewedCount] = useState(0);

  useEffect(() => {
    const due = getReviewWords();
    // Shuffle
    const shuffled = [...due].sort(() => Math.random() - 0.5);
    setWords(shuffled);
    setTotal(shuffled.length);
    if (shuffled.length === 0) {
      setSessionDone(true);
    }
  }, []);

  const maybeRecordStreakForTenOld = (nextOldReviewedCount) => {
    if (nextOldReviewedCount < 10) return;
    if (hasReviewedToday()) return;
    recordReviewSession();
    setStreak(getStreak());
  };

  const advance = (nextOldReviewedCount) => {
    if (currentIndex + 1 >= words.length) {
      // If the user reached 10 old-word reviews during this session, record it.
      maybeRecordStreakForTenOld(nextOldReviewedCount);
      setStreak(getStreak());
      setSessionDone(true);
    } else {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const handleCorrect = (id) => {
    markCorrect(id);
    setCorrect(prev => prev + 1);
    const isOld = words[currentIndex]?.level > 0;
    const nextOldReviewedCount = oldReviewedCount + (isOld ? 1 : 0);
    setOldReviewedCount(nextOldReviewedCount);
    maybeRecordStreakForTenOld(nextOldReviewedCount);
    advance(nextOldReviewedCount);
  };

  const handleIncorrect = (id) => {
    markIncorrect(id);
    const isOld = words[currentIndex]?.level > 0;
    const nextOldReviewedCount = oldReviewedCount + (isOld ? 1 : 0);
    setOldReviewedCount(nextOldReviewedCount);
    maybeRecordStreakForTenOld(nextOldReviewedCount);
    advance(nextOldReviewedCount);
  };

  const currentWord = words[currentIndex];

  return (
    <div className="min-h-screen bg-background px-6 pb-10 pt-6 flex flex-col max-w-lg mx-auto">
      {/* Header */}
      <div className="flex items-center gap-3 mb-8">
        <Link
          to="/"
          className="p-2.5 rounded-xl bg-secondary text-secondary-foreground active:scale-90 transition-transform"
        >
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <div className="flex-1">
          <h1 className="text-xl font-bold text-foreground">Review</h1>
        </div>
        {total > 0 && !sessionDone && (
          <div className="text-sm text-muted-foreground font-medium bg-secondary px-3 py-1.5 rounded-full">
            {currentIndex + 1} / {total}
          </div>
        )}
      </div>

      {/* Progress bar */}
      {total > 0 && (
        <div className="w-full h-1.5 bg-secondary rounded-full mb-8 overflow-hidden">
          <motion.div
            className="h-full bg-primary rounded-full"
            initial={{ width: 0 }}
            animate={{
              width: `${sessionDone ? 100 : (currentIndex / total) * 100}%`,
            }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          />
        </div>
      )}

      {/* Content */}
      <div className="flex-1 flex items-center justify-center">
        <AnimatePresence mode="wait">
          {sessionDone ? (
            <motion.div
              key="done"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center px-4"
            >
              <div className="w-20 h-20 rounded-full bg-primary/15 flex items-center justify-center mx-auto mb-6">
                <PartyPopper className="w-10 h-10 text-primary" />
              </div>
              {total === 0 ? (
                <>
                  <h2 className="text-2xl font-bold text-foreground mb-2">
                    All caught up!
                  </h2>
                  <p className="text-muted-foreground mb-2">
                    No words due for review right now.
                  </p>
                  <p className="text-sm text-muted-foreground mb-8">
                    Add new words or check back later.
                  </p>
                </>
              ) : (
                <>
                  <h2 className="text-2xl font-bold text-foreground mb-2">
                    Session complete!
                  </h2>
                  <p className="text-muted-foreground mb-1">
                    {correct} of {total} correct
                  </p>
                  {streak > 0 && (
                    <p className="text-sm text-primary font-medium mb-8">
                      🔥 {streak} day streak
                    </p>
                  )}
                </>
              )}
              <Link
                to="/"
                className="inline-block bg-primary text-primary-foreground font-semibold px-8 py-3.5 rounded-xl active:scale-95 transition-transform"
              >
                Back to Home
              </Link>
            </motion.div>
          ) : currentWord ? (
            <FlashCard
              key={currentWord.id}
              word={currentWord}
              onCorrect={handleCorrect}
              onIncorrect={handleIncorrect}
            />
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  );
}