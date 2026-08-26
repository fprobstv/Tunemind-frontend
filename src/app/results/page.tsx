"use client";

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function Results() {
  const searchParams = useSearchParams();
  const recommendations = searchParams.get('recommendations');

  return (
    <main className="flex min-h-screen flex-col items-center py-20 px-4 bg-zinc-950 text-white">
      <div className="max-w-3xl w-full bg-zinc-900 border border-zinc-800 rounded-2xl p-8 shadow-2xl">
        <h1 className="text-3xl font-bold mb-6 text-green-500 text-center">
          Your recommendations
        </h1>
        
        <div className="text-zinc-300 text-lg leading-relaxed whitespace-pre-wrap">
          {recommendations || "No recommendations found. Try again."}
        </div>

        <div className="mt-10 flex justify-center">
          <Link 
            href="/options"
            className="bg-green-500 hover:bg-green-400 text-zinc-950 font-bold py-3 px-8 rounded-full transition-all"
          >
            Take another test
          </Link>
        </div>
      </div>
    </main>
  );
}