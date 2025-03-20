'use client';

import NavSection from '@/components/nav-section/nav';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import Footer from "@/components/footer/Footer";

import Carriers from "@/components/partnerCarriers/carriers";
import { Button } from '@/components/ui/button';
const inter = Inter({ weight: ['400', '600', '700'], subsets: ['latin'] });

export default function AutoInsurance() {
    return (
        <div className={inter.className}>
            <NavSection />
            <div className="w-full">
                {/* Hero Section */}
                <div className="relative w-full h-[60vh] flex items-center justify-center bg-cover bg-center bg-black">
                    <Image
                        src="/images/AutoNewCroppedImage.png"
                        alt="Auto Insurance"
                        layout="fill"
                        objectFit="cover"
                        className="opacity-70 bg-cover bg-center"
                    />
                    <div className="absolute inset-0 flex items-center px-4 md:px-8 lg:px-12">
                        <div className="container mx-auto px-4 md:px-8 lg:px-12 text-white">
                            <h1 className="text-2xl lg:text-4xl font-semibold mb-4 text-left font-sans">Get a Quote Instantly</h1>
                            <Button onClick={() => window.open('http://sgt2.ezlynx.com/ls/click?upn=u001.rm8aNjauuBJWvFaVyKUmk3JQhrODDXZR4jPVn39fXtGpMjwgsQbikcptGOdhdhl-2B6sFik-2B89MlNq8WCrXWmnPjyjg4wENAuujAOVlzdKjLzTd0JdxqJloaz2-2BgzW4OLaDU5-_4uPN2jI8bTL0Cws4JGJkHF5x95e04t-2BUCNzi0ZHkQsgXtNc-2FwytgmGD-2Bdm-2BbApD3LdGQabJfRPsnZs1T7A-2B52CwEPMNoFiV8jrfhHrZN4gOdt3thkHr-2FmpIJBA42ojpXW0F4A1PXDzcbcvqQlsWcduJr5gI1hnx2VYZ-2BQ05VZa39R4UaMqT3KoKhucMnCv-2BGwNHLDHCafSXzMimT8xT11LoTCyeVH5IPa8V41duTtuc-3D', '_blank')} className="w-72 font-sans font-semibold bg-transparent border border-white hover:bg-[#536AAE] hover:border-[#536AAE] text-white px-6 py-3">Start Quote</Button>
                        </div>
                    </div>
                </div>
                {/* Information Section */}
                <div className="container mx-auto px-4 md:px-8 lg:px-12">
                    <div className="text-sm md:text-base">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl mt-8 text-[#11193B] font-semibold font-sans">
                            Auto Insurance
                        </h2>
                        <p className="text-[18px] text-[#393939] text-left font-opensans font-medium leading-[30px] mb-5 mt-4">
                            Auto insurance provides crucial financial protection for you, your vehicle, and others on the road. Choosing the right coverage helps safeguard against unexpected expenses and liabilities.
                        </p>

                        <h2 className="text-xl mt-8 md:text-2xl font-semibold mb-4 font-sans">
                            Types of Coverage
                        </h2>
                        <ul className="list-disc list-inside mb-5 space-y-2 font-opensans text-[18px] text-[#393939] font-medium leading-[30px]">
                            <li>Liability Coverage - Covers damages or injuries you may cause to others in an accident</li>
                            <li>Collision Coverage - Pays for repairs to your vehicle if it&apos;s damaged in a collision</li>
                            <li>Comprehensive Coverage - Protects against theft, vandalism, weather-related damage, or collisions with animals</li>
                            <li>Personal Injury Protection (PIP) - Helps cover medical expenses and lost wages for you and your passengers</li>
                            <li>Uninsured/Underinsured Motorist Coverage - Provides protection if you&apos;re involved in an accident with a driver who lacks sufficient insurance</li>
                        </ul>

                        <h2 className="text-xl mt-8 md:text-2xl font-semibold mb-4 font-sans">
                            Factors That Influence Premiums
                        </h2>
                        <ul className="list-disc list-inside mb-5 space-y-2 font-opensans text-[18px] text-[#393939] font-medium leading-[30px]">
                            <li>Driver&apos;s Age & Experience - Younger or less experienced drivers typically face higher rates</li>
                            <li>Vehicle Type - High-value or commonly stolen cars may have increased insurance costs</li>
                            <li>Driving History - A clean record can lead to lower premiums, while accidents and violations may increase rates</li>
                            <li>Location - Areas with heavy traffic or higher crime rates often see higher premiums</li>
                            <li>Annual Mileage - Frequent driving increases risk, leading to higher insurance costs</li>
                        </ul>

                        <h2 className="text-xl mt-8 md:text-2xl font-semibold mb-4 font-sans">
                            Optional Add-Ons for Enhanced Protection
                        </h2>
                        <ul className="list-disc list-inside mb-5 space-y-2 font-opensans text-[18px] text-[#393939] font-medium leading-[30px]">
                            <li>Roadside Assistance - Provides coverage for towing, battery jump-starts, and other emergency services</li>
                            <li>Rental Car Reimbursement - Pays for a rental vehicle while your car is being repaired after a covered claim</li>
                            <li>Gap Insurance - Covers the difference between your vehicle&apos;s current market value and the amount still owed on a loan</li>
                        </ul>

                        <h2 className="text-xl mt-8 md:text-2xl font-semibold mb-4 font-sans">
                            Why Auto Insurance Matters
                        </h2>
                        <ul className="list-disc list-inside mb-5 space-y-2 font-opensans text-[18px] text-[#393939] font-medium leading-[30px]">
                            <li>Legal Compliance - Most states and regions require at least basic liability coverage</li>
                            <li>Financial Security - Helps avoid unexpected expenses for repairs, medical bills, or lawsuits</li>
                            <li>Peace of Mind - Ensures support in case of accidents, theft, or unforeseen incidents on the road</li>
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
