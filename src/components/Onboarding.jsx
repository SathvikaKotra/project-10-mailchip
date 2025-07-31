import React from "react";
import { ArrowRight } from "lucide-react";

const Onboarding = () => {
  return (
    <section className="bg-white w-full py-16">
      <div className="max-w-[1440px] mx-auto px-6 flex flex-col md:flex-row items-center md:items-start gap-12">
        {/* Text Section */}
        <div className="max-w-xl space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-black">
            Get started easily with a <br /> personalized product tour
          </h2>
          <p className="text-lg text-gray-800">
            An onboarding specialist is here to help you get started with
            confidence—it’s included with Standard and Premium plans.*
          </p>

          {/* Fancy CTA link with expanding hover effect */}
          <a
            href="#"
            className="group relative inline-flex items-center gap-2 text-black font-medium hover:bg-yellow-400 transition-all duration-300 px-2 py-1 rounded-full"
          >
            <span className="relative z-10">Learn more about onboarding</span>
            <span className="w-7 h-7 flex items-center justify-center bg-yellow-400 rounded-full group-hover:bg-black group-hover:text-white transition-all duration-300">
              <ArrowRight className="w-4 h-4" />
            </span>

            {/* Optional expanding yellow hover background */}
            <span className="absolute inset-0 rounded-full bg-yellow-400 opacity-0 group-hover:opacity-100 transition-all duration-300 z-0"></span>
          </a>
        </div>

        {/* Right Image */}
        <div className="w-full md:max-w-md">
          <img
            src="https://img.freepik.com/premium-vector/cartoon-woman-working-laptop-with-woman-sitting-table_1075233-1240.jpg"
            alt="Onboarding Help"
            className="w-full h-auto rounded-md"
          />
        </div>
      </div>
    </section>
  );
};

export default Onboarding;
