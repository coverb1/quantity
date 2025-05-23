import React, { useState } from 'react'
import { Routes,Route} from 'react-router-dom'
import Contact from './Contactpop/Contact'
import Navbar from './Navbar/Navbar'
const App = () => {
  const[showcontact,setshowcontact]=useState(false)
  return (
    <div>
      {showcontact?<Contact setshowcontact={setshowcontact}/>:<></>}
   <Routes>
    <Route path='/' element={<Navbar setshowcontact={setshowcontact}/>}/>
   </Routes>
    </div>
  )
}

export default App
