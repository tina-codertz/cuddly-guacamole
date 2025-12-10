import React from "react";

const YouthProgram: React.FC = () => {
  return (
    <div className="w-full bg-gray-50 text-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-16 space-y-20">

        {/* HEADER */}
        <section className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-[#0073A4]">YouthPulse Program 2025</h1>
          <p className="text-lg max-w-3xl mx-auto">
            An intensive youth capacity-building initiative empowering young Tanzanians 
            to become public health advocates, policy influencers, and researchers.
          </p>
        </section>

        {/* ORGANIZATION INFO */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-[#0073A4]">About the Organization</h2>
          <p className="leading-relaxed">
            Tanzania Youth Health and Development Organization (TYHDO) is a registered youth-led 
            non-profit dedicated to promoting public health through youth-driven advocacy, 
            research, and community engagement. Based in Dar es Salaam, TYHDO empowers young 
            people to lead transformative health initiatives across Tanzania.
          </p>
          <p className="leading-relaxed mt-4">
            Focus areas include AMR, NTDs, NCDs, SRHR, HIV/AIDS, and health research through 
            youth-led technical clusters.
          </p>
        </section>

        {/* PROGRAM OVERVIEW */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-[#0073A4]">Program Overview</h2>
          <p className="leading-relaxed">
            The YouthPulse Program 2025 is a 10-week structured training program that builds 
            youth capacity in advocacy, policy engagement, and research. It engages young 
            leaders nationwide to address pressing public health challenges through 
            evidence-based approaches and community-centered actions.
          </p>
        </section>

        {/* OBJECTIVES */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-[#0073A4]">Program Objectives</h2>

          <ul className="list-disc ml-6 space-y-2">
            <li>
              <strong>Capacity Development:</strong> Train at least 30 youth in public health 
              advocacy, policy processes, and research methods.
            </li>
            <li>
              <strong>Policy Engagement:</strong> Facilitate youth participation in national 
              and community policy dialogues.
            </li>
            <li>
              <strong>Research Skills:</strong> Equip participants with community-based research 
              skills.
            </li>
            <li>
              <strong>Networking:</strong> Connect youth with policymakers, health professionals, 
              and organizations.
            </li>
            <li>
              <strong>Sustainability:</strong> Establish a youth network that continues beyond 
              the program.
            </li>
          </ul>
        </section>

        {/* EXPECTED OUTCOMES */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-[#0073A4]">Expected Outcomes</h2>

          <h3 className="font-semibold text-[#0073A4]">Short-term</h3>
          <ul className="list-disc ml-6 mb-4">
            <li>Participants equipped with practical advocacy and research skills.</li>
            <li>Youth-led advocacy projects ready for implementation.</li>
            <li>Stronger youth voices in public health discussions.</li>
          </ul>

          <h3 className="font-semibold text-[#0073A4]">Medium-term</h3>
          <ul className="list-disc ml-6 mb-4">
            <li>Improved youth-led health interventions in communities.</li>
            <li>Documented youth contributions to policy reviews.</li>
          </ul>

          <h3 className="font-semibold text-[#0073A4]">Long-term</h3>
          <ul className="list-disc ml-6">
            <li>Increased youth involvement in national and global public health advocacy.</li>
            <li>Creation of an annual Tanzania Youth Health Forum.</li>
          </ul>
        </section>

        {/* PROBLEM STATEMENT */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-[#0073A4]">Problem Statement</h2>
          <p className="leading-relaxed mb-4">
            Tanzania is a young nation, with youth aged 15–35 making up nearly half of the 
            population. Despite this, young people remain underrepresented in public health 
            planning and policy development.
          </p>
          <p className="leading-relaxed">
            Less than 5% of national health policies include youth contributions, and fewer 
            than 1 in 10 youth organizations have access to platforms where they can influence 
            health-related decisions. Youth lack the tools, skills, and spaces needed for 
            meaningful engagement.
          </p>
        </section>

        {/* PROGRAM SUCCESSION PLAN */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-[#0073A4]">Program Succession Plan</h2>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-[#0073A4]">Phase 1: Planning & Mobilization</h3>
              <ul className="list-disc ml-6">
                <li>Concept finalization</li>
                <li>Curriculum development</li>
                <li>Partnership engagement</li>
                <li>Resource mobilization</li>
                <li>Participant recruitment</li>
                <li>Facilitator onboarding</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-[#0073A4]">Phase 2: Practical Implementation</h3>
              <ul className="list-disc ml-6">
                <li>Session delivery (advocacy, policy, research)</li>
                <li>Mentorship and coaching</li>
                <li>Field exposure</li>
                <li>Monitoring and evaluation</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-[#0073A4]">Phase 3: Alumni Network</h3>
              <ul className="list-disc ml-6">
                <li>Alumni network formation</li>
                <li>Continued mentorship roles</li>
                <li>Youth integration into TYHDO programs</li>
                <li>Impact amplification</li>
              </ul>
            </div>
          </div>
        </section>

        {/* BUDGET */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-[#0073A4]">Program Budget</h2>

          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300">
              <thead className="bg-[#0073A4] text-white">
                <tr>
                  <th className="p-3 text-left">Item</th>
                  <th className="p-3 text-left">Description</th>
                  <th className="p-3 text-left">Cost (TZS)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Program Materials</td>
                  <td className="p-3">Fliers & Banners Printing</td>
                  <td className="p-3">1,000,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Community Engagement</td>
                  <td className="p-3">50 Branded T-shirts for Advocacy Campaign</td>
                  <td className="p-3">750,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Graduation & Showcase</td>
                  <td className="p-3">Venue, Food, Drinks, Media, Branding</td>
                  <td className="p-3">1,000,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Facilitator Honoraria</td>
                  <td className="p-3">10 Facilitators @ 70,000</td>
                  <td className="p-3">700,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Internet Reimbursement</td>
                  <td className="p-3">30 Youth @ 50,000</td>
                  <td className="p-3">1,500,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Report & Evaluation</td>
                  <td className="p-3">Baseline report, writing & printing</td>
                  <td className="p-3">250,000</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold" colSpan={2}>TOTAL</td>
                  <td className="p-3 font-semibold">5,200,000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* SPONSORSHIP */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-[#0073A4]">Call for Sponsorship</h2>
          <p className="leading-relaxed">
            We welcome partners and donors passionate about youth leadership and public health 
            to support the YouthPulse Program 2025. Your contribution helps build a generation 
            of informed and empowered youth advocates across Tanzania.
          </p>

          <h3 className="text-xl font-semibold mt-6 text-[#0073A4]">Sponsorship Packages</h3>

          <ul className="list-disc ml-6 space-y-3 mt-4">
            <li><strong>Silver – 500,000 TZS:</strong> Logo on social media, promotional materials, and announcements.</li>
            <li><strong>Gold – 1,000,000 TZS:</strong> Additional recognition, half-page advert in final report.</li>
            <li><strong>Platinum – 1,500,000 TZS:</strong> Premium visibility, logo on T-shirts, up to 2-page advert.</li>
          </ul>
        </section>

        {/* BANK INFORMATION */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-[#0073A4]">Bank Information</h2>
          <p><strong>Bank Name:</strong> NMB Bank – Muhimbili Branch</p>
          <p><strong>Account Number:</strong> 20910042304</p>
          <p><strong>Account Name:</strong> Tanzania Youth Health and Development Organization</p>
          <p className="mt-2">
            Please include the note: <span className="italic">“Sponsorship/Support/Donation for YouthPulse Program 2025”</span>.
          </p>

          <h3 className="text-xl font-semibold mt-6 text-[#0073A4]">Contact Person</h3>
          <p><strong>Ms. Meseline Mulokozi</strong></p>
          <p>Program Manager, TYHDO</p>
          <p>+255 755 097 911</p>
          <p>meselinemulokozi@tyhdo.or.tz</p>
        </section>

      </div>
    </div>
  );
};

export default YouthProgram;
