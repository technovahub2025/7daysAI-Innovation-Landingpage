import React from "react";
import { Check, Calendar, Clock, IndianRupee } from "lucide-react";

const features = [
  "Daily 30-minute online challenges",
  "Hands-on AI project building",
  "Expert guidance and support",
  "Interactive learning sessions",
  "Certificate of completion",
];

const PricingCard = () => {
  const handleEnroll = () => {
    const contactSection = document.getElementById("contact");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="pricing" className="py-20">
      <div className="max-w-md mx-auto px-6">
        <div className="p-8 bg-white border-2 border-blue-100 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          {/* Header */}
          <div className="text-center mb-6">
            <div className="inline-block px-4 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-sm font-semibold mb-4">
              Limited Seats Available
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">
              Challenge Enrollment
            </h3>
          </div>

          {/* Price */}
          <div className="text-center mb-8 pb-8 border-b border-gray-200">
            <div className="flex items-center justify-center gap-1 mb-2">
              <IndianRupee className="w-8 h-8 text-blue-600" />
              <span className="text-6xl font-extrabold text-blue-600">99</span>
            </div>
            <p className="text-gray-500">One-time payment</p>
          </div>

          {/* Duration Info */}
          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-3 text-gray-800">
              <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                <Calendar className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="font-semibold">7 Days Duration</p>
                <p className="text-sm text-gray-500">Complete program</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-gray-800">
              <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                <Clock className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="font-semibold">30 Min Daily</p>
                <p className="text-sm text-gray-500">Online challenges</p>
              </div>
            </div>
          </div>

          {/* Features List */}
          <div className="space-y-3 mb-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-blue-600" />
                </div>
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <button
            onClick={handleEnroll}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 rounded-full text-lg shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            Enroll Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default PricingCard;
