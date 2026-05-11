import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Trash2 } from 'lucide-react';
import { getWords, deleteWord } from '@/lib/storage';

const levelLabels = ['New', 'Learning', 'Learning', 'Familiar', 'Known', 'Mastered'];
const levelColors = [
  'bg-muted text-muted-foreground',
  'bg-accent text-accent-foreground',
  'bg-accent text-accent-foreground',
  'bg-primary/10 text-primary',
  'bg-primary/15 text-primary',
  'bg-primary/20 text-primary',
];

export default function WordList() {
  const [words, setWords] = useState([]);

  useEffect(() => {
    setWords(getWords().sort((a, b) => b.id - a.id));
  }, []);

  const handleDelete = (id) => {
    deleteWord(id);
    setWords(prev => prev.filter(w => w.id !== id));
  };

  return (
    <div className="min-h-screen bg-background px-6 pb-10 pt-6 flex flex-col max-w-lg mx-auto">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <Link
          to="/"
          className="p-2.5 rounded-xl bg-secondary text-secondary-foreground active:scale-90 transition-transform"
        >
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <div className="flex-1">
          <h1 className="text-xl font-bold text-foreground">My Words</h1>
        </div>
        <span className="text-sm text-muted-foreground font-medium">
          {words.length} word{words.length !== 1 ? 's' : ''}
        </span>
      </div>

      {/* Word list */}
      {words.length === 0 ? (
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <p className="text-lg font-medium text-muted-foreground mb-2">No words yet</p>
            <Link
              to="/add"
              className="text-primary font-medium"
            >
              Add your first word →
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
                    levelColors[word.level] || levelColors[0]
                  }`}
                >
                  {levelLabels[word.level] || 'New'}
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