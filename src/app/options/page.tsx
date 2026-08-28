import Link from 'next/link';

export default function Options() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-zinc-950 text-zinc-100 selection:bg-green-500 selection:text-zinc-950">
      
      <div className="z-10 flex flex-col items-center text-center max-w-5xl w-full animate-fade-in">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
          Choose Your <span className="text-white bg-clip-text">Vibe</span>
        </h1>
        <p className="text-zinc-400 text-lg md:text-xl mb-16 font-light">
          Select based on how famous you want it to be.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full px-4">
          
          <Link href="http://127.0.0.1:8000/login?filter=hits" className="group flex flex-col items-center text-center p-8 bg-zinc-900/40 border border-zinc-800/80 rounded-[2rem] hover:bg-zinc-800/50 hover:border-green-500/50 hover:-translate-y-2 transition-all duration-300">
            <h2 className="text-2xl font-bold mb-3 text-zinc-100 group-hover:text-green-400 transition-colors">Famous artists</h2>
          </Link>

          <Link href="http://127.0.0.1:8000/login?filter=balanced" className="group flex flex-col items-center justify-center text-center p-8 bg-zinc-900/40 border border-zinc-800/80 rounded-[2rem] hover:bg-zinc-800/50 hover:border-green-500/50 hover:-translate-y-2 transition-all duration-300 relative overflow-hidden">
            <h2 className="text-2xl font-bold mb-3 text-zinc-100 group-hover:text-green-400 transition-colors ">Balanced</h2>
          </Link>

          <Link href="http://127.0.0.1:8000/login?filter=underground" className="group flex flex-col items-center justify-center text-center p-8 bg-zinc-900/40 border border-zinc-800/80 rounded-[2rem] hover:bg-zinc-800/50 hover:border-green-500/50 hover:-translate-y-2 transition-all duration-300">
            <h2 className="text-2xl font-bold mb-3 text-zinc-100 group-hover:text-green-400 transition-colors">Unknown artists</h2>
          </Link>

        </div>
      </div>
    </main>
  );
}