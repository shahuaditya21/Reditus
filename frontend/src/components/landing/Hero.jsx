import { Link } from "react-router-dom";
export default function Hero() {
  return (
    <section className="text-center py-24 px-6">

      <h1 className="text-5xl md:text-6xl font-bold text-zinc-900">
  Lost something important?
</h1>

<p className="mt-6 text-xl text-zinc-600 max-w-3xl mx-auto">
  From ID cards and wallets to laptops and keys, Reditus helps people reconnect with their lost belongings through a trusted and community-driven platform.
</p>

      <div className="flex flex-wrap justify-center gap-4 mt-10">

        <Link
  to="/lost"
  className="bg-amber-500 text-white px-6 py-3 rounded-xl"
>
  Report Lost Item
</Link>

<Link
  to="/found"
  className="bg-emerald-600 text-white px-6 py-3 rounded-xl"
>
  Browse Found Items
</Link>

      </div>

    </section>
  )
}