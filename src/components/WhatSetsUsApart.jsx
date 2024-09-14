

import React, { useState } from 'react';
import "../App.css";
import { Container } from '@mui/material';
const WhatSetsUsApart = () => {
    return (
        <section style={{ padding: '50px 0'  }}>
            <h1 style={{ textAlign: 'center', fontSize:'42px', fontWeight: '500' }}>What sets us apart?</h1>



            <div className='ProudlyCertified-images '>
                <div style={{ textAlign: 'center' }}>

                    <img style={{ width: '100px' }} src="https://www.novuslab.io/work/works-8.svg" alt='not found ' />
                    <h3 style={{fontWeight:"500"}}>End-to-End Expertise</h3>

                    <p style={{fontWeight:'300'}}>
                        We provide an extensive range of services that address every aspect of digital
                        transformation, from conception to implementation.
                    </p>

                </div>
                <div style={{ textAlign: 'center' }}>

                    <img style={{ width: '100px' }} src="https://www.novuslab.io/work/works-6.svg" alt='not found ' />
                    <h3 style={{fontWeight:"500"}}>Tailored Solutions</h3>
                    <p style={{fontWeight:'300'}}>
                        We take pride in the fact that no two projects are same. Our team specializes in tailoring
                        solutions to each client’s specific demands and goals.


                    </p>
                </div>
                <div style={{ textAlign: 'center' }}>

                    <img style={{ width: '100px' }} src="https://www.novuslab.io/work/works-9.svg" alt='not found ' />
                    <h3 style={{fontWeight:"500"}}>Cutting-Edge Technologies</h3>
                    <p style={{fontWeight:'300'}}>With our use of cutting-edge technologies, you can stay ahead of the curve in the digital sphere and guarantee
                        that your projects are not simply present but also future-proof.</p>
                </div>

                <div style={{ textAlign: 'center' }}>

                    <img style={{ width: '100px' }} src="https://www.novuslab.io/work/works-9.svg" alt='not found ' />
                    <h3 style={{fontWeight:"500"}}>Cutting-Edge Technologies</h3>
                    <p> With our use of cutting-edge technologies, you can stay ahead of the curve in the digital sphere and guarantee
                        that your projects are not simply present but also future-proof.</p>
                </div>

                {/* 

                <div style={{textAlign:'center'}}>

                <img  style={{width:'100px'}}  src="https://www.novuslab.io/work/works-7.svg" alt='not found ' />
                    <h3>Client-Centric Approach</h3>

                    <p>Our top priority is your vision. We pay serious attention to what you have to say,
                         work closely with you to make your ideas a reality, and listen.</p>
                </div> */}
            </div>
        </section>
    );
}

export default WhatSetsUsApart;
