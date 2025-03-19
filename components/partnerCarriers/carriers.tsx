import React from 'react';
import { motion } from "framer-motion";

const companies = [
    {
      name: "Foremost",
      logo: "/images/Foremost.jpeg",
    },
    {
      name: "Heritage",
      logo: "/images/heritageLogo.png",
    },
    {
      name: "Liberty Mutual",
      logo: "https://www.anchorins.com/img/carriers/liberty-mutual.png",
    },
    {
      name: "Safeco",
      logo: "/images/safeco.jpg",
    },
    {
      name: "Nationwide",
      logo: "/images/nationwide-logo.jpg",
    },
    {
      name: "State Auto",
      logo: "/images/state-auto-insurance-companies-logo-vector.png",
    },
    {
      name: "The Hartford",
      logo: "/images/The hartford.png",
    },
    {
      name: "American Modern",
      logo: "/images/american modern.jpeg",
    },
    {
      name: "Berkshire Hathaway",
      logo: "/images/berkshire hathaway.png",
    },
    {
      name: "National General",
      logo: "/images/national_general_insurance_logo.jpeg",
    },
    {
      name: "Travelers",
      logo: "/images/travellers.png",
    },
    {
      name: "AAA",
      logo: "/images/csaa.webp",
    },
  ];

const Carriers = () => {
    return (
        <div>
            <section className="w-full py-12 overflow-hidden">
                <h2 className="text-3xl md:text-4xl text-[#11193B] font-sans font-bold text-center mb-8">
                    Partner Carriers
                </h2>
                <div className="relative w-full flex items-center">
                    <motion.div
                        className="flex space-x-20 min-w-max"
                        animate={{ x: ["0%", "-30%"] }}
                        transition={{
                            repeat: Infinity,
                            duration: 30,
                            ease: "linear",
                        }}
                    >
                        {[...companies, ...companies].map((company, index) => (
                            <img
                                key={`${company.name}-${index}`}
                                src={company.logo}
                                alt={company.name}
                                className="h-16 md:h-20 w-32 object-contain mx-4"
                            />
                        ))}
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Carriers;