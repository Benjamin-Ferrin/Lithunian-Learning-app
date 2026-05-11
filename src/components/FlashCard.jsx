import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FlashCard({ word, onCorrect, onIncorrect }) {
  const [revealed, setRevealed] = useState(false);

  const handleReveal = () => {
    if (!revealed) setRevealed(true);
  };

  const handleCorrect = () => {
    setRevealed(false);
    onCorrect(word.id);
  };

  const handleIncorrect = () => {
    setRevealed(false);
    onIncorrect(word.id);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className="w-full max-w-sm mx-auto"
    >
      {/* Card */}
      <motion.button
        onClick={handleReveal}
        whileTap={!revealed ? { scale: 0.97 } : {}}
        className="w-full bg-card rounded-2xl shadow-lg shadow-border/50 border border-border p-8 min-h-[240px] flex flex-col items-center justify-center text-center transition-colors"
      >
        <AnimatePresence mode="wait">
          {!revealed ? (
            <motion.div
              key="front"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <p className="text-3xl font-semibold text-foreground mb-3">
                {word.lithuanian}
              </p>
              <p className="text-sm text-muted-foreground">Tap to reveal</p>
            </motion.div>
          ) : (
            <motion.div
              key="back"
              initial={{ opacity: 0, rotateX: -10 }}
              animate={{ opacity: 1, rotateX: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <p className="text-lg text-muted-foreground mb-2">
                {word.lithuanian}
              </p>
              <p className="text-3xl font-semibold text-foreground">
                {word.english}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Action buttons */}
      <AnimatePresence>
        {revealed && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ delay: 0.1 }}
            className="flex gap-4 mt-6"
          >
            <button
              onClick={handleIncorrect}
              className="flex-1 py-4 rounded-xl bg-destructive/10 text-destructive font-semibold text-base active:scale-95 transition-transform"
            >
              Didn't know
            </button>
            <button
              onClick={handleCorrect}
              className="flex-1 py-4 rounded-xl bg-primary/10 text-primary font-semibold text-base active:scale-95 transition-transform"
            >
              I knew it
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}