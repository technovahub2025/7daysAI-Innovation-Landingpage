import React from "react";
import sample1 from "../assets/banner4.mp4";
import sample2 from "../assets/banner2.mp4";
import sample3 from "../assets/banner1.mp4";
import sample4 from "../assets/banner4.mp4";
import sample5 from "../assets/banner4.mp4";



const VideoBanner = () => {
  return (
    <section className="py-10 md:px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto mt-10">
       

        {/* Grid Layout */}
        <div className="grid grid-cols-2 md:grid-cols-2  lg:grid-cols-3 gap-3 md:gap-4">
          {/* Big Featured Video */}
          <div className="sm:col-span-2 lg:col-span-2 row-span-2 relative group overflow-hidden rounded-2xl shadow-lg">
            <video
              src={sample1}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition"></div>
            <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition">
              <h3 className="text-lg font-semibold">Artifical Intelligence</h3>
              <p className="text-sm">WorkShop @ TechnovaHub  • 2025</p>
            </div>
          </div>

          {/* Smaller Videos */}
          {[sample2, sample3, sample4, sample5].map((video, i) => (
            <div
              key={i}
              className="relative group overflow-hidden rounded-2xl shadow-lg"
            >
              <video
                src={video}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition"></div>
              <div className="absolute bottom-3 left-3 text-white opacity-0 group-hover:opacity-100 transition">
                <p className="text-sm font-medium">AI {i + 1}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoBanner;
