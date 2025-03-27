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
        <div className="text-lg text-gray-700 leading-relaxed font-opensans">
          <h2 className="font-semibold mt-4">1. What Are Cookies?</h2>
          <p>
            Cookies are small text files stored on your device when you visit a website. They help improve user experience, enable website functionality, and allow us to analyze site performance. Cookies also help us personalize content, remember user preferences, and deliver relevant advertisements.
          </p>

          <h2 className="font-semibold mt-4">2. Types of Cookies We Use</h2>
          <h3 className="font-semibold mt-2">Essential Cookies</h3>
          <p>
            These cookies are necessary for the website to function properly. They allow you to navigate pages, access secure areas, and use key features such as account login and online forms. Disabling these cookies may affect website performance.
          </p>

          <h3 className="font-semibold mt-2">Performance & Analytical Cookies</h3>
          <p>
            These cookies help us understand how visitors interact with our website by collecting anonymous data on pages visited, time spent, and navigation patterns. We use this information to improve website design and functionality.
          </p>

          <h3 className="font-semibold mt-2">Functional Cookies</h3>
          <p>
            These cookies remember your preferences, such as language selection or region settings, to provide a more customized experience. They help improve usability by personalizing your interaction with the website.
          </p>

          <h3 className="font-semibold mt-2">Marketing & Advertising Cookies</h3>
          <p>
            These cookies allow us to show you targeted advertisements based on your browsing behavior. They may be set by our advertising partners and track your online activity across different websites to deliver ads relevant to your interests.
          </p>

          <h2 className="font-semibold mt-4">3. How We Use Cookies</h2>
          <p>We use cookies for the following purposes:</p>
          <ul className="list-disc ml-6">
            <li>To ensure the website operates smoothly and securely.</li>
            <li>To analyze visitor behavior and improve website performance.</li>
            <li>To remember user preferences for a better browsing experience.</li>
            <li>To enable appointment reminders, follow-up messages, and billing notifications.</li>
            <li>To deliver personalized advertisements and promotional offers.</li>
          </ul>

          <h2 className="font-semibold mt-4">4. Managing Cookies</h2>
          <p>
            You can manage or disable cookies through your browser settings. Most browsers allow you to:
          </p>
          <ul className="list-disc ml-6">
            <li>Accept or block cookies completely.</li>
            <li>Delete cookies stored on your device.</li>
            <li>Receive alerts when a website places cookies on your browser.</li>
          </ul>
          <p>
            Please note that disabling essential cookies may affect website functionality, such as logging in, submitting forms, or accessing secure areas.
          </p>

          <h2 className="font-semibold mt-4">5. Third-Party Cookies</h2>
          <p>
            We may use third-party services such as Google Analytics and advertising networks that place cookies on your device. These third parties have their own privacy and cookie policies, which we recommend reviewing for details on how they collect and use your information.
          </p>

          <h2 className="font-semibold mt-4">6. Updates to This Policy</h2>
          <p>
            We may update this Cookie Policy periodically to reflect changes in technology, legal requirements, or business practices. Any updates will be posted on this page with the revised date. Continued use of our website after updates means you accept the changes.
          </p>

          <h2 className="font-semibold mt-4">For any questions, contact us at info@primeinsurancellc.com.</h2>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CookiePolicy;