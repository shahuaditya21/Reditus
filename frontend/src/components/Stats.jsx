export default function Stats() {
  const stats = [
    {
      title: "Trusted Community",
      desc: "Built around helping people reconnect with their belongings."
    },
    {
      title: "Secure Recovery",
      desc: "Ownership verification before items are returned."
    },
    {
      title: "Fast Matching",
      desc: "Quickly discover possible lost and found matches."
    }
  ]

  return (
    <section className="max-w-6xl mx-auto py-12 px-6">
      <div className="grid md:grid-cols-3 gap-6">
        {stats.map((item) => (
          <div
            key={item.title}
            className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold mb-3">
              {item.title}
            </h3>

            <p className="text-zinc-500">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}