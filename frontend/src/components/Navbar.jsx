import { RefreshCw } from "lucide-react";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
      <Link
  to="/"
  className="text-2xl font-bold flex items-center gap-2 text-emerald-700"
>
  <RefreshCw size={22} />
  Reditus
</Link>
      <div className="hidden md:flex gap-8 text-zinc-600">
        <Link to="/">Browse</Link>
        <Link to="/lost">Report Lost</Link>
        <Link to="/found">Report Found</Link>
      </div>

      <div className="flex items-center gap-3">
        <Link
  to="/login"
  className="text-zinc-600 flex items-center"
>
  Login
</Link>

        <Link
  to="/register"
  className="bg-emerald-600 text-white px-4 py-2 rounded-xl flex items-center"
>
  Sign Up
</Link>
      </div>
    </nav>
  )
}