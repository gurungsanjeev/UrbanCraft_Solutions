import React from "react";
import Anim from "./Anim";

const About = () => {
  return (
    <>
      <section id="about" className="py-32 bg-white px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <Anim>
            <div>
              <p className="uppercase tracking-[4px] text-yellow-700 text-xs mb-5">
                Who We Are
              </p>

              <h2 className="text-6xl text-zinc-900 font-black leading-none uppercase">
                Engineering
                <span className="block text-yellow-700">Excellence</span>
                Since 2024
              </h2>

              <p className="text-zinc-400 leading-8 mt-8">
                {/* UrbanCraft Solutions has been Nepal's trusted construction
              partner for over two years, delivering iconic infrastructure
              and architectural projects. */}
                At Urbancraft Solution, we believe in combining technical
                expertise with thoughtful design to create spaces that are both
                functional and inspiring. Our team is driven by innovation,
                attention to detail, and a strong commitment to client
                satisfaction. From planning to execution, we work to ensure
                every project reflects reliability, sustainability, and smart
                engineering.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-10">
                {[
                  "Consultation and Requirement Gathering",
                  "Design and Planning",
                  "Execution and Supervision",
                  "Handover and Support",
                ].map((item) => (
                  <div
                    key={item}
                    className="border-0 bg-[#A65F00] px-4 py-4 text-sm text-white"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </Anim>

          <Anim delay={150}>
            <div className="grid grid-cols-2 gap-3">
              <img
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80"
                className="h-[500px] object-cover w-full"
              />

              <div className="grid gap-3">
                <img
                  src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=80"
                  className="h-[240px] object-cover w-full"
                />

                <img
                  src="https://www.procore.com/library/wp-content/uploads/2023/09/Construction-Project-Management-Procore-Blog-Hero-768x384.png"
                  className="h-[240px] object-cover w-full"
                />
              </div>
            </div>
          </Anim>
        </div>
      </section>
    </>
  );
};

export default About;
