'use client';

import HeroSection from '@/components/nav-section/nav';
import Image from 'next/image';
import autoInsuranceImage from '@/public/images/autoInsuranceImage.png'

export default function AutoInsurance() {
    return (
        <div>
            <HeroSection />
            <section className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                    {/* Text Content */}
                    <div>
                        <h2 className="text-xl md:text-2xl text-red-600 font-semibold">
                            Auto Insurance
                        </h2>
                        <p className="text-xs text-gray-700 mt-3">
                            1. Liability Coverage: Covers damages or injuries you cause to others in an accident. It includes:
                        </p>
                        <ul className="list-disc list-inside text-xs text-gray-600 mt-1 space-y-1">
                            <li>bodily injury liability - covers medical expenses and lost wages of the other party</li>
                            <li>property damage liability - covers damages to another person&apos;s property (e.g., their car)</li>
                        </ul>
                        <p className="text-xs text-gray-700 mt-3">2. Collision Coverage: Pays for repairs to your own car if it&apos;s damaged in an accident, regardless of who is at fault.</p>
                        <p className="text-xs text-gray-700 mt-1">3. Comprehensive Coverage: Covers theft, vandalism, natural disasters, or hitting an animal.</p>
                        <p className="text-xs text-gray-700 mt-1">4. Personal Injury Protection (PIP): Covers medical expenses and lost wages for you and your passengers.</p>
                        <p className="text-xs text-gray-700 mt-1">5. Uninsured/Underinsured Motorist Coverage: Protects you if you&apos;re in an accident with someone with little or no insurance.</p>

                        {/* Factors Affecting Premiums */}
                        <h3 className="mt-6 text-sm text-gray-800">Factors Affecting Premiums:</h3>
                        <ul className="list-disc list-inside text-xs text-gray-600 mt-1 space-y-1">
                            <li>driver&apos;s age and experience - younger and inexperienced drivers often pay higher premiums</li>
                            <li>vehicle type - expensive or frequently stolen vehicles cost more to insure</li>
                            <li>driving record - clean driving history usually means lower premiums</li>
                            <li>location - high traffic or crime areas increase premiums</li>
                            <li>usage - more mileage means more risk, leading to higher premiums</li>
                        </ul>

                        {/* Optional Add-Ons */}
                        <h3 className="mt-6 text-sm text-gray-800">Optional Add-Ons:</h3>
                        <ul className="list-disc list-inside text-xs text-gray-600 mt-1 space-y-1">
                            <li>roadside assistance - covers towing, flat tires, and other emergencies</li>
                            <li>rental car reimbursement - pays for a rental car while your vehicle is being repaired</li>
                            <li>gap insurance - covers the difference between your car&apos;s value and the amount owed on a loan</li>
                        </ul>

                        {/* Why It&apos;s Important */}
                        <h3 className="mt-6 text-sm text-gray-800">Why It&apos;s Important:</h3>
                        <ul className="list-disc list-inside text-xs text-gray-600 mt-1 space-y-1">
                            <li>legal requirement - most places require at least liability coverage</li>
                            <li>financial protection - prevents out-of-pocket costs for repairs or medical bills</li>
                            <li>peace of mind - ensures support in case of accidents, theft, or unexpected events</li>
                        </ul>


                    </div>

                    {/* Image Section */}
                    <div className="flex justify-center">
                        <Image
                            src={autoInsuranceImage.src}
                            alt="Car Insurance"
                            width={300}
                            height={200}
                            className="rounded-md"
                        />
                    </div>
                </div>
                <div className='mt-12'>
                <iframe
                    src="https://www.agentinsure.com/compare/auto-insurance-home-insurance/primei/quote.aspx"
                    width="100%"
                    height="600px"
                    className="border rounded-md"
                />
                </div>
            </section>
        </div>
    );
}
