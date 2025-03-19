"use client";

import NavSection from "@/components/nav-section/nav";
import Footer from "@/components/footer/Footer";
import { Inter } from "next/font/google";
import Form from "@/components/form/Form";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
const inter = Inter({ weight: ["400", "600", "700"], subsets: ["latin"] });
import Carriers from "@/components/partnerCarriers/carriers";
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


export default function About() {
    const router = useRouter();

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        router.push(`/${event.target.value}`);
    };

  return (
    <div className={inter.className}>
      <NavSection />
      
      {/* Hero Section */}
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
             About Us
            </h1>
            <div className="flex flex-col items-start gap-2 mt-4 w-full md:w-64">
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
                className="w-full font-sans font-semibold bg-transparent border border-white hover:bg-[#536AAE] hover:border-[#536AAE] text-white px-6 py-3"
              >
                START QUOTE
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Content Section */}
      <section className="w-full px-4 md:px-8 py-16">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-sm md:text-base">
            <h2 className="text-2xl sm:text-3xl md:text-4xl mt-8 text-[#11193B] font-semibold font-sans">
              About Prime Insurance Services
            </h2>
            <p className="text-[18px] text-[#393939] text-left font-opensans font-medium leading-[30px] mb-5 mt-4">
              At Prime Insurance Services, we believe that insurance is more than just a policy—it&apos;s about protecting what matters most. Whether it&apos;s your home, business, or personal assets, we provide customized coverage to give you peace of mind.
            </p>

            <h2 className="text-xl mt-8 md:text-2xl font-semibold mb-4 font-sans">
              A Legacy of Trust & Expertise
            </h2>
            <p className="text-[18px] text-[#393939] text-left font-opensans font-medium leading-[30px] mb-5">
              With years of experience in the industry, our team has been helping individuals, families, and businesses find reliable and high-quality insurance solutions. We are committed to providing personalized service, expert guidance, and insurance plans tailored to your unique needs.
            </p>

            <h2 className="text-xl mt-8 md:text-2xl font-semibold mb-4 font-sans">
              Putting People First
            </h2>
            <p className="text-[18px] text-[#393939] text-left font-opensans font-medium leading-[30px] mb-5">
              Our approach is simple—we prioritize your needs over anything else. As an independent agency, we work with multiple top-rated insurance providers to customize policies that truly fit your lifestyle, business, and budget. Our goal is to make insurance simple, transparent, and effective.
            </p>
            <p className="text-[18px] text-[#393939] text-left font-opensans font-medium leading-[30px] mb-5">
              We believe in honesty, integrity, and doing what&apos;s right. That&apos;s why we only recommend policies we&apos;d choose for ourselves. Before you make a decision, we take the time to answer all your questions so you can feel confident in your coverage.
            </p>

            <h2 className="text-xl mt-8 md:text-2xl font-semibold mb-4 font-sans">
              Why Choose Prime Insurance Services?
            </h2>
            <ul className="list-disc list-inside mb-5 space-y-2 font-opensans text-[18px] text-[#393939] font-medium leading-[30px]">
              <li>Your Needs Come First – We tailor insurance solutions based on your specific requirements, not what benefits us</li>
              <li>Independent & Flexible – We represent multiple insurance carriers, allowing us to offer the best coverage at competitive rates</li>
              <li>Reliable Support – Whether you need help filing a claim or reviewing your policy, we&apos;re always available to assist you</li>
              <li>Comprehensive Coverage Options – From homes and businesses to specialty assets, we offer a wide range of insurance solutions</li>
            </ul>

            <h2 className="text-xl mt-8 md:text-2xl font-semibold mb-4 font-sans">
              Protect What Matters Most to You
            </h2>
            <p className="text-[18px] text-[#393939] text-left font-opensans font-medium leading-[30px] mb-8">
              We&apos;re here to help you find the right coverage from the right providers to ensure you&apos;re protected in every situation. Get in touch with us today to explore your insurance options.
            </p>
          </div>

          {/* Contact Form */}
          <div className="mt-12">
            <Form />
          </div>
        </div>
      </section>
          <Carriers />  

      <Footer />
    </div>
  );
}