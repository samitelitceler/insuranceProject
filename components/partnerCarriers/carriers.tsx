import React from 'react';
import { motion } from "framer-motion";

const companies = [
    {
      name: "Allstate",
      logo: "/images/Allstate.png",
    },
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
      name: "American Modern",
      logo: "/images/american modern.jpeg",
    },
    {
      name: "AmTrust",
      logo: "/images/amtrust-newlogo-homepage.png",
    },
    {
      name: "Attune",
      logo: "/images/attune.png",
    },
    {
      name: "Berkley Aspire",
      logo: "/images/berkley aspire.png",
    },
    {
      name: "Berkshire Hathaway",
      logo: "/images/berkshire hathaway.png",
    },
    {
      name: "Branch",
      logo: "/images/branch-logo.webp",
    },
    {
      name: "Bristol",
      logo: "/images/bristol.png",
    },
    {
      name: "Burns and Wilcox",
      logo: "/images/burns and  wilcox.png",
    },
    {
      name: "CannGen",
      logo: "/images/CannGen-logo.webp",
    },
    {
      name: "Capital",
      logo: "/images/capital.jpg",
    },
    {
      name: "Coterie",
      logo: "/images/coterie.png",
    },
    {
      name: "CRC Insurance",
      logo: "/images/crc_insurance_services_inc__logo.jpeg",
    },
    {
      name: "CSAA",
      logo: "/images/csaa.webp",
    },
    {
      name: "Donegal",
      logo: "/images/donegal.png",
    },
    {
      name: "Employers Insurance",
      logo: "/images/Employers-Insurance-1200px-logo.jpg",
    },
    {
      name: "Foremost",
      logo: "/images/Foremost-1024x512-20220301.png",
    },
    {
      name: "Grange Insurance",
      logo: "/images/grange-insurance.webp",
    },
    {
      name: "Great Place to Work",
      logo: "/images/great place to work.jpg",
    },
    {
      name: "Hagerty Insurance",
      logo: "/images/Hagerty-Insurance-Logo-1024x341.png",
    },
    {
      name: "Heritage",
      logo: "/images/heritage.png",
    },
    {
      name: "Integrity Insurance",
      logo: "/images/integrity-insurance-logo-vector-2021.png",
    },
    {
      name: "Liberty Mutual",
      logo: "/images/Liberty mutual.png",
    },
    {
      name: "Lio",
      logo: "/images/lio.webp",
    },
    {
      name: "Merchants",
      logo: "/images/merchants.png",
    },
    {
      name: "MSA Insurance",
      logo: "/images/msa-insurance-rgb.jpg",
    },
    {
      name: "Narragansett",
      logo: "/images/narragansett.png",
    },
    {
      name: "National General",
      logo: "/images/national_general_insurance_logo.jpeg",
    },
    {
      name: "Nationwide",
      logo: "/images/nationwide-logo.jpg",
    },
    {
      name: "Pie Insurance",
      logo: "/images/Pie_Insurance_Logo.jpg",
    },
    {
      name: "Risk Placement Services",
      logo: "/images/risk-placement-services-logo.png",
    },
    {
      name: "RT Specialty",
      logo: "/images/rt_specialty_logo.jpeg",
    },
    {
      name: "Safeco",
      logo: "/images/safeco.jpg",
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
      name: "The Hanover",
      logo: "/images/The_Hanover_Insurance_Group_Logo.jpg",
    },
    {
      name: "Utica",
      logo: "/images/utica.png",
    },
    {
      name: "XS Brokers",
      logo: "/images/xsbrokders-logo.webp",
    }
  ];

const Carriers = () => {
    return (
        <div>
            <section className="w-full py-12 overflow-hidden">
                <h2 className="text-3xl md:text-4xl font-sans font-bold text-center mb-8">
                    Partner Carriers we have
                </h2>
                <div className="relative w-full flex items-center">
                    <motion.div
                        className="flex space-x-20 min-w-max"
                        animate={{ x: ["0%", "-10%"] }}
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
                                className="h-16 md:h-20 object-contain mx-4"
                            />
                        ))}
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Carriers;