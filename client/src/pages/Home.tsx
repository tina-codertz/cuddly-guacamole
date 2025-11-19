import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { title } from "framer-motion/m";

// Background image for Welcome section
const welcomeBg = "/assets/about-bg.png";

const Home: React.FC = () => {
  const heroSlides = [
    // {
    //   image: "/assets/01.jpg",
    //   title: "The YouthPulse Program 2025",
    //   description: "Empowering young Tanzanians (18–30) with knowledge, skills, and advocacy tools to lead public health change.",
    //   buttonText: "Apply Now",
    //   buttonLink: "https://bit.ly/youthpulse2025",
    // },
    {
      image: "/assets/02.jpg",
      title: "Leading Youth-Led\nPublic Health Promotion",
      description: "Youth are the changemakers driving Tanzania's health future.",
      buttonText: "Learn More",
      buttonLink: "/about",
    },
    {
      image: "/assets/05.jpg",
      title: "Empowering the Next Generation\nof Health Leaders",
      description: "Together, we build a healthier, more equitable Tanzania.",
      buttonText: "Our Impact",
      buttonLink: "/about",
    },
    {
      image: "/assets/06.jpg",
      title: "Youth Voices. Real Change.",
      description: "From advocacy to action — TYHDO leads the way.",
      buttonText: "Join Us",
      buttonLink: "/about",
    },
  ];

  const programs = [
    { img: "/assets/03.jpg", title: "Tanzania Youth Health Forum", desc: "The largest annual youth health gathering in Tanzania — 600+ delegates.", link: "/programs/youth" },
    { img: "/assets/05.jpg", title: "My AMR story (Fight AMR)", desc: "National campaign against antimicrobial resistance.", link: "/programs/amr" },
    { img: "/assets/PHOTO-2024-09-16-18-15-57.jpg", title: "Tanzania Youth Research Fellowship", desc: "One-year mentorship for young health researchers.", link:  "/programs" },
    { img: "/assets/04.jpg", title: "Health & Gender Initiative", desc: "Empowering women and girls in health advocacy.", link: "/programs"},
  ];
  const focus = [
    {
      title: "Community Engagement", desc:"This involves working directly with communities to raise awareness, provide education, and foster participation in health initiatives.",
    },
    {
      title: "Policy Advocacy",
      desc: "Advocating for youth-friendly health policies and amplifying youth voices in decision-making processes.",
    },
    {
      title: "Capacity Building",
      desc: "Providing training, mentorship, and resources to strengthen youth leadership and health competencies.",
    },
    {
      title: "Research",
      desc: "Promoting youth-led research to inform evidence-based health interventions and policies.",
    }
  ]

  const clusters = [
    { title: "Sexual and Reproductive Health and Rights (SRHR) & HIV/AIDS", desc: "Ensuring zero new HIV infections and access to comprehensive sexual and reproductive health services." },
    // { title: "Neglected Tropical Diseases (NTDs)", desc: "Combating neglected diseases and raising awareness to eliminate their burden on vulnerable populations." },
    // { title: "Non-Communicable Diseases (NCDs)", desc: "Promoting prevention, early detection, and management of diabetes, hypertension, cancer, and more." },
    { title: "Antimicrobial Resistance (AMR)", desc: "Addressing the growing threat through advocacy and education on responsible antibiotic use." },
    { title: "Research and Consultation", desc: "Facilitating youth-led research and amplifying youth voices in health policy." },
  ];

  return (
    <div>
      {/* HERO CAROUSEL */}
      <section className="">
        <Swiper
          modules={[Autoplay, EffectFade, Navigation, Pagination]}
          slidesPerView={1}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          loop
          effect="fade"
          speed={1000}
          pagination={{ clickable: true }}
          navigation
          className="h-screen w-full "
        >
          {heroSlides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${slide.image})` }}>
                <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/40 to-black/70" />
                <div className="relative h-full flex items-center justify-center text-center px-6">
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="max-w-5xl"
                  >
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight whitespace-pre-line drop-shadow-2xl">
                      {slide.title}
                    </h1>
                    <p className="text-lg md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto font-light">
                      {slide.description}
                    </p>
                    <a
                      href={slide.buttonLink}
                      className="inline-block bg-[#0073A4] hover:bg-[#005f7a] text-white font-bold text-lg py-4 px-10 rounded-full transition-all transform hover:scale-110 shadow-xl"
                    >
                      {slide.buttonText}
                    </a>
                  </motion.div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* WELCOME SECTION */}
      <section className="py-24 px-6 bg-cover bg-center bg-fixed relative" style={{ backgroundImage: `url(${welcomeBg})` }}>
        <div className="absolute inset-0 bg-[#0073A4]/80" />
        <div className="relative max-w-7xl mx-auto text-white text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-12 shadow-2xl border border-white/20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-10">Welcome to TYHDO</h2>
            <div className="grid md:grid-cols-2 gap-12 text-lg leading-relaxed">
              <p>
                The <strong>Tanzania Youth Health and Development Organization (TYHDO)</strong> is a youth-led non-profit dedicated to advancing public health through advocacy, research, and community empowerment.
              </p>
              <p>
                We believe that when equipped with knowledge, skills, and platforms — <strong>young people can transform Tanzania’s health landscape</strong>.
                <br /><br />
                <em className="text-2xl font-bold">Welcome to the movement. Welcome to TYHDO.</em>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT US SECTION – NOW INCLUDED! */}
     <section className="py-24 px-6 bg-cover bg-center bg-fixed relative" style={{ backgroundImage: `url(${welcomeBg})` }}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800">About Us</h2>
            <p className="text-xl text-gray-600 mt-4 max-w-4xl mx-auto">
              TYHDO is a community of passionate youth health advocates, healthcare workers, and leaders united for a healthier Tanzania.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-gray-800 mb-6">Who We Are</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                TYHDO is a community of youth health advocates, healthcare workers (laboratory scientists, pharmacists, nurses, doctors), and young leaders from diverse backgrounds — united in advancing health education, community engagement, research, and advocacy across Tanzania.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We believe in the power of youth to drive positive change through collaborative partnerships, innovative programs, and grassroots mobilization.
              </p>
            </motion.div>

            <motion.div>
              <h3 className="text-3xl font-bold text-gray-800 mb-6">Our Focus Areas</h3>
              <div className="space-y-8">
                {focus.map((area, i) => (
                  <div key={i}>
                    <h4 className="font-semibold text-xl text-gray-800 mb-2">{area.title}</h4>
                    <p className="text-gray-700 leading-relaxed">{area.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h3 className="text-3xl font-bold text-gray-800 mb-8">Our Five Key Clusters</h3>
              {clusters.map((cluster, i) => (
                <div key={i} className="flex gap-5 group">
                  <div className="shrink-0 w-12 h-12 bg-[#0073A4] rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="font-semibold text-xl text-gray-800 group-hover:text-[#0073A4] transition">
                      {cluster.title}
                    </h4>
                    <p className="text-gray-600 mt-2">{cluster.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* OUR PROGRAMS */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-center(mb-16)">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800">Our Programs</h2>
            <p className="text-xl text-gray-600 mt-4">Transforming health through youth-led action</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10">
            {programs.map((program, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -12 }}
                className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all"
              >
                <div className="relative overflow-hidden">
                  <img src={program.img} alt={program.title} className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-lnear-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-[#0073A4] transition">
                    <a href={program.link}>{program.title}</a>
                  </h3>
                  <p className="text-gray-600 mb-6">{program.desc}</p>
                  <a href={program.link} className="text-[#0073A4] font-bold hover:text-[#005f7a] flex items-center">
                    Read More <span className="ml-2 text-2xl">→</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;