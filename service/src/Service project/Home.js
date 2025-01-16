import React from "react";
import icon from '../images/icon.jpg';
import icon1 from '../images/icon1.jpg';
import icon3 from '../images/icon3.jpg';
import icon4 from '../images/icon4.jpg';
import icon5 from '../images/icon5.jpg';
import icon6 from '../images/icon6.jpg';
import icon7 from '../images/icon7.jpg';
import icon8 from '../images/icon8.jpg';
import featured from '../images/Featured.jpg';
import './head.css';
import Side from '../images/side.jpg';
import home6 from '../images/Home6.jpg';
import Slide from '../images/slide.jpg';
import Girl from '../images/girl.jpg';
import Boy from '../images/boy.jpg';
import Girl2 from '../images/girl2.jpg';
import Boy1 from '../images/boy1.jpg';
import Girl3 from '../images/girl3.jpg';
import logo from '../images/Frame 9.png';
import search from '../images/search.png';
import software from '../images/software.png';
import marketing from '../images/marketing.png';
import staff from '../images/staff.png';
import bussiness from '../images/bussiness.png';
import bajaj from '../images/bajaj.png';
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Carousel } from 'react-responsive-carousel';

const Home = () => {
    

    return (
        <div className="myhome" >
        <div className="home-container" >
             <div className="home">
            <img src={logo} alt='icon' className='logo' />
            <img src={search} alt='icon' className='search' />
            <button1>Contact Us</button1>
                <h1>Comprehensive Solutions for Your Business Success</h1>
                <p>
                    Empower your business with our expert services in software development, marketing & branding,
                    business consulting, and staffing & recruitment. Let's build a brighter future together.
                </p>
                <button class="connect-button">
    <span class="button-text">Let's Connect</span>
   
    <svg width="49" height="70" viewBox="0 0 60 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.5 20.8L17.3 4L2.25 4V0.5L23.25 0.5L23.25 21.5H19.75L19.75 6.45L2.95 23.25L0.5 20.8Z" fill="white"/>
</svg>
</button>



            </div>
        
 <div className="container">
    <div className="home2">
        <h3>Trusted by </h3>
        <h2> GreatBrands</h2>
        <p>
            Join the ranks of successful companies that have partnered with us for unparalleled expertise and
            innovative solutions. Experience the difference with our proven track record of excellence.
        </p>
    </div>
    <div className="separator"></div>
    <div className="image-grid">
        <img src={icon} alt='icon' className='grid-image' />
        <img src={icon1} alt='icon' className='grid-image' />
        <img src={icon4} alt='icon' className='grid-image' />
        <img src={icon3} alt='icon' className='grid-image' />
        <img src={icon4} alt='icon' className='grid-image' />
        <img src={icon5} alt='icon' className='grid-image' />
        <img src={icon6} alt='icon' className='grid-image' />
        <img src={icon7} alt='icon' className='grid-image' />
        <img src={icon7} alt='icon' className='grid-image' />
        <img src={icon8} alt='icon' className='grid-image' />
        <img src={icon} alt='icon' className='grid-image' />
        <img src={icon1} alt='icon' className='grid-image' />
        <img src={icon4} alt='icon' className='grid-image' />
        <img src={icon3} alt='icon' className='grid-image' />
        <img src={icon4} alt='icon' className='grid-image' />
        <img src={icon5} alt='icon' className='grid-image' />
        <img src={icon6} alt='icon' className='grid-image' />
        <img src={icon7} alt='icon' className='grid-image' />
        <img src={icon7} alt='icon' className='grid-image' />
        <img src={icon8} alt='icon' className='grid-image' />
    </div>
</div>
<div className="who">
    <h2>Who</h2>
    <h3>We Are</h3>
    <div className="home3">
        
         <p>We build tailored software solutions from scratch, ensuring they align perfectly with your business processes and goals. Our expertise spans across various industries, enabling us to deliver bespoke applications that cater to your specific requirements.</p>          
    </div>
</div>
        <div className="home4">
            <div>
              <p>Our</p>
              <p1>Services</p1>  
              <img src={Side} alt='icon' className='side' />
              <div className="software">
              <img src={software} alt='icon' className='soft' />
              <div className="soft-separator"></div>
                <h2>Software</h2>
                
                <h3>Development</h3> 
                <p>We build tailored software solutions from scratch, ensuring they align perfectly with your business processes and goals. Our expertise spans across various industries, enabling us to deliver bespoke applications that cater to your specific requirements.</p>
                <button className="soft-button">
                <span class="button-text">Explore More</span>
   
   <svg width="49" height="70" viewBox="0 0 60 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.5 20.8L17.3 4L2.25 4V0.5L23.25 0.5L23.25 21.5H19.75L19.75 6.45L2.95 23.25L0.5 20.8Z" fill="black"/>
</svg>
                </button>
              </div>
              <div className="marketing">
              <img src={marketing} alt='icon'  />
              <div className="mark-separator"></div>
              <div className="staff-separator"></div>
              <div className="bussiness-separator"></div>
                <h2>Marketing & </h2>
                
                <h3>Branding</h3> 
                <p>We build tailored software solutions from scratch, ensuring they align perfectly with your business processes and goals. Our expertise spans across various industries, enabling us to deliver bespoke applications that cater to your specific requirements.</p>
                <button className="mark-button">
                <span class="mark-text">Explore More</span>
   
   <svg width="49" height="70" viewBox="0 0 60 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.5 20.8L17.3 4L2.25 4V0.5L23.25 0.5L23.25 21.5H19.75L19.75 6.45L2.95 23.25L0.5 20.8Z" fill="black"/>
</svg>
                </button>
              </div>
              <div className="staffing">
              <img src={staff} alt='icon'  />
                <h2>Staffing & </h2>
                
                <h3>Recruitment</h3> 
                <p>We build tailored software solutions from scratch, ensuring they align perfectly with your business processes and goals. Our expertise spans across various industries, enabling us to deliver bespoke applications that cater to your specific requirements.</p>
                <button className="staff-button">
                <span class="staff-text">Explore More</span>
   
   <svg width="49" height="70" viewBox="0 0 60 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.5 20.8L17.3 4L2.25 4V0.5L23.25 0.5L23.25 21.5H19.75L19.75 6.45L2.95 23.25L0.5 20.8Z" fill="black"/>
</svg>
                </button>
              </div>

              <div className="bussiness">
              <img src={bussiness} alt='icon'  />
                <h2>Business  </h2>
                
                <h3>Consulting</h3> 
                <p>We build tailored software solutions from scratch, ensuring they align perfectly with your business processes and goals. Our expertise spans across various industries, enabling us to deliver bespoke applications that cater to your specific requirements.</p>
                <button className="bussiness-button">
                <span class="bussiness-text">Explore More</span>
   
   <svg width="49" height="70" viewBox="0 0 60 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.5 20.8L17.3 4L2.25 4V0.5L23.25 0.5L23.25 21.5H19.75L19.75 6.45L2.95 23.25L0.5 20.8Z" fill="black"/>
</svg>
                </button>
              </div>


              <div className="side1">
              <p>Expert solutions in software development, marketing, consulting, and staffing to elevate your business</p>
              </div>
              </div>  
        </div>
       <div className="home5">
           <p>Featured</p>
           <h3>Projects</h3>
           <img src={featured} alt='icon' className='featured' />
           <h2>E-Permit Application Portal</h2>
           <p1>Apply online for various construction and renovation permits, ensuring compliance with local building codes and regulations. Track your application status and download approved permits with ease.Apply online for various construction and renovation permits, ensuring compliance with local building codes and regulations.</p1>
           <button className="button">
                    Let's Connect 
                </button>
        </div>
         <div className="home6">
            <p>Our</p>
            <h3>Approach</h3>
            <img src={home6} alt='icon' className='img6' />
            <p1>A collaborative, trusted & cutting-edge digital approach to software development</p1>
        <div className="sec">
            <h1> 01</h1>
            <b>Our focus is you</b>
            <p>Unlike traditional big agencies, we're a team of web developers who dedicate ourselves exclusively to your business.</p>
        </div>
        <div className="sec1">
            <h1> 02</h1>
            <b>Dedicated team</b>
            <p>At Forward Digital, you're our foremost priority. We boast a team of seasoned web developers who deliver high-quality, custom software, regardless of project size.</p>
        </div>
        <div className="sec2">
            <h1> 03</h1>
            <b>Direct communication</b>
            <p>You will always have a direct line to the developers handling your project — no more hassles or delays - just quick and straightforward communication.</p>
        </div>
        <div className="sec3">
            <h1> 04</h1>
            <b>Onshore & nearby</b>
            <p>We are an onshore, UK-based web development agency. We partner with you and your business and believe collaboration is at the heart of software development.</p>
        </div>
        </div>
        <div className="home7"> 
        <p>Our</p>
        <h3>customer</h3>
        <h4>stories</h4>
        <div className="slideshow">
        
        <img src={Slide} alt  ='icon' className='slide' />

       <Carousel className="girl" 
       showArrows={false}
       infiniteLoop={true}
       showThumbs={false}
       interval={1000}
       autoPlay= {true} 
       transitionTime={1000}>
        <img src={Girl} alt='icon' className='girl1' />
        <img src={Boy} alt='icon' className='girl1' />
        <img src={Girl2} alt='icon' className='girl1' /> 
        <img src={Boy1} alt='icon' className='girl1' />
        <img src={Girl3} alt='icon' className='girl1' />
        </Carousel>

        <p >"Initech takes the time to understand our business needs. I can count on Initech for fresh perspective, innovative ideas, consistency, solutions and accuracy."</p>
        <img src={bajaj} alt='icon' className='bajaj' />
        <div className="bajaj-separator"></div>
        <h2>Vivaina Dillard</h2>
        <p1>Founder,Bajaj</p1>
        <p2> Finserve</p2>
       
        </div>
        </div>
      
    <div className="end">
            
<div className="end1">
<h3>About</h3>
<p>About us</p>
<p1>Contact us</p1>
<p2>Our Blogs</p2>
<p3>Media Coverage</p3>
<p4>Join Community</p4>
<p5>Terms of Use</p5>
<p6>Copyright © 2024 Initech</p6>
</div>
<div className="end11">
<h3>Support</h3>
<p>Returns & Refund policy</p>
<p1>Warranty Policy</p1>
<p2>Shipping Policy</p2>
<p3>Track My Orders</p3>
<p4>Privacy Policy</p4>
<p5>Product Registration</p5>
</div>
<div className="end12">
<h3>Program</h3>
<p>Where to buy</p>
<p1>Corporate Purchase </p1>
<p2>Distributor Cooperation</p2>
<p3>The Outlet</p3>
                       
</div>
<div className="end13">
<h3>Newsletter</h3>
<button> Your E-mail
<svg width="40" height="20"  viewBox="-2 2 35 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.5 21L35.5 21M35.5 21L25 31.5M35.5 21L25 10.5" stroke="white" stroke-width="3.666" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</button>
</div>
<div className="end14">
<h3>Follow Us</h3>
                        
<svg width="75" height="50" viewBox="0 0 90 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="1" y="1" width="59" height="59" stroke="#979495" stroke-opacity="0.5"/>
<path d="M26.9754 21.8472V25.5112H24.29V29.9912H26.9754V43.3058H32.4874V29.9925H36.1874C36.1874 29.9925 36.534 27.8445 36.702 25.4952H32.51V22.4312C32.51 21.9738 33.11 21.3578 33.7047 21.3578H36.71V16.6938H32.6247C26.838 16.6938 26.9754 21.1778 26.9754 21.8472Z" fill="#BCBCBC"/>
</svg>

<svg width="75" height="50" viewBox="0 0 90 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="1" y="0.5" width="59" height="59" stroke="#979495" stroke-opacity="0.5"/>
<path d="M30.4966 23.5905C26.9497 23.5905 24.0872 26.453 24.0872 29.9999C24.0872 33.5467 26.9497 36.4092 30.4966 36.4092C34.0435 36.4092 36.906 33.5467 36.906 29.9999C36.906 26.453 34.0435 23.5905 30.4966 23.5905ZM30.4966 34.1655C28.2029 34.1655 26.331 32.2936 26.331 29.9999C26.331 27.7061 28.2029 25.8342 30.4966 25.8342C32.7904 25.8342 34.6622 27.7061 34.6622 29.9999C34.6622 32.2936 32.7904 34.1655 30.4966 34.1655ZM37.1685 21.8342C36.3404 21.8342 35.6716 22.503 35.6716 23.3311C35.6716 24.1592 36.3404 24.828 37.1685 24.828C37.9966 24.828 38.6654 24.1624 38.6654 23.3311C38.6656 23.1345 38.6271 22.9397 38.5519 22.758C38.4768 22.5763 38.3665 22.4112 38.2275 22.2721C38.0884 22.1331 37.9233 22.0228 37.7416 21.9477C37.5599 21.8725 37.3651 21.834 37.1685 21.8342ZM42.9904 29.9999C42.9904 28.2749 43.006 26.5655 42.9091 24.8436C42.8122 22.8436 42.356 21.0686 40.8935 19.6061C39.4279 18.1405 37.656 17.6874 35.656 17.5905C33.931 17.4936 32.2216 17.5092 30.4997 17.5092C28.7747 17.5092 27.0654 17.4936 25.3435 17.5905C23.3435 17.6874 21.5685 18.1436 20.106 19.6061C18.6404 21.0717 18.1872 22.8436 18.0904 24.8436C17.9935 26.5686 18.0091 28.278 18.0091 29.9999C18.0091 31.7217 17.9935 33.4342 18.0904 35.1561C18.1872 37.1561 18.6435 38.9311 20.106 40.3936C21.5716 41.8592 23.3435 42.3124 25.3435 42.4092C27.0685 42.5061 28.7779 42.4905 30.4997 42.4905C32.2247 42.4905 33.9341 42.5061 35.656 42.4092C37.656 42.3124 39.431 41.8561 40.8935 40.3936C42.3591 38.928 42.8122 37.1561 42.9091 35.1561C43.0091 33.4342 42.9904 31.7249 42.9904 29.9999ZM40.2404 37.3686C40.0122 37.9374 39.7372 38.3624 39.2966 38.7999C38.856 39.2405 38.4341 39.5155 37.8654 39.7436C36.2216 40.3967 32.3185 40.2499 30.4966 40.2499C28.6747 40.2499 24.7685 40.3967 23.1247 39.7467C22.556 39.5186 22.131 39.2436 21.6935 38.803C21.2529 38.3624 20.9779 37.9405 20.7497 37.3717C20.0997 35.7249 20.2466 31.8217 20.2466 29.9999C20.2466 28.178 20.0997 24.2717 20.7497 22.628C20.9779 22.0592 21.2529 21.6342 21.6935 21.1967C22.1341 20.7592 22.556 20.4811 23.1247 20.253C24.7685 19.603 28.6747 19.7499 30.4966 19.7499C32.3185 19.7499 36.2247 19.603 37.8685 20.253C38.4372 20.4811 38.8622 20.7561 39.2997 21.1967C39.7404 21.6374 40.0154 22.0592 40.2435 22.628C40.8935 24.2717 40.7466 28.178 40.7466 29.9999C40.7466 31.8217 40.8935 35.7249 40.2404 37.3686Z" fill="#BCBCBC"/>
</svg>

<svg width="75" height="50" viewBox="0 0 90 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="1" y="0.5" width="59" height="59" stroke="#979495" stroke-opacity="0.5"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M38.2561 23.3189C37.7854 22.6415 36.5267 21.6895 34.4881 22.1002C33.2987 22.3389 32.5881 22.9269 32.1361 23.7029C31.6547 24.5295 31.4214 25.6535 31.4214 26.9615C31.4214 27.3152 31.2809 27.6543 31.0309 27.9043C30.7808 28.1544 30.4417 28.2949 30.0881 28.2949C26.9334 28.2949 23.9307 27.3575 21.4041 24.8229C21.2131 25.8512 21.1379 26.8978 21.1801 27.9429C21.2507 29.3909 21.5961 30.8429 22.4161 32.0869C23.2227 33.3095 24.5494 34.4295 26.7681 35.1335C26.9855 35.2025 27.1815 35.3261 27.3375 35.4925C27.4936 35.6588 27.6043 35.8624 27.6591 36.0838C27.714 36.3052 27.7111 36.537 27.6508 36.7569C27.5905 36.9769 27.4748 37.1777 27.3147 37.3402C26.6043 38.0694 25.7988 38.6995 24.9201 39.2135C26.3334 39.3602 27.6961 39.3709 28.9601 39.2562C31.5201 39.0242 33.5587 38.2922 34.8334 37.2562C37.5174 35.0802 38.9534 31.8349 38.6867 26.3975C38.6414 25.5042 39.5041 24.5402 39.9201 23.8082C39.2921 23.9255 38.6627 23.9042 38.2561 23.3189ZM20.6254 20.6455C20.8668 20.6175 21.1113 20.6559 21.3324 20.7567C21.5535 20.8576 21.7429 21.0169 21.8801 21.2175C23.8481 24.0962 26.2107 25.2935 28.8334 25.5655C28.9614 24.4442 29.2641 23.3362 29.8334 22.3602C30.6681 20.9282 32.0254 19.8749 33.9641 19.4855C36.6441 18.9469 38.6841 19.9175 39.8667 21.1055L42.2561 20.6589C42.5061 20.612 42.7643 20.6377 43.0002 20.7328C43.2361 20.8279 43.4399 20.9886 43.5875 21.1957C43.7351 21.4029 43.8204 21.648 43.8332 21.902C43.8461 22.1561 43.786 22.4085 43.6601 22.6295L41.3667 26.6589C41.5761 32.4735 39.9601 36.5322 36.5147 39.3282C34.6881 40.8109 32.0721 41.6522 29.2014 41.9122C26.3081 42.1735 23.0374 41.8575 19.7867 40.9082C19.509 40.8272 19.2651 40.658 19.092 40.4263C18.9188 40.1945 18.8257 39.9127 18.8268 39.6234C18.8278 39.334 18.923 39.0529 19.0978 38.8224C19.2727 38.5919 19.5177 38.4245 19.7961 38.3455C21.4307 37.8802 22.6761 37.4789 23.8001 36.7762C22.2014 35.9282 21.0241 34.8189 20.1907 33.5549C19.0334 31.7975 18.6041 29.8375 18.5187 28.0709C18.4334 26.3042 18.6881 24.6669 18.9574 23.4869C19.1107 22.8135 19.2894 22.1389 19.5361 21.4935C19.6231 21.2661 19.7707 21.0667 19.963 20.9173C20.1553 20.7678 20.3835 20.6738 20.6254 20.6455Z" fill="#BCBCBC"/>
</svg>

<svg width="75" height="50" viewBox="0 0 90 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="1" y="0.5" width="59" height="59" stroke="#979495" stroke-opacity="0.5"/>
<path d="M44.5 29.9123C44.5 29.8436 44.5 29.7654 44.4969 29.6748C44.4938 29.4217 44.4875 29.1373 44.4813 28.8342C44.4563 27.9623 44.4125 27.0936 44.3438 26.2748C44.25 25.1467 44.1125 24.2061 43.925 23.4998C43.7271 22.7628 43.3393 22.0906 42.8002 21.5504C42.2612 21.0103 41.5898 20.621 40.8531 20.4217C39.9688 20.1842 38.2375 20.0373 35.8 19.9467C34.6406 19.9029 33.4 19.8748 32.1594 19.8592C31.725 19.8529 31.3219 19.8498 30.9594 19.8467H30.0406C29.6781 19.8498 29.275 19.8529 28.8406 19.8592C27.6 19.8748 26.3594 19.9029 25.2 19.9467C22.7625 20.0404 21.0281 20.1873 20.1469 20.4217C19.41 20.6206 18.7383 21.0096 18.1992 21.5498C17.6601 22.0901 17.2724 22.7625 17.075 23.4998C16.8844 24.2061 16.75 25.1467 16.6562 26.2748C16.5875 27.0936 16.5437 27.9623 16.5187 28.8342C16.5094 29.1373 16.5062 29.4217 16.5031 29.6748C16.5031 29.7654 16.5 29.8436 16.5 29.9123V30.0873C16.5 30.1561 16.5 30.2342 16.5031 30.3248C16.5062 30.5779 16.5125 30.8623 16.5187 31.1654C16.5437 32.0373 16.5875 32.9061 16.6562 33.7248C16.75 34.8529 16.8875 35.7936 17.075 36.4998C17.475 37.9967 18.65 39.1779 20.1469 39.5779C21.0281 39.8154 22.7625 39.9623 25.2 40.0529C26.3594 40.0967 27.6 40.1248 28.8406 40.1404C29.275 40.1467 29.6781 40.1498 30.0406 40.1529H30.9594C31.3219 40.1498 31.725 40.1467 32.1594 40.1404C33.4 40.1248 34.6406 40.0967 35.8 40.0529C38.2375 39.9592 39.9719 39.8123 40.8531 39.5779C42.35 39.1779 43.525 37.9998 43.925 36.4998C44.1156 35.7936 44.25 34.8529 44.3438 33.7248C44.4125 32.9061 44.4563 32.0373 44.4813 31.1654C44.4906 30.8623 44.4938 30.5779 44.4969 30.3248C44.4969 30.2342 44.5 30.1561 44.5 30.0873V29.9123ZM42.25 30.0748C42.25 30.1404 42.25 30.2123 42.2469 30.2967C42.2438 30.5404 42.2375 30.8092 42.2313 31.0998C42.2094 31.9311 42.1656 32.7623 42.1 33.5342C42.0156 34.5404 41.8969 35.3654 41.75 35.9186C41.5562 36.6404 40.9875 37.2123 40.2687 37.4029C39.6125 37.5779 37.9594 37.7186 35.7125 37.8029C34.575 37.8467 33.35 37.8748 32.1281 37.8904C31.7 37.8967 31.3031 37.8998 30.9469 37.8998H30.0531L28.8719 37.8904C27.65 37.8748 26.4281 37.8467 25.2875 37.8029C23.0406 37.7154 21.3844 37.5779 20.7312 37.4029C20.0125 37.2092 19.4437 36.6404 19.25 35.9186C19.1031 35.3654 18.9844 34.5404 18.9 33.5342C18.8344 32.7623 18.7938 31.9311 18.7688 31.0998C18.7594 30.8092 18.7563 30.5373 18.7531 30.2967C18.7531 30.2123 18.75 30.1373 18.75 30.0748V29.9248C18.75 29.8592 18.75 29.7873 18.7531 29.7029C18.7563 29.4592 18.7625 29.1904 18.7688 28.8998C18.7906 28.0686 18.8344 27.2373 18.9 26.4654C18.9844 25.4592 19.1031 24.6342 19.25 24.0811C19.4437 23.3592 20.0125 22.7873 20.7312 22.5967C21.3875 22.4217 23.0406 22.2811 25.2875 22.1967C26.425 22.1529 27.65 22.1248 28.8719 22.1092C29.3 22.1029 29.6969 22.0998 30.0531 22.0998H30.9469L32.1281 22.1092C33.35 22.1248 34.5719 22.1529 35.7125 22.1967C37.9594 22.2842 39.6156 22.4217 40.2687 22.5967C40.9875 22.7904 41.5562 23.3592 41.75 24.0811C41.8969 24.6342 42.0156 25.4592 42.1 26.4654C42.1656 27.2373 42.2063 28.0686 42.2313 28.8998C42.2406 29.1904 42.2438 29.4623 42.2469 29.7029C42.2469 29.7873 42.25 29.8623 42.25 29.9248V30.0748ZM27.7188 34.1873L34.9688 29.9686L27.7188 25.8123V34.1873Z" fill="#BCBCBC"/>
</svg>

                      
    </div>  
    </div>  
    </div>
    </div>
    );
}

export default Home;
