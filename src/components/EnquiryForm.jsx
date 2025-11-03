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
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full bg-white/80 backdrop-blur-lg border border-gray-100 shadow-2xl rounded-3xl p-10 hover:shadow-purple-200 transition-all duration-500"
    >
      <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        Enquiry Form
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {["name", "email", "mobile"].map((field) => (
          <div key={field} className="relative">
            <input
              type={field === "email" ? "email" : field === "mobile" ? "tel" : "text"}
              name={field}
              value={form[field]}
              onChange={handleChange}
              required
              placeholder=" "
              className="peer w-full px-4 pt-5 pb-2 rounded-xl border border-gray-300 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />
            <label
              className="absolute left-4 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-blue-600 peer-focus:text-sm"
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
          whileHover={{ scale: 1.05, boxShadow: "0px 0px 10px rgba(99,102,241,0.4)" }}
          whileTap={{ scale: 0.97 }}
          type="submit"
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 rounded-full shadow-lg transition-all"
        >
          Submit Enquiry
        </motion.button>
      </form>

      {submitted && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-green-600 text-center mt-5 font-semibold"
        >
          ✅ Enquiry submitted successfully!
        </motion.p>
      )}
    </motion.div>
  );
};

export default EnquiryForm;
