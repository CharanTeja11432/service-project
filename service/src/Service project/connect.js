import React from "react";
import './connect.css';
import connect from '../images/Connect.jpg';
import logo from '../images/Frame 9.png';
import india from '../images/india.png';
import down from '../images/down.png';
import { useNavigate } from 'react-router-dom';
const Connect =()=>{

    const navigate = useNavigate();

    const handlehome = () => {
      navigate('/');
    }
    return(
        <div>
            <img src={connect} alt='icon' className='connect-img' />
            <img src={logo} alt='icon' className='con' />
            <div className="connectfinal">
            <h2>Let ‘s Connect</h2>
            <p>We'd love to hear from you. Reach out to us for any inquiries, collaborations, or just to say hello!</p>
            <p1 >Your Name</p1>
            <div className='underline'></div>
            <p2 >Company</p2>
            <div className='underline1'></div>
            <p3 >Email</p3>
            <div className='underline2'></div>
            <img src={india} alt='icon' className='india' />
            <p4 >Phone Number</p4>
            <div className='underline3'></div>
            <img src={down} alt='icon' className='down' />
            <p5 >What Are You Looing For</p5>
            <div className='underline4'></div>

            <button  onClick={handlehome}>
            Let’s get start
            </button>
            <svg width="65" height="80" viewBox="0 0 90 1" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.5 20.8L17.3 4L2.25 4V0.5L23.25 0.5L23.25 21.5H19.75L19.75 6.45L2.95 23.25L0.5 20.8Z" fill="white"/>
</svg>
            </div>
        </div>
    )
}
export default Connect;