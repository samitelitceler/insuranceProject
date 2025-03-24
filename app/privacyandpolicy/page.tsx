import NavSection from "@/components/nav-section/nav";
import Footer from "@/components/footer/Footer";


function PrivacyandPolicy() {
  return (
    <div className="bg-[#D8D8D8F7]">
      <NavSection />
      <div className="container bg-white font-sans mx-auto mt-12 mb-12 px-4 md:px-8 lg:px-12 py-8">
        <h1 className="text-3xl md:text-4xl font-bold text-[#11193B] text-center mb-6">
          Privacy & Policy
        </h1>
        <div className="text-lg text-gray-700 leading-relaxed font-opensans">
          <h2 className="font-semibold mt-4">1. Introduction</h2>
          <p>
            At Prime Insurance Services LLC, we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data.
          </p>

          <h2 className="font-semibold mt-4">2. Information We Collect</h2>
          <p>
            We may collect the following types of data:
          </p>
          <ul className="list-disc ml-6">
            <li>Personal Information: Name, email, phone number, address, and insurance details.</li>
            <li>Browsing Data: IP address, device information, and website usage patterns.</li>
            <li>Communication Data: Information provided through customer support interactions.</li>
          </ul>

          <h2 className="font-semibold mt-4">3. How We Use Your Information</h2>
          <p>
            To provide insurance quotes and policy recommendations.
          </p>
          <p>
            To communicate with you regarding your inquiries, claims, and policy updates.
          </p>
          <p>
            To improve our website functionality and user experience.
          </p>
          <p>
            To comply with legal and regulatory requirements.
          </p>

          <h2 className="font-semibold mt-4">4. Data Protection & Security</h2>
          <p>
            We implement industry-standard security measures to protect your personal data from unauthorized access, disclosure, or alteration.
          </p>

          <h2 className="font-semibold mt-4">5. Third-Party Sharing</h2>
          <p>
            We do not sell or rent your personal information. However, we may share your data with:
          </p>
          <ul className="list-disc ml-6">
            <li>Insurance carriers for policy processing.</li>
            <li>Service providers assisting with IT, analytics, and customer support.</li>
            <li>Legal authorities if required by law.</li>
          </ul>

          <h2 className="font-semibold mt-4">6. Your Rights</h2>
          <p>You have the right to:</p>
          <ul className="list-disc ml-6">
            <li>Request access to your personal data.</li>
            <li>Correct inaccurate information.</li>
            <li>Opt-out of marketing communications.</li>
            <li>Request data deletion (subject to legal requirements).</li>
          </ul>

          <h2 className="font-semibold mt-4">7. Updates to This Policy</h2>
          <p>
            We may update this Privacy Policy periodically. Continued use of our website implies acceptance of any changes.
          </p>

          <h2 className="font-semibold mt-4">For any privacy concerns, contact us at info@primeinsurancellc.com.</h2>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PrivacyandPolicy;