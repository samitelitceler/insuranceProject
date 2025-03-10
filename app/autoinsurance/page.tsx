'use client';

import NavSection from '@/components/nav-section/nav';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import Footer from "@/components/footer/Footer";
import Form from "@/components/form/Form";
import QuoteButton from "@/components/QuoteButton/QuoteButton";
import Carriers from "@/components/partnerCarriers/carriers";
const inter = Inter({ weight: ['400', '600', '700'], subsets: ['latin'] });

export default function AutoInsurance() {
    return (
        <div className={inter.className}>
            <NavSection />
            <div className="w-full">
                {/* Hero Section */}
                <div className="relative w-full h-[60vh] flex items-center justify-center bg-cover bg-center bg-black">
                    <Image
                        src="https://www.anchorins.com/img/featured-auto-insurance.jpg"
                        alt="Auto Insurance"
                        layout="fill"
                        objectFit="cover"
                        className="opacity-70 bg-cover bg-center"
                    />
                    <QuoteButton />
                </div>
                {/* Information Section */}
                <div className="p-4 md:p-8 text-sm md:text-base">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl text-red-600 font-semibold font-sans">
                        Auto Insurance
                    </h2>
                    <p className="text-[18px] text-[#393939] text-left font-opensans font-medium leading-[30px] mb-5 mt-4">
                        Auto insurance provides essential coverage to protect you, your vehicle, and others on the road. Understanding the different types of coverage helps you make informed decisions about your insurance needs.
                    </p>

                    <h2 className="text-xl mt-8 md:text-2xl font-semibold mb-4 font-sans">
                        Types of Coverage
                    </h2>
                    <ul className="list-disc list-inside mb-5 space-y-2 font-opensans text-[18px] text-[#393939] font-medium leading-[30px]">
                        <li>Liability Coverage - Covers damages or injuries you cause to others in an accident</li>
                        <li>Collision Coverage - Pays for repairs to your own car if it&apos;s damaged in an accident</li>
                        <li>Comprehensive Coverage - Covers theft, vandalism, natural disasters, or hitting an animal</li>
                        <li>Personal Injury Protection (PIP) - Covers medical expenses and lost wages for you and your passengers</li>
                        <li>Uninsured/Underinsured Motorist Coverage - Protects you if you&apos;re in an accident with someone with little or no insurance</li>
                    </ul>

                    <h2 className="text-xl mt-8 md:text-2xl font-semibold mb-4 font-sans">
                        Factors Affecting Premiums
                    </h2>
                    <ul className="list-disc list-inside mb-5 space-y-2 font-opensans text-[18px] text-[#393939] font-medium leading-[30px]">
                        <li>Driver&apos;s age and experience - younger and inexperienced drivers often pay higher premiums</li>
                        <li>Vehicle type - expensive or frequently stolen vehicles cost more to insure</li>
                        <li>Driving record - clean driving history usually means lower premiums</li>
                        <li>Location - high traffic or crime areas increase premiums</li>
                        <li>Usage - more mileage means more risk, leading to higher premiums</li>
                    </ul>

                    <h2 className="text-xl mt-8 md:text-2xl font-semibold mb-4 font-sans">
                        Optional Add-Ons
                    </h2>
                    <ul className="list-disc list-inside mb-5 space-y-2 font-opensans text-[18px] text-[#393939] font-medium leading-[30px]">
                        <li>Roadside assistance - covers towing, flat tires, and other emergencies</li>
                        <li>Rental car reimbursement - pays for a rental car while your vehicle is being repaired</li>
                        <li>Gap insurance - covers the difference between your car&apos;s value and the amount owed on a loan</li>
                    </ul>

                    <h2 className="text-xl mt-8 md:text-2xl font-semibold mb-4 font-sans">
                        Why It&apos;s Important
                    </h2>
                    <ul className="list-disc list-inside mb-5 space-y-2 font-opensans text-[18px] text-[#393939] font-medium leading-[30px]">
                        <li>Legal requirement - most places require at least liability coverage</li>
                        <li>Financial protection - prevents out-of-pocket costs for repairs or medical bills</li>
                        <li>Peace of mind - ensures support in case of accidents, theft, or unexpected events</li>
                    </ul>
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
