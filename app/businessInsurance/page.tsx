import NavSection from "@/components/nav-section/nav";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import primeLogo from '@/public/images/PrimeLogo.png'
import { Inter } from 'next/font/google'


const inter = Inter({ weight: ['400', '600', '700'], subsets: ['latin'] });

const BusinessInsurance = () => {

  return (
    <div className={inter.className}>
      <NavSection/>
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative w-full h-screen flex items-center justify-center bg-black">
        <Image
          src="https://s3-alpha-sig.figma.com/img/219a/c5f0/922b0bef4768d4cb4b116fa2f1a3bd45?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=m4A2udGJpx2xnkk5ZnCGLPRu5-Hwv9geK1CCTN12FxzfLC8y3blY9vIXjGxLP-hUuhgwVXDFlGD83vb7RxyIzlL5CyR3kUJbZRQPEfcdDCoHSfiqK-XkENghqYBlynBYhppFeijcItKwrpJtFbX3ggx0i5yQnLtMWrpgsb0Co9wrrnd~5b8xCdZYS6VLr8qfT0Dfh5JmAgcUPhjrFJPjhbrmcybIVVI8mEaKfk34BtSRkmZOq2wkJtv3Hu~fQYe5-hU9d0vHHdMEmugvjdNY75YaQ2vJWilaHRuc-9ty3iB2tvKxF67Rso-D~Qgq7UhOQKV8fy7r6Py-~kgEhIKJbA__"
          alt="Business Insurance"
          layout="fill"
          objectFit="cover"
          className="opacity-70"
        />
       <div className="absolute inset-0  flex items-center pl-8 lg:pl-16">
          <div className="text-white max-w-lg">
            <h1 className="text-2xl lg:text-4xl font-semibold mb-4 text-left">Get a Quote Instantly</h1>
            <Button className="bg-red-600 font-bold w-72 text-white px-6 py-3 text-lg text-left">Start Quote</Button>
          </div>
        </div>
      </div>
      {/* Information Section */}
      <div className="p-4 md:p-8 text-xs md:text-sm">
        <p className="mb-4">
          Business insurance is a type of coverage that protects businesses from financial losses due to various risks,
          such as property damage, liability claims, employee-related risks, and more.
        </p>

        <h2 className="font-semibold mb-2">Types of Business Insurance</h2>
        <ul className="list-decimal list-inside mb-4">
          <li>General Liability Insurance – Covers legal expenses if your business is sued for injury, property damage, or advertising mistakes.</li>
          <li>Property Insurance – Protects your business&apos;s physical assets like buildings, equipment, and inventory against damage or theft.</li>
          <li>Business Interruption Insurance – Compensates for lost income if your business is unable to operate due to events like natural disasters.</li>
          <li>Workers&apos; Compensation Insurance – Covers medical expenses and lost wages for employees injured on the job.</li>
          <li>Professional Liability Insurance (Errors and Omissions) – Protects against claims of negligence, mistakes, or failure to perform professional services.</li>
          <li>Product Liability Insurance – Protects against claims related to product defects that cause injury or damage.</li>
          <li>Commercial Auto Insurance – Covers vehicles used for business purposes.</li>
          <li>Cyber Liability Insurance – Protects against data breaches and cyberattacks.</li>
          <li>Business Owner&apos;s Policy (BOP) – A bundle of several types of insurance (like general liability and property insurance) tailored for small businesses.</li>
        </ul>

        <h2 className="font-semibold mb-2">Why is Business Insurance Important?</h2>
        <ul className="list-disc list-inside mb-4">
          <li>
            Financial Protection: Helps cover the costs of unexpected events like lawsuits, natural disasters, or accidents.
          </li>
          <li>
            Legal Requirement: Certain types of insurance, like workers&apos; compensation, are legally required in many places.
          </li>
          <li>
            Builds Credibility: Having insurance builds trust with clients and customers.
          </li>
          <li>
            Employee Protection: Ensures the safety and well-being of employees with benefits like health coverage and workers&apos; compensation.
          </li>
        </ul>
        
        <h2 className="font-semibold mb-2">How to Choose the Right Insurance?</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Assess Risks: Evaluate the specific risks associated with your industry and business activities.</li>
          <li>Legal Requirements: Check the mandatory insurance requirements in your region or industry.</li>
          <li>Budget Considerations: Balance coverage needs with affordability.</li>
          <li>Consult an Agent: Seek professional advice to tailor coverage to your business needs.</li>
        </ul>

        <h2 className="font-semibold mb-2">Tips for Managing Business Insurance</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Review Annually: Business needs change, so reviewing policies annually ensures adequate coverage.</li>
          <li>Combine Policies: Bundling multiple coverages under one provider may offer discounts.</li>
          <li>Risk Management: Implement safety practices to minimize risks and reduce insurance costs.</li>
        </ul>
      </div>

      {/* Form Section */}
      <div className="bg-red-700 p-6 md:p-10 text-white mt-12 mb-12">
        <form action="https://formspree.io/f/{your_form_id}" method="POST">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              className="p-2 rounded text-black w-full"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              className="p-2 rounded text-black w-full"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="p-2 rounded text-black w-full"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              className="p-2 rounded text-black w-full"
            />
          </div>
          <textarea
            name="comments"
            placeholder="Comments"
            className="w-full p-2 mt-4 rounded text-black"
          ></textarea>
          <div className="mt-4 text-right">
            <button type="submit" className="bg-white text-black px-6 py-2 rounded">Continue</button>
          </div>
        </form>
      </div>
    </div>
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
};

export default BusinessInsurance;
