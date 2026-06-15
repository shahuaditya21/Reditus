import { Link } from "react-router-dom";
export default function CTA() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-24 text-center">

      <h2 className="text-4xl font-bold mb-6">
        Ready to reunite with your lost belongings?
      </h2>

      <p className="text-zinc-600 mb-8">
        Start by reporting a lost item or browsing recently found items.
      </p>

      <div className="flex justify-center gap-4">

        <Link
  to="/lost"
  className="bg-amber-500 text-white px-6 py-3 rounded-xl hover:scale-105 transition"
>
  Report Lost Item
</Link>

<Link
  to="/found"
  className="bg-emerald-600 text-white px-6 py-3 rounded-xl hover:scale-105 transition"
>
  Browse Found Items
</Link>
      </div>

    </section>
  )
}