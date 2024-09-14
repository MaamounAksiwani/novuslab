import React from 'react';
import '../App.css';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const OurClients = () => {

    return (
        <div>
            {/* <section style={{ padding: '0px 0' ,}}>
              <h1 style={{fontSize:'42px' ,textAlign:'center' , fontWeight:'500' }}>Our clients </h1>

              <div>
                <div>

                <h2>Louco app</h2>
                <p>UX/UI Design, Web & App Development, Front- & Backend Development</p>
                <img src='https://www.novuslab.io/clients/client-2.png' alt='image not found '/>
                </div>

                <div>

                <h2>Udrus</h2>
                <p>UX/UI Design, Web Development, Front- & Backend Development</p>
                <img src='https://www.novuslab.io/clients/client-1.png' alt='image not found '/>

                </div>
              </div>
            </section>  */}


<section className="section">
    <h1>Our Clients</h1>
    <div className="clients-grid">
      <div className="client-item">
        <h2>Louco App</h2>
        <p>UX/UI Design, Web & App Development, Front- & Backend Development</p>
        <img src='https://www.novuslab.io/clients/client-2.png' alt='Louco App' />
      </div>

      <div className="client-item">
        <h2>Udrus</h2>
        <p>UX/UI Design, Web Development, Front- & Backend Development</p>
        <img src='https://www.novuslab.io/clients/client-1.png' alt='Udrus' />
      </div>

      <div className="client-item">
        <h2>UniApp</h2>
        <p>UX/UI Design, Web & App Development, Front- & Backend Development</p>
        <img src='https://www.novuslab.io/clients/client-5.png' alt='Udrus' />
      </div>
      <div className="client-item">
        <h2>energy sabal</h2>
        <p>UX/UI Design, Web Development, Front- & Backend Development</p>
        <img src='https://www.novuslab.io/clients/client-4.png' alt='Udrus' />
      </div>


      <div className="client-item">
        <h2>Shisha Tabak</h2>
        <p>UX/UI Design, Web Development, Front- & Backend Development</p>
        <img src='https://www.novuslab.io/clients/client-3.png' alt='Udrus' />
      </div>

      <div className="client-item">
        <h2>Translate Task</h2>
        <p>UX/UI Design, Web Development, Front- & Backend Development</p>
        <img src='https://www.novuslab.io/clients/client-6.png' alt='Udrus' />
      </div>   
    </div>
  </section>

        </div>
    );
};

export default OurClients;
