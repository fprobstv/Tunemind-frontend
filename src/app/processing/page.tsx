"use client";

import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function Processing() {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const code = searchParams.get('code');
    const state = searchParams.get('state');

    if (code && state) {
      fetch(`http://127.0.0.1:8000/generate?code=${code}&state=${state}`)
        .then(res => res.json())
        .then(data => {
          const params = new URLSearchParams({ recommendations: data.recommendations });
          router.push(`/results?${params.toString()}`);
        })
        .catch(err => {
          console.error(err);
          router.push('/results?recommendations=Erro+ao+processar+IA');
        });
    }
  }, [router, searchParams]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-zinc-950">
      <div className="flex flex-col items-center gap-8 animate-fade-in">
        <div className="w-20 h-20 border-4 border-zinc-800 border-t-green-500 rounded-full animate-spin"></div>
        
        <div className="text-center">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600 animate-pulse mb-3">
            Analyzing your musical taste...
          </h2>
          <p className="text-zinc-500 text-lg">
            This might take a few seconds.
          </p>
        </div>
      </div>
    </main>
  );
}