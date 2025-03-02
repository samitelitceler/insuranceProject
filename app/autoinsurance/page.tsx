'use client';

import HeroSection from '@/components/nav-section/nav';
import Image from 'next/image';
import autoInsuranceImage from '@/public/images/autoInsuranceImage.png'
import { Button } from '@/components/ui/button';

export default function AutoInsurance() {
    return (
        <div>
            <HeroSection />
            <section className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                    {/* Text Content */}
                    <div>
                        <h2 className="text-3xl md:text-4xl text-red-600 font-semibold">
                            Auto Insurance
                        </h2>
                        <p className="text-base md:text-lg text-gray-700 mt-3">
                            <span className="font-semibold">1. Liability Coverage:</span> Covers damages or injuries you cause to others in an accident. It includes:
                        </p>
                        <ul className="list-disc list-inside text-base md:text-lg text-gray-600 mt-1 space-y-1">
                            <li>bodily injury liability - covers medical expenses and lost wages of the other party</li>
                            <li>property damage liability - covers damages to another person&apos;s property (e.g., their car)</li>
                        </ul>
                        <p className="text-base md:text-lg text-gray-700 mt-3"><span className="font-semibold">2. Collision Coverage:</span> Pays for repairs to your own car if it&apos;s damaged in an accident, regardless of who is at fault.</p>
                        <p className="text-base md:text-lg text-gray-700 mt-1"><span className="font-semibold">3. Comprehensive Coverage:</span> Covers theft, vandalism, natural disasters, or hitting an animal.</p>
                        <p className="text-base md:text-lg text-gray-700 mt-1"><span className="font-semibold">4. Personal Injury Protection (PIP):</span> Covers medical expenses and lost wages for you and your passengers.</p>
                        <p className="text-base md:text-lg text-gray-700 mt-1"><span className="font-semibold">5. Uninsured/Underinsured Motorist Coverage:</span> Protects you if you&apos;re in an accident with someone with little or no insurance.</p>

                        {/* Factors Affecting Premiums */}
                        <h3 className="mt-6 text-xl md:text-2xl text-gray-800">Factors Affecting Premiums:</h3>
                        <ul className="list-disc list-inside text-base md:text-lg text-gray-600 mt-1 space-y-1">
                            <li><span className="font-semibold">Driver&apos;s age and experience</span> - younger and inexperienced drivers often pay higher premiums</li>
                            <li><span className="font-semibold">Vehicle type</span> - expensive or frequently stolen vehicles cost more to insure</li>
                            <li><span className="font-semibold">Driving record</span> - clean driving history usually means lower premiums</li>
                            <li><span className="font-semibold">Location</span> - high traffic or crime areas increase premiums</li>
                            <li><span className="font-semibold">Usage</span> - more mileage means more risk, leading to higher premiums</li>
                        </ul>

                        {/* Optional Add-Ons */}
                        <h3 className="mt-6 text-xl md:text-2xl text-gray-800">Optional Add-Ons:</h3>
                        <ul className="list-disc list-inside text-base md:text-lg text-gray-600 mt-1 space-y-1">
                            <li><span className="font-semibold">Roadside assistance</span> - covers towing, flat tires, and other emergencies</li>
                            <li><span className="font-semibold">Rental car reimbursement</span> - pays for a rental car while your vehicle is being repaired</li>
                            <li><span className="font-semibold">Gap insurance</span> - covers the difference between your car&apos;s value and the amount owed on a loan</li>
                        </ul>

                        {/* Why It's Important */}
                        <h3 className="mt-6 text-xl md:text-2xl text-gray-800">Why It&apos;s Important:</h3>
                        <ul className="list-disc list-inside text-base md:text-lg text-gray-600 mt-1 space-y-1">
                            <li><span className="font-semibold">Legal requirement</span> - most places require at least liability coverage</li>
                            <li><span className="font-semibold">Financial protection</span> - prevents out-of-pocket costs for repairs or medical bills</li>
                            <li><span className="font-semibold">Peace of mind</span> - ensures support in case of accidents, theft, or unexpected events</li>
                        </ul>


                    </div>

                    {/* Image Section */}
                    <div className="flex flex-col items-center gap-6">
                        <Image
                            src={autoInsuranceImage.src}
                            alt="Car Insurance"
                            width={300}
                            height={200}
                            className="rounded-md"
                        />
                        <Button
                            onClick={() => window.open("https://www.agentinsure.com/compare/auto-insurance-home-insurance/primei/quote.aspx", "_blank")}
                            className="bg-black hover:bg-gray-800 text-white px-6 py-3 text-lg"
                        >
                            Get Auto Insurance Quote
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
