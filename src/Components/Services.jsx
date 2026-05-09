import React from 'react'
import Anim from './Anim';

const Services = () => {
  const SERVICES = [
 {
  title: "Architectural & Structural Design",
  desc: "We deliver customized architectural and structural design solutions for residential, commercial, and public buildings. Our team combines functionality, aesthetics, and structural safety to create designs that align with client requirements, site conditions, and regulatory standards.",
  tag: "Enterprise",
  img: "https://s3da-design.com/wp-content/uploads/2021/05/Architectural-Engineering-1024x640.jpg",
},
  {
    
    title: "Construction and Project Execution",
    desc: "From small homes to larger buildings, we manage the entire construction process with attention to quality, budget, and timelines. Our skilled team and reliable methods ensure that every project is built to last.",
    tag: "Residential",
    img: "https://twproject.com/blog/wp-content/uploads/construction-project-management.png",
  },
  {
    
    title: "Renovation and Interior Works",
    desc: "We offer renovation, remodeling, and interior design services to upgrade and enhance existing spaces. Whether it's a home, office, or restaurant, we bring new life to structures through thoughtful planning and execution.",
    tag: "Civil",
    img: "https://img.freepik.com/free-photo/building-construction-workers-site_23-2149124309.jpg",
  },
  {
    
    title: "Engineering Consultation and Site Supervision",
    desc: "We assist clients with technical advice, cost estimation, planning, and on-site supervision. Our goal is to ensure projects run smoothly, maintain quality standards,and avoid costly delays or errors",
    tag: "Civil",
    img: "https://besgroup.com/app/uploads/2023/10/Infrastructure-Consultancy-4-min-scaled.jpg",
  },
];

  return (
     <section id="services" className="py-32  px-6">
      <div className="max-w-7xl mx-auto">
        <Anim>
          <div className="text-center mb-20">
            <p className="uppercase font-normal tracking-[4px] text-yellow-700 text-xs mb-5">
              What We Build
            </p>

            <h2 className="text-6xl font-black text-zinc-900 uppercase">
              Our <span className='text-[#A65F00]'>Services</span>
            </h2>
          </div>
        </Anim>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => (
            <Anim key={i} delay={i * 100}>
              <div className="bg-[#F9FAFB] border-0 p-5 rounded-2xl shadow-2xl overflow-hidden  transition group">
                <div className="overflow-hidden h-56">
                  <img
                    src={s.img}
                    alt={s.title}
                    className="w-full h-full object-cover brightness-75 rounded-lg group-hover:scale-110  transition duration-700"
                  />
                </div>

                <div className="p-6">
                  <span className="text-3xl">{s.icon}</span>

                  <h3 className="text-2xl  font-bold mt-4">
                    {s.title}
                  </h3>

                  <p className="text-zinc-400 leading-7 mt-4 text-sm">
                    {s.desc}
                  </p>

                  <button className="mt-6 text-yellow-700 uppercase tracking-[2px] text-xs">
                    Learn More →
                  </button>
                </div>
              </div>
            </Anim>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

