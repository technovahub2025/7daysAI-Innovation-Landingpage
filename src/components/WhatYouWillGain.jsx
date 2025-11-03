import React from "react";
import { Bot, MessageSquare, Lightbulb, Network } from "lucide-react";

const features = [
  {
    icon: <Bot className="w-8 h-8 text-white" />,
    title: "Build No-code AI Agent",
    desc: "Create intelligent agents without writing a single line of code",
  },
  {
    icon: <MessageSquare className="w-8 h-8 text-white" />,
    title: "Prompt Engineering",
    desc: "Master the art of communicating effectively with AI systems",
  },
  {
    icon: <Lightbulb className="w-8 h-8 text-white" />,
    title: "Problem Solving with Tech",
    desc: "Learn to leverage technology for real-world challenges",
  },
  {
    icon: <Network className="w-8 h-8 text-white" />,
    title: "Real-world AI Integration",
    desc: "Understand how AI integrates into practical solutions",
  },
];

const WhatYouWillGain = () => {
  return (
    <section className="py-16 px-6 lg:mt-10">
      <div className="max-w-7xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          What You'll Gain
        </h2>
        <p className="text-gray-600 mb-10">
          Transform your skills with hands-on experience in AI innovation
        </p>

        {/* Features Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 hover:shadow-lg transition-all duration-300 rounded-2xl p-6 flex flex-col items-start text-left hover:-translate-y-1"
            >
              <div className="bg-gradient-to-r from-sky-500 to-blue-600 p-3 rounded-xl mb-4 shadow-md">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatYouWillGain;
