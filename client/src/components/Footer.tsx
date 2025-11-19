import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'
// import React from 'react'

const Footer = () => {

  const year = new Date().getFullYear()

  return (
    <footer className='bg-[#0073A4] text-gray-300  mt-12 py-12 px-6'>
      <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10'>

        {/* logo and about  */}
        <div>
          <h2 className='text-2xl font-bold text-white'>TYHDO</h2>
          <p className='mt-3 text-sm leading-6'>Tanzania Youth Health and Development Organization is  committed to empowering youth through health education, development programs, mentorship, and community outreach </p>
        </div>

        {/* qiuck links */}
        <div>
          <h3 className='text-lg font-semibold text-white mb-4'>Quick Links</h3>
          <ul className='space-y-2 text-sm'>
            <li><a href="/about" className='hover:text-white'>About Us</a></li>
            <li><a href="/programs" className='hover:text-white'>Programs</a></li>
            <li><a href="/events" className='hover:text-white'>Events</a></li>
            <li><a href="/donate" className='hover:text-white'>Donate</a></li>
            <li><a href="/contact" className='hover:text-white'>Contact</a></li>
          </ul>
        </div>

        {/* contact info */}
        <div>
          <h3 className='text-white font-semibold text-lg mb-4'> Contact</h3>
          <ul>
            <li>Email: <a href="mailto:info@tyhdo.or.tz">info@tyhdo.or.tz </a></li>
            <li>Phone: +255 123 456 789</li>
            <li>Address: Dar es Salaam, Tanzania</li>
        
          </ul>
        </div>

        {/* socials links */}
        <div>
          <h3 className='text-lg font-semibold text-white mb-4'>Follow Us</h3>
          <div className='flex space-x-4'>
            <a href="" className='hover:text-white transition'><Facebook size={20}/></a>
            <a href="" className='hover:text-white transition'><Twitter size={20}/></a>
            <a href="" className='hover:text-white transition'><Instagram size={20}/></a>
            <a href="" className='hover:text-white transition'><Linkedin size={20}/></a>
        
          </div>
          
        </div>
      </div>

      <div className='border-t border-gray-700 mt-10 text-center text-sm text-gray-400'>
        <p className='text-center text-sm mt-8'>&copy; {year} Tanzania Youth Health and Development Organization. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
