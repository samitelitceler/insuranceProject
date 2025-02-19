"use client";

import HeroSection from "@/components/nav-section/nav";
import Image from "next/image";
import autoInsuranceImage from "@/public/images/autoInsuranceImage.png";

export default function HomeInsurance() {
  return (
    <div>
      <HeroSection />
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Text Content */}
          <div>
            <h2 className="text-xl md:text-2xl text-red-600 font-semibold">
              Home Insurance
            </h2>
            <p className="text-sm text-gray-700 mt-3">
              Protect Your Greatest Investment With Anchor Insurance Agency Your
              home is your greatest investment. It&apos;s the place you and your
              family gather and the place you kick up your feet after a long
              day. Your home deserves quality protection from those severe
              Midwest storms, fire, vandalimd and other threats. We can help.
              Anchor Insurance Agency provides high-quality home insurance
              policies to individuals and families throughout Minnesota,
              Wisconsin, Arizona, Florida, Nevada and Colorado.
            </p>
            <p className="text-sm text-gray-700 mt-3">
              Fully Customized Home Insurance Policies to Fit You A downed tree
              through your roof. Graffiti across your garage door. Shattered
              windows from hail. Damage to your home can be costly to repair,
              especially when it&apos;s out-of-pocket. A home insurance policy can
              provide the financial means necessary to cover the cost and
              protect your wellbeing. Anchor Insurance Agency offers fully
              customized insurance policies to fit you and your family. As an
              independent insurance agency, we work with a wide range of
              insurance carriers to deliver the right coverage for full
              protection. From fixer-uppers to multi-million dollar homes, we
              can build a policy for all (yes, even your remote log cabin).
            </p>
            {/* Factors Affecting Premiums */}
            <h2 className="mt-6 text-md text-gray-800">
              What&apos;s Included in a Home Insurance Policy? Home insurance policy
              types span from the bare necessities to comprehensive coverage for
              anything that could go wrong. Through our custom policies, we can
              offer:
            </h2>
            <ul className="list-disc list-inside text-sm text-gray-600 mt-1 space-y-1">
              <li>Guaranteed replacement</li>
              <li>Back-up drain and sewer</li>
              <li>Mechanical breakdown</li>
              <li>Service line</li>
              <li>Personal liability</li>
              <li>In-home business </li>
              <li> Mysterious disappearance</li>
              <li> Worldwide liability</li>
              <li> Identity theft</li>
            </ul>
            {/* Optional Add-Ons */}
            <h2 className="mt-6 text-md text-gray-800">
              Why Choose Anchor Insurance Agency? Many insurance companies offer
              home insurance policies. What makes us different? Here at Anchor
              Insurance Agency, you&apos;ll find:
            </h2>
            <ul className="list-disc list-inside text-sm text-gray-600 mt-1 space-y-1">
              <li>
                Insurance policies to fit your needs: There isn&apos;t a
                one-size-fits-all option for insurance. We custom build policies
                to fit your needs for high-quality protection for your home.
              </li>
              <li>
                A helping hand when you need it most: Do you need help filing a
                claim? Struggling to understand your policy? We&apos;re here to
                support you. All you have to do is call and we&apos;ll answer.
              </li>
              <li>
                Expert guidance: Already have a home insurance policy? We&apos;ll
                look it over to ensure you have the coverage you need for
                protection. And if it&apos;s a solid policy, we&apos;ll tell you so.
              </li>
            </ul>
            {/* Why It&apos;s Important */}
            <h2 className="mt-6 text-md text-gray-800">
              Start Protecting Your Home Today. Get Your Free Quote!
            </h2>
            <p className="text-sm text-gray-700 mt-3">
            Your home is truly your greatest investment. A customized home
            insurance policy can help you protect it. Ready to get started? Get
            your free quote today. Or, for answers to all of your policy
            questions, give our team a call at 763-473-4090.
            </p>
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
        <div className="mt-12">
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
