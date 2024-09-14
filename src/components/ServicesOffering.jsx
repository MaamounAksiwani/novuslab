

import React, { useState } from 'react';
import "../App.css";
import { useNavigate } from 'react-router';
const ServicesOffering = () => {
    const navigate = useNavigate();


    // WebDevelopment

    const handleLinkClick = (path) => {
        navigate(path);
        console.log();
        // setMenuVisible(false);
    };
    return (
        <section style={{ paddingBottom: '' }}>
            <h1 style={{ textAlign: 'center' , fontSize:"42px" , fontWeight:'500' , marginBottom:'50px' }}>Our comprehensive services offering</h1>

<div className='services-offering-section' >
<div>
                <h1>01. Web Development</h1>
                <p>Creating engaging and responsive websites that improve your online visibility and capture the attention of your audience.</p>
                <button onClick={()=>{handleLinkClick('/ServicesType')}}>Learn More</button>
            </div>
            <hr />

            <div>
                <h1>02. App Development</h1>
                <p>Creating cutting-edge, user-focused mobile apps for the iOS and Android operating systems.</p>
                <button>Learn More</button>
            </div>
            <hr />

            <div>
                <h1>03. UI/UX Design</h1>
                <p>Developing engaging user experiences and interfaces that are both aesthetically pleasing and intuitive for your target audience.</p>
                <button>Learn More</button>
            </div>
            <hr />

            <div>
                <h1>04. Backend Development</h1>
                <p>Designing scalable and durable server-side solutions that guarantee flawless operation in the background.</p>
                <button>Learn More</button>
            </div>
            <hr />

            <div>
                <h1>05. Frontend Development</h1>
                <p>Converting designs into dynamic, captivating user experiences to realize your vision.</p>
                <button>Learn More</button>
            </div>
            <hr />

            {/* <div>
                <h1>06. Maintenance and Support</h1>
                <p>Guaranteeing the durability and peak functionality of your digital assets with dependable post-launch assistance.</p>
                <button>Learn More</button>
            </div>
            <hr />

            <div>
                <h1>07. E-Commerce Solutions</h1>
                <p>Creating complete e-commerce systems with smooth user interfaces, inventory control, and secure transactions.</p>
                <button>Learn More</button>
            </div>
            <hr />

            <div>
                <h1>08. Brand Identity and Branding</h1>
                <p>Creating memorable brand identities and all-encompassing branding strategies that are remembered.</p>
                <button>Learn More</button>
            </div> */}


</div>
        </section>
    );
}

export default ServicesOffering;
