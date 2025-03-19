"use client";

import { Button } from "@/components/ui/button";
import { Inter } from "next/font/google";
import {
  Car,
  Umbrella,
  House,
  Bike,
  Briefcase,
  Sailboat,
  User,
  ShieldCheck,
  Building2,
  Truck,
  Mail,
} from "lucide-react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import NavSection from "@/components/nav-section/nav";
import Footer from "@/components/footer/Footer";
import { useState, useRef } from "react";
import { useInView } from '@/hooks/useInView';
import React from "react";
import Carriers from "@/components/partnerCarriers/carriers";
const inter = Inter({ weight: ["400", "600", "700"], subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);
  const [ref, isInView] = useInView({ threshold: 0.2 });
  const motionRef = useRef<HTMLDivElement>(null);

  const handleNavigation = () => {
    const ezlynxUrl = "http://sgt2.ezlynx.com/ls/click?upn=u001.rm8aNjauuBJWvFaVyKUmk3JQhrODDXZR4jPVn39fXtGpMjwgsQbikcptGOdhdhl-2B6sFik-2B89MlNq8WCrXWmnPjyjg4wENAuujAOVlzdKjLzTd0JdxqJloaz2-2BgzW4OLaDU5-_4uPN2jI8bTL0Cws4JGJkHF5x95e04t-2BUCNzi0ZHkQsgXtNc-2FwytgmGD-2Bdm-2BbApD3LdGQabJfRPsnZs1T7A-2B52CwEPMNoFiV8jrfhHrZN4gOdt3thkHr-2FmpIJBA42ojpXW0F4A1PXDzcbcvqQlsWcduJr5gI1hnx2VYZ-2BQ05VZa39R4UaMqT3KoKhucMnCv-2BGwNHLDHCafSXzMimT8xT11LoTCyeVH5IPa8V41duTtuc-3D";
    
    const selectedValue = document.querySelector('select')?.value;
    if (selectedValue === 'homeinsurance' || selectedValue === 'autoinsurance') {
      window.open(ezlynxUrl, '_blank');
    } else {
      // Navigate to the selected path if it's not home or auto insurance
      if (selectedValue) {
        router.push(selectedValue);
      }
    }
  };

  const handleAutoHomeInsurance = (path: string) => {
    const isAutoOrHome =
      path.includes("/autoinsurance") || path.includes("/homeinsurance");
    const basePath = isAutoOrHome ? path : `/${path}`;
    router.push(basePath);
  };



  const insuranceOptions = [
    { name: "Auto Insurance", icon: <Car />, path: "autoinsurance" },
    { name: "Home Insurance", icon: <House />, path: "homeinsurance" },
    { name: "Life Insurance", icon: <Umbrella />, path: "lifeInsurance" },
    {
      name: "Business Insurance",
      icon: <Briefcase />,
      path: "businessInsurance",
    },
    { name: "Personal Insurance", icon: <User />, path: "personalInsurance" },
    {
      name: "Umbrella Insurance",
      icon: <Umbrella />,
      path: "umbrellaInsurance",
    },
    {
      name: "Cyber & EPIL",
      icon: <ShieldCheck />,
      path: "cyberInsurance",
    },
    {
      name: "Renters Insurance",
      icon: <Building2 />,
      path: "rentersInsurance",
    },
    {
      name: "Motorcycle Insurance",
      icon: <Bike />,
      path: "motorcycleInsurance",
    },
    { name: "Boat Insurance", icon: <Sailboat />, path: "boatInsurance" },
    { name: "Condo Insurance", icon: <Mail />, path: "condoInsurance" },
    {
      name: "Transportational Insurance",
      icon: <Truck />,
      path: "transportationalInsurance",
    },
  ];

  // const menuItems = [
  //   { name: "AUTO INSURANCE", icon: <Car />, path: "autoinsurance" },
  //   { name: "HOME INSURANCE", icon: <House />, path: "homeinsurance" },
  //   { name: "BUSINESS INSURANCE", icon: <Calculator />, path: "businessInsurance" },
  //   { name: "JOIN OUR Team", icon: <User />, path: "jointeam" },
  // ];

  return (
    <div className={inter.className}>
      {/* Navbar Section */}
      <NavSection />
      <section
        id="hero"
        className="relative w-full h-[60vh] flex items-center justify-start bg-cover bg-center"
        style={{
          background:
            "linear-gradient(270.16deg, rgba(217, 217, 217, 0.05) 0.15%, rgba(39, 38, 38, 0.3) 70.05%, rgba(19, 19, 19, 0.5) 99.87%), url('/images/bgHome.png') no-repeat center center / cover",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="relative z-10 text-white max-w-3xl">
            <h1 className="text-2xl md:text-4xl font-sans font-bold mb-4">
              Insurance is not just about protecting what you have; it&apos;s
              about securing your future and the peace of mind that comes with it.
            </h1>
            <div className="flex flex-col items-start gap-2 mt-4 w-full md:w-64">
              <select
                className="w-full text-black p-2 border rounded"
                defaultValue=""
              >
                <option value="">Select Insurance</option>
                {insuranceOptions.map((option) => (
                  <option key={option.path} value={option.path}>
                    {option.name}
                  </option>
                ))}
              </select>
              <Button
                onClick={handleNavigation}
                className="w-full font-sans font-semibold bg-transparent border border-white hover:bg-[#536AAE] hover:border-[#536AAE] text-white px-6 py-3"
              >
                START QUOTE
              </Button>
            </div>
          </div>
        </div>
      </section>
    
      {/* Add this new section right after the hero section */}
      {/* <section className="w-full py-12 px-4 md:px-8 overflow-x-auto">
        <div className="flex justify-between min-w-max gap-8">
          {insuranceOptions.map((option, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center w-40 cursor-pointer"
              onClick={() => handleAutoHomeInsurance(option.path)}
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#D2091D] text-white mb-2">
                {option.icon}
              </div>
              <p className="text-center font-medium text-sm uppercase">
                {option.name.split(' ')[0]}
                <br />
                INSURANCE
              </p>
            </div>
          ))}
        </div>
      </section> */}
      <section
        className="w-full bg-[#536AAE] py-4"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="overflow-hidden">
          <motion.div
            ref={motionRef}
            className="flex space-x-30"
            animate={{ x: isHovered ? 0 : "-50%" }}
            transition={{
              repeat: isHovered ? 0 : Infinity,
              duration: 20,
              ease: "linear",
            }}
          >
            {[...insuranceOptions, ...insuranceOptions].map((item, index) => (
              <div key={index} className="flex items-center">
                <div
                  className="flex-shrink-0 flex flex-col items-center justify-center cursor-pointer w-56 h-32 group relative hover:scale-105 transition-transform duration-300"
                  onClick={() => handleAutoHomeInsurance(item.path)}
                >
                  <div className="w-12 h-12 flex items-center justify-center text-white">
                    {React.cloneElement(item.icon, { size: 24 })}
                  </div>
                  <p className="text-white text-center font-medium text-base uppercase tracking-wider leading-tight px-2">
                    {item.name}
                  </p>

                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center p-3 text-white backdrop-blur-sm">
                    <button className="text-xs font-bold text-white px-4 py-1 rounded flex cursor-pointer items-center justify-center gap-1">
                      LEARN MORE
                      <span className="text-lg text-red-700 flex items-center">→</span>
                    </button>
                  </div>
                </div>

                {index !== [...insuranceOptions, ...insuranceOptions].length - 1 && (
                  <div className="h-28 border-l border-[#11193B] mx-12"></div>
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </section>


      <section className="w-full px-4 md:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl md:text-3xl text-[#11193B] font-semibold mb-6">Comprehensive Insurance Solutions Tailored for You</h3>
          
          <p className="text-xl md:text-lg font-opensans font-normal leading-relaxed mb-6">
            At Prime Insurance Services, we understand that insurance isn't just about policies—it's about protecting what matters most. Whether it's your home, your business, or your future, we provide customized personal and business insurance designed to fit your unique needs.
          </p>
          <p className="text-xl md:text-lg font-opensans font-normal leading-relaxed mb-6">
            As an independent insurance agency, we partner with top-rated carriers to ensure you get the best coverage at competitive rates. Our mission is simple: to provide reliable, transparent, and tailored insurance solutions backed by expert guidance and exceptional service.
          </p>

          {/* Personal Insurance Section */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl text-[#11193B] font-bold mb-6">Personal Insurance – Protection for You and Your Family</h3>
            <p className="text-lg mb-6">
              Life is unpredictable, but the right personal insurance can give you peace of mind knowing that your assets and loved ones are protected. We offer a range of policies to cover your everyday and long-term needs:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="flex items-start gap-2">
                <span className="text-[#11193B]">•</span>
                <p><strong>Auto Insurance</strong> – Safeguard your vehicle with comprehensive, collision, and liability coverage.</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#11193B]">•</span>
                <p><strong>Home Insurance</strong> – Protect your home and belongings from unexpected events.</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#11193B]">•</span>
                <p><strong>Renters & Condo Insurance</strong> – Secure coverage for your personal property and liability.</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#11193B]">•</span>
                <p><strong>Umbrella Insurance</strong> – Extra liability protection beyond your standard policies.</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#11193B]">•</span>
                <p><strong>Boat & Motorcycle Insurance</strong> – Coverage for recreational vehicles and watercraft.</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#11193B]">•</span>
                <p><strong>Life Insurance</strong> – Financial security for your family's future.</p>
              </div>
            </div>
          </div>

          {/* Business Insurance Section */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl text-[#11193B] font-bold mb-6">Business Insurance – Secure Your Business's Future</h3>
            <p className="text-lg mb-6">
              Your business is an investment in your future, and the right insurance helps you safeguard it against unforeseen risks. We provide insurance solutions for businesses of all sizes:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="flex items-start gap-2">
                <span className="text-[#11193B]">•</span>
                <p><strong>General Liability Insurance</strong> – Protects against lawsuits related to injury or property damage.</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#11193B]">•</span>
                <p><strong>Commercial Property Insurance</strong> – Coverage for office spaces, buildings, and equipment.</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#11193B]">•</span>
                <p><strong>Workers' Compensation</strong> – Supports employees with medical expenses and lost wages.</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#11193B]">•</span>
                <p><strong>Cyber Liability Insurance</strong> – Protection from cyber threats, data breaches, and fraud.</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#11193B]">•</span>
                <p><strong>Business Owner's Policy (BOP)</strong> – A bundled policy covering general liability and property insurance.</p>
              </div>
            </div>
          </div>

          {/* Why Choose Us Section */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl text-[#11193B] font-bold mb-6">Why Choose Prime Insurance Services?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-2">
                <span className="text-[#11193B]">•</span>
                <p><strong>Independent & Unbiased</strong> – We work for you, not a single insurance provider, giving you access to multiple options.</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#11193B]">•</span>
                <p><strong>Expert Guidance</strong> – Our team takes the time to understand your unique needs and recommend the right coverage.</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#11193B]">•</span>
                <p><strong>Transparent & Honest Service</strong> – We provide clear explanations and policy reviews, ensuring you know exactly what you're getting.</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#11193B]">•</span>
                <p><strong>Local & Reliable</strong> – Our agents are always available when you need assistance, claims support, or policy adjustments.</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl text-[#11193B] font-bold mb-4">Get a Personalized Insurance Quote Today</h3>
            <p className="text-lg mb-6">
              Choosing Prime Insurance Services means getting better protection, better value, and better service with your needs always put first. Contact us today.
            </p>
          </div>
        </div>
      </section>

      {/* New Independent Agency Advantage Section */}
      <section className="w-full px-4 md:px-8 py-16 " ref={ref}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-[48px] text-[#11193B] font-bold text-center mb-4">The Independent Agency Advantage</h2>
          <p className="text-xl text-center mb-4">Why Choose an Independent Insurance Agency?</p>
          <p className="text-lg text-center mb-12">Not all insurance agencies are the same. As an independent agency, Prime Insurance Services works for you—not a single insurance company. This means we provide unbiased guidance, competitive pricing, and a wide range of coverage options to meet your specific needs.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "More Options, Better Protection",
                delay: "0.2s",
                description: [
                  "At Prime Insurance Services, we partner with multiple insurance providers to offer a wide range of coverage options.",
                  "This means you get personalized policies tailored to your needs, ensuring you have the right protection at the best possible price—without being limited to a single provider."
                ]
              },
              {
                title: "Support When You Need It Most",
                delay: "0.4s",
                description: [
                  "We believe that insurance should come with reliable support. Whether you have a question about your policy or need to file a claim, our team is here to provide guidance.",
                  "With our dedicated team, quick responses and hassle-free assistance are always just a click away when you need it the most."
                ]
              },
              {
                title: "Trusted Advice, Every Step of the Way",
                delay: "0.6s",
                description: [
                  "With a team of experienced and knowledgeable professionals, we stay updated on industry trends and regulations to provide expert recommendations.",
                  "Whether you're choosing a new policy or reviewing your existing coverage, we ensure you make informed decisions with confidence."
                ]
              }
            ].map((advantage, index) => (
              <div
                key={index}
                className={`${isInView ? 'animate-slide-in' : 'opacity-0 translate-x-[-100%]'} hover:shadow-lg transition-shadow duration-300`}
                style={{ animationDelay: advantage.delay }}
              >
                <div className="flex flex-col items-start p-6 bg-white rounded-lg h-full">
                  <div className="self-center mb-4"></div>
                  <h3 className="text-[#11193B] text-2xl font-semibold mb-4">
                    {advantage.title}
                  </h3>
                  <div className="text-[#393939] font-opensans text-[18px] leading-[30px] space-y-4">
                    {advantage.description.map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg mb-6">
              Choosing Prime Insurance Services means getting better protection, better value, and better service with your needs always put first. Contact us today.
            </p>
            
          </div>
        </div>
      </section>

      <Carriers />


      <Footer />
    </div>
  );
}
