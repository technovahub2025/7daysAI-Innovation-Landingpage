import React from "react";
import EnquiryForm from "./EnquiryForm";

const contactInfo = [
  {
    icon: "📞",
    label: "Phone",
    value: "+91 93609 62680",
    href: "tel:+919360962680",
  },
  {
    icon: "📧",
    label: "Email",
    value: "technovahubcareer@gmail.com",
    href: "mailto:technovahubcareer@gmail.com",
  },
  {
    icon: "🌐",
    label: "Website",
    value: "www.technovahub.in",
    href: "https://www.technovahub.in",
  },
];

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">
            Ready to Start?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join hundreds of students already transforming their future with AI.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* LEFT SIDE - Info */}
          <div className="bg-white/80 backdrop-blur-lg shadow-2xl rounded-3xl p-10 border border-gray-100 hover:shadow-blue-200 transition-all duration-500">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Get in Touch
            </h3>
            <p className="text-gray-600 mb-8">
              Have questions or want to join our AI workshops? Reach out and we’ll
              guide you through the next steps.
            </p>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  target={info.icon === "🌐" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-5 rounded-xl border border-gray-100 hover:border-blue-400 hover:bg-blue-50/40 transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 text-white text-2xl flex items-center justify-center shadow-md">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">{info.label}</p>
                    <p className="text-gray-800 text-lg font-semibold">
                      {info.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-10 text-center text-gray-600 border-t border-gray-200 pt-6">
              📍 Serving students across India with online AI education
              <p className="text-blue-600 font-semibold mt-2 text-sm">
                🚀 Limited seats available — Enroll today!
              </p>
            </div>
          </div>

          {/* RIGHT SIDE - Form */}
          <EnquiryForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
