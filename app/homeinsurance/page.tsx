"use client";

import NavSection from '@/components/nav-section/nav';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import Footer from "@/components/footer/Footer";
import Form from "@/components/form/Form";
import QuoteButton from "@/components/QuoteButton/QuoteButton";
import Carriers from "@/components/partnerCarriers/carriers";
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
                    <QuoteButton />
                </div>
                {/* Information Section */}
                <div className="container mx-auto px-4 md:px-8 lg:px-12">
  <div className="text-sm md:text-base">
    <h2 className="text-2xl sm:text-3xl md:text-4xl mt-8 text-red-600 font-semibold font-sans">
                        Home Insurance
                    </h2>
                    <p className="text-[18px] text-[#393939] text-left font-opensans font-medium leading-[30px] mb-5 mt-4">
                        Protect Your Greatest Investment With Anchor Insurance Agency. A comprehensive home insurance policy helps safeguard your home and belongings against unexpected events.
                    </p>

                    <h2 className="text-xl mt-8 md:text-2xl font-semibold mb-4 font-sans">
                        What&apos;s Included in a Home Insurance Policy?
                    </h2>
                    <ul className="list-disc list-inside mb-5 space-y-2 font-opensans text-[18px] text-[#393939] font-medium leading-[30px]">
                        <li>Guaranteed replacement - Full coverage for rebuilding your home</li>
                        <li>Back-up drain and sewer - Protection against water damage</li>
                        <li>Mechanical breakdown - Coverage for home system failures</li>
                        <li>Service line - Protection for underground utility lines</li>
                        <li>Personal liability - Coverage for accidents on your property</li>
                        <li>In-home business - Protection for home-based businesses</li>
                        <li>Mysterious disappearance - Coverage for unexplained losses</li>
                        <li>Worldwide liability - Protection wherever you go</li>
                        <li>Identity theft - Coverage for identity fraud expenses</li>
                    </ul>

                    <h2 className="text-xl mt-8 md:text-2xl font-semibold mb-4 font-sans">
                        Why Choose Anchor Insurance Agency?
                    </h2>
                    <ul className="list-disc list-inside mb-5 space-y-2 font-opensans text-[18px] text-[#393939] font-medium leading-[30px]">
                        <li>Custom-built policies - Tailored coverage for your specific needs</li>
                        <li>Expert support - Assistance with claims and policy understanding</li>
                        <li>Professional guidance - Thorough policy reviews and honest recommendations</li>
                        <li>Dedicated service - Always here when you need us</li>
                    </ul>


                </div>
                </div>

                {/* Form Section */}
                <div>
                    <Form />
                </div>
            </div>
            <div>
                <Carriers />
            </div>
            <Footer />
        </div>
    );
}
