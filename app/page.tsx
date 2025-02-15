'use client';


import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import primeLogo from '@/public/images/PrimeLogo.png'
import { Inter } from 'next/font/google';
import { Card, CardContent } from "@/components/ui/card";
import { Car, Umbrella, House, Bike, Briefcase, Sailboat, User, ShieldCheck, Building2, Truck } from "lucide-react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import NavSection from "@/components/nav-section/nav";

const inter = Inter({ weight: ['400', '600', '700'], subsets: ['latin'] });

export default function Home() {

  const router = useRouter();

  const handleAutoHomeInsurance = (name?: string) => {
    router.push(`/${name}`);
  }

  const companies = [
    { name: "Allstate", logo: "https://s3-alpha-sig.figma.com/img/dcd3/9d24/f679b4060c10163ea31b39e027681a53?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ajRDlpWMmfY7lUXz3QjO9Jrvt~Spmq3VH66~a8CxgGakFxVmXcMC0NCaiIn7VtKSKRXyC4plEL4Pk13MIpDYZD80xGVKDdps~Q2qBoXjMVrYF7NiBVqUrpmnVcLDhHBAwjr666GOrgHToVT7MLtI0bxeZ1-yTSuYmj0vV4iD55L~-m0Zk5c79C17gb9y0xBbnnL-v69UxC105L4zZbfyt410f2d8KRh0Py1k4JfpjiksYXlL99KhpCfwxKjlQ9JMJd9gcpYgC2q8C4DsG5rWnxbXhpCmeKISkB5n~wqt~LlY~28xYBRhIu3ROes9koitp3UWe3upLbzoMTSvAIsCuA__" },
    { name: "Foremost", logo: "https://s3-alpha-sig.figma.com/img/9528/915c/257b522f1d58ad3e1394b8d549513de4?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Y4OCjjdt2SRBdwDQX04D5TlUMLBkj64U3OUCkFdLLtl7UgXvFVZ23zFx6GH70KuhKF3hUz5yJDzwNtz-VTuNoFCLyox75g5mSqStIyezzyqEBMAYh0kSyZRQam~eE~amiLIhcJjIMdF2gfvVg2QicvATUvhZr6~Ivb7Yyy00aSZxKvnkIDjNaGHgCRO21jJwv1v19BvT6fZXGkJWcHqc7Fh8JeTzEVJ2CV6xq2OS7EYRjyMEO-Exutu1CiI~cjP3EnO5XYAEqL3HLlf9qgVzSC1xE6qjkBjuDh1S0GjaJaVonWxkVf6bXjuVYG1L9Aq75~xXQoiWgAznV55x4yIsHA__" },
    { name: "Heritage", logo: "https://s3-alpha-sig.figma.com/img/c388/9e3a/0b328151f49aa567c445bce211a0a9c2?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=F8NFY55EG4AE-Y6DScd0P33XOWaUJ52AWwZuNlTIFtoSpE7RllhMaEDoGO0p4vrP6GE0L8AKbX3DgusFqMfJBsuXKZNvMXK14lZe5I3GPTu0k3i8maJgBSP7vJqf7Syn2lvz7fuvPi86YWvHlGMIgkaYzTc0ZjPVdR8x028IHwidyxelGOvpbUO~6PElWZByYaR1ZlzrJvkyAqRqP782HrXyxEJC92AL381eOWVvgbgZ6eIuHd8ChD63w0HDGlGgy9BZ3FbB9LiR2Gs~CvOibPIDVjgZl4RP~bsNlsazvHwnS7Lelk73pe9ZqI4qr~X5qS~PTi0sIlZO9edY9-MODg__" },
    { name: "Liberty Mutual", logo: "https://s3-alpha-sig.figma.com/img/3ca3/3c43/63543806ff324b2cfa2c81c0b0fab173?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=LsMbmlXO-Jca-D5PQ~vheTpsvX9MXn7lyczxks8FuD5LMXZl1QnhKoPL4LKIgjL9pK24cf5XcqPWU0x0WrWA8kR0jf7psLN9tdcAlDahyRy9R86jmIbetL~saG6f5uODGByDTdrWbM~wTbs3uWgiTWJ~s4RqJsXCvKqGAgQlXBfd7G832Xn9tEljoRLR8zuzssoBptWcwVQqB2fqbKxD3HGfRxcDGsAN0ylg~MCVi~Qx53YizHv7Ir-XIThXGGmDgJ6cKB5W~4Mjb4S79YAW6qY4jmJcsU8Lt0JKGNZqsccqlPWlo3-BpnmkIPlELF-70z2mvw38H0SzXkWoEgPsiQ__" },
    { name: "MetLife", logo: "https://s3-alpha-sig.figma.com/img/de00/f0fa/fba39ac15b1d475e6eeec51ca6d59a31?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=rvvc14MZdr6-FTYsnJJqa2gNvpYD11Mfgb9j7-fBlN6Kv8Fdn-QeH7Pnixv7J8WhU3A1B5CfPTU5WZgY4OfGz5ejQdxJOXY6EZ1sS5TPqdxr25m56UG7T9CVGzSXD9mVIF9DC89GQgBMD5VwaX0hYlOePmJvzhsFN4ZxZCPBYv-0iAPxd3533wV6HSGdbOL8yX4-iR02yR0qv12lwHOt5aE22CBAkIz8ty~hHgoROuUMCFWXuHz-k27~7Sr4ZYV9xkdWZep1THoBVUHDutRfxRklKZJa6XdVNZY-hf8WreY4dAGlFa6WiXUm9l7dT2~4vxDFokzGGzVIgLq6LKc4uw__" },
  ];

  const insuranceOptions = [
    { name: "Auto Insurance", icon: <Car /> , path: "autoinsurance" },
    { name: "Home Insurance", icon: <House /> , path: "homeinsurance" },
    { name: "Life Insurance", icon: <Umbrella />  ,  path: "businessInsurance" },
    { name: "Commercial Insurance", icon: <Briefcase /> ,  path: "homeInsurance" },
    { name: "Motorcycle Insurance", icon: <Bike /> ,  path: "homeInsurance" },
    { name: "Boat Insurance", icon: <Sailboat /> ,  path: "homeInsurance" },
    { name: "Personal Insurance", icon: <User /> ,  path: "homeInsurance" },
    { name: "Cyber & EPIL", icon: <ShieldCheck />  ,  path: "homeInsurance"},
    { name: "Umbrella Insurance", icon: <Umbrella />  ,  path: "homeInsurance"},
    { name: "Renters Insurance", icon: <Building2 />  ,  path: "homeInsurance"},
    { name: "Transportational Insurance", icon: <Truck /> ,  path: "homeInsurance" },
    { name: "View more", icon: '' },
  ];

  return (
    <div className={inter.className}>
      {/* Navbar Section */}
      <NavSection />
      <section
                className="relative w-full h-screen flex items-center justify-start bg-cover bg-center px-4 md:px-8"
                style={{
                    background: "linear-gradient(270.16deg, rgba(217, 217, 217, 0.05) 0.15%, rgba(39, 38, 38, 0.3) 70.05%, rgba(19, 19, 19, 0.5) 99.87%), url('https://s3-alpha-sig.figma.com/img/a5b0/3878/75de6c08e5d5cbd2fcbd636d3fb40715?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=HCym0HxQi5-kxwrDALWpK5JZJegTa7c5xzqgVtek668VlaXh~closSf4K2QQUV5JiMY6Qt5RhpvBzJC3ivf1fSKXLDkrNbFUFhSL8peMfND7oU4u~EdQHrrTgfkItsjHjWxkp1DwAPBYXvlefPFt2b-H7gGIxKLhdjUQm4ZO1SwsAnIqFmpAUkJ2s0icICI9HXksIOPoZMkfWzLypc6Z~OBnubgdv4XndpCA5j5BrgYXiHYJo9BshCnCaLd8-2zZP~BqfI0Wfidc2WZT6xKovcNAFasx-fL457RI2jS7LEFozRMnRGpCAR~xFV6JHnYQP8wOQi-IxPlBUbS8YPFjPQ__') no-repeat center center / cover",
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div className="relative z-10 text-white max-w-3xl text-left ml-6 md:ml-16">
                    <h1 className="text-2xl md:text-4xl font-bold mb-4">
                        Insurance is not just about protecting what you have; it&apos;s about securing
                        your future and the peace of mind that comes with it.
                    </h1>
                    <div className="flex flex-col items-start gap-2 mt-4">
                        <Input type="text" placeholder="Auto Insurance" className="w-full md:w-64 text-black p-4" />
                        <Button className="bg-red-600 hover:bg-red-700 w-64 text-white px-6 py-3 font-bold">
                            START QUOTE
                        </Button>
                    </div>
                </div>
            </section>
      <section className="w-full px-4 md:px-8 py-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">About Us</h2>
        <div className="border border-red-400 rounded-lg p-6 md:p-10  text-left">
          <p className="text-lg md:text-base leading-relaxed ">
            Insurance Protection Specialists is an independent insurance agency located in Flowood, MS,
            and serving clients across the state with homeowners, automobile, recreational, commercial,
            and life insurance.
          </p>
          <p className="text-lg md:text-base leading-relaxed">
            As independent agents, we can shop over 30 carriers, including Nationwide, Safeco, Liberty
            Mutual, MetLife, State Auto, and Progressive, to explore solutions for your insurance needs.
          </p>
          <p className="text-lg md:text-base leading-relaxed mb-4">
            IPS is led by a team of risk managers and account managers experienced in both personal and
            business insurance and is owned and operated by Chip Jones and Bubba Howell, who have over
            50 years of combined experience in insurance.
          </p>
          <p className="text-lg md:text-base leading-relaxed">
            Insurance Protection Specialists is an independent insurance agency located in Flowood, MS,
            and serving clients across the state with homeowners, automobile, recreational, commercial,
            and life insurance.
          </p>
          <p className="text-lg md:text-base leading-relaxed">
            As independent agents, we can shop over 30 carriers, including Nationwide, Safeco, Liberty
            Mutual, MetLife, State Auto and Progressive, to explore solutions for your insurance needs.
          </p>
        </div>
      </section>

      <section className="w-full px-4 md:px-8 py-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Top Choices for Insurance</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {insuranceOptions.map((item, index) => (
            <Card key={index} className="bg-red-600 text-white p-6 flex flex-col items-center justify-center hover:bg-red-700 transition">
              <CardContent className="flex flex-col items-center space-y-3">
                <div className="w-10 h-10">{item.icon}</div>
               
                <p className="text-center font-medium" onClick={() => handleAutoHomeInsurance(item?.path)}>{item.name}</p>
               
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="w-full py-12 overflow-hidden">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Top Carriers we have</h2>
        <div className="relative w-full flex items-center">
          <motion.div
            className="flex space-x-20 min-w-max"
            animate={{ x: ["0%", "-10%"] }}
            transition={{
              repeat: Infinity,
              duration: 10,
              ease: "linear",
            }}
          >
            {[...companies, ...companies].map((company, index) => (
              <img
                key={index}
                src={company.logo}
                alt={company.name}
                className="h-16 md:h-20 object-contain mx-4"
              />
            ))}
          </motion.div>
        </div>
      </section>

      <footer className="bg-black text-white py-8">
        <div className="max-w-7xl mx-auto px-6">
          {/* Logo */}
          <div className="flex justify-start">
            <Image src={primeLogo.src} className="invert" alt="PRIME Insurance Group" width={150} height={50} />
          </div>

          {/* Horizontal Line */}
          <hr className="border-gray-600 my-6" />

          {/* Company & Services + Socials */}
          <div className="flex flex-col md:flex-row justify-between mt-4">
            {/* Company & Services */}
            <div className="flex flex-col md:flex-row gap-12">
              <div>
                <h3 className="font-semibold text-lg">Company</h3>
                <ul className="mt-2 space-y-2 text-sm">
                  <li><a href="#">About</a></li>
                  <li><a href="#">Contact Us</a></li>
                  <li><a href="#">Insurance Services</a></li>
                  <li><a href="#">Company Quotes</a></li>
                  <li><a href="#">Our Team</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Services</h3>
                <ul className="mt-2 space-y-2 text-sm">
                  <li><a href="#">Auto Insurance</a></li>
                  <li><a href="#">Home Insurance</a></li>
                  <li><a href="#">Life Insurance</a></li>
                  <li><a href="#">Personal Insurance</a></li>
                  <li><a href="#">Umbrella Insurance</a></li>
                </ul>
              </div>
            </div>

            {/* Social Icons */}
            <div className="mt-8 md:mt-0">
              <h3 className="font-semibold text-lg">Join Us</h3>
              <div className="flex space-x-4 mt-2">
                <a href="#" className="text-white"><FaFacebookF size={18} /></a>
                <a href="#" className="text-white"><FaTwitter size={18} /></a>
                <a href="#" className="text-white"><FaInstagram size={18} /></a>
                <a href="#" className="text-white"><FaLinkedin size={18} /></a>
              </div>
            </div>
          </div>

          {/* Horizontal Line */}
          <hr className="border-gray-600 my-6" />

          {/* Copyright */}
          <div className="text-left text-xs md:text-sm">@ 202X. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}