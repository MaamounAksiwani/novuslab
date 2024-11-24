import React, { useState } from 'react';
import "../App.css";
import Collapse from '@mui/material/Collapse';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Container } from '@mui/material';
// import home from '../../../until/image/shutterstock_529456762.jpg';

const OurAwards = () => {
    const [openIndex, setOpenIndex] = useState(null); // Track the currently open collapse box

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index); // Toggle the collapse box
    };

    const content = [
        {
            id: 0,
            title: 'TIME & COST EFFICIENCY',
            point: [],
            description: `Our Contractors know the best way to
                organize your home electrification
                projects, so your new appliances get
                installed on time and within your budget.`
        },
        {
            id: 1,
            title: 'INCENTIVES AND REBATES',
            point: [],
            description: `Our contractors can show you all the
                ways to save money, like getting tax
                credits, refunds, and other funding
                options.`
        },
        {
            id: 2,
            title: 'EXPERT GUIDANCE',
            point: [],
            description: `Going electric can be a bit tricky,
                especially since every home is different.
                But don’t worry! A contractor can help
                you imagine a cozy, energy-saving home
                that suits you perfectly.`
        },
    ];

    return (
        <>
        <div className='Energyheader'>
            <Container maxWidth="xl">
                <div className='Energycontent'>
                    <div className='EnergyContentImage'>
                        <img src='https://storage.googleapis.com/mc-blog-uploads/2021/12/Team-1.png' alt='not found' />
                    </div>
                    <div>
                        <h1 className='text-lg mb-5'>
                            Our Awards 
                        </h1>
                        <div className="space-y-4">
        {content.map((item) => (
          <div className="collapse-box" key={item.id}>
            <div
              className={`flex items-center justify-between px-4 py-2 border rounded-lg ${
                openIndex === item.id ? 'border-gray-500' : 'border-gray-300'
              }`}
              onClick={() => handleToggle(item.id)}
            >
                  <h3 className="cursor-pointer">{item.title}</h3>
              {openIndex === item.id ? (
                <RemoveIcon className="iconStyle" />
              ) : (
                <AddIcon className="iconStyle" />
              )}
            
            </div>
            <Collapse in={openIndex === item.id} className="Collapse">
              {item.point && item.point.length > 0 ? (
                <ul className="mt-2 space-y-1">
                  {item.point.map((ele, index) => (
                    <li key={index}>{`${ele} ${index}`}</li>
                  ))}
                </ul>
              ) : (
                <p className="mt-2">{item.description}</p>
              )}
            </Collapse>
          </div>
        ))}
      </div>
                    </div>
                </div>
            </Container>
        </div>
    </>
    );
}

export default OurAwards;
