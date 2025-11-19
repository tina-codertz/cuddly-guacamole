import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainLayout from './Layout/MainLayout'
import About from './pages/About'
import Contacts from './pages/Contacts'
import Donation from './pages/Donation'
import Events from './pages/Events'
import Programs from './pages/Programs'
import Home from './pages/Home'
import Amr from './pages/programs/Amr'
import YouthProgram from './pages/programs/YouthProgram'

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route  element={<MainLayout/>}>
          {/* nested routes  */}
         <Route path='/' element={<Home/>}/>
         <Route path="about" element={<About/>}/>
         <Route path="contacts" element={<Contacts/>}/>
         <Route path="donation" element={<Donation/>}/>
         <Route path="events" element={<Events/>}/>
         <Route path="programs" element={<Programs/>}/>
         <Route path="programs/amr" element={<Amr/>}/>
         <Route path="programs/youth" element={<YouthProgram/>}/>

        </Route>
       

      </Routes>

    </Router>
   
  );
};

export default App