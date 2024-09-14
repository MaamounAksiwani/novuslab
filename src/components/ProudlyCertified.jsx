import React, { useState } from 'react';
import "../App.css";
import { Container } from '@mui/material';
const ProudlyCertified = () => {
   

   

    return (
        <>
        <div style={{padding:'75px 0'}}>
            <Container maxWidth="lg">
              <h1 style={{
                fontWeight:"500",
                textAlign:'center',
                fontSize:"42px"
              }}>We're proudly certified as </h1>

              <div className='ProudlyCertified-images'>
              <img src="https://storage.googleapis.com/mc-blog-uploads/2023/03/b6494414-partners-pangea-e1676276833610.png" alt='not found '/>
                {/* <img src="https://storage.googleapis.com/mc-blog-uploads/2023/03/932185a0-awssolutionproviderprogram.png" alt='not found '/> */}
                <img src="https://storage.googleapis.com/mc-blog-uploads/2023/03/8b631eb2-gc-partner-no_outline-v-7.png" alt='not found '/>
                <img src="https://storage.googleapis.com/mc-blog-uploads/2023/03/8b631eb2-gc-specialization-work_transformation-no_outline-1.png" alt='not found '/>
                <img src="https://storage.googleapis.com/mc-blog-uploads/2023/03/b6494414-partners-pangea-e1676276833610.png" alt='not found '/>
              </div>
            </Container>
        </div>
    </>
    );
}

export default ProudlyCertified;
