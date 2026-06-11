import { FileText, Search, Handshake } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: FileText,
      title: "Report",
      desc: "Tell us what was lost or found.",
    },
    {
      icon: Search,
      title: "Match",
      desc: "Discover possible matches instantly.",
    },
    {
      icon: Handshake,
      title: "Reunite",
      desc: "Verify ownership and return the item.",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto py-24 px-6">
      <h2 className="text-4xl font-bold text-center mb-12">
        How It Works
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {steps.map((step) => (
          <div
            key={step.title}
            className="bg-white rounded-2xl shadow-sm p-8 text-center hover:shadow-lg transition"
          >
            <div className="flex justify-center mb-4">
              <step.icon
                size={40}
                className="text-emerald-600"
              />
            </div>

            <h3 className="font-semibold text-xl mb-3">
              {step.title}
            </h3>

            <p className="text-zinc-500">
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}