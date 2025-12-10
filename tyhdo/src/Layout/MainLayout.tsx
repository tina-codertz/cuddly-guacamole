import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
import PageHeader from '../components/PageHeader'

const MainLayout:React.FC = () => {
  return (
    <div className='flex flex-col min-h-screen bg-white text-gray-900'>
        <PageHeader/>
        <Navbar/>

        {/* page content */}
        <main className='flex-1 w-full max-w-7xl mx-auto px-4 py-6'>
            <Outlet/>
        </main>
        
        <Footer/>
        
    </div>
  )
}

export default MainLayout