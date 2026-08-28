import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-zinc-950 text-zinc-100 selection:bg-green-500 selection:text-zinc-950 relative overflow-hidden">
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-500/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="z-10 flex flex-col items-center text-center animate-fade-in">
        
        <div className="inline-flex items-center justify-center p-2 bg-zinc-900/50 rounded-full mb-8 border border-zinc-800">
          <span className="text-zinc-300 font-medium px-4 text-sm tracking-wide">
            Powered by Spotify & Gemini AI 
          </span>
        </div>

        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter mb-6">
          Discover your next <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">
            favorite artist.
          </span>
        </h1>

        <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mb-12 font-light leading-relaxed">
          Connect your Spotify account and let our AI analyze your top artists to curate a personalized list of new artists that match your taste.
        </p>

        <Link
          href="/options"
          className="group relative inline-flex items-center justify-center px-10 py-5 font-bold text-zinc-950 bg-green-500 rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(34,197,94,0.7)]"
        >
          <span className="relative flex items-center gap-3 text-lg">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.6.18-1.2.72-1.38 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
            </svg>
            Get Started
          </span>
        </Link>
      </div>
    </main>
  );
}