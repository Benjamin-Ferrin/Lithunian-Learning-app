import { cn } from '@/lib/utils';
import {
  STUDY_LT,
  STUDY_RU,
  STUDY_LV,
  STUDY_BE,
  STUDY_SGS,
  STUDY_LTG,
  STUDY_PL,
  STUDY_SV,
  STUDY_FI,
  STUDY_DE,
  STUDY_NO,
  STUDY_EN,
} from '@/lib/learningLanguages';

const base =
  'overflow-hidden rounded-[0.35em] shadow-inner ring-2 ring-white/90 dark:ring-white/20';

function SvgWrap({ className, title, children }) {
  return (
    <svg
      viewBox="0 0 48 36"
      className={cn(base, className)}
      role="img"
      aria-hidden={title ? undefined : true}
      {...(title ? { 'aria-label': title } : {})}
    >
      {title ? <title>{title}</title> : null}
      {children}
    </svg>
  );
}

/**
 * Rounded flag illustration with outline (no external assets).
 */
export default function StudyFlagIcon({ code, className, title }) {
  if (code === STUDY_LT) {
    return (
      <SvgWrap className={className} title={title}>
        <rect width="48" height="12" y="0" fill="#fdba3c" />
        <rect width="48" height="12" y="12" fill="#0d5c3b" />
        <rect width="48" height="12" y="24" fill="#c12a32" />
      </SvgWrap>
    );
  }

  if (code === STUDY_RU) {
    return (
      <SvgWrap className={className} title={title}>
        <rect width="48" height="12" y="0" fill="#ffffff" />
        <rect width="48" height="12" y="12" fill="#0039a6" />
        <rect width="48" height="12" y="24" fill="#d52b1e" />
      </SvgWrap>
    );
  }

  if (code === STUDY_LV) {
    return (
      <SvgWrap className={className} title={title}>
        <rect width="48" height="12" y="0" fill="#9e3039" />
        <rect width="48" height="12" y="12" fill="#ffffff" />
        <rect width="48" height="12" y="24" fill="#9e3039" />
      </SvgWrap>
    );
  }

  if (code === STUDY_BE) {
    return (
      <SvgWrap className={className} title={title}>
        <rect width="48" height="12" y="0" fill="#ffffff" />
        <rect width="48" height="12" y="12" fill="#cc0000" />
        <rect width="48" height="12" y="24" fill="#ffffff" />
      </SvgWrap>
    );
  }

  if (code === STUDY_SGS) {
    return (
      <SvgWrap className={className} title={title}>
        <rect width="48" height="10" y="0" fill="#14532d" />
        <rect width="48" height="16" y="10" fill="#171717" />
        <rect width="48" height="10" y="26" fill="#a16207" />
      </SvgWrap>
    );
  }

  if (code === STUDY_LTG) {
    return (
      <SvgWrap className={className} title={title}>
        <rect width="48" height="36" fill="#7b1c3a" />
        <path
          fill="#ffffff"
          d="M24 8l1.8 5.5h5.8l-4.7 3.4 1.8 5.5-4.7-3.4-4.7 3.4 1.8-5.5-4.7-3.4h5.8z"
        />
      </SvgWrap>
    );
  }

  if (code === STUDY_PL) {
    return (
      <SvgWrap className={className} title={title}>
        <rect width="48" height="18" y="0" fill="#ffffff" />
        <rect width="48" height="18" y="18" fill="#dc143c" />
      </SvgWrap>
    );
  }

  if (code === STUDY_SV) {
    return (
      <SvgWrap className={className} title={title}>
        <rect width="48" height="36" fill="#006aa7" />
        <rect x="0" y="14" width="48" height="8" fill="#fecc00" />
        <rect x="18" y="0" width="8" height="36" fill="#fecc00" />
      </SvgWrap>
    );
  }

  if (code === STUDY_FI) {
    return (
      <SvgWrap className={className} title={title}>
        <rect width="48" height="36" fill="#ffffff" />
        <rect x="0" y="13" width="48" height="10" fill="#003580" />
        <rect x="14" y="0" width="10" height="36" fill="#003580" />
      </SvgWrap>
    );
  }

  if (code === STUDY_DE) {
    return (
      <SvgWrap className={className} title={title}>
        <rect width="48" height="12" y="0" fill="#000000" />
        <rect width="48" height="12" y="12" fill="#dd0000" />
        <rect width="48" height="12" y="24" fill="#ffce00" />
      </SvgWrap>
    );
  }

  if (code === STUDY_NO) {
    return (
      <SvgWrap className={className} title={title}>
        <rect width="48" height="36" fill="#ef2b2d" />
        <rect x="0" y="14" width="48" height="8" fill="#ffffff" />
        <rect x="18" y="0" width="8" height="36" fill="#ffffff" />
        <rect x="0" y="15.5" width="48" height="5" fill="#002868" />
        <rect x="19.5" y="0" width="5" height="36" fill="#002868" />
      </SvgWrap>
    );
  }

  if (code === STUDY_EN) {
    return (
      <SvgWrap className={className} title={title}>
        <rect width="48" height="36" fill="#012169" />
        <path d="M0 0 L48 36 M48 0 L0 36" stroke="#ffffff" strokeWidth="7" />
        <path d="M0 0 L48 36 M48 0 L0 36" stroke="#c8102e" strokeWidth="3.5" />
        <path d="M24 0 V36 M0 18 H48" stroke="#ffffff" strokeWidth="12" />
        <path d="M24 0 V36 M0 18 H48" stroke="#c8102e" strokeWidth="7" />
      </SvgWrap>
    );
  }

  return (
    <SvgWrap className={className} title={title}>
      <rect width="48" height="36" fill="#64748b" />
    </SvgWrap>
  );
}
