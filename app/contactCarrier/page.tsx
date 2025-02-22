"use client"

import Footer from "@/components/footer/Footer";
import NavSection from "@/components/nav-section/nav";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Image from "next/image";
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

function ContactCarrier() {
  const router = useRouter();
  const [selectedPath, setSelectedPath] = useState("");
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedPath(event.target.value);
  };
  const handleNavigation = () => {
    if (selectedPath) {
      router.push(`/${selectedPath}`);
    }
  };

  const carriers = [
    {
      name: "Allstate",
      customerService: "800-222-4357",
      claims: "#",
      website: "#",
      logo: "https://s3-alpha-sig.figma.com/img/dcd3/9d24/f679b4060c10163ea31b39e027681a53?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ajRDlpWMmfY7lUXz3QjO9Jrvt~Spmq3VH66~a8CxgGakFxVmXcMC0NCaiIn7VtKSKRXyC4plEL4Pk13MIpDYZD80xGVKDdps~Q2qBoXjMVrYF7NiBVqUrpmnVcLDhHBAwjr666GOrgHToVT7MLtI0bxeZ1-yTSuYmj0vV4iD55L~-m0Zk5c79C17gb9y0xBbnnL-v69UxC105L4zZbfyt410f2d8KRh0Py1k4JfpjiksYXlL99KhpCfwxKjlQ9JMJd9gcpYgC2q8C4DsG5rWnxbXhpCmeKISkB5n~wqt~LlY~28xYBRhIu3ROes9koitp3UWe3upLbzoMTSvAIsCuA__",
    },
    {
      name: "Foremost",
      customerService: "800-282-1446",
      claims: "#",
      website: "#",
      logo: "https://s3-alpha-sig.figma.com/img/9528/915c/257b522f1d58ad3e1394b8d549513de4?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Y4OCjjdt2SRBdwDQX04D5TlUMLBkj64U3OUCkFdLLtl7UgXvFVZ23zFx6GH70KuhKF3hUz5yJDzwNtz-VTuNoFCLyox75g5mSqStIyezzyqEBMAYh0kSyZRQam~eE~amiLIhcJjIMdF2gfvVg2QicvATUvhZr6~Ivb7Yyy00aSZxKvnkIDjNaGHgCRO21jJwv1v19BvT6fZXGkJWcHqc7Fh8JeTzEVJ2CV6xq2OS7EYRjyMEO-Exutu1CiI~cjP3EnO5XYAEqL3HLlf9qgVzSC1xE6qjkBjuDh1S0GjaJaVonWxkVf6bXjuVYG1L9Aq75~xXQoiWgAznV55x4yIsHA__",
    },
    {
      name: "Heritage",
      customerService: "866-274-8765",
      claims: "#",
      website: "#",
      logo: "https://s3-alpha-sig.figma.com/img/c388/9e3a/0b328151f49aa567c445bce211a0a9c2?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=F8NFY55EG4AE-Y6DScd0P33XOWaUJ52AWwZuNlTIFtoSpE7RllhMaEDoGO0p4vrP6GE0L8AKbX3DgusFqMfJBsuXKZNvMXK14lZe5I3GPTu0k3i8maJgBSP7vJqf7Syn2lvz7fuvPi86YWvHlGMIgkaYzTc0ZjPVdR8x028IHwidyxelGOvpbUO~6PElWZByYaR1ZlzrJvkyAqRqP782HrXyxEJC92AL381eOWVvgbgZ6eIuHd8ChD63w0HDGlGgy9BZ3FbB9LiR2Gs~CvOibPIDVjgZl4RP~bsNlsazvHwnS7Lelk73pe9ZqI4qr~X5qS~PTi0sIlZO9edY9-MODg__",
    },
    {
      name: "Liberty Mutual",
      customerService: "888-252-4626",
      claims: "#",
      website: "#",
      logo: "https://s3-alpha-sig.figma.com/img/3ca3/3c43/63543806ff324b2cfa2c81c0b0fab173?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=LsMbmlXO-Jca-D5PQ~vheTpsvX9MXn7lyczxks8FuD5LMXZl1QnhKoPL4LKIgjL9pK24cf5XcqPWU0x0WrWA8kR0jf7psLN9tdcAlDahyRy9R86jmIbetL~saG6f5uODGByDTdrWbM~wTbs3uWgiTWJ~s4RqJsXCvKqGAgQlXBfd7G832Xn9tEljoRLR8zuzssoBptWcwVQqB2fqbKxD3HGfRxcDGsAN0ylg~MCVi~Qx53YizHv7Ir-XIThXGGmDgJ6cKB5W~4Mjb4S79YAW6qY4jmJcsU8Lt0JKGNZqsccqlPWlo3-BpnmkIPlELF-70z2mvw38H0SzXkWoEgPsiQ__",
    },
    {
      name: "MetLife",
      customerService: "855-663-8551",
      claims: "#",
      website: "#",
      logo: "https://s3-alpha-sig.figma.com/img/de00/f0fa/fba39ac15b1d475e6eeec51ca6d59a31?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=rvvc14MZdr6-FTYsnJJqa2gNvpYD11Mfgb9j7-fBlN6Kv8Fdn-QeH7Pnixv7J8WhU3A1B5CfPTU5WZgY4OfGz5ejQdxJOXY6EZ1sS5TPqdxr25m56UG7T9CVGzSXD9mVIF9DC89GQgBMD5VwaX0hYlOePmJvzhsFN4ZxZCPBYv-0iAPxd3533wV6HSGdbOL8yX4-iR02yR0qv12lwHOt5aE22CBAkIz8ty~hHgoROuUMCFWXuHz-k27~7Sr4ZYV9xkdWZep1THoBVUHDutRfxRklKZJa6XdVNZY-hf8WreY4dAGlFa6WiXUm9l7dT2~4vxDFokzGGzVIgLq6LKc4uw__",
    },
    {
      name: "Chubb",
      customerService: "800-252-4670",
      claims: "#",
      website: "#",
      logo: "https://www.anchorins.com/img/carriers/chubb.png",
    },
  ];
  
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
        className="relative w-full h-[60vh] flex items-center justify-start bg-cover bg-center px-4 md:px-8"
        style={{
          background:
            "linear-gradient(270.16deg, rgba(217, 217, 217, 0.05) 0.15%, rgba(39, 38, 38, 0.3) 70.05%, rgba(19, 19, 19, 0.5) 99.87%), url('https://www.anchorins.com/img/featured-contact-your-carrier.jpg') no-repeat center center / cover",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-white max-w-3xl text-left ml-6 md:ml-16">
          <h1 className="text-2xl md:text-6xl font-bold mb-4">
            Get a Quote Instantly
          </h1>
          <p className="text-4xl">Compare your unique insurance quotes
          online via our comparative quoting form.</p>
          <div className="flex flex-col items-start gap-2 mt-4 w-full md:w-64">
            <select
              onChange={handleChange}
              className="w-full text-black p-2 border rounded"
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
              className="w-full bg-gradient-to-b from-[#D2091D] to-[#880310] hover:bg-red-700 text-white text-2xl px-6 py-3"
            >
              Quote it!
            </Button>
          </div>
        </div>
      </section>
      <div className="bg-gray-100 min-h-screen p-8">
        <div className="container mx-auto">
          {/* Heading */}
          <div className="bg-[#dfdfdf] p-4">
            <h1 className="text-4xl font-bold text-gray-800 text-left">
              Contact Your Carrier
            </h1>
            <p className="text-left text-gray-600 mt-2">
              Home » Contact Your Carrier
            </p>
          </div>

          {/* Subheading */}
          <h2 className="text-4xl font-semibold text-gray-800 text-left mt-8">
          Contact Your Carrier
          </h2>
          <h2 className="text-2xl font-semibold text-gray-800 text-left mt-8">
          Carriers
          </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 mt-2 lg:grid-cols-3 gap-6">
            {carriers.map((carrier, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center hover:shadow-xl transition"
              >
                <Image
                  src={carrier.logo}
                  alt={carrier.name}
                  width={120}
                  height={60}
                  className="mb-4"
                />
                <h2 className="text-2xl font-semibold text-[#D2091D]">{carrier.name}</h2>
                <p className="text-gray-700 mt-2">
                  <strong>Customer Service:</strong> {carrier.customerService}
                </p>
                <div className="flex gap-3 mt-4">
                  <a href={carrier.claims} className="bg-[#4a7896] text-white px-4 py-2 rounded-md">
                    Claims
                  </a>
                  <a href={carrier.website} className="bg-[#4a7896] text-white px-4 py-2 rounded-md">
                    Website
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ContactCarrier;
