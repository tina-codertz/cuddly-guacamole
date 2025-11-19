// src/pages/Contact.tsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import { Mail, MapPin, Phone } from "lucide-react";

// Fix Leaflet default icon issue in React
const customIcon = new Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    // Using Formspree (free & easy) — replace with your Formspree endpoint
    try {
      const res = await fetch("https://formspree.io/f/xgvdkjpd", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  // TYHDO Office Coordinates (Upanga, Dar es Salaam near Muhimbili)
  const tyhdoLocation: [number, number] = [-6.8066, 39.2745];

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/assets/01.jpg')" }}>
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative text-center text-white px-6">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-extrabold mb-6"
          >
            Get in Touch
          </motion.h1>
          <p className="text-xl md:text-3xl font-light">We’d love to hear from you</p>
        </div>
      </section>

      {/* CONTACT INFO + FORM + MAP */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left: Contact Info + Map */}
            <div className="space-y-10">
              <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <h2 className="text-4xl font-bold text-gray-800 mb-10">Contact Information</h2>

                <div className="grid md:grid-cols-1 gap-8">
                  {/* Address */}
                  <div className="flex gap-6 bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
                    <div className="w-16 h-16 bg-[#0073A4] rounded-full flex items-center justify-center text-white text-3xl">
                      <MapPin/>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800">Our Address</h3>
                      <p className="text-gray-600 mt-2 leading-relaxed">
                        UN Road No. 9<br />
                        P.O. Box 65001<br />
                        Upanga, Muhimbili<br />
                        Dar es Salaam, Tanzania
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex gap-6 bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
                    <div className="w-16 h-16 bg-[#0073A4] rounded-full flex items-center justify-center text-white text-3xl">
                      <Mail/>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800">Email Us</h3>
                      <a href="mailto:info@tyhdo.or.tz" className="text-xl text-[#0073A4] hover:underline">
                        info@tyhdo.or.tz
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex gap-6 bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
                    <div className="w-16 h-16 bg-[#0073A4] rounded-full flex items-center justify-center text-white text-3xl">
                      <Phone/>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800">Call Us</h3>
                      <a href="tel:+255755097911" className="text-xl text-[#0073A4] hover:underline">
                        +255 755 097 911
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Interactive Map */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="h-96 rounded-2xl overflow-hidden shadow-2xl mt-12"
              >
                <MapContainer center={tyhdoLocation} zoom={16} style={{ height: "100%", width: "100%" }}>
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
                  />
                  <Marker position={tyhdoLocation} icon={customIcon}>
                    <Popup>
                      <strong>TYHDO Headquarters</strong><br />
                      UN Road No. 9, Upanga<br />
                      Dar es Salaam, Tanzania
                    </Popup>
                  </Marker>
                </MapContainer>
              </motion.div>
            </div>

            {/* Right: Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-3xl shadow-2xl"
            >
              <h2 className="text-4xl font-bold text-gray-800 mb-8">Send Us a Message</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:outline-none focus:border-[#0073A4] transition"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                    className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:outline-none focus:border-[#0073A4] transition"
                  />
                </div>

                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  required
                  className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:outline-none focus:border-[#0073A4] transition"
                />

                <textarea
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  required
                  className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:outline-none focus:border-[#0073A4] transition resize-none"
                />

                <div className="text-center">
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="bg-[#0073A4] hover:bg-[#005f7a] text-white font-bold text-lg py-5 px-12 rounded-full transition transform hover:scale-105 disabled:opacity-70"
                  >
                    {status === "sending" ? "Sending..." : "Send Message"}
                  </button>
                </div>

                {/* Status Messages */}
                {status === "success" && (
                  <p className="text-green-600 text-center font-semibold">Thank you! Your message has been sent.</p>
                )}
                {status === "error" && (
                  <p className="text-red-600 text-center font-semibold">Oops! Something went wrong. Please try again.</p>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-[#0073A4] text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Visit Us Today</h2>
          <p className="text-xl">
            Our office is open Monday–Friday, 9:00 AM – 5:00 PM<br />
            We’re located just 5 minutes from Muhimbili National Hospital
          </p>
        </div>
      </section>
    </>
  );
};

export default Contact;