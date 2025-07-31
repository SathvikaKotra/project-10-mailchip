import React from "react";

const topBoxes = [
  {
    bg: "bg-[#d99c2b]",
    text: "Boost orders and customer lifetime value by dynamically personalizing emails based on browsing and purchase data.",
    button: "Explore marketing automation",
  },
  {
    bg: "bg-[#f9eddc]",
    text: "Effortlessly create on-brand content with generative AI tools and choose from expertly designed templates.",
    button: "Explore AI tools",
  },
  {
    bg: "bg-[#d99c2b]",
    text: "Target customers with advanced logic like spend amounts, buying behavior, and predicted attributes.",
    button: "Explore audience management",
  },
  {
    bg: "bg-[#f9eddc]",
    text: "Analyze performance with custom reports, funnel visualizations, and industry benchmarking.",
    button: "Explore analytics and reporting",
  },
];

const stats = [
  {
    title: "Up to 25x ROI",
    sub: "seen by Mailchimp users*",
  },
  {
    title: "22 years experience",
    sub: "helping businesses sell more",
  },
  {
    title: "11M+ Users",
    sub: "of Mailchimp globally",
  },
  {
    title: "Over 3.1 billion emails",
    sub: "with AI-generated content sent by Mailchimp customers*",
  },
];

const Why = () => {
  return (
    <>
      {/* Top colored boxes */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {topBoxes.map((item, idx) => (
          <div key={idx} className={`p-8 ${item.bg}`}>
            <p className="text-[#241c15] text-base font-medium leading-relaxed mb-6">
              {item.text}
            </p>
            <button className="border border-black px-5 py-2 rounded-full hover:bg-black hover:text-white transition">
              {item.button}
            </button>
          </div>
        ))}
      </section>

      {/* Dark section with heading and stats */}
      <section className="bg-[#241c15] text-white py-30 px-6">
        <div className="grid grid-cols-[60%_40%] max-w-[1440px] mx-auto gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Find out why we’re <br /> best-in-class
            </h2>
            <p className="text-lg leading-relaxed text-gray-200">
              The #1 email marketing and automations platform* that <br />{" "}
              recommends ways to get more opens, clicks, and sales.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-8 text-white">
            {stats.map((item, idx) => (
              <div key={idx}>
                <h4 className="text-lg font-bold">{item.title}</h4>
                <p className="text-sm text-gray-300 mt-1">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Why;
