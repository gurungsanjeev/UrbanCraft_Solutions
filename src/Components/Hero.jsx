

// import React from 'react'
// import Anim from './Anim'

// const Hero = ({ onNav }) => {
//     const STATS = [
//   { value: "27+", label: "Years of Excellence" },
//   { value: "850+", label: "Projects Delivered" },
//   { value: "120+", label: "Expert Engineers" },
//   { value: "98%", label: "Client Satisfaction" },
// ];
//   return (
//     <section
//       id="home"
//       className="relative min-h-screen flex items-end overflow-hidden"
//     >
//       <img
//         src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1800&q=85"
//         alt="hero"
//         className="absolute inset-0 w-full h-full object-cover brightness-30"
//       />

//       <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

//       <div className="relative max-w-7xl mx-auto px-6 pb-24 w-full">
//         <Anim>
//           <div className="flex items-center gap-4 mb-8">
//             <div className="w-10 h-[1px] bg-yellow-700" />
//             <span className="uppercase tracking-[4px] text-xs text-yellow-600">
//               Premium Construction Since 2024
//             </span>
//           </div>

//           <h1 className="text-[clamp(4rem,10vw,9rem)] font-black leading-[0.9] uppercase">
//             <span className="block">We Build</span>
//             <span className="block text-yellow-700">The Future</span>
//             <span className="block text-white/10">Of Nepal</span>
//           </h1>

//           <p className="max-w-2xl text-zinc-400 mt-8 leading-8 text-lg">
//             BuildCraft delivers engineering excellence with precision,
//             innovation, and long-lasting infrastructure solutions.
//           </p>

//           <div className="flex flex-wrap gap-4 mt-10">
//             <button
//               onClick={() => onNav("Projects")}
//               className="bg-yellow-700 hover:bg-yellow-600 transition px-8 py-4 uppercase tracking-[2px] text-xs font-bold text-black"
//             >
//               View Our Work
//             </button>

//             <button
//               onClick={() => onNav("Contact")}
//               className="border border-yellow-700 text-yellow-700 hover:bg-yellow-700 hover:text-black transition px-8 py-4 uppercase tracking-[2px] text-xs"
//             >
//               Start a Project
//             </button>
//           </div>
//         </Anim>

//         <div className="grid grid-cols-2 md:grid-cols-4 gap-[1px] bg-yellow-700/20 mt-20">
//           {STATS.map((s, i) => (
//             <div key={i} className="bg-black/90 p-6">
//               <h3 className="text-5xl font-black text-yellow-700">
//                 {s.value}
//               </h3>
//               <p className="uppercase tracking-[2px] text-[10px] text-zinc-500 mt-2">
//                 {s.label}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Hero



import React from "react";

const Hero = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      
      {/* BACKGROUND VIDEO */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/videos/construction.mp4" type="video/mp4" />
      </video>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* CONTENT */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-white text-center px-6">
        <p className="uppercase tracking-[4px] text-yellow-700 text-sm mb-4">
          Premium Construction Company
        </p>

        <h1 className="text-6xl md:text-8xl font-black uppercase leading-none mb-6">
         Innovate.Design.Build 
        </h1>

        <p className="max-w-2xl text-zinc-300 mb-8">
          Engineering excellence for residential, commercial,
          and infrastructure projects across Nepal.
        </p>

        
      </div>
    </section>
  );
};

export default Hero;