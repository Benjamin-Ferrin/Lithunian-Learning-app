import { motion } from 'framer-motion';
import { Flame } from 'lucide-react';
import { useLocale } from '@/lib/LocaleContext';

export default function StreakCounter({ streak, reviewedToday }) {
  const { t } = useLocale();
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      className="flex flex-col items-center gap-3 py-8"
    >
      <motion.div
        animate={reviewedToday ? { scale: [1, 1.1, 1] } : {}}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        className={`w-28 h-28 rounded-full flex items-center justify-center ${
          reviewedToday
            ? 'bg-primary/15 ring-2 ring-primary/30'
            : 'bg-muted ring-2 ring-border'
        }`}
      >
        <Flame
          className={`w-12 h-12 ${
            reviewedToday ? 'text-primary' : 'text-muted-foreground'
          }`}
        />
      </motion.div>

      <div className="text-center">
        <motion.p
          key={streak}
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-5xl font-bold tracking-tight text-foreground"
        >
          {streak}
        </motion.p>
        <p className="text-base text-muted-foreground mt-1 font-medium">
          {t('streakLabel')}
        </p>
      </div>

      {reviewedToday && (
        <motion.p
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-sm text-primary font-medium bg-primary/10 px-4 py-1.5 rounded-full"
        >
          {t('doneToday')}
        </motion.p>
      )}
    </motion.div>
  );
}