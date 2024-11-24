
import React, { useState, useEffect } from 'react';
import { Container } from '@mui/material';
import '../App.css';

const ClientsWorked = () => {

    return (
      
<Container maxWidth="lg">
  <div className="py-20">
    <h1 className="text-center text-4xl mb-8">Clients we've worked with</h1>

    <div className="grid gap-4 md:grid-cols-3 grid-cols-1">
      <img src="https://www.novuslab.io/services/services-5.svg" alt="Service 5" className="w-52 h-24 mx-auto object-contain" />
      <img src="https://www.novuslab.io/services/services-2.svg" alt="Service 2" className="w-52 h-24 mx-auto object-contain" />
      <img src="https://www.novuslab.io/services/services-3.svg" alt="Service 3" className="w-52 h-24 mx-auto object-contain" />
      <img src="https://www.novuslab.io/services/services-4.svg" alt="Service 4" className="w-52 h-24 mx-auto object-contain" />
      <img src="https://www.novuslab.io/services/services-1.svg" alt="Service 1" className="w-52 h-24 mx-auto object-contain" />
      <img src="https://www.novuslab.io/services/services-6.svg" alt="Service 6" className="w-52 h-24 mx-auto object-contain" />
    </div>
  </div>
</Container>



       



    )
}

export default ClientsWorked;
