import React from "react";
import { motion } from "framer-motion";
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
      className="py-16 md:py-24  mt-10 bg-gradient-to-br from-blue-50 via-white to-purple-50"
    >
      <div className="max-w-6xl mx-auto  sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="bg-gradient-to-r from-blue-600 md:text-5xl text-3xl font-bold  to-purple-600 bg-clip-text text-transparent">
            Ready to Start?
          </h2>
          <p className="text-gray-600 text-base mt-2 md:text-lg max-w-2xl mx-auto">
            Join hundreds of students already transforming their future with AI.
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-stretch">
          {/* Left - Enquiry Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="  sm:p-8 border border-gray-100 transition-all duration-300"
          >
           
           
            <EnquiryForm />
          </motion.div>

          {/* Right - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/80 backdrop-blur-lg border border-gray-100 shadow-md hover:shadow-xl rounded-2xl p-6 sm:p-8 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-5 text-center md:text-left">
                Get in Touch
              </h3>
              <p className="text-gray-600 mb-8 text-center md:text-left">
                Have questions or want to join our AI workshops? Reach out and we’ll
                guide you through the next steps.
              </p>

              <div className="space-y-5">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    target={info.icon === "🌐" ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 hover:border-blue-400 hover:bg-blue-50/50 transition-all duration-300"
                  >
                    <div className="w-12 h-12 flex items-center justify-center text-2xl bg-gradient-to-br from-blue-500 to-purple-500 text-white rounded-xl shadow-md">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">{info.label}</p>
                      <p className="text-gray-800 text-base md:text-lg font-semibold break-all">
                        {info.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-10 text-center border-t border-gray-200 pt-6">
              <p className="text-gray-600 text-sm md:text-base">
                📍 Serving students across India with online AI education
              </p>
              <p className="text-blue-600 font-semibold mt-2 text-sm md:text-base">
                🚀 Limited seats available — Enroll today!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
