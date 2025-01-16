import React from 'react';
import './service.css';
import logo from '../images/Frame 9.png';
import { useNavigate } from 'react-router-dom';
const Service = () => {
    const navigate = useNavigate();

    const handleDiscoverMore = () => {
      navigate('/serve');
    }

    return(
<div>
    <div className='serve'>
    <img src={logo} alt='icon' className='logo' />
    
        <h3>Our Services</h3>
        <p>We build tailored software solutions from scratch, ensuring they align perfectly with your business processes and goals. Our expertise spans across various industries, enabling us to deliver bespoke applications that cater to your specific requirements. Our expertise spans across various industries, enabling us to deliver bespoke applications that cater to your specific requirements.</p>
    <button onClick={handleDiscoverMore}>Discover More</button>

    <div className='soft-under'></div>
    <div className='soft-under1'></div>
    <div className='soft-under2'></div>
    <div className='soft-under3'></div>
    <p1>Software Development
        
    </p1>   <svg width="49" height="70" viewBox="0 0 60 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.5 20.8L17.3 4L2.25 4V0.5L23.25 0.5L23.25 21.5H19.75L19.75 6.45L2.95 23.25L0.5 20.8Z" fill="white"/>
</svg>
    <p2>Marketing & Branding  <svg width="49" height="80" viewBox="0 0 60 115" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.5 20.8L17.3 4L2.25 4V0.5L23.25 0.5L23.25 21.5H19.75L19.75 6.45L2.95 23.25L0.5 20.8Z" fill="white"/>
</svg></p2>
    <p3>Business Consulting   <svg width="49" height="80" viewBox="0 0 60 115" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.5 20.8L17.3 4L2.25 4V0.5L23.25 0.5L23.25 21.5H19.75L19.75 6.45L2.95 23.25L0.5 20.8Z" fill="white"/>
</svg> </p3>
    <p4>Staffing & Recruitment  <svg width="49" height="80" viewBox="0 0 60 115" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.5 20.8L17.3 4L2.25 4V0.5L23.25 0.5L23.25 21.5H19.75L19.75 6.45L2.95 23.25L0.5 20.8Z" fill="white"/>
</svg></p4>
    </div>
</div>


    )
}

export default Service;