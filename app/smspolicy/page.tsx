import NavSection from "@/components/nav-section/nav";
import Footer from "@/components/footer/Footer";

function SmsPolicy() {
  return (
    <div className="bg-[#D8D8D8F7]">
      <NavSection />
      <div className="container bg-white font-sans mx-auto mt-12 mb-12 px-4 md:px-8 lg:px-12 py-8">
      
        <h1 className="text-3xl md:text-4xl font-bold text-[#11193B] text-center mb-6">
          SMS Policy
        </h1>
        <div className="text-xl text-gray-700 leading-relaxed font-opensans">
          <h2 className="font-semibold mt-4">SMS Consent Communication</h2>
          <p>
            The information (Phone Numbers) obtained as part of the SMS consent process will not be shared with third parties for marketing purposes.
          </p>

          <h2 className="font-semibold mt-4">Types of SMS Communications</h2>
          <p>
            If you have consented to receive text messages from Prime Insurance Services, you may receive messages related to the following:
          </p>
          <ul className="list-disc ml-6">
            <li>Appointment reminders</li>
            <li>Follow-up messages</li>
            <li>Billing inquiries</li>
            <li>Promotions or offers (if applicable)</li>
          </ul>
          <p>
            Example: &quot;Hello, this is a friendly reminder of your upcoming appointment with Dr. [Name] at [Location] on [Date] at [Time]. You can reply STOP to opt out of SMS messaging from Prime Insurance Services at any time.&quot;
          </p>

          <h2 className="font-semibold mt-4">Message Frequency</h2>
          <p>
            Message frequency may vary depending on the type of communication. For example, you may receive up to 2 SMS messages per week related to your inquiries.
          </p>
          <p>
            Example: &quot;Message frequency may vary. You may receive up to 2 SMS messages per week regarding your appointments or application status.&quot;
          </p>

          <h2 className="font-semibold mt-4">Potential Fees for SMS Messaging</h2>
          <p>
            Please note that standard message and data rates may apply, depending on your carrier&apos;s pricing plan. These fees may vary if the message is sent domestically or internationally.
          </p>

          <h2 className="font-semibold mt-4">Opt-In Method</h2>
          <p>
            You may opt-in to receive SMS messages from Prime Insurance Services in the following ways:
          </p>
          <ul className="list-disc ml-6">
            <li>Verbally, during a conversation</li>
            <li>By submitting an online form</li>
            <li>By filling out a paper form</li>
          </ul>

          <h2 className="font-semibold mt-4">Opt-Out Method</h2>
          <p>
            You can opt out of receiving SMS messages at any time. To do so, simply reply &quot;STOP&quot; to any SMS message you receive. Alternatively, you can contact us directly to request removal from our messaging list.
          </p>

          <h2 className="font-semibold mt-4">Help</h2>
          <p>
            If you are experiencing any issues, you can reply with the keyword &quot;HELP&quot; or contact us directly at 980-297-9827.
          </p>

          <h2 className="font-semibold mt-4">Additional Options</h2>
          <p>
            If you do not wish to receive SMS messages, you can choose not to check the SMS consent box on our forms.
          </p>

          <h2 className="font-semibold mt-4">Standard Messaging Disclosures</h2>
          <p>
            Message and data rates may apply. You can opt out at any time by texting &quot;STOP.&quot; For assistance, text &quot;HELP&quot; or visit:
          </p>
          <ul className="list-disc ml-6">
            <li><a href="/privacyandpolicy" className="text-blue-500 underline">Privacy Policy</a></li>
            <li><a href="/termsandconditions" className="text-blue-500 underline">Terms and Conditions</a></li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SmsPolicy;