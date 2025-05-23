import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-scroll'
import {assets} from '../assets/asset'
import { Menu,X } from 'lucide-react'
import { motion } from 'framer-motion';
const Navbar = ({setshowcontact}) => {
const [menuopen,setmenuopen]=useState(false)
  return (
    <div className='nav-container'>
       <div className='openmenu' onClick={()=>setmenuopen(!menuopen)}>
<Menu size={30}/>
</div>
{menuopen&&(
  <div className='mobile-nav'>
<div className='close-icon' onClick={()=>setmenuopen(false)}>
  <X size={20}/>
</div>
<Link className='link-responsive' to='home' onClick={()=>setmenuopen(false)}>Home</Link>
<Link className='link-responsive' 
onClick={()=>{setmenuopen(false);
setshowcontact(true)
}}>Contact-Us</Link>
<Link className='link-responsive' to='about' onClick={()=>setmenuopen(false)}>About</Link>
  </div>
)}
 <div className='up-navbars'>
   
<ul className='up-navbar'>
<li><Link className='navbar-name' to="home"
smooth={true}
duration={500}
>Home</Link></li>
<li><Link className='navbar-name' to="about"
smooth={true}
duration={500}
>About-Me</Link></li>
<div className='navbar-menu'>
<li onClick={()=>setshowcontact(true)}>Contact-Me</li>
</div>
</ul>
     </div>  
<div className='left-body' id='home'>
<h1>I'm <span>INEZA Bruce,</span></h1>
<p>Aspiring Quantity Surveyor</p>
</div>

<div className="button-container">
  <button className="btn-solid">My Cv↗</button>
  <button className="btn-outline">Hire me</button>
</div>

<motion.div
  className='body-container'
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
>
  <div className='left-words'>
    <p>
      I am a dedicated and detail-oriented future Quantity Surveyor with a strong 
      foundation in cost estimation, construction measurement, and project
      management. Passionate about delivering value through accurate 
      budgeting, efficient resource management, and contract administration. 
      Eager to contribute to sustainable and cost-effective construction solutions
      while continuously developing my technical and professional skills.
    </p>
  </div>

  <div className='middle-container'>
    <motion.img
      src={assets.out}
      alt=""
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    />
  </div>

  <motion.div
    className='lelt-container'
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 1, delay: 0.7 }}
  >
    <img src={assets.ratingicon} alt="" />
    <p>+10 Years</p>
    <p>Experiance</p>
  </motion.div>
</motion.div>

<div className='head-whoiam' id='about'>
<h2>Who I'm?</h2>
</div>
<div className='who-iam'>
 <div className='who-iam-body1'>
  <h3>1. First</h3>
   <img src={assets.survor1} alt="" />
   <p>I work as a Quantity Surveyor, where I specialize in managing the financial aspects of construction projects. I prepare accurate cost estimates, control 
    budgets, and make sure that all spending aligns with the project's goals.</p>
<h3>2. Second</h3>
     <img src={assets.survor2} alt="" />
   <p>As a Quantity Surveyor, I help plan and control the cost of building projects. I create cost estimates, 
    set budgets, and make sure we don’t spend more than planned.</p>
 </div>

  <div className='who-iam-body2'>
    <h3>3. Third</h3>
   <img src={assets.survor3} alt="" />
   <p>As a Quantity Surveyor, I help plan and control the cost of building projects. I create cost estimates, 
    set budgets, and make sure we don’t spend more than planned.</p>

    <img src={assets.trainee} alt="" />
    <p>As your trusted Quantity Surveyor, I bring dedication, professionalism, and a deep understanding of construction economics to every project. I look forward to working closely with you to
       deliver projects on time, within budget, and to the highest quality standards.</p>
 </div>

 <div className='who-iam-body2'>
  <h3>4. Fourth</h3>
   <img src={assets.survor4} alt="" />
   <p>In my work as a Quantity Surveyor, I handle all the financial parts of construction projects. From the early planning stage to the final touches, 
    I manage costs, prepare reports, and monitor the project’s progress.</p>
 </div>
</div>
    </div>
  )
}

export default Navbar
