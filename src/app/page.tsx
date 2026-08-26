"use client";

export default function Home() {
  const handleLogin = () => {
    window.location.href = "/options";
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-zinc-950 text-white p-4">
      <div className="text-center max-w-xl">
        <h1 className="text-5xl font-extrabold mb-6 text-green-500 tracking-tight">
          TuneMind
        </h1>
        
        <p className="text-lg text-zinc-400 mb-10">
          Discover new artists based on what you listen to!
        </p>

        <button onClick={handleLogin}
          className="bg-green-500 hover:bg-green-400 text-zinc-950 font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
          Login with Spotify
        </button>
      </div>
    </main>
  );
}