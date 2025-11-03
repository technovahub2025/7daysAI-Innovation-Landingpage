import React from "react";

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
    <section id="contact" className="py-20 ">
      <div className="max-w-5xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Ready to Start?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join hundreds of students already transforming their future with AI.
          </p>
        </div>

        {/* Contact Card */}
        <div className="bg-white/80 backdrop-blur-md shadow-xl border border-gray-200 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              Contact Us
            </h3>
            <p className="text-gray-600">
              Get in touch to enroll or ask any questions.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.href}
                target={info.icon === "🌐" ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-lg bg-gray-50 hover:bg-blue-50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center text-2xl">
                  {info.icon}
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-500">{info.label}</p>
                  <p className="text-gray-800 text-[10px] lg:text-xl font-medium">{info.value}</p>
                </div>
              </a>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-10 pt-6 border-t border-gray-200 text-center">
            <p className="text-gray-600 flex items-center justify-center gap-2">
              📍 Serving students across India with online AI education
            </p>
          </div>
        </div>

        {/* CTA Note */}
        <div className="text-center mt-8">
          <p className="text-blue-600 font-medium text-sm">
            🚀 Limited seats available. Enroll today to secure your spot!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
