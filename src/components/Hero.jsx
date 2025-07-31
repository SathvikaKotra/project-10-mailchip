import React from "react";

const Hero = () => {
  return (
    <section className="bg-white text-center py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-semibold text-[#241c15] mb-6 leading-tight">
          <span className="font-bold">Turn Emails into Revenue</span>
        </h1>
        <p className="text-lg md:text-xl text-[#241c15] mb-8">
          Win new customers with the #1 email marketing and automations
          platform* that recommends ways to get more opens, clicks, and sales.
        </p>
        <button className="bg-yellow-400 hover:bg-yellow-300 text-black font-medium py-2 px-6 rounded-full border border-black transition-all">
          Sign Up
        </button>
      </div>
    </section>
  );
};

export default Hero;
