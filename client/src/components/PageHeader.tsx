import { Mail, Phone } from 'lucide-react';
// import { it } from 'node:test';
import React from 'react'
import { Link } from 'react-router-dom';

 type ContactItem ={
    label:string;
    value:string;
    icon:React.ReactNode;
    link:string
 };

 const contactItems:ContactItem[]=[
 {
    label:"Email",
    value:"info@thydo.or.tz",
    icon:<Mail size={18} className='text-white'/>,
    link:"mailto:info@thydo.or.tz"
 },

 {
    label:"Phone",
    value:"+255 755 097 911",
    icon:<Phone size={18} className='text-white'/>,
    link:"tel:+255755097911"
    
 },

];

const PageHeader: React.FC = () => {
  return (
    <div className="bg-[#0073A4] w-full text-gray-300">
      <div className="flex flex-wrap items-center justify-between mx-auto max-w-7xl px-2 sm:px-4 py-2 gap-2">

        {/* LEFT SIDE CONTACT ITEMS */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-xs sm:text-sm">
          {contactItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="flex items-center gap-1 hover:text-white transition"
            >
              {item.icon}
              <span>{item.value}</span>
            </a>
          ))}
        </div>

        {/* DONATE BUTTON */}
        <button className="bg-red-600 hover:bg-red-700 text-white rounded-lg text-xs sm:text-sm px-4 py-2 sm:px-6 sm:py-3">
          <Link to="/donation">Donate Now</Link>
        </button>
      </div>
    </div>
  );
};


export default PageHeader