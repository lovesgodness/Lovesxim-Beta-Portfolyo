export default function Pricing() {
  const plans = [
    { name: "Starter", price: "Free" },
    { name: "Pro", price: "$9" },
    { name: "Ultra", price: "$29" },
  ];

  return (
    <section className="mt-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10">
        Planlar
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className="neon-card p-6 text-center"
          >
            <h3 className="text-xl font-bold">{plan.name}</h3>
            <p className="text-3xl mt-4 text-indigo-400">
              {plan.price}
            </p>

            <button className="mt-6 w-full bg-indigo-600 py-2 rounded-lg hover:bg-indigo-500 transition">
              Satın Al
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
