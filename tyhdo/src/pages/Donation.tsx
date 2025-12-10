// src/pages/Donate.tsx
import React from "react";
import {  motion } from "framer-motion";
import { BanknoteIcon } from "lucide-react";

const Donate: React.FC = () => {
  // const [amount, setAmount] = useState<string>("50000");
  // const [customAmount, setCustomAmount] = useState<string>("");
  // const [isCustom, setIsCustom] = useState(false);

  // const presetAmounts = ["10000", "25000", "50000", "100000", "250000", "500000"];

  // M-Pesa, Tigo Pesa, Airtel Money, Bank Transfer
  const paymentMethods = [
    // { name: "M-Pesa", logo: "M-Pesa", color: "bg-green-600" },
    // { name: "Tigo Pesa", logo: "Tigo Pesa", color: "bg-yellow-500" },
    // { name: "Airtel Money", logo: "Airtel Money", color: "bg-red-600" },
    { name: "NMB ACC/NO 20910042304", icon:BanknoteIcon , Accountname: "TANZANIA YOUTH HEALTH AND DEVELOPMENT ORGN", color: "bg-blue-600" },
  ];

  return (
    <>
      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/assets/01.jpg')" }}>
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative text-center text-white px-6 max-w-5xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight"
          >
            Your Gift Changes Lives
          </motion.h1>
          <p className="text-2xl md:text-4xl font-light mb-10">
            Every shilling empowers a young Tanzanian to lead the fight for better health.
          </p>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            <a
              href="#donate-form"
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold text-2xl py-6 px-16 rounded-full transition transform hover:scale-110 shadow-2xl"
            >
              Donate Now
            </a>
          </motion.div>
        </div>
      </section>

      {/* IMPACT SECTION */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-12">What Your Donation Can Do</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {  impact: "Provides reusable sanitary pads for 10 schoolgirls for a full year" },
              {  impact: "Trains one youth AMR ambassador to educate 500+ community members" },
              {  impact: "Sponsors a young researcher in our Tanzania Youth Research Fellowship" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="bg-white p-10 rounded-2xl shadow-xl hover:shadow-2xl transition"
              >
                {/* <div className="text-4xl font-bold text-[#0073A4] mb-4">{item.amount}</div> */}
                <p className="text-xl text-gray-700 leading-relaxed">{item.impact}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DONATION FORM */}
      <section id="donate-form" className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Make Your Donation Today</h2>
            <p className="text-xl text-gray-600">100% of your donation goes directly to youth-led health programs in Tanzania</p>
          </div>

          <div className="bg-gray-50 rounded-3xl p-10 shadow-2xl">
            {/* Amount Selection */}
            {/* <div className="mb-10">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Choose Your Amount (TZS)</h3>
              <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mb-6">
                {presetAmounts.map((amt) => (
                  <button
                    key={amt}
                    onClick={() => { setAmount(amt); setIsCustom(false); }}
                    className={`py-4 px-6 rounded-xl font-bold text-lg transition ${
                      amount === amt && !isCustom
                        ? "bg-[#0073A4] text-white shadow-lg scale-105"
                        : "bg-white border-2 border-gray-300 hover:border-[#0073A4]"
                    }`}
                  >
                    {Number(amt).toLocaleString()}
                  </button>
                ))}
              </div>
              <div className="text-center">
                <button
                  onClick={() => { setIsCustom(true); setAmount(customAmount || ""); }}
                  className="text-[#0073A4] font-bold underline text-lg"
                >
                  Or enter custom amount
                </button>
                {isCustom && (
                  <input
                    type="number"
                    value={customAmount}
                    onChange={(e) => setCustomAmount(e.target.value)}
                    placeholder="e.g. 75000"
                    className="mt-4 w-full max-w-xs mx-auto px-6 py-4 border-2 border-[#0073A4] rounded-xl text-center text-2xl font-bold focus:outline-none"
                  />
                )}
              </div>
            </div> */}

            {/* Payment Methods */}
            <div className="mb-10">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center"> Payment Method</h3>
              <div className=" gap-6">
                {paymentMethods.map((method) => (
                  <div
                    key={method.name}
                    className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition text-center cursor-pointer border-2 border-transparent hover:border-[#0073A4]"
                  >
                    <div className={`w-16 h-16 ${method.color} rounded-full mx-auto mb-4 flex items-center justify-center text-white text-3xl font-bold`}>
                      <method.icon />
                    </div>
                    
                    <p className="font-semibold text-gray-800">{method.name}</p>
                    {method.Accountname && (
                      <p className="text-sm text-gray-600">{method.Accountname}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
            {/* Final CTA */}
            {/* <div className="text-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <button className="bg-[#0073A4] hover:bg-[#005f7a] text-white font-bold text-2xl py-6 px-20 rounded-full shadow-2xl transition transform">
                  Complete Donation → TZS {(isCustom ? customAmount : amount || "0").replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </button>
              </motion.div>
              <p className="mt-6 text-gray-600">
                You’ll receive an instant receipt via SMS/email.<br />
                <strong>TYHDO is registered with the Tanzania Revenue Authority (TRA) — your donation is tax-deductible.</strong>
              </p>
            </div> */}
          </div>
        </div>
      </section>

      {/* TRUST & TRANSPARENCY */}
      <section className="py-16 px-6 bg-[#0073A4] text-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">
          <div>
            <div className="text-5xl mb-4">100%</div>
            <p className="text-xl font-bold">Of donations go to programs</p>
          </div>
          <div>
            <div className="text-5xl mb-4">Check</div>
            <p className="text-xl font-bold">Annual audited financial reports available</p>
          </div>
          <div>
            <div className="text-5xl mb-4">Lock</div>
            <p className="text-xl font-bold">Secure & transparent donation process</p>
          </div>
        </div>
      </section>

      {/* MOBILE MONEY INSTRUCTIONS */}
      {/* <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-10">How to Donate via Mobile Money</h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-4xl mb-4">1</div>
              <h3 className="font-bold text-xl mb-3">Dial</h3>
              <p className="text-gray-700">*150*00# (Vodacom)<br />*150*01# (Tigo)<br />*150*60# (Airtel)</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-4xl mb-4">2</div>
              <h3 className="font-bold text-xl mb-3">Choose</h3>
              <p className="text-gray-700">Send Money → Enter Number:<br />
                <strong className="text-[#0073A4] text-2xl">0755 097 911</strong><br />
                Name: TYHDO
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-4xl mb-4">3</div>
              <h3 className="font-bold text-xl mb-3">Complete</h3>
              <p className="text-gray-700">Enter Amount → PIN → Reference: <strong>DONATE</strong><br />
                You’ll get a confirmation SMS instantly!
              </p>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default Donate;