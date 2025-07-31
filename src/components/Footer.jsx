import React from "react";
import { ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#d99c2b] text-black px-6 md:px-20 py-40">
      <div className="max-w-7xl mx-auto">
        <div className="text-sm mb-6 -mt-20 flex gap-6">
          <span className="font-medium mr-2">Related Links:</span>
          <a href="#" className="underline mr-4">
            A/B Testing in Digital Marketing
          </a>
          <a href="#" className="underline mr-4">
            What is SEO in digital marketing?
          </a>
          <a href="#" className="underline">
            ChatGPT: What to Know About This AI Content Writing Tool
          </a>
        </div>

        <div className="border-t leading-loose border-black/30 pt-10 grid grid-cols-2 md:grid-cols-6 gap-8 text-sm">
          <div>
            <h4 className="font-semibold mb-2">Products</h4>
            {[
              "Why Mailchimp?",
              "Product Updates",
              "Email Marketing",
              "Websites",
              "Transactional Email",
              "How We Compare",
              "GDPR Compliance",
              "Security",
              "Status",
              "Mobile App",
            ].map((item, i) => (
              <p key={i} className="underline mb-1 cursor-pointer">
                {item}
              </p>
            ))}
          </div>

          <div>
            <h4 className="font-semibold mb-2">Resources</h4>
            {[
              "Marketing Library",
              "Free Marketing Tools",
              "Marketing Glossary",
              "Integrations Directory",
            ].map((item, i) => (
              <p key={i} className="underline mb-1 cursor-pointer">
                {item}
              </p>
            ))}
          </div>

          <div>
            <h4 className="font-semibold mb-2">Community</h4>
            {["Agencies & Freelancers", "Developers", "Events"].map(
              (item, i) => (
                <p key={i} className="underline mb-1 cursor-pointer">
                  {item}
                </p>
              )
            )}
          </div>

          <div>
            <h4 className="font-semibold mb-2">Company</h4>
            {[
              "Our Story",
              "Newsroom",
              "Give Where You Live",
              "Careers",
              "Accessibility",
            ].map((item, i) => (
              <p key={i} className="underline mb-1 cursor-pointer">
                {item}
              </p>
            ))}
          </div>

          <div>
            <h4 className="font-semibold mb-2">Help</h4>
            {[
              "Contact Us",
              "Hire an Expert",
              "Help Center",
              "Talk to Sales",
            ].map((item, i) => (
              <p key={i} className="underline mb-1 cursor-pointer">
                {item}
              </p>
            ))}
          </div>

          <div>
            <div className="flex items-center mb-2">
              <img
                src="https://mms.businesswire.com/media/20230907020022/en/1881986/5/Mailchimp_Logo_50-50_Black.jpg?download=1"
                alt="Mailchimp Logo"
                className="w-20 h-6 mr-3"
              />
              {/* <span className="text-sm font-semibold">mailchimp</span> */}
              <span className="text-sm font-bold"> presents</span>
            </div>
            <p className="text-sm mb-2">
              Films, podcasts, and original series that celebrate the
              entrepreneurial spirit.
            </p>
            <div className="flex items-center text-sm font-semibold cursor-pointer hover:underline">
              Check it out <ArrowRight className="ml-2 w-4 h-4" />
            </div>
          </div>
        </div>

        <div className=" border-t border-black/30 mt-10 pt-6 max-w-7xl mx-auto flex flex-col  items-center gap-6">
          {/* Top Brand Row */}
          <div className="flex flex-wrap justify-center md:justify-start items-center gap-6 text-sm font-medium">
            <span className="text-lg font-bold">INTUIT</span>
            <span>turbotax</span>
            <span>creditkarma</span>
            <span>quickbooks</span>
            <span>mailchimp</span>
          </div>

          {/* App & Social Icons */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* App Badges */}
            <div className="flex items-center gap-4">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/67/App_Store_%28iOS%29.svg"
                alt="App Store"
                className="h-8"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Google Play"
                className="h-8"
              />
            </div>

            {/* Social Icons & GDPR */}
            <div className="flex flex-wrap justify-center items-center gap-4 text-lg">
              <span>Facebook</span>
              <span>X</span>
              <span>Instagram</span>
              <span>LinkedIn</span>
              <span>YouTube</span>
              <span>Pinterest</span>
              <div className="flex items-center gap-2 text-sm font-semibold">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1828/1828640.png"
                  alt="GDPR icon"
                  className="w-4 h-4"
                />
                <div>
                  <div className="text-black font-bold">GDPR</div>
                  <div>FRIENDLY TOOLS</div>
                </div>
              </div>
            </div>
          </div>

          {/* Language & Legal Text */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-40 text-xs text-black/90">
            <select className="border border-black bg-yellow-400 px-8 py-2 ">
              <option>English</option>
              <option>Deutsch</option>
              <option>French</option>
            </select>

            <p className="text-center md:text-left max-w-4xl">
              © 2001–2025 All Rights Reserved. Mailchimp® is a registered
              trademark of The Rocket Science Group. Apple and the Apple logo
              are trademarks of Apple Inc. Mac App Store is a service mark of
              Apple Inc. Google Play and the Google Play logo are trademarks of
              Google Inc.
              <span className="ml-2 underline cursor-pointer">Privacy</span> |
              <span className="underline cursor-pointer"> Terms</span> |
              <span className="underline cursor-pointer"> Legal</span> |
              <span className="underline cursor-pointer">
                {" "}
                Cookie Preferences
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
