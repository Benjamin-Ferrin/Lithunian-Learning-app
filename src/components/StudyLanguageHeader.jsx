import { ChevronDown } from 'lucide-react';
import { useLocale } from '@/lib/LocaleContext';
import { useLearningLanguage } from '@/lib/LearningLanguageContext';
import { studyLanguageOrder, studyLanguageMeta } from '@/lib/learningLanguages';
import StudyFlagIcon from '@/components/StudyFlagIcon';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';

export default function StudyLanguageHeader({ className }) {
  const { t } = useLocale();
  const { studyLanguage, setStudyLanguage } = useLearningLanguage();

  const current = studyLanguageMeta[studyLanguage];

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          type="button"
          className={cn(
            'group relative w-full overflow-hidden rounded-2xl border border-border/80',
            'bg-gradient-to-br from-card via-card to-secondary/30 p-4 text-left shadow-md',
            'backdrop-blur-sm transition-all hover:border-primary/35 hover:shadow-lg',
            'active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30',
            className
          )}
        >
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/[0.06] via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
          <div className="relative flex items-center gap-4">
            <div
              className={cn(
                'flex h-16 w-[4.5rem] shrink-0 items-center justify-center rounded-xl bg-background/80 p-1.5 shadow-inner ring-2 ring-border/60 dark:bg-background/40',
                'ring-offset-2 ring-offset-background transition-transform group-hover:scale-[1.02]'
              )}
            >
              <StudyFlagIcon
                code={studyLanguage}
                className="h-full w-full drop-shadow-sm"
                title={current?.nativeName}
              />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                {t('studyLanguageSwitch')}
              </p>
              <p className="truncate text-xl font-bold tracking-tight text-foreground">
                {current?.nativeName}
              </p>
              <p className="text-xs text-muted-foreground">
                {t('tapToChangeStudyLanguage')}
              </p>
            </div>
            <ChevronDown className="h-5 w-5 shrink-0 text-muted-foreground transition-transform group-data-[state=open]:rotate-180" />
          </div>
        </button>
      </PopoverTrigger>
      <PopoverContent
        side="bottom"
        align="center"
        className="max-h-[min(70vh,26rem)] w-[min(100vw-2rem,20rem)] overflow-y-auto overscroll-contain rounded-2xl border-border/80 p-3 shadow-xl"
      >
        <p className="mb-2 px-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
          {t('tapToChangeStudyLanguage')}
        </p>
        <div className="flex flex-col gap-2 pr-0.5">
          {studyLanguageOrder.map((code) => {
            const meta = studyLanguageMeta[code];
            const active = studyLanguage === code;
            return (
              <button
                key={code}
                type="button"
                onClick={() => setStudyLanguage(code)}
                className={cn(
                  'flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left transition-colors',
                  active
                    ? 'bg-primary text-primary-foreground shadow-md'
                    : 'hover:bg-secondary'
                )}
              >
                <div
                  className={cn(
                    'flex h-11 w-14 shrink-0 items-center justify-center rounded-lg bg-background/90 p-1 ring-2 ring-border/50',
                    active && 'ring-primary-foreground/30'
                  )}
                >
                  <StudyFlagIcon code={code} className="h-full w-full" title={meta.nativeName} />
                </div>
                <span className="text-sm font-semibold">{meta.nativeName}</span>
              </button>
            );
          })}
        </div>
      </PopoverContent>
    </Popover>
  );
}
