"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black text-black dark:text-white">

      {/* Navbar */}
      <header className="flex justify-between items-center px-8 py-4 border-b border-zinc-200 dark:border-zinc-800">
        <h1 className="text-xl font-bold">MindBoard</h1>

        <div className="flex gap-4">
          <Link href="/signin" className="text-sm">
            Login
          </Link>
          <Link
            href="/canvas"
            className="px-4 py-2 bg-black text-white rounded-md dark:bg-white dark:text-black text-sm"
          >
            Open Board
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center flex-1 text-center px-6">
        <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Think. Draw. Organize.
        </h2>

        <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mb-8">
          A smart whiteboard for taking notes, sketching ideas, and collaborating
          in real-time. Combine writing and drawing in one seamless workspace.
        </p>

        <div className="flex gap-4">
          <Link
            href="/canvas"
            className="px-6 py-3 bg-black text-white rounded-lg text-lg dark:bg-white dark:text-black"
          >
            Start Whiteboard
          </Link>

          <Link
            href="/room"
            className="px-6 py-3 border border-zinc-300 rounded-lg text-lg dark:border-zinc-700"
          >
            Join Session
          </Link>
        </div>
      </main>

      {/* Features */}
      <section className="py-16 px-8 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="p-6 border rounded-xl dark:border-zinc-800">
          <h3 className="text-xl font-semibold mb-2">Smart Drawing</h3>
          <p className="text-zinc-600 dark:text-zinc-400">
            Draw shapes, diagrams, and sketches effortlessly with intuitive tools.
          </p>
        </div>

        <div className="p-6 border rounded-xl dark:border-zinc-800">
          <h3 className="text-xl font-semibold mb-2">Notes + Visuals</h3>
          <p className="text-zinc-600 dark:text-zinc-400">
            Combine text notes and drawings in a single infinite canvas.
          </p>
        </div>

        <div className="p-6 border rounded-xl dark:border-zinc-800">
          <h3 className="text-xl font-semibold mb-2">Real-time Collaboration</h3>
          <p className="text-zinc-600 dark:text-zinc-400">
            Work together live with teammates using shared whiteboard sessions.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-sm text-zinc-500">
        Built for thinkers, designers, and developers 🚀
      </footer>
    </div>
  );
}