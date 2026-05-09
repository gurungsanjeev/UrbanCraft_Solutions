import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock3,
  ArrowRight,
} from "lucide-react";
import Anim from "./Anim";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    project: "",
    budget: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
  };

  return (
    <section
      id="contact"
      className="bg-[#F9FAFB] py-28 px-6"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-start">
        
        {/* LEFT SIDE */}
        <Anim>
          <div>
            <p className="uppercase tracking-[5px] text-[#d07a0a] text-xs mb-5">
              Contact Us
            </p>

            <h2 className="text-5xl md:text-6xl font-black uppercase leading-none mb-8">
              Start Your <br />
              <span className="text-[#A65F00]">Next Project</span>
            </h2>

            <p className="text-zinc-400 leading-8 mb-12 max-w-lg">
              Ready to build something extraordinary? Our team is here to
              discuss your vision, requirements, and project goals with
              precision and professionalism.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 border border-zinc-800 bg-[#111] flex items-center justify-center">
                  <Phone size={18} className="text-[#d07a0a]" />
                </div>

                <div>
                  <p className="uppercase tracking-[3px] text-xs text-zinc-500 mb-1">
                    Phone
                  </p>
                  <p className="text-zinc-900">+977 9708519450</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 border border-zinc-800 bg-[#111] flex items-center justify-center">
                  <Mail size={18} className="text-[#d07a0a]" />
                </div>

                <div>
                  <p className="uppercase tracking-[3px] text-xs text-zinc-500 mb-1">
                    Email
                  </p>
                  <p className="text-zinc-900">
                    urbancraftconstructs@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 border border-zinc-800 bg-[#111] flex items-center justify-center">
                  <MapPin size={18} className="text-[#d07a0a]" />
                </div>

                <div>
                  <p className="uppercase tracking-[3px] text-xs text-zinc-500 mb-1">
                    Office
                  </p>
                  <p className="text-zinc-900">
                     Kathmandu, Nepal
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 border border-zinc-800 bg-[#111] flex items-center justify-center">
                  <Clock3 size={18} className="text-[#d07a0a]" />
                </div>

                <div>
                  <p className="uppercase tracking-[3px] text-xs text-zinc-500 mb-1">
                    Working Hours
                  </p>
                  <p className="text-zinc-900">
                    Sun – Fri / 9:00 AM – 6:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Anim>

        {/* RIGHT SIDE */}
        <Anim delay={150}>
          <form
            onSubmit={handleSubmit}
            className=" border border-zinc-800 p-8 md:p-10 space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs uppercase tracking-[3px] text-zinc-500 mb-3">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Ram"
                  required
                  value={form.name}
                  onChange={(e) =>
                    setForm({ ...form, name: e.target.value })
                  }
                  className="w-full bg-zinc-300 border border-zinc-400 px-5 py-4 outline-none focus:border-[#C8A86B] transition"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-[3px] text-zinc-500 mb-3">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="example@.com"
                  required
                  value={form.email}
                  onChange={(e) =>
                    setForm({ ...form, email: e.target.value })
                  }
                  className="w-full bg-zinc-300 border border-zinc-400 px-5 py-4 outline-none focus:border-[#C8A86B] transition"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs uppercase tracking-[3px] text-zinc-500 mb-3">
                  Project Type
                </label>

                <select
                  value={form.project}
                  onChange={(e) =>
                    setForm({ ...form, project: e.target.value })
                  }
                  className="w-full bg-zinc-300 border border-zinc-400 px-5 py-4 outline-none focus:border-[#C8A86B] transition"
                >
                  <option value="">Select Project</option>
                  <option>Commercial Building</option>
                  <option>Residential Project</option>
                  <option>Infrastructure</option>
                  <option>Industrial Facility</option>
                </select>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-[3px] text-zinc-500 mb-3">
                  Budget Range
                </label>

                <select
                  value={form.budget}
                  onChange={(e) =>
                    setForm({ ...form, budget: e.target.value })
                  }
                  className="w-full bg-zinc-300 border border-zinc-400 px-5 py-4 outline-none focus:border-[#C8A86B] transition"
                >
                  <option value="">Select Budget</option>
                  <option>$10K - $50K</option>
                  <option>$50K - $100K</option>
                  <option>$100K+</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-[3px] text-zinc-500 mb-3">
                Project Details
              </label>

              <textarea
                rows={6}
                placeholder="Tell us about your project requirements..."
                required
                value={form.message}
                onChange={(e) =>
                  setForm({ ...form, message: e.target.value })
                }
                className="w-full bg-zinc-300 border border-zinc-400 px-5 py-4 outline-none focus:border-[#C8A86B] transition resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#d07a0a] hover:bg-[#A65F00] transition py-5 uppercase tracking-[3px] text-xs font-bold text-black flex items-center justify-center gap-2"
            >
              Send Message
              <ArrowRight size={16} />
            </button>

            <p className="text-center text-zinc-500 text-sm">
              We typically respond within 24 hours.
            </p>
          </form>
        </Anim>
      </div>
    </section>
  );
};

export default Contact;