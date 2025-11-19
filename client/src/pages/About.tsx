// src/pages/About.tsx
import React, {useEffect, useState}from "react";
import { motion, AnimatePresence } from "framer-motion";

import { Eye, Sun, Target } from "lucide-react";

const About: React.FC = () => {
 const [index, setIndex] = useState(0);
 
   useEffect(() => {
     const timer = setInterval(() => {
       setIndex((prev) => (prev + 1) % heroSlides.length);
     }, 6000);
     return () => clearInterval(timer);
   }, []);

  const heroSlides = [
    { image: "/assets/01.jpg", title: "Who We Are", subtitle: "A youth-led force for public health transformation in Tanzania" },
    { image: "/assets/02.jpg", title: "Our Mission", subtitle: "Empowering youth to lead sustainable health change" },
    { image: "/assets/06.jpg", title: "Our Vision", subtitle: "A healthier Tanzania, led by empowered young people" },
  ];

  const clusters = [
    { title: "Sexual and Reproductive Health and Rights (SRHR) and HIV/AIDS", desc: "Ensuring zero new HIV infections and access to comprehensive sexual and reproductive health services and rights." },
    // { title: "Neglected Tropical Diseases (NTDs)", desc: "Combating neglected diseases and raising awareness to eliminate their burden on vulnerable populations." },
    // { title: "Non-Communicable Diseases (NCDs)", desc: "Promoting prevention, early detection, and management of NCDs such as diabetes, hypertension, and cancer." },
    { title: "Antimicrobial Resistance (AMR)", desc: "Addressing the growing threat through advocacy and education on responsible antibiotic use." },
    { title: "Research and Consultation", desc: "Facilitating youth-led research initiatives and providing platforms for youth voices to inform health policies and programs." },
  ];

  const leadership = [
    { name: "Tumaini Makole", role: "Director\nNTDs Cluster Head", img: "/assets/team/tumaini.jpg" },
    { name: "Noel Shimba", role: "Deputy Director\nNCDs Cluster Head", img: "/assets/team/noel.jpg" },
    { name: "Meseline Mulokozi", role: "Programs Manager\nSRHR & HIV/AIDS Head", img: "/assets/team/meseline.jpg" },
    { name: "Adam Mohammed", role: "Media & Communication Manager\nAMR Cluster Head", img: "/assets/team/adam.jpg" },
    { name: "Judith Reuben", role: "Finance & Administration Officer", img: "/assets/team/judith.jpg" },
  ];

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative h-screen">
    <AnimatePresence>
            {heroSlides.map((slide, i) =>
              i === index ? (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.2 }}
                  className="absolute inset-0 w-full h-full bg-cover bg-center flex items-center justify-center text-center"
                  style={{ backgroundImage: `url(${slide.image})` }}
                >
                  <div className="absolute inset-0 bg-black/60" />
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="relative max-w-5xl px-6 text-white"
                  >
                    <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">{slide.title}</h1>
                    <p className="text-2xl md:text-4xl font-light">{slide.subtitle}</p>
                  </motion.div>
                </motion.div>
              ) : null
            )}
          </AnimatePresence>
      </section>

      {/* INTRODUCTION */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">
            About Tanzania Youth Health and Development Organization (TYHDO)
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
            TYHDO is a <strong>youth-led non-profit organization</strong> registered under the Ministry of Community Development, Gender, Women and Special Groups, headquartered in Dar es Salaam, Tanzania.
            <br /><br />
            We are a vibrant community of young health advocates, healthcare professionals, researchers, and change-makers united by one goal: <strong>to transform Tanzania’s public health landscape through youth leadership, evidence-based advocacy, and community-driven action</strong>.
          </motion.p>
        </div>
      </section>

      {/* MISSION, VISION, OBJECTIVES */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
          {[
            { title: "Our Mission", icon: Sun, desc: "To equip youth and local communities with proven knowledge and practical skills, empowering them to champion sustainable improvements in public health through advocacy, training, and community engagement." },
            { title: "Our Vision", icon: Eye, desc: "A Tanzania where improved public health is led by empowered, knowledgeable, and active young people." },
            { title: "Our Objectives", icon:Target, desc: "Raise awareness about critical health issues • Empower youth through training and research • Advocate for greater youth involvement in Tanzania's public health sector." }
          ].map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.2 }} viewport={{ once: true }}
              className="text-center bg-linear-to-b from-[#0073A4]/5 to-transparent p-10 rounded-2xl border border-[#0073A4]/20 hover:shadow-2xl transition">
              <div className="w-20 h-20 bg-[#0073A4] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-4xl">
                <item.icon size={40} />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-4">{item.title}</h3>
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* OUR  CLUSTERS */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800">Our Five Strategic Clusters</h2>
            <p className="text-xl text-gray-600 mt-4">Focused areas driving our impact across Tanzania</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {clusters.map((cluster, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition group">
                <div className="w-16 h-16 bg-[#0073A4] rounded-full flex items-center justify-center mb-6 text-white text-3xl group-hover:scale-110 transition">
                  {i + 1}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-[#0073A4] transition">{cluster.title}</h3>
                <p className="text-gray-600">{cluster.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* LEADERSHIP TEAM */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800">Our Leadership Team</h2>
            <p className="text-xl text-gray-600 mt-4">Young. Passionate. Committed to change.</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
            {leadership.map((member, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }}
                className="text-center group">
                <div className="relative overflow-hidden rounded-2xl mb-6 shadow-xl">
                  <img src={member.img} alt={member.name} className="w-full h-80 object-cover group-hover:scale-110 transition duration-500" />
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 whitespace-pre-line">{member.name}</h3>
                <p className="text-gray-600 text-sm mt-2 whitespace-pre-line leading-tight">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-20 px-6 bg-[#0073A4] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Be Part of the Movement</h2>
          <p className="text-xl mb-10">
            Whether you're a young health advocate, professional, or supporter — there's a place for you at TYHDO.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="/contacts" className="bg-white text-[#0073A4] font-bold py-4 px-10 rounded-full hover:bg-gray-100 transition text-lg">
              Join Us
            </a>
            <a href="/contacts" className="border-2 border-white font-bold py-4 px-10 rounded-full hover:bg-white/10 transition text-lg">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;