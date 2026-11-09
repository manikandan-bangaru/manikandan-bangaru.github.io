// Small inline icons, so no icon library ships with the page.
export const PlayIcon = ({ size = 12 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M5 3l15 9-15 9z" /></svg>
)

export const GalaxyIcon = ({ size = 12 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true"><circle cx="12" cy="12" r="8" /></svg>
)

export const AppleIcon = ({ size = 12 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M16.37 12.6c-.02-2.3 1.88-3.4 1.96-3.46-1.07-1.56-2.73-1.78-3.32-1.8-1.41-.14-2.76.83-3.47.83-.72 0-1.82-.81-2.99-.79-1.54.02-2.96.9-3.75 2.27-1.6 2.78-.41 6.89 1.15 9.14.76 1.1 1.67 2.34 2.86 2.3 1.15-.05 1.58-.74 2.97-.74 1.38 0 1.77.74 2.98.72 1.24-.02 2.02-1.12 2.77-2.23.87-1.28 1.23-2.52 1.25-2.58-.03-.01-2.39-.92-2.41-3.66zM14.1 5.86c.63-.77 1.06-1.83.94-2.89-.91.04-2.02.61-2.67 1.37-.58.67-1.09 1.75-.96 2.79 1.02.08 2.06-.52 2.69-1.27z" /></svg>
)

export const StarIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="var(--accent)" aria-hidden="true"><path d="M12 2.5l2.9 6.1 6.6.8-4.9 4.6 1.3 6.6L12 17.3l-5.9 3.3 1.3-6.6L2.5 9.4l6.6-.8z" /></svg>
)

export const MailIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg>
)

export const BackIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M19 12H5M11 6l-6 6 6 6" /></svg>
)

// Magiban Spin Top mark (P7 Line Top, small-size cut for dark grounds). Masters: Drive Brand-Logo-2026/svg.
export const Logo = ({ size = 34 }) => (
  <svg width={size} height={size} viewBox="0 0 200 200" aria-hidden="true">
    <path d="M100 172 V190" stroke="#FF5C8A" strokeWidth="13" strokeLinecap="round" />
    <rect x="88" y="30" width="24" height="34" rx="8" fill="#FFC94D" />
    <path d="M100 178 L36 108 Q26 94 40 84 L62 70 Q100 58 138 70 L160 84 Q174 94 164 108 Z" fill="none" stroke="#FF5C8A" strokeWidth="16" strokeLinejoin="round" />
    <path d="M66 116 V90 L100 118 L134 90 V116" fill="none" stroke="#FF5C8A" strokeWidth="18" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M14 112 A86 22 0 0 0 186 112" fill="none" stroke="#2EE6FF" strokeWidth="12" strokeLinecap="round" />
  </svg>
)
