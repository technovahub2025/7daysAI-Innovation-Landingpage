import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const EnquiryForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
    agree: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.agree) {
      alert("Please agree to the Terms & Conditions before submitting.");
      return;
    }
    console.log("Form Data:", form);
    setSubmitted(true);
    setForm({
      name: "",
      email: "",
      mobile: "",
      message: "",
      agree: false,
    });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="relative max-w-lg mx-auto rounded-3xl border border-white/30 bg-blue-50 backdrop-blur-2xl p-8  shadow-[0_8px_32px_rgba(31,38,135,0.2)] overflow-hidden">
      {/* Animated gradient border effect */}
      <div className="absolute inset-0 rounded-3xl border-[1px] border-transparent bg-gray-200 opacity-70 blur-xl -z-10"></div>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl font-extrabold text-center mb-8 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent drop-shadow-sm"
      >
        Enquiry Form
      </motion.h2>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
        {["name", "email", "mobile"].map((field) => (
          <div key={field} className="relative">
            <input
              type={
                field === "email"
                  ? "email"
                  : field === "mobile"
                  ? "tel"
                  : "text"
              }
              name={field}
              value={form[field]}
              onChange={handleChange}
              autoComplete="off"
              required
              placeholder=" "
              className="peer w-full px-4 pt-5 pb-2 rounded-xl border border-white/40 bg-white/40 backdrop-blur-md text-gray-900 placeholder-transparent focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-base sm:text-lg focus:shadow-[0_0_15px_rgba(147,51,234,0.3)]"
            />
            <label
              className="absolute left-4 top-2 text-gray-600 text-sm transition-all
              peer-placeholder-shown:top-4 peer-placeholder-shown:text-base
              peer-placeholder-shown:text-gray-500
              peer-focus:top-2 peer-focus:text-sm peer-focus:text-purple-600"
            >
              {field === "name"
                ? "Full Name"
                : field === "email"
                ? "Email Address"
                : "Mobile Number"}
            </label>
          </div>
        ))}

        {/* Message Field */}
        <div className="relative">
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            rows="4"
            placeholder=" "
            className="peer w-full px-4 pt-5 pb-2 rounded-xl border border-white/40 bg-white/40 backdrop-blur-md text-gray-900 placeholder-transparent focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-base sm:text-lg resize-none focus:shadow-[0_0_15px_rgba(147,51,234,0.3)]"
          ></textarea>
          <label
            className="absolute left-4 top-2 text-gray-600 text-sm transition-all
            peer-placeholder-shown:top-4 peer-placeholder-shown:text-base
            peer-placeholder-shown:text-gray-500
            peer-focus:top-2 peer-focus:text-sm peer-focus:text-purple-600"
          >
            Your Message
          </label>
        </div>

        {/* Terms and Conditions */}
        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            name="agree"
            checked={form.agree}
            onChange={handleChange}
            className="mt-1 accent-purple-600 w-5 h-5 cursor-pointer"
          />
          <p className="text-gray-700 text-sm sm:text-base leading-snug">
            I agree to the{" "}
            <span className="text-purple-600 font-semibold hover:underline cursor-pointer">
              Terms & Conditions
            </span>
          </p>
        </div>

        {/* Submit Button */}
        <motion.button
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 25px rgba(168, 85, 247, 0.5)",
          }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="w-full py-3 sm:py-4 rounded-full text-white font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-700 hover:to-blue-600 transition-all text-base sm:text-lg shadow-lg"
        >
          Submit Enquiry
        </motion.button>
      </form>

      {/* Success Message with Animation */}
      <AnimatePresence>
        {submitted && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4 }}
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-full shadow-lg text-sm sm:text-base font-semibold backdrop-blur-md"
          >
            ✅ Enquiry submitted successfully!
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default EnquiryForm;
