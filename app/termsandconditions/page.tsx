import NavSection from "@/components/nav-section/nav";
import Footer from "@/components/footer/Footer";


function Termsandconditions() {
  return (
    <div className="bg-[#D8D8D8F7]" >
      <NavSection />
      <div className="container bg-white font-sans mx-auto mt-12 mb-12 px-4 md:px-8 lg:px-12 py-8">
       
        <h1 className="text-3xl md:text-4xl font-bold text-[#11193B] text-center mb-6">
          Terms & Conditions
        </h1>
        <div className="text-lg text-gray-700 leading-relaxed font-opensans">
          <h2 className="font-semibold mt-4">1. Introduction</h2>
          <p>
            Welcome to Prime Insurance Services LLC. By accessing and using our website, you agree to comply with the following Terms & Conditions. If you do not agree with any part of these terms, please do not use our services.
          </p>

          <h2 className="font-semibold mt-4">2. Services</h2>
          <p>
            Prime Insurance Services LLC provides insurance-related services, including policy comparisons, quotes, and consultations. We do not guarantee coverage until a policy is officially issued by an insurance carrier.
          </p>

          <h2 className="font-semibold mt-4">3. User Responsibilities</h2>
          <p>
            Users must provide accurate and truthful information when requesting quotes or applying for insurance.
          </p>
          <p>
            Any misuse of our website, such as unauthorized access or fraudulent activity, is strictly prohibited.
          </p>
          <p>
            Prime Insurance Services LLC is not responsible for decisions made by third-party insurance providers.
          </p>

          <h2 className="font-semibold mt-4">4. Intellectual Property</h2>
          <p>
            All website content, including text, graphics, and logos, is the property of Prime Insurance Services LLC and may not be copied, reproduced, or distributed without permission.
          </p>

          <h2 className="font-semibold mt-4">5. Limitation of Liability</h2>
          <p>
            Prime Insurance Services LLC is not liable for any direct, indirect, or incidental damages resulting from the use of our services. Insurance coverage is subject to the terms of individual policies issued by third-party insurers.
          </p>

          <h2 className="font-semibold mt-4">6. Modifications to Terms</h2>
          <p>
            We may update these Terms & Conditions at any time. Continued use of our services implies acceptance of any modifications.
          </p>

          <h2 className="font-semibold mt-4">7. Governing Law</h2>
          <p>
            These terms are governed by the laws of Charlotte NC. Any disputes will be resolved in the jurisdiction of [Your State/Country].
          </p>

          <h2 className="font-semibold mt-4">For any questions, contact us at info@primeinsurancellc.com.</h2>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Termsandconditions;