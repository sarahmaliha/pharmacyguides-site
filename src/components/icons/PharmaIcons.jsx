/**
 * Pharmacy-themed SVG icons for pills, pill bottles, lab coat, mortar & pestle, etc.
 */

const iconClass = 'flex-shrink-0'

export function PillCapsule({ className = 'w-5 h-5', ...props }) {
  return (
    <svg className={`${iconClass} ${className}`} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v-.07zm1.96-2.03L12 14.5v-3l.96.44c.57.26 1.04.73 1.3 1.3l.44.96 2.06-.9-.44-.96c-.26-.57-.73-1.04-1.3-1.3L13 9.5h-2l-.44.96c-.57.26-1.04.73-1.3 1.3L8.94 12.5l2.06.9.44-.96c.26-.57.73-1.04 1.3-1.3L11 11.5v2l.96-.44c.57-.26 1.04-.73 1.3-1.3zM20 12c0 .62-.08 1.21-.21 1.79L15 9v1c0 1.1-.9 2-2 2v.07c3.95.49 7 3.85 7 7.93z" />
    </svg>
  )
}

export function PillBottle({ className = 'w-5 h-5', ...props }) {
  return (
    <svg className={`${iconClass} ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M8 2v4h8V2H8z" />
      <path d="M6 6h12v14a2 2 0 01-2 2H8a2 2 0 01-2-2V6z" />
      <path d="M9 11h6M9 15h6M9 19h4" />
    </svg>
  )
}

export function MortarPestle({ className = 'w-5 h-5', ...props }) {
  return (
    <svg className={`${iconClass} ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M12 2v4M12 6c-4 0-6 2-6 6s2 6 6 6 6-2 6-6-2-6-6-6z" />
      <path d="M12 18v4M10 22h4" />
      <path d="M15 8l4-4 2 2-4 4" />
    </svg>
  )
}

export function LabCoat({ className = 'w-5 h-5', ...props }) {
  return (
    <svg className={`${iconClass} ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M6 4v16M18 4v16M6 4h4l2 4 2-4h4M6 8h12M6 12h12M6 16h12" />
      <path d="M10 4v4h4V4" />
    </svg>
  )
}

export function RxPill({ className = 'w-5 h-5', ...props }) {
  return (
    <svg className={`${iconClass} ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  )
}

/** Simple capsule shape for list bullets — pill with two rounded ends */
export function CapsuleBullet({ className = 'w-2.5 h-2.5', ...props }) {
  return (
    <svg className={`${iconClass} ${className}`} viewBox="0 0 12 4" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M 2 0 L 10 0 A 2 2 0 0 1 10 4 L 2 4 A 2 2 0 0 1 2 0 Z" />
    </svg>
  )
}

/** Pill/capsule icon for branding — horizontal pill with two rounded ends */
export function Pill({ className = 'w-5 h-5', ...props }) {
  return (
    <svg className={`${iconClass} ${className}`} viewBox="0 0 24 10" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M 5 0 L 19 0 A 5 5 0 0 1 19 10 L 5 10 A 5 5 0 0 1 5 0 Z" />
    </svg>
  )
}
