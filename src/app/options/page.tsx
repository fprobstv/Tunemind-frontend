"use client";

export default function Options() {
  const handleLogin = (filter: string) => {
    window.location.href = `http://127.0.0.1:8000/login?filter=${filter}`;
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-zinc-950 text-white p-4">
      <div className="text-center max-w-2xl w-full">
        <h1 className="text-4xl font-bold mb-8 text-green-500">What do you want to discover today?</h1>
        <p className="text-zinc-400 mb-10">
          Choose based on how famous you want it to be.
        </p>

        <div className="flex flex-col gap-4">
          <button 
            onClick={() => handleLogin('hits')}
            className="bg-zinc-800 hover:bg-zinc-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors border border-zinc-700 hover:border-green-500"
          >
             Famous artists 
          </button>
          
          <button 
            onClick={() => handleLogin('balanced')}
            className="bg-zinc-800 hover:bg-zinc-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors border border-zinc-700 hover:border-green-500"
          >
            Balanced
          </button>

          <button 
            onClick={() => handleLogin('underground')}
            className="bg-zinc-800 hover:bg-zinc-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors border border-zinc-700 hover:border-green-500"
          >
            Unknown artists
          </button>
        </div>
      </div>
    </main>
  );
}