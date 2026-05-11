import { motion } from 'framer-motion';
import { useLocale } from '@/lib/LocaleContext';
import { useLearningLanguage } from '@/lib/LearningLanguageContext';
import { studyLanguageOrder, studyLanguageMeta } from '@/lib/learningLanguages';
import StudyFlagIcon from '@/components/StudyFlagIcon';
import { cn } from '@/lib/utils';

export default function StudyLanguageOnboarding() {
  const { t } = useLocale();
  const { completeOnboarding } = useLearningLanguage();

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-background">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-1/4 top-0 h-[28rem] w-[28rem] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -right-1/4 bottom-0 h-[24rem] w-[24rem] rounded-full bg-teal-500/10 blur-3xl dark:bg-teal-400/5" />
      </div>

      <div className="relative mx-auto flex min-h-0 w-full max-w-2xl flex-1 flex-col px-6 pb-10 pt-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mb-8 text-center"
        >
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Labas
          </p>
          <h1 className="text-balance text-3xl font-bold tracking-tight text-foreground">
            {t('pickLanguageTitle')}
          </h1>
          <p className="mx-auto mt-3 max-w-sm text-pretty text-sm leading-relaxed text-muted-foreground">
            {t('pickLanguageSubtitle')}
          </p>
        </motion.div>

        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain pb-2 [-webkit-overflow-scrolling:touch]">
          <div className="mx-auto grid max-w-xl grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
          {studyLanguageOrder.map((code, i) => {
            const meta = studyLanguageMeta[code];
            return (
              <motion.button
                key={code}
                type="button"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.04 + i * 0.04, type: 'spring', stiffness: 260, damping: 22 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => completeOnboarding(code)}
                className={cn(
                  'relative flex flex-col items-center overflow-hidden rounded-3xl border border-border/80 p-4 text-center shadow-lg sm:p-5',
                  'bg-gradient-to-br bg-card ring-1 ring-black/[0.04] dark:ring-white/[0.06]',
                  'min-h-[10.5rem] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40'
                )}
              >
                <div
                  className={cn(
                    'absolute inset-0 bg-gradient-to-br opacity-[0.22] dark:opacity-[0.18]',
                    meta.cardGradient
                  )}
                />
                <div className="relative mb-3 flex h-20 w-full max-w-[6.5rem] items-center justify-center rounded-2xl bg-background/85 p-1.5 shadow-inner ring-2 ring-white/80 dark:bg-background/50 dark:ring-white/15 sm:mb-4 sm:h-24 sm:max-w-[7.5rem] sm:p-2">
                  <StudyFlagIcon code={code} className="h-full w-full" title={meta.nativeName} />
                </div>
                <p className="relative text-base font-bold leading-tight text-foreground sm:text-lg">{meta.nativeName}</p>
                <p className="relative mt-1 line-clamp-2 text-[0.65rem] font-medium leading-snug text-muted-foreground sm:text-xs">
                  {t('homeSubtitleLearn', code)}
                </p>
              </motion.button>
            );
          })}
          </div>
        </div>
      </div>
    </div>
  );
}
