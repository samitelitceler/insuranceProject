"use client";

import NavSection from '@/components/nav-section/nav';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import Footer from "@/components/footer/Footer";
import Carriers from "@/components/partnerCarriers/carriers";
import { Button } from '@/components/ui/button';
const inter = Inter({ weight: ['400', '600', '700'], subsets: ['latin'] });

export default function HomeInsurance() {
  return (
    <div className={inter.className}>
      <NavSection />
      <div className="w-full">
        {/* Hero Section */}
        <div className="relative w-full h-[60vh] flex items-center justify-center bg-cover bg-center bg-black">
          <Image
            src="https://www.anchorins.com/img/featured-home-insurance.jpg"
            alt="Home Insurance"
            layout="fill"
            objectFit="cover"
            className="opacity-70 bg-cover bg-center"
          />
          <div className="absolute inset-0 flex items-center px-4 md:px-8 lg:px-12">
            <div className="container mx-auto px-4 md:px-8 lg:px-12 text-white">
              <h1 className="text-2xl lg:text-4xl font-semibold mb-4 text-left font-sans">Get a Quote Instantly</h1>
              <Button onClick={() => window.open('http://sgt2.ezlynx.com/ls/click?upn=u001.rm8aNjauuBJWvFaVyKUmk3JQhrODDXZR4jPVn39fXtGpMjwgsQbikcptGOdhdhl-2B6sFik-2B89MlNq8WCrXWmnPjyjg4wENAuujAOVlzdKjLzTd0JdxqJloaz2-2BgzW4OLaDU5-_4uPN2jI8bTL0Cws4JGJkHF5x95e04t-2BUCNzi0ZHkQsgXtNc-2FwytgmGD-2Bdm-2BbApD3LdGQabJfRPsnZs1T7A-2B52CwEPMNoFiV8jrfhHrZN4gOdt3thkHr-2FmpIJBA42ojpXW0F4A1PXDzcbcvqQlsWcduJr5gI1hnx2VYZ-2BQ05VZa39R4UaMqT3KoKhucMnCv-2BGwNHLDHCafSXzMimT8xT11LoTCyeVH5IPa8V41duTtuc-3D', '_blank')} className="font-sans bg-gradient-to-b from-[#D2091D] to-[#880310] hover:bg-red-700 font-bold w-72 text-white px-6 py-3 text-lg text-left">Start Quote</Button>
            </div>
          </div>
        </div>
        {/* Information Section */}
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-sm md:text-base">
            <h2 className="text-2xl sm:text-3xl md:text-4xl mt-8 text-red-600 font-semibold font-sans">
              Home Insurance
            </h2>
            <p className="text-[18px] text-[#393939] text-left font-opensans font-medium leading-[30px] mb-5 mt-4">
              Your home is one of your most valuable assets—ensure it&apos;s protected with a comprehensive home insurance policy from Prime Insurance Services. Our policies provide coverage for your home, belongings, and personal liability, giving you peace of mind against life&apos;s uncertainties.
            </p>

            <h2 className="text-xl mt-8 md:text-2xl font-semibold mb-4 font-sans">
              What&apos;s Covered in a Home Insurance Policy?
            </h2>
            <ul className="list-disc list-inside mb-5 space-y-2 font-opensans text-[18px] text-[#393939] font-medium leading-[30px]">
              <li>Guaranteed Replacement Cost – Covers the full cost of rebuilding your home in case of total loss</li>
              <li>Water & Sewer Backup Protection – Helps cover damages from drain or sewer system failures</li>
              <li>Home Systems Protection – Covers costly mechanical breakdowns of home systems like HVAC, electrical, and plumbing</li>
              <li>Service Line Coverage – Protects underground utility lines from unexpected damage</li>
              <li>Personal Liability – Covers legal and medical expenses if someone is injured on your property</li>
              <li>In-Home Business Protection – Safeguards your home-based business and equipment</li>
              <li>Unexplained Loss Coverage – Protection against mysterious disappearances of valuables</li>
              <li>Worldwide Personal Liability – Extends coverage beyond your home, protecting you wherever you go</li>
              <li>Identity Theft Protection – Covers expenses related to identity fraud and recovery</li>
            </ul>

            <h2 className="text-xl mt-8 md:text-2xl font-semibold mb-4 font-sans">
              Why Choose Prime Insurance Services?
            </h2>
            <ul className="list-disc list-inside mb-5 space-y-2 font-opensans text-[18px] text-[#393939] font-medium leading-[30px]">
              <li>Customized Coverage – Tailored home insurance solutions to match your needs</li>
              <li>Expert Claims Assistance – Guidance to help you navigate claims with ease</li>
              <li>Honest & Professional Advice – In-depth policy reviews to ensure you have the right coverage</li>
              <li>Reliable Customer Support – We&apos;re here when you need us the most</li>
            </ul>


          </div>
        </div>



      </div>
      <div>
        <Carriers />
      </div>
      <Footer />
    </div>
  );
}
