// Small inline icons, so no icon library ships with the page.
export const PlayIcon = ({ size = 12 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M5 3l15 9-15 9z" /></svg>
)

export const GalaxyIcon = ({ size = 12 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true"><circle cx="12" cy="12" r="8" /></svg>
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

export const Logo = () => (
  <svg width="34" height="34" viewBox="0 0 34 34" aria-hidden="true">
    <rect x="2" y="2" width="14" height="14" rx="4" fill="var(--accent)" />
    <rect x="18" y="2" width="14" height="14" rx="4" fill="#F4F1EA" opacity=".9" />
    <rect x="2" y="18" width="14" height="14" rx="4" fill="#F4F1EA" opacity=".9" />
    <rect x="18" y="18" width="14" height="14" rx="7" fill="var(--accent)" />
  </svg>
)
