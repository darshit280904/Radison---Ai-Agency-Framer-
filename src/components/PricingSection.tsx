"use client";

import { useState } from "react";
import { Plan, pricingData } from "../data/pricingData";
import Plans from "./Plans";

export default function PricingSection() {
  const [billingCycle, setBillingCycle] = useState<"annually" | "monthly">(
    "annually"
  );

  return (
    <div className="py-10" id="plans">
      <div className="flex justify-center mb-5">
        <h2 className=" flex justify-center font-bold border border-white/20 text-white/50 p-1.5 rounded-xl w-30">
          Plans
        </h2>
      </div>
      <section className="text-center ">
        <h2 className="text-4xl font-bold mb-4">Flexible plans for growth</h2>
        <p className="text-gray-400 max-w-xl mx-auto mb-10">
          Transparent pricing designed to fit your requirements.
        </p>

        <div className="flex justify-center mb-12 space-x-2 p-1 border border-white/20 rounded-lg w-fit mx-auto ">
          <button
            onClick={() => setBillingCycle("annually")}
            className={`px-6 py-2 rounded-md font-medium transition hover:cursor-pointer ${
              billingCycle === "annually"
                ? "bg-indigo-600 text-white"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Annually
          </button>
          <button
            onClick={() => setBillingCycle("monthly")}
            className={`px-6 py-2 rounded-md font-medium transition hover:cursor-pointer ${
              billingCycle === "monthly"
                ? "bg-indigo-600 text-white"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Monthly
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 max-w-6xl mx-auto px-4 ">
          {pricingData[billingCycle].map((plan: Plan, i: number) => (
            <Plans key={i} {...plan} />
          ))}
        </div>
      </section>
    </div>
  );
}
