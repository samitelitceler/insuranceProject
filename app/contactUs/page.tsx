"use client";

import Footer from "@/components/footer/Footer";
import NavSection from "@/components/nav-section/nav";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";
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
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import Carriers from "@/components/partnerCarriers/carriers";

function ContactUs() {
  const router = useRouter();
  const [selectedPath, setSelectedPath] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const motionRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    comments: "",
  });
  const [submissionStatus, setSubmissionStatus] = useState("");
  const [smsConsent, setSmsConsent] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedPath(event.target.value);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleNavigation = () => {
    if (selectedPath) {
      router.push(`/${selectedPath}`);
    }
  };

  const handleAutoHomeInsurance = (path: string) => {
    const isAutoOrHome =
      path.includes("/autoinsurance") || path.includes("/homeinsurance");
    const basePath = isAutoOrHome ? path : `/${path}`;
    router.push(basePath);
  };

  const handleSmsConsentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSmsConsent(event.target.checked);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmissionStatus("");

    const response = await fetch("https://formspree.io/f/xgvaezgl", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...formData, smsConsent }),
    });

    if (response.ok) {
      setSubmissionStatus("Thank You! Your submission has been received.");
      setFormData({ firstName: "", lastName: "", email: "", phone: "", comments: "" });
      setSmsConsent(false);
    } else {
      setSubmissionStatus("There was an error submitting your form. Please try again.");
    }
  };

  const insuranceOptions = [
    { name: "Auto Insurance", icon: <Car />, path: "autoinsurance" },
    { name: "Home Insurance", icon: <House />, path: "homeinsurance" },
    { name: "Life Insurance", icon: <Umbrella />, path: "lifeInsurance" },
    {
      name: "Commercial Insurance",
      icon: <Briefcase />,
      path: "businessInsurance",
    },
    {
      name: "Motorcycle Insurance",
      icon: <Bike />,
      path: "motorcycleInsurance",
    },
    { name: "Boat Insurance", icon: <Sailboat />, path: "boatInsurance" },
    { name: "Personal Insurance", icon: <User />, path: "personalInsurance" },
    {
      name: "Cyber & EPIL",
      icon: <ShieldCheck />,
      path: "cyberInsurance",
    },
    {
      name: "Umbrella Insurance",
      icon: <Umbrella />,
      path: "umbrellaInsurance",
    },
    {
      name: "Renters Insurance",
      icon: <Building2 />,
      path: "rentersInsurance",
    },
    {
      name: "Transportational Insurance",
      icon: <Truck />,
      path: "transportationalInsurance",
    },
    { name: "Condo Insurance", icon: <Mail />, path: "condoInsurance" },
  ];

  return (
    <>
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
            <h1 className="text-xl md:text-4xl font-sans font-bold mb-4">
              Insurance is not just about protecting what you have; it&apos;s
              about securing your future and the peace of mind that comes with it.
            </h1>
            <div className="flex flex-col font-opensans items-start gap-2 mt-4 w-full md:w-64">
              <select
                onChange={handleChange}
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

      <div className="min-h-screen">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div id="contact-form" className="mt-8">
            <h1 className="text-2xl md:text-4xl font-bold text-[#11193B] text-left">
              Contact Us
            </h1>
            <p className="text-left text-gray-600 mt-2">Home » Contact Us</p>
          </div>

          <h2 className="text-2xl md:text-5xl font-semibold text-[#11193B] text-left mt-8">
            Contact Prime Insurance Services
          </h2>

          <div className="grid md:grid-cols-2 gap-12 mt-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-[#11193B] mb-6">
                Prime Insurance Services
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <FaMapMarkerAlt className="text-[#11193B] mt-1" />
                  <p className="text-[#11193B] text-lg hover:text-gray-900 cursor-pointer">
                    3440 Toringdon Way, Suite 205<br />
                    Office 254, Charlotte NC 28277
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <FaPhoneAlt className="text-[#11193B] mt-1" />
                  <p className="text-[#11193B] text-lg hover:text-gray-900 cursor-pointer">
                    980-297-9827
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <FaEnvelope className="text-[#11193B] mt-1" />
                  <p className="text-[#11193B] text-lg hover:text-gray-900 cursor-pointer">
                    info@primeinsurancellc.com
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="mt-8">
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="p-3 rounded-md border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-gray-400"
                      required
                    />
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="p-3 rounded-md border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-gray-400"
                      required
                    />
                  </div>
                  
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="p-3 rounded-md border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-gray-400"
                    required
                  />
                  
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="p-3 rounded-md border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-gray-400"
                    required
                  />
                  
                  <textarea
                    name="comments"
                    placeholder="Comments"
                    value={formData.comments}
                    onChange={handleInputChange}
                    className="p-3 rounded-md border border-gray-300 w-full h-32 resize-none focus:outline-none focus:ring-2 focus:ring-gray-400"
                    required
                  ></textarea>

                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="smsConsent"
                      checked={smsConsent}
                      onChange={handleSmsConsentChange}
                      className="mr-2"
                      required
                    />
                    <label htmlFor="smsConsent"  className="text-sm font-sans">
                      By checking this box, I consent to receive SMS from Prime Insurance Services. I may receive messages in regards to appointment reminders, billing inquiries, follow-up messages, and promotional offers. Reply STOP to opt-out; For assistance Reply HELP; Message and data rates may apply; Messaging frequency may vary. Visit our <a href="/privacyandpolicy" className="text-blue-500 underline">Privacy Policy</a> and <a href="/termsandconditions" className="text-blue-500 underline">Terms and Conditions</a>.
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#11193B] hover:bg-[#536AAE] text-white px-6 py-3 rounded-md transition duration-300"
                  >
                    Send Message
                  </button>
                </div>
              </form>

              {submissionStatus && (
                <div className="mt-4 text-green-600 font-semibold">
                  {submissionStatus}
                </div>
              )}
            </div>

            <div className="border-4 border-gray-200 rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3158.536614201292!2d-80.84008732386392!3d35.06206997297264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88541ff03c8d47df%3A0x4eaf6b4dfb3018ff!2s3440%20Toringdon%20Way%2C%20Charlotte%2C%20NC%2028277%2C%20USA!5e0!3m2!1sen!2sus!4v1700000000000"
                className="w-full h-full min-h-[600px]"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <Carriers />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ContactUs;
