"use client";

export function BrandLogo() {
  return (
    <a className="brand-logo" href="/" aria-label="AI Build Lab home">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/assets/aibuildlab-logo.svg"
        alt="AI Build Lab"
        onError={(e) => {
          const t = e.currentTarget;
          t.style.display = "none";
          const fallback = t.nextElementSibling as HTMLElement | null;
          if (fallback) fallback.style.display = "flex";
        }}
      />
      <div className="logo-fallback">
        <span className="slash">/</span>
        <span className="bar">|</span>buildlab
      </div>
    </a>
  );
}
