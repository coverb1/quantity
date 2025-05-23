import React, { useState,useRef } from 'react'
import emailjs from '@emailjs/browser';
import './Contact.css'
import { assets } from '../assets/asset'


const Contact = ({setshowcontact}) => {
    const[currstate,setcurrstate]=useState("Inz.Bruce")
  return (

    <div className='contact-popup'>
      <form className='contact-container'>
<div className='talk-tome'>
    <p>{currstate}</p>
    <img src={assets.closeicon} onClick={()=>setshowcontact(false)} alt="" />
</div>
<div className='name-container'> 
<input type="text" placeholder='First name' />
<input type="text" placeholder='Second name'/>
</div>
<input type="text"  placeholder='Email address' required/>
<input type="text"  placeholder='Street' required/>
<div className='message-container'>
<textarea placeholder='Message'></textarea>
</div>
<button className='popup-button'>Send Mesaage</button>
      </form>
    </div>
  )
}

export default Contact
