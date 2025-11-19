// src/pages/Programs.tsx
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";


const Programs: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);
  
  const heroSlides = [
    { img: "/assets/02.jpg", title: "Our Programs", subtitle: "Youth-led. Evidence-based. Impact-driven." },
    { img: "/assets/PHOTO-2024-09-17-21-20-46.jpg", title: "Transforming Health in Tanzania", subtitle: "Through innovation, advocacy, and action" },
    { img: "/assets/PHOTO-2024-09-17-21-20-43.jpg", title: "Empowering the Next Generation", subtitle: "Of health leaders and change-makers" },
  ];

  const programs = [
    {
      title: "My AMR Story ",
      subtitle: "A narrative, saving lives",
      img: "/assets/05.jpg",
       to: "/programs/amr",
      color: "from-blue-600 to-cyan-600",
     
details: [
  "Antimicrobial resistance (AMR) is a rapidly escalating global health crisis threatening decades of medical progress.",
  "Millions of deaths occur annually due to resistant infections, with low- and middle-income countries, including Tanzania, facing the greatest impact.",
  "Contributing factors in Tanzania include irrational antibiotic use, weak diagnostic capacity, and inadequate infection prevention measures.",
  "Projections indicate that without coordinated global and national action, AMR could cause 10 million deaths annually by 2050 and lead to a cumulative economic loss exceeding USD 100 trillion.",
  "In 2021, Tanzania recorded an estimated 9,230 deaths attributable to AMR and 42,200 AMR-associated deaths, ranking 32nd globally in age-standardized AMR mortality.",


]
    },
    {
      title: "The YouthPulse Program 2025",
      subtitle: "Leading Youth Led Public Health",
      img: "/assets/WhatsApp Image 2025-11-17 at 16.00.40.jpeg",
      to: "/programs/youth",
      color: "from-blue-600  to-red-600",
      details: [
        "      Tanzania Youth Health and Development Organization (TYHDO) is a registered youth-led ",
            "non-profit dedicated to promoting public health through youth-driven advocacy," ,
            "research, and community engagement. Based in Dar es Salaam, TYHDO empowers young", 
            "people to lead transformative health initiatives across Tanzania",
        "Yet young people often lack a dedicated space to showcase their health research, advocacy, and innovations.",
        "The YouthPulse Program 2025 is TYHDO's flagship initiative to cultivate youth leadership in public health.",
      ]
    },
    {
      title: "Tanzania Youth Health Forum (TYHF)",
      subtitle: "The Largest Annual Youth Health Platform in Tanzania",
      img1: "/assets/03.jpg",
      img: "/assets/04.jpg",
      color: "from-orange-500 to-red-600",
      details: [
        "34.5% of Tanzania’s population are youth (15–35 years) — a powerful force for change.",
        "Yet young people often lack a dedicated space to showcase their health research, advocacy, and innovations.",
        "TYHF is the pitching ground — bringing together 600+ youth delegates, policymakers, researchers, and stakeholders every year.",
        "Features workshops, panel discussions, exhibitions, networking, and youth-led solutions to Tanzania’s biggest health challenges.",
        "A platform where youth voices are heard and collective action begins."
      ]
    },
    {
      title: "Tanzania Youth Research Fellowship",
      subtitle: "Building the Next Generation of Health Researchers",
      img: "/assets/PHOTO-2024-09-16-18-15-57.jpg",
      color: "from-purple-600 to-indigo-700",
      details: [
        "A one-year intensive mentorship program for young health researchers and scholars.",
        "Fellows receive expert training in:",
        "• Research proposal writing",
        "• Methodology & data analysis",
        "• Scientific presentations",
        "• Interdisciplinary collaboration",
        "Designed to address pressing health challenges facing Tanzanian youth and communities.",
        "Dedicated to nurturing innovation and excellence in youth-led health research."
      ]
    },
    {
      title: "Health & Gender Initiative",
      subtitle: "Empowering Women and Girls in Health",
      img: "/assets/04.jpg",
      color: "from-[#0073e6] to-rose-600",
      details: [
        "Women and girls face unique health vulnerabilities in Tanzania.",
        "Our flagship programs include:",
        "• Pad Her – Ending period poverty (80% of girls use unhygienic alternatives)",
        "• Mlinde Binti wa Kimasai – Protecting Maasai girls from FGM",
        "• She Leads Towards Zero AIDS by 2030 – Reducing new HIV infections among AGYW (15–24)",
        "Driven by alarming statistics: 16.8% of girls miss school during menstruation, high HIV rates among young women, and cultural practices like FGM.",
        "We empower female health advocates and deliver life-changing interventions."
      ]
    }
  ];

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative h-screen w-full overflow-hidden">
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
              style={{ backgroundImage: `url(${slide.img})` }}
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

      {/* PROGRAMS GRID */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-800">Our Flagship Programs</h2>
            <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
              Every program is designed, led, and delivered by youth — for youth and communities across Tanzania.
            </p>
          </motion.div>

          <div className="space-y-32">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
              >
                {/* Image */}
                <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                  <img src={program.img} alt={program.title} className="w-full h-96 object-cover hover:scale-110 transition duration-700" />
                  <div className={`absolute inset-0 bg-linear-to-t ${program.color} opacity-60`} />
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-3xl font-bold drop-shadow-lg">{program.title.split(" (")[0]}</h3>
                    {program.subtitle && <p className="text-lg font-medium drop-shadow">{program.subtitle}</p>}
                  </div>
                </div>

                {/* Content */}
                <div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-100">
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                    {program.title}
                  </h3>
                  {program.subtitle && <p className="text-xl text-[#0073A4] font-semibold mb-6">{program.subtitle}</p>}

                  <ul className="space-y-4 text-gray-700 text-lg leading-relaxed">
                    {program.details.map((point, i) => (
                      <li key={i} className="flex">
                        <span className="text-[#0073A4] mr-3">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-10">
                    <a
                      href={program.to}
                      className="inline-flex items-center bg-[#0073A4] text-white font-bold py-4 px-8 rounded-full hover:bg-[#005f7a] transition transform hover:scale-105"
                    >
                      Learn More <span className="ml-3 text-xl">→</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-20 px-6 bg-[#0073A4] text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">Ready to Make an Impact?</h2>
          <p className="text-xl mb-12">
            Join one of our programs, become a volunteer, or partner with us to transform health in Tanzania.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="/get-involved" className="bg-white text-[#0073A4] font-bold py-4 px-10 rounded-full hover:bg-gray-100 transition text-lg">
              Get Involved
            </a>
            <a href="/contact" className="border-2 border-white font-bold py-4 px-10 rounded-full hover:bg-white/10 transition text-lg">
              Partner With Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Programs;