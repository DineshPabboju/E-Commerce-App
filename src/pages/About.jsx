import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-slate-50/40 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white border border-purple-100/90 rounded-3xl p-8 sm:p-14 shadow-[0_4px_25px_rgba(124,58,237,0.04)] space-y-10">
        <div className="text-center space-y-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-purple-700 bg-purple-50 border border-purple-200 px-3.5 py-1 rounded-full">
            Our Story
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">About Pegasus</h1>
          <p className="text-slate-600 text-base max-w-2xl mx-auto leading-relaxed pt-2">
            Welcome to <span className="font-semibold text-purple-700">Pegasus</span>, where minimalist design meets cutting-edge innovation. We craft and curate premium technology essentials designed to bring clarity, power, and elegance into your everyday life.
          </p>
        </div>

        <div className="space-y-3 border-t border-purple-50 pt-8">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2.5">
            <span className="w-2 h-6 bg-purple-600 rounded-full inline-block"></span>
            Our Mission
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed pl-4">
            At Pegasus, our purpose is to make refined, forward-thinking technology intuitive and accessible. We eliminate unnecessary clutter and noise, bringing you timeless devices and lifestyle gear that perform flawlessly and inspire your workspace.
          </p>
        </div>

        <div className="space-y-4 border-t border-purple-50 pt-8">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2.5">
            <span className="w-2 h-6 bg-purple-600 rounded-full inline-block"></span>
            Why Choose Pegasus?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pl-4 pt-2">
            <div className="p-4 rounded-2xl bg-purple-50/30 border border-purple-100/60">
              <h3 className="font-semibold text-slate-900 text-sm mb-1">Curated Excellence</h3>
              <p className="text-xs text-slate-500 leading-relaxed">Precision-engineered electronics evaluated against the highest durability benchmarks.</p>
            </div>
            <div className="p-4 rounded-2xl bg-purple-50/30 border border-purple-100/60">
              <h3 className="font-semibold text-slate-900 text-sm mb-1">Express Delivery</h3>
              <p className="text-xs text-slate-500 leading-relaxed">Swift, carbon-neutral shipping with transparent tracking from doorstep to destination.</p>
            </div>
            <div className="p-4 rounded-2xl bg-purple-50/30 border border-purple-100/60">
              <h3 className="font-semibold text-slate-900 text-sm mb-1">Dedicated Concierge</h3>
              <p className="text-xs text-slate-500 leading-relaxed">Attentive, human support available around the clock to assist you with every inquiry.</p>
            </div>
            <div className="p-4 rounded-2xl bg-purple-50/30 border border-purple-100/60">
              <h3 className="font-semibold text-slate-900 text-sm mb-1">Risk-Free Guarantee</h3>
              <p className="text-xs text-slate-500 leading-relaxed">30-day effortless returns with zero questions asked and instant refunds.</p>
            </div>
          </div>
        </div>

        <div className="space-y-3 border-t border-purple-50 pt-8">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2.5">
            <span className="w-2 h-6 bg-purple-600 rounded-full inline-block"></span>
            Our Vision
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed pl-4">
            We envision a connected lifestyle where tech is not an overwhelming distraction, but a seamless extension of human creativity. Every product carrying the Pegasus mark is balanced between form, function, and aesthetic minimalism.
          </p>
        </div>

        <div className="text-center pt-8 border-t border-purple-50">
          <h3 className="text-xl font-semibold text-slate-900 mb-2">Join the Pegasus Experience</h3>
          <p className="text-slate-500 text-sm mb-6 max-w-md mx-auto">
            Whether you are upgrading your setup or seeking thoughtful gear, find your next essential here.
          </p>
          <Link to={'/products'}>
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium px-8 py-3 rounded-full shadow-sm hover:shadow-purple-500/25 transition-all cursor-pointer">
              Explore Collection &rarr;
            </button>
          </Link> 
        </div>
      </div>
    </div>
  );
};

export default About;