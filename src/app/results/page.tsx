"use client";

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

function ResultsContent() {
  const searchParams = useSearchParams();
  const recommendations = searchParams.get('recommendations');

  return (
    <main className="flex min-h-screen flex-col items-center py-20 px-4 bg-zinc-950 text-zinc-100 selection:bg-green-500 selection:text-zinc-950">
      
      <div className="max-w-4xl w-full flex flex-col items-center mb-12 animate-fade-in mt-10">
        <div className="inline-flex items-center justify-center p-2 bg-green-500/10 rounded-full mb-6 border border-green-500/20">
          <span className="text-green-400 font-semibold px-4 text-sm tracking-wider uppercase">
            Curation Complete
          </span>
        </div> 
        <h1 className="text-5xl md:text-7xl font-extrabold text-green-400 text-center mb-6 tracking-tight">
          Your New Artists
        </h1>
        <p className="text-zinc-400 text-center text-lg md:text-xl max-w-2xl font-light">
          We analyzed your musical taste and prepared this exclusive selection based on your taste.
        </p>
      </div>

      <div className="max-w-3xl w-full bg-zinc-900/40 backdrop-blur-xl border border-zinc-800/80 rounded-[2rem] p-8 md:p-12 shadow-2xl relative overflow-hidden group transition-all hover:border-zinc-700/80">       
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-32 bg-green-500/10 blur-[80px] -z-10 transition-all group-hover:bg-green-500/20"></div> 
        <div className="text-zinc-300 text-lg md:text-xl leading-relaxed whitespace-pre-wrap font-medium">
          {recommendations || "Oops! No recommendations found. Please try again."}
        </div>
      </div>

      <div className="mt-16 flex flex-col sm:flex-row gap-6 mb-20">
        <Link 
          href="/options"
          className="group relative inline-flex items-center justify-center px-10 py-5 font-bold text-zinc-950 bg-green-500 rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(34,197,94,0.7)]"
        >
          <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30"></span>
          <span className="relative flex items-center gap-2 text-lg">
            Try Another Vibe
          </span>
        </Link>
      </div>
      
    </main>
  );
}
export default function Results() {
  return (
    <Suspense fallback={<div className="flex min-h-screen items-center justify-center bg-zinc-950"><div className="w-20 h-20 border-4 border-zinc-800 border-t-green-500 rounded-full animate-spin"></div></div>}>
      <ResultsContent />
    </Suspense>
  );
}