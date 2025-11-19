// src/pages/EventsBlogs.tsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { format } from "date-fns";

const EventsBlogs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"upcoming" | "past" | "blogs">("upcoming");

  // Sample Data - Replace with API later
  const upcomingEvents = [

 {
  id: 1,
  title: "The YouthPulse Program Graduation ceremony 2025",
  date: "2026-12-06",
  location: "Friedrich Ebert Stiftung Tanzania-Morocco ",
  description: "The Youth Pulse Program Graduation Ceremony marks a significant milestone — celebrating the completion of the first cohort of 30 dynamic young individuals trained to become a capable and informed workforce in advocacy and public health promotion. Over the past months, participants have undergone intensive capacity building on critical health areas, including: Antimicrobial Resistance (AMR), Sexual and Reproductive Health and Rights.",
  image: "/assets/WhatsApp Image 2025-11-17 at 18.23.44.jpeg",
},
    {
      id: 2,
      title: "The 7th Africa Continental World AMR Awareness Week (WAAW) Campaign",
      date: "2025-11-16 ",
      location: "Dar es Salaam Tanzania",
      description: "The United Republic of Tanzania, is hosting the 7th Africa Continental World AMR Awareness Week (WAAW) Campaign (16th-24th November 2025) in Dar es Salaam,Tanzania",
      image: "/assets/WhatsApp Image 2025-11-17 at 18.28.34.jpeg",
      registerLink: "https://bit.ly/tyhf2026",
    },
   
  ];

  const pastEvents = [
    {
      id: 3,
      title: "Epuka Usugu Campaign – Morogoro Region",
      date: "2025-10-10",
      attendees: "500+ youth & community members",
      summary: "Trained 120 youth ambassadors on AMR prevention.",
      images: ["/assets/05.jpg", "/assets/04.jpg", "/assets/03.jpg"],
    },
    {
      id: 4,
      title: "Pad Her Distribution – Maasai Communities",
      date: "2025-08-22",
      attendees: "300 schoolgirls",
      summary: "Distributed 1,500 reusable sanitary pads and trained on menstrual health.",
      images: ["/assets/04.jpg", "/assets/PHOTO-2024-09-16-18-15-57.jpg"],
    },
  ];

  const blogPosts = [

     {
  id: 1,
  title: "The YouthPulse Program Graduation ceremony 2025",
  date: "2026-12-06",
  location: "Friedrich Ebert Stiftung Tanzania-Morocco ",
  description: "The Youth Pulse Program Graduation Ceremony marks a significant milestone — celebrating the completion of the first cohort of 30 dynamic young individuals trained to become a capable and informed workforce in advocacy and public health promotion. Over the past months, participants have undergone intensive capacity building on critical health areas, including: Antimicrobial Resistance (AMR), Sexual and Reproductive Health and Rights.",
  image: "/assets/WhatsApp Image 2025-11-17 at 18.23.44.jpeg",
},
    // {
    //   id: 2,
    //   title: "Why Youth Must Lead the Fight Against AMR in Tanzania",
    //   author: "Adam Mohammed",
    //   date: "2025-11-10",
    //   excerpt: "Antimicrobial resistance is rising faster in Africa than anywhere else. Here’s how Tanzanian youth are stepping up...",
    //   image: "/assets/img/05.jpg",
    //   readMore: "/blog/amr-youth-leadership",
    // },
    // {
    //   id: 3,
    //   title: "From Fellowship to Publication: My Research Journey with TYHDO",
    //   author: "Aisha Juma",
    //   date: "2025-10-28",
    //   excerpt: "How the Tanzania Youth Research Fellowship helped me publish my first paper on NCDs in rural Tanzania.",
    //   image: "/assets/img/PHOTO-2024-09-16-18-15-57.jpg",
    //   readMore: "/blog/research-fellowship-journey",
    // },
    // {
    //   id: 4,
    //   title: "She Leads: Ending Period Poverty One Pad at a Time",
    //   author: "Meseline Mulokozi",
    //   date: "2025-09-15",
    //   excerpt: "16.8% of girls miss school during menstruation. Here’s how TYHDO is changing that.",
    //   image: "/assets/img/04.jpg",
    //   readMore: "/blog/she-leads-period-poverty",
    // },
  ];

  return (
    <>
      {/* HERO */}
<section className="relative h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/assets/WhatsApp Image 2025-11-17 at 18.23.44.jpeg')" }}>
  <div className="absolute inset-0 bg-black/70" />
        <div className="relative text-center text-white px-6 max-w-5xl mx-auto">
          <motion.h1 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} className="text-5xl md:text-7xl font-extrabold mb-8">
            Events & Blogs
          </motion.h1>
          <p className="text-2xl md:text-4xl font-light">Stay updated. Get inspired. Join the movement.</p>
        </div>
      </section>

      {/* TABS */}
      <section className="sticky top-0 z-40 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-center border-b">
            {[
              { id: "upcoming", label: "Upcoming Events" },
              { id: "past", label: "Past Events" },
              { id: "blogs", label: "Blogs & News" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`py-6 px-10 text-lg font-semibold transition ${
                  activeTab === tab.id
                    ? "text-[#0073A4] border-b-4 border-[#0073A4]"
                    : "text-gray-600 hover:text-[#0073A4]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* UPCOMING EVENTS */}
      {activeTab === "upcoming" && (
        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Upcoming Events</h2>
            <div className="grid md:grid-cols-2 gap-12">
              {upcomingEvents.map((event) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition"
                >
                  <img src={event.image} alt={event.title} className="w-full h-64 object-cover" />
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">{event.title}</h3>
                    <div className="flex items-center gap-3 text-gray-600 mb-4">
                      <span>Calendar</span> {format(new Date(event.date), "EEEE, MMMM d, yyyy")}
                    </div>
                    <div className="flex items-center gap-3 text-gray-600 mb-4">
                      <span>Location</span> {event.location}
                    </div>
                    <p className="text-gray-700 mb-6">{event.description}</p>
                    {event.registerLink && (
                      <a
                        href={event.registerLink}
                        className="inline-block bg-[#0073A4] text-white font-bold py-3 px-8 rounded-full hover:bg-[#005f7a] transition"
                      >
                        Register Now
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* PAST EVENTS */}
      {activeTab === "past" && (
        <section className="py-20 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Past Events & Recaps</h2>
            <div className="space-y-20">
              {pastEvents.map((event) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="grid lg:grid-cols-2 gap-12 items-center"
                >
                  <div>
                    <h3 className="text-3xl font-bold text-gray-800 mb-4">{event.title}</h3>
                    <p className="text-xl text-gray-600 mb-4">
                      {format(new Date(event.date), "MMMM d, yyyy")} • {event.attendees}
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">{event.summary}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {event.images.map((img, i) => (
                      <img key={i} src={img} alt="Event" className="rounded-xl shadow-lg hover:scale-105 transition" />
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* BLOGS & NEWS */}
      {activeTab === "blogs" && (
        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Latest Blogs & News</h2>
            <div className="grid md:grid-cols-3 gap-10">
              {blogPosts.map((post) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition group"
                >
                  <img src={post.image} alt={post.title} className="w-full h-56 object-cover group-hover:scale-110 transition duration-500" />
                  <div className="p-6">
                    <div>
                      {post.description}
                    </div>
                    <div className="text-sm text-gray-500 mb-2">
                       {post.location} • {format(new Date(post.date), "MMM d, yyyy")}
                    </div>
                   
                    {/* <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-[#0073A4] transition">
                      <a href={post.readMore}>{post.title}</a>
                    </h3> */}
                    {/* <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <a href={post.readMore} className="text-[#0073A4] font-bold hover:underline">
                      Read More →
                    </a> */}
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section> 
      )}

      {/* CTA */}
      {/* <section className="py-20 px-6 bg-[#0073A4] text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Want to Stay Updated?</h2>
          <p className="text-xl mb-10">
            Join our mailing list for event invitations, blog updates, and youth health news.
          </p>
          <form className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-full text-gray-800 focus:outline-none"
            />
            <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold px-10 py-4 rounded-full transition">
              Subscribe
            </button>
          </form>
        </div>
      </section> */}
    </>
  );
};

export default EventsBlogs;