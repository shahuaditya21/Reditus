export default function Features() {
  const features = [
    {
      title: "Smart Matching",
      desc: "Automatically discover possible matches."
    },
    {
      title: "Secure Claims",
      desc: "Verify ownership before returning items."
    },
    {
      title: "Community Driven",
      desc: "Built for campuses and communities."
    }
  ]

  return (
    <section className="max-w-6xl mx-auto py-24 px-6">

      <h2 className="text-4xl font-bold text-center mb-12">
        Why Reditus?
      </h2>

      <div className="grid md:grid-cols-3 gap-6">

        {features.map((feature) => (
          <div
            key={feature.title}
            className="bg-white rounded-2xl shadow-sm p-6"
          >
            <h3 className="font-semibold text-xl mb-3">
              {feature.title}
            </h3>

            <p className="text-zinc-500">
              {feature.desc}
            </p>
          </div>
        ))}

      </div>

    </section>
  )
}