"use client";

const BARS = [0.3, 0.7, 1, 0.5, 0.85, 0.4, 0.65, 0.9, 0.35, 0.6];

export default function Home() {
  const handleLogin = () => {
    window.location.href = "/options";
  };

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 bg-grain">
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-center gap-2 opacity-20"
        aria-hidden="true"
      >
        {BARS.map((h, i) => (
          <span
            key={i}
            className="eq-bar w-3 md:w-4 rounded-t-sm bg-[var(--green)]"
            style={{ height: `${h * 40}vh`, animationDelay: `${i * 0.12}s` }}
          />
        ))}
      </div>

      <div className="relative text-center max-w-xl">
        <p className="font-mono text-xs tracking-[0.3em] uppercase text-[var(--text-dim)] mb-4">
          Signal from your library
        </p>
        <h1 className="font-display italic text-6xl md:text-7xl font-medium tracking-tight mb-6">
          Tune<span className="text-[var(--green)] not-italic">Mind</span>
        </h1>
        <p className="font-body text-lg text-[var(--text-dim)] mb-12 leading-relaxed">
          Connect your Spotify account. We read your top artists and hand
          them to an AI that finds five new ones worth your next listen.
        </p>

        <button
          onClick={handleLogin}
          className="group inline-flex items-center gap-3 rounded-full bg-[var(--green)] px-8 py-4 font-body font-semibold text-[var(--ink)] transition-transform duration-300 hover:scale-105 hover:bg-[var(--green-bright)]"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="1.6" />
            <path
              d="M6.5 10.5c3.5-1 7.5-1 11 .8"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
            <path
              d="M7 13.5c3-1 6-1 9 .6"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
            <path
              d="M7.7 16.3c2.3-.7 4.6-.7 6.8.4"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
          Connect with Spotify
        </button>
      </div>
    </main>
  );
}