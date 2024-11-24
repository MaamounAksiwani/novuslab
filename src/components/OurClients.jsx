import React from 'react';
import '../App.css';
const OurClients = () => {

  return (

    <section className="py-0">
      <h1 className="text-4xl font-medium text-center">Our Clients</h1>

      <div className="grid grid-cols-1 gap-5 p-5 md:grid-cols-2">
        <div className="client-item">
          <h2 className="font-normal text-2xl mb-1">Louco App</h2>
          <p className="mt-0 mb-3">UX/UI Design, Web & App Development, Front- & Backend Development</p>
          <img className="w-full h-auto" src='https://www.novuslab.io/clients/client-2.png' alt='Louco App' />
        </div>

        <div className="client-item">
          <h2 className="font-normal text-2xl mb-1">Udrus</h2>
          <p className="mt-0 mb-3">UX/UI Design, Web Development, Front- & Backend Development</p>
          <img className="w-full h-auto" src='https://www.novuslab.io/clients/client-1.png' alt='Udrus' />
        </div>

        <div className="">
          <h2 className="font-normal text-2xl mb-1">UniApp</h2>
          <p className="mt-0 mb-3">UX/UI Design, Web & App Development, Front- & Backend Development</p>
          <img className="w-full h-auto" src='https://www.novuslab.io/clients/client-5.png' alt='UniApp' />
        </div>

        <div className="">
          <h2 className="font-normal text-2xl mb-1">Energy Sabal</h2>
          <p className="mt-0 mb-3">UX/UI Design, Web Development, Front- & Backend Development</p>
          <img className="w-full h-auto" src='https://www.novuslab.io/clients/client-4.png' alt='Energy Sabal' />
        </div>

        <div className="">
          <h2 className="font-normal text-2xl mb-1">Shisha Tabak</h2>
          <p className="mt-0 mb-3">UX/UI Design, Web Development, Front- & Backend Development</p>
          <img className="w-full h-auto" src='https://www.novuslab.io/clients/client-3.png' alt='Shisha Tabak' />
        </div>

        <div className="">
          <h2 className="font-normal text-2xl mb-1">Translate Task</h2>
          <p className="mt-0 mb-3">UX/UI Design, Web Development, Front- & Backend Development</p>
          <img className="w-full h-auto" src='https://www.novuslab.io/clients/client-6.png' alt='Translate Task' />
        </div>
      </div>
    </section>



  );
};

export default OurClients;
