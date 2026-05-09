import React from 'react'
import Anim from './Anim';

const Team = () => {
    const TEAM = [
  {
    name: "Tom",
    role: "CEO & Founder",
    exp: "30 yrs",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&q=80",
  },
  {
    name: "Sita",
    role: "Chief Architect",
    exp: "18 yrs",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&q=80",
  },
];
  return (
    <>
     <section id="team" className="py-32 bg-zinc-950 text-white px-6">
      <div className="max-w-7xl mx-auto">
        <Anim>
          <div className="text-center mb-20">
            <p className="uppercase tracking-[4px] text-yellow-700 text-xs mb-5">
              Leadership
            </p>

            <h2 className="text-6xl font-black uppercase">
              Meet The Team
            </h2>
          </div>
        </Anim>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM.map((t, i) => (
            <Anim key={i} delay={i * 100}>
              <div className="bg-black border border-zinc-800 overflow-hidden hover:border-yellow-700 transition">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-full h-[350px] object-cover"
                />

                <div className="p-5">
                  <h3 className="text-2xl font-bold">{t.name}</h3>

                  <p className="text-yellow-700 uppercase tracking-[2px] text-xs mt-2">
                    {t.role}
                  </p>

                  <p className="text-zinc-500 text-sm mt-4">
                    {t.exp} Experience
                  </p>
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

export default Team


