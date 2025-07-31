import React from "react";

const features = [
  {
    title: "Convert with email automations",
    image:
      "https://www.moneylab.co/wp-content/uploads/updated-convertkit-automation-general-800x1024.png",
  },
  {
    title: "Create faster with generative AI",
    image:
      "https://www.moneylab.co/wp-content/uploads/mailchimp-newsletter-convertkit-800x621.png",
  },
  {
    title: "Refine with segmentation",
    image: "https://cms.elasticemail.com/wp-content/uploads/2019/11/3.png",
  },
  {
    title: "Optimize with analytics & reporting",
    image:
      "https://fluentcrm.com/wp-content/uploads/2024/04/Welcome-Email-Automation-707x1024.webp",
  },
];

const Tools = () => {
  return (
    <section className="bg-[#f6f6f4] py-20 px-6">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {features.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center just lg:items-start text-center lg:text-left"
          >
            <h3 className="text-lg md:text-xl font-serif font-semibold text-[#241c15] underline underline-offset-4 decoration-1 mb-4">
              {item.title}
            </h3>
            <img
              src={item.image}
              alt={item.title}
              className="rounded-xl shadow-sm w-full object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tools;
