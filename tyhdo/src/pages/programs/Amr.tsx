import React from "react";

const Amr: React.FC = () => {
  return (
    <div className="w-full bg-gray-50 text-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-16 space-y-16">

        {/* HEADER */}
        <section className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-[#0073A4]">My AMR Story Initiative</h1>
          <p className="max-w-3xl mx-auto text-lg">
            Humanizing Antimicrobial Resistance through Real Tanzanian Stories
          </p>
        </section>
        {/* INTRODUCTION */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-[#0073A4]">1. Introduction</h2>

          <p className="leading-relaxed mb-4">
            Antimicrobial resistance (AMR) is a rapidly escalating global health crisis threatening
            decades of medical progress. Millions of deaths occur each year due to resistant infections,
            with low- and middle-income countries, including Tanzania, facing the greatest burden.
            Contributing factors in Tanzania include irrational antibiotic use, weak diagnostic capacity,
            and inadequate infection prevention measures.
          </p>

          <p className="leading-relaxed mb-4">
            Projections show that without immediate national and global action, AMR could cause
            <strong> 10 million deaths annually by 2050</strong> and a cumulative economic loss of
            <strong> over USD 100 trillion</strong>. In 2021, Tanzania recorded an estimated
            <strong> 9,230 AMR-attributable deaths</strong> and
            <strong> 42,200 AMR-associated deaths</strong>, ranking 32nd globally in age-standardized
            AMR mortality.
          </p>

          <p className="leading-relaxed">
            Despite these alarming statistics, AMR is often viewed as a technical or distant issue,
            overshadowing the real human experiences behind the numbers—prolonged hospital stays,
            the emotional pain of losing loved ones, and the struggles faced by frontline healthcare
            workers. These lived realities remain largely invisible.
          </p>
        </section>

        {/* INITIATIVE OVERVIEW */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-[#0073A4]">2. Initiative Overview</h2>

          <p className="leading-relaxed mb-4">
            “My AMR Story” aims to bring the AMR crisis closer to home by collecting and amplifying
            real-life stories from Tanzanian patients, families, and healthcare providers. The project
            turns data into relatable human experiences that can educate, inspire, and mobilize both
            communities and policymakers.
          </p>

          <p className="leading-relaxed mb-4">
            The initiative aligns with the WHO Global Action Plan on AMR, which emphasizes the need
            for advocacy and community engagement as key strategies for combating antimicrobial
            resistance. By publicly sharing authentic narratives, the project seeks to strengthen
            understanding and encourage positive policy and behavioral changes.
          </p>

          <p className="leading-relaxed">
            Through storytelling, “My AMR Story” elevates the voices of those affected and uses their
            experiences as powerful tools to influence decision-making and promote responsible
            antibiotic use across the country.
          </p>
        </section>

        {/* OBJECTIVES */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-[#0073A4]">3. Objectives</h2>

          <ul className="list-decimal ml-6 space-y-3">
            <li>
              Document and share personal AMR experiences from patients, relatives, and healthcare
              workers in Tanzania.
            </li>
            <li>
              Raise public awareness on AMR through storytelling campaigns that highlight the
              consequences of irrational antibiotic use.
            </li>
            <li>
              Influence policy and behavior change by using human stories as advocacy tools to support
              stronger AMR policies, responsible antibiotic use, and improved infection prevention.
            </li>
          </ul>
        </section>

      </div>
    </div>
  );
};

export default Amr;
