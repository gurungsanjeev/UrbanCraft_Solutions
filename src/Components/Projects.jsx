import React from 'react'
import Anim from './Anim';

const Projects = () => {
    const PROJECTS = [
  {
    name: "Residental House-Madhyapur Thimi(Ongoing)",
    location: "Madhyapur Thimi",
    type: "Commercial",
    year: "2024",
    size: "48 Floors",
    desc: "A landmark mixed-use skyscraper redefining the city skyline.",
    img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1400&q=85",
  },
  {
    name: "Riverside Complex",
    location: "Pokhara, Nepal",
    type: "Residential",
    year: "2023",
    size: "320 Units",
    desc: "Premium waterfront residences with integrated green spaces.",
    img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1400&q=85",
  },
];

  return (
    <>
    <section id="projects" className="py-32 ">
      <div className="max-w-7xl mx-auto px-6">
        <Anim>
          <div className="mb-16">
            <p className="uppercase tracking-[4px] text-yellow-700 text-xs mb-5">
              Portfolio
            </p>

            <h2 className="text-6xl font-black uppercase">
              Featured Projects
            </h2>
          </div>
        </Anim>

        <div className="grid lg:grid-cols-2 gap-8">
          {PROJECTS.map((p, i) => (
            <Anim key={i} delay={i * 100}>
              <div className="relative overflow-hidden group">
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-full h-[500px] object-cover brightness-50 group-hover:scale-105 transition duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />

                <div className="absolute bottom-0 left-0 p-8">
                  <span className="uppercase tracking-[2px] text-yellow-700 text-xs">
                    {p.type} • {p.year}
                  </span>

                  <h3 className="text-5xl text-zinc-200 font-black mt-4">
                    {p.name}
                  </h3>

                  <p className="text-zinc-300 mt-4 max-w-lg leading-7">
                    {p.desc}
                  </p>

                  <div className="flex gap-6 mt-6 text-sm text-zinc-400">
                    <span>📍 {p.location}</span>
                    <span>📐 {p.size}</span>
                  </div>
                </div>
              </div>
            </Anim>
          ))}
        </div>
      </div>
    </section>
    </>
  )
}

export default Projects

