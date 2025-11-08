import React from "react";
import { motion } from "framer-motion";
import adsImg from "../assets/newads.jpg";
import { Link } from "react-router-dom";

const MotionLink = motion(Link); // ✅ wrap Link for animation

const Home = () => {
  return (
    <section className="relative flex flex-col items-center max-w-7xl mx-auto justify-center min-h-screen overflow-hidden px-4">
      {/* Decorative gradient glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-200/40 via-purple-200/40 to-pink-200/40 blur-3xl -z-10" />

      {/* Animated image container */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-2xl w-full text-center"
      >
        <div className="mx-auto rounded-2xl overflow-hidden shadow-2xl w-[85%] sm:w-[80%] md:w-[70%] lg:w-[60%]">
          <img
            src={adsImg}
            alt="Advertisement"
            className="w-full h-auto object-contain hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Text & CTA */}
     <div className="mt-8 flex flex-col md:flex-row justify-center items-center gap-4">
  <MotionLink
    to="https://technovahub.in" // ✅ external link
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all"
  >
    Go to Website
  </MotionLink>

  <MotionLink
    to="/welcome" // ✅ internal route
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all"
  >
    Enroll Now
  </MotionLink>
</div>

      </motion.div>
    </section>
  );
};

export default Home;
