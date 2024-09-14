
import React, { useState, useEffect } from 'react';
import { Container } from '@mui/material';
import '../App.css';

const ClientsWorked = () => {

    return (
        <>
            <Container maxWidth='lg'>

                <div className='Clients-work-section'>
                    <h1 >Clients we've worked with</h1>


                    <div class="image-gridd">

    <img src="https://www.novuslab.io/services/services-5.svg" alt="Service 5"/>
    <img src="https://www.novuslab.io/services/services-2.svg" alt="Service 2"/>
    <img src="https://www.novuslab.io/services/services-3.svg" alt="Service 3"/>
    <img src="https://www.novuslab.io/services/services-4.svg" alt="Service 4"/>
    <img src="https://www.novuslab.io/services/services-1.svg" alt="Service 1"/>

    <img src="https://www.novuslab.io/services/services-6.svg" alt="Service 6"/>
</div>

                </div>

            </Container>

        </>



    )
}

export default ClientsWorked;
