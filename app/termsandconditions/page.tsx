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
        <div className="text-xl text-gray-700 leading-relaxed font-opensans">
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

          <h2 className="font-semibold mt-4">7. Website Availability & Accessibility</h2>
          <p>

            While we aim to keep the website operational at all times, we do not guarantee uninterrupted or error-free access. The website may be temporarily unavailable due to maintenance, updates, or other reasons.
          </p>
          <h2 className="font-semibold mt-4">8. Governing Law</h2>
          <p>
            These terms are governed by the laws of North Carolina (NC). Any disputes will be resolved in the jurisdiction of North Carolina (NC), United States (USA).
          </p>

          <h2 className="font-semibold mt-4">9. Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites. These links are provided for convenience and do not imply endorsement or responsibility for the content or privacy practices of those sites. We encourage you to review the terms and conditions and privacy policies of any third-party sites you visit.
          </p>

          <h2 className="font-semibold mt-4">10. Privacy and Data Protection</h2>
          <p>
            Your use of the website is governed by our Privacy Policy. We take your privacy seriously and will only collect and use personal data as described in our policy. By using our services, you consent to the collection and use of your data in accordance with the Privacy Policy.
          </p>

          <h2 className="font-semibold mt-4">11. Cookies</h2>
          <p>
            Our website uses cookies to improve your browsing experience. By using the website, you consent to our use of cookies as described in our Cookie Policy. You may modify your browser settings to refuse cookies, but this may affect your experience on our website.
          </p>

          <h2 className="font-semibold mt-4">12. Termination of Access</h2>
          <p>
            We reserve the right to suspend or terminate your access to our website at any time without notice if you violate these Terms & Conditions or engage in behavior that disrupts the proper functioning of the website.
          </p>

          <h2 className="font-semibold mt-4">13. Changes to the Terms & Conditions</h2>
          <p>
            Prime Insurance Services reserves the right to modify or update these Terms & Conditions at any time. Any changes will be posted on this page with the updated date. Your continued use of the website after changes have been posted constitutes acceptance of those changes.
          </p>

          <h2 className="font-semibold mt-4">14. SMS Terms & Conditions</h2>
          <p>
            SMS Consent & Communication
            By providing your mobile number, you consent to receive SMS communications from Prime Insurance Services LLC. Your information will not be shared with third parties or affiliates for marketing or any other purpose.
          </p>
          <p>
            Types of SMS Communications:If you have opted in to receive text messages from Prime Insurance Services LLC, you may receive messages related to:
          </p>
          <ul className="list-disc ml-6 mt-4">
            <li>Appointment reminders</li>
            <li>Policy updates and renewal notifications</li>
            <li>Billing reminders and payment confirmations</li>
            <li>Promotional offers and limited-time discounts</li>
          </ul>
          <p className="mt-4">
            <span className="font-semibold">Example Message:</span> &quot;Hello, Prime Insurance Services here! This is a friendly reminder of your upcoming appointment with Dr. Smith. You can reply STOP to opt-out of SMS messaging from Prime Insurance Services at any time.&quot;
          </p>

          <p className="mt-4">
            Message Frequency
            Message frequency may vary depending on the nature of your interactions with Prime Insurance Services LLC, but you can expect to receive important updates as needed.
          </p>
          <p className="mt-4">Potential Fees for SMS Messaging
            Standard message and data rates may apply depending on your mobile carrier. Please check with your provider for details on SMS charges.
          </p>
          <p className="mt-4">Opt-Out Method
            You can opt-out at any time by replying <span className="font-semibold">&quot;STOP&quot;</span> to any message. Once opted out, you will no longer receive SMS communications from us. To resume messages, reply <span className="font-semibold"> &quot;START&quot;</span> at any time.</p>

          <p className="mt-4">Help & Support
            For assistance, reply <span className="font-semibold">&quot;HELP&quot;</span> to any message or contact us at <span className="font-semibold">info@primeinsurancellc.com.</span></p>
          <p className="mt-4">Additional SMS Preferences
            If you prefer not to receive SMS messages, you can decline SMS consent when filling out forms.</p>
          <p className="mt-4">You can also manage your communication preferences by contacting our support team.</p>

         
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Termsandconditions;