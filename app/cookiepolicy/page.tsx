import NavSection from "@/components/nav-section/nav";
import Footer from "@/components/footer/Footer";


function CookiePolicy() {
  return (
    <div className="bg-[#D8D8D8F7]">
      <NavSection />
      <div className="container bg-white font-sans mx-auto mt-12 mb-12 px-4 md:px-8 lg:px-12 py-8">
        <h1 className="text-3xl md:text-4xl font-bold text-[#11193B] text-center mb-6">
          Cookie Policy
        </h1>
        <div className="text-xl text-gray-700 leading-relaxed font-opensans">
          <h2 className="font-semibold mt-4">1. What Are Cookies?</h2>
          <p>
            Cookies are small files stored on your device when you visit a website. They help us improve user experience and analyze site performance.
          </p>

          <h2 className="font-semibold mt-4">2. Types of Cookies We Use</h2>
          <ul className="list-disc ml-6">
            <li>Essential Cookies: Necessary for website functionality.</li>
            <li>Analytical Cookies: Help us understand website traffic and user behavior.</li>
            <li>Marketing Cookies: Used to personalize ads and promotions.</li>
          </ul>

          <h2 className="font-semibold mt-4">3. Managing Cookies</h2>
          <p>
            You can manage or disable cookies through your browser settings. However, disabling certain cookies may affect website functionality.
          </p>

          <h2 className="font-semibold mt-4">4. Third-Party Cookies</h2>
          <p>
            We may use third-party services (such as Google Analytics) that place cookies on your device. These services have their own privacy policies, and we encourage you to review them.
          </p>

          <h2 className="font-semibold mt-4">5. Updates to This Policy</h2>
          <p>
            We may update this Cookie Policy from time to time. Continued use of our website means you accept any changes.
          </p>
          <h2 className="font-semibold mt-4">6. How We Use Cookies</h2>
          <p>
          We use cookies for several purposes, including:
          </p>
          <ul className="list-disc ml-6">
            <li>Appointment reminders</li>
            <li>Follow-up messages</li>
            <li>Billing inquiries</li>
            <li>Promotional offers when running specials/deals</li>
          </ul>

          <h2 className="font-semibold mt-4">For more details, contact us at info@primeinsurancellc.com.</h2>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CookiePolicy;