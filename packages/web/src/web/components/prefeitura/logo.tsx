type LogoProps = {
  size?: number;
};

export function Logo({ size = 45 }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="vdr-pin" x1="12" y1="10" x2="36" y2="30" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#3B6EF0" />
          <stop offset="0.55" stopColor="#3FA8EE" />
          <stop offset="1" stopColor="#36D6C3" />
        </linearGradient>
      </defs>
      <circle cx="24" cy="24" r="23" fill="#FFFFFF" stroke="#E6ECF5" strokeWidth="1" />
      {/* map pin */}
      <path
        d="M24 8.5c-7.2 0-12.5 5.4-12.5 12.2 0 8.3 9.6 17.2 11.6 18.9a1.4 1.4 0 0 0 1.8 0c2-1.7 11.6-10.6 11.6-18.9C36.5 13.9 31.2 8.5 24 8.5Z"
        fill="url(#vdr-pin)"
      />
      <path
        d="M24 12.4c-5 0-8.7 3.8-8.7 8.5 0 5.6 6.3 12 8.7 14.2 2.4-2.2 8.7-8.6 8.7-14.2 0-4.7-3.7-8.5-8.7-8.5Z"
        fill="#FFFFFF"
      />
      {/* city silhouette */}
      <path
        d="M24 13.6l1.3 3.2v2.1h1.9v2.4l1.6-.8v3.3l1.4.6v2.6c-1.6 2.7-4 5.3-6.2 7.4-2.2-2.1-4.6-4.7-6.2-7.4v-2.6l1.4-.6v-3.3l1.6.8v-2.4h1.9v-2.1L24 13.6Z"
        fill="#16305F"
      />
      <path d="M23.2 26.2h1.6v5.2h-1.6z" fill="#FFFFFF" opacity="0.85" />
    </svg>
  );
}
