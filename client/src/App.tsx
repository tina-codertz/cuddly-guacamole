import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainLayout from './Layout/MainLayout'
import About from './pages/About'
import Contacts from './pages/Contacts'
import Donation from './pages/Donation'
import Events from './pages/Events'
import Programs from './pages/Programs'
import Home from './pages/Home'

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainLayout/>}>
          {/* nested routes  */}
         <Route path='home' element={<Home/>}/>
         <Route path="about" element={<About/>}/>
         <Route path="contacts" element={<Contacts/>}/>
         <Route path="donation" element={<Donation/>}/>
         <Route path="events" element={<Events/>}/>
         <Route path="programs" element={<Programs/>}/>

        </Route>
       

      </Routes>

    </Router>
   
  );
};

export default App