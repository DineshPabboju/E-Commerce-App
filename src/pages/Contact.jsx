import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-slate-50/40 flex items-center justify-center px-4 py-16">
      <div className="bg-white border border-purple-100/90 rounded-3xl shadow-[0_4px_30px_rgba(124,58,237,0.04)] p-8 sm:p-12 w-full max-w-4xl">
        <div className="text-center mb-10">
          <span className="text-xs font-semibold uppercase tracking-wider text-purple-700 bg-purple-50 border border-purple-200 px-3.5 py-1 rounded-full">
            Customer Concierge
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mt-3">
            Get in Touch with <span className="text-purple-700">Pegasus</span>
          </h1>
          <p className="text-slate-500 text-sm mt-2 max-w-md mx-auto">
            Have a question about your order or need product recommendations? Our dedicated team is here to assist.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Info Section */}
          <div className="space-y-6">
            <div>
              <h2 className="text-lg font-bold text-slate-900 mb-2">Direct Contact</h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Reach out to our specialist team for personalized support, product inquiries, or corporate orders.
              </p>
            </div>
            
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-purple-50/30 border border-purple-100/60">
                <span className="text-purple-600 font-bold text-base">📍</span>
                <div>
                  <p className="text-xs text-slate-400 font-medium">Headquarters</p>
                  <p className="text-slate-800 font-medium">123 Tech Lane, Pegasus Plaza, NY</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-purple-50/30 border border-purple-100/60">
                <span className="text-purple-600 font-bold text-base">📧</span>
                <div>
                  <p className="text-xs text-slate-400 font-medium">Email Support</p>
                  <p className="text-purple-700 font-semibold">support@pegasus.com</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-purple-50/30 border border-purple-100/60">
                <span className="text-purple-600 font-bold text-base">📞</span>
                <div>
                  <p className="text-xs text-slate-400 font-medium">Toll Free Phone</p>
                  <p className="text-slate-800 font-medium">+1 (800) 555-PEGA</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">Your Name</label>
              <input type="text" placeholder="Alex Morgan" className="w-full px-4 py-2.5 bg-purple-50/30 border border-purple-200 rounded-xl text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500" />
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">Email Address</label>
              <input type="email" placeholder="alex@example.com" className="w-full px-4 py-2.5 bg-purple-50/30 border border-purple-200 rounded-xl text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500" />
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">Your Message</label>
              <textarea rows="4" placeholder="How can we assist your setup today?" className="w-full px-4 py-2.5 bg-purple-50/30 border border-purple-200 rounded-xl text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"></textarea>
            </div>
            <button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-xl shadow-xs hover:shadow-purple-500/25 transition-all duration-300 cursor-pointer text-sm">
              Send Message &rarr;
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;