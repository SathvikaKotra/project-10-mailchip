import React from "react";
import { ArrowRight } from "lucide-react";

const Button = ({ children, className }) => {
  return (
    <button
      className={`w-full bg-[#d99c2b] text-black hover:bg-[#d99c2b] font-bold py-2 rounded-lg ${className}`}
    >
      {children}
    </button>
  );
};

const Try = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Try our <span className="text-black">Standard plan</span> for{" "}
            <span className="text-[#d99c2b]">50% off!</span>
          </h2>
          <p className="text-gray-700 mb-6">
            Spend less to grow more with 50% off for 12 months, even if you
            change to our{" "}
            <span className="underline cursor-pointer">Premium</span> or{" "}
            <span className="underline cursor-pointer">Essentials</span> plans.
            Cancel or downgrade to our basic{" "}
            <span className="underline cursor-pointer">Free</span> plan at any
            time.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-800 mb-6">
            {[
              "Generative AI features",
              "Advanced segmentation & reporting",
              "Enhanced automations",
              "Custom-coded email templates",
              "Customizable Popup forms",
              "Personalized onboarding",
            ].map((feature, i) => (
              <li key={i} className="flex items-start">
                <span className="text-[#d99c2b]mr-2 mt-1">✔</span>
                {feature}
              </li>
            ))}
          </ul>
          <div className="text-yellow-600 font-medium flex items-center cursor-pointer hover:underline">
            See all plans <ArrowRight className="ml-2 w-4 h-4" />
          </div>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-semibold mb-4">Standard</h3>
          <p className="text-gray-700 mb-2">
            Send up to 6,000 emails each month.
          </p>

          <div className="mb-4">
            <label
              htmlFor="contacts"
              className="text-sm font-medium text-gray-700 block mb-1"
            >
              Contacts
            </label>
            <select
              id="contacts"
              className="w-full border border-gray-300 rounded-md p-2 text-gray-800"
              defaultValue="500"
            >
              <option value="500">500</option>
              <option value="1000">1,000</option>
              <option value="5000">5,000</option>
              <option value="10000">10,000</option>
            </select>
          </div>

          <p className="text-sm text-gray-500 line-through">₹1,150</p>
          <p className="text-3xl font-bold text-gray-900 mb-1">
            ₹575 <span className="text-sm font-normal">/mo for 12 months</span>
          </p>
          <p className="text-sm text-gray-600 mb-6">
            Then, starts at <strong>₹1,150 /month</strong>
          </p>

          <Button>Buy Now</Button>

          <p className="text-xs text-gray-500 mt-4">
            †See <span className="underline cursor-pointer">Offer Terms</span>.{" "}
            <span className="underline cursor-pointer">Overages</span> apply if
            contact or email send limit is exceeded.{" "}
            <span className="underline cursor-pointer">Learn more</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Try;
