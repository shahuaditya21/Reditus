import { RefreshCw } from "lucide-react";
export default function Navbar() {
  return (
    <nav className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
      <h1 className="text-2xl font-bold flex items-center gap-2 text-emerald-700">
  <RefreshCw size={22} />
  Reditus
</h1>

      <div className="hidden md:flex gap-8 text-zinc-600">
        <a href="#">Browse</a>
        <a href="#">Report Lost</a>
        <a href="#">Report Found</a>
      </div>

      <div className="flex gap-3">
        <button className="text-zinc-600">
          Login
        </button>

        <button className="bg-emerald-600 text-white px-4 py-2 rounded-xl">
          Sign Up
        </button>
      </div>
    </nav>
  )
}