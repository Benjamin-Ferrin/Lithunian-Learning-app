import { Globe } from 'lucide-react';
import { useLocale } from '@/lib/LocaleContext';
import { localeOptions } from '@/lib/locales';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';

export default function LanguageButton() {
  const { locale, setLocale, t } = useLocale();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          type="button"
          className={cn(
            'group inline-flex items-center gap-2 rounded-full border border-border/80',
            'bg-card/90 px-3.5 py-2 text-sm font-medium text-foreground shadow-sm',
            'backdrop-blur-sm transition-all hover:border-primary/40 hover:bg-card hover:shadow-md',
            'active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30'
          )}
        >
          <Globe className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
          <span className="text-muted-foreground">{t('language')}</span>
          <span className="rounded-md bg-secondary px-1.5 py-0.5 text-xs font-semibold text-secondary-foreground tabular-nums">
            {locale.toUpperCase()}
          </span>
        </button>
      </PopoverTrigger>
      <PopoverContent
        side="top"
        align="end"
        className="w-[min(100vw-2rem,16rem)] rounded-2xl border-border/80 p-3 shadow-lg"
      >
        <p className="mb-2 px-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
          {t('languageHint')}
        </p>
        <div className="flex max-h-[min(50vh,22rem)] flex-col gap-1.5 overflow-y-auto overscroll-contain pr-0.5">
          {localeOptions.map((opt) => {
            const active = locale === opt.code;
            return (
              <button
                key={opt.code}
                type="button"
                onClick={() => setLocale(opt.code)}
                className={cn(
                  'flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left text-sm font-medium transition-colors',
                  active
                    ? 'bg-primary text-primary-foreground shadow-sm'
                    : 'text-foreground hover:bg-secondary'
                )}
              >
                <span>{opt.label}</span>
                <span
                  className={cn(
                    'rounded-md px-1.5 py-0.5 text-xs tabular-nums',
                    active
                      ? 'bg-primary-foreground/20 text-primary-foreground'
                      : 'bg-muted text-muted-foreground'
                  )}
                >
                  {opt.short}
                </span>
              </button>
            );
          })}
        </div>
      </PopoverContent>
    </Popover>
  );
}
