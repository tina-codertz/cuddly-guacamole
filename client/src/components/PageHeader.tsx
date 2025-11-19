import { Mail, Phone } from 'lucide-react';
// import { it } from 'node:test';
import React from 'react'

 type ContactItem ={
    label:string;
    value:string;
    icon:React.ReactNode;
    link:string
 };

 const contactItems:ContactItem[]=[
 {
    label:"Email",
    value:"info@thydo.org",
    icon:<Mail size={18} className='text-white'/>,
    link:"mailto:info@thydo.org"
 },

 {
    label:"Phone",
    value:"+255 755 097 911",
    icon:<Phone size={18} className='text-white'/>,
    link:"tel:+255755097911"
    
 },

];

const PageHeader:React.FC = () => {
  return (
    <div className='bg-[#0073A4] w-full text-gray-300 '>
        <div className='flex items-center justify-between mx-auto max-w-7xl px-4 py-2 ' >
            <div className='flex items-center space-x-6'>
                {contactItems.map((item, index)=>(
                    <a
                    key={index}
                    href={item.link}
                    className='flex items-center gap-1 hover:text-white transition text-sm '>
                        {item.icon}
                        <span className='text-sm'>{item.value}</span>
                    </a>
                ))}
            </div>

            <button className='bg-red-600 hover:bg-red-700 text-white rounded-full ml-1 text-sm transition p-3 sm:px-6 sm:py-3'>
               <a href="/donation">Donate Now</a>
            </button>
        </div>
    </div>
  )
}

export default PageHeader