import React, { useState } from "react";
import { motion } from "framer-motion";

const EnquiryForm = () => {
  const [form, setForm] = useState({ name: "", email: "", mobile: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", form);
    setSubmitted(true);
    setForm({ name: "", email: "", mobile: "" });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div>
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-2xl sm:text-3xl font-extrabold text-center mb-8 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent"
      >
        Enquiry Form
      </motion.h2>

      <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
        {["name", "email", "mobile"].map((field) => (
          <div key={field} className="relative">
            <input
              type={field === "email" ? "email" : field === "mobile" ? "tel" : "text"}
              name={field}
              value={form[field]}
              onChange={handleChange}
              required
              placeholder=" "
              className="peer w-full px-4 pt-5 pb-2 rounded-lg border border-gray-300 bg-white/70 backdrop-blur-md text-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-base sm:text-lg"
            />
            <label
              className="absolute left-4 top-2 text-gray-500 text-sm transition-all
              peer-placeholder-shown:top-4 peer-placeholder-shown:text-base
              peer-placeholder-shown:text-gray-400
              peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-600"
            >
              {field === "name"
                ? "Full Name"
                : field === "email"
                ? "Email Address"
                : "Mobile Number"}
            </label>
          </div>
        ))}

        <motion.button
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 18px rgba(124, 58, 237, 0.4)",
          }}
          whileTap={{ scale: 0.96 }}
          type="submit"
          className="w-full py-3 sm:py-4 rounded-full text-white font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-blue-600 transition-all text-base sm:text-lg"
        >
          Submit Enquiry
        </motion.button>
      </form>

      {submitted && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-green-600 text-center mt-5 font-semibold text-sm sm:text-base"
        >
          ✅ Enquiry submitted successfully!
        </motion.p>
      )}
    </div>
  );
};

export default EnquiryForm;
