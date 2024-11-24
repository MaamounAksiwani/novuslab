import React, { useState } from 'react';
import "../App.css";
import Collapse from '@mui/material/Collapse';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Container } from '@mui/material';

const ValuePeople = () => {
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
        {
            id: 3,
            title: 'EXPERT GUIDANCE',
            point: [],
            description: `Going electric can be a bit tricky,
                especially since every home is different.
                But don’t worry! A contractor can help
                you imagine a cozy, energy-saving home
                that suits you perfectly.`
        },
        {
            id: 4,
            title: 'EXPERT GUIDANCE',
            point: [],
            description: `Going electric can be a bit tricky,
                especially since every home is different.
                But don’t worry! A contractor can help
                you imagine a cozy, energy-saving home
                that suits you perfectly.`
        },
        {
            id: 5,
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
            <section className='py-20'>
                <div>
                    <h1 className='font-medium text-lg mb-6 text-center'>We are people who value people
                    </h1>
                </div>

                <div className="space-y-4  max-w-6xl mx-auto">
          {content.map((item) => (
            <div key={item.id} className="border rounded-lg shadow-md">
              <div
                className={`flex items-center justify-between p-4 cursor-pointer ${
                  openIndex === item.id ? "bg-gray-100" : ""
                }`}
                onClick={() => handleToggle(item.id)}
              >
               
                <h3 className="ml-4 text-lg font-medium">{item.title}</h3>
                {openIndex === item.id ? (
                  <RemoveIcon className="text-xl text-teal-600" />
                ) : (
                  <AddIcon className="text-xl text-teal-600" />
                )}
              </div>
              <Collapse in={openIndex === item.id}>
                <div className="p-4">
                  {item.point && item.point.length > 0 ? (
                    <ul className="list-disc pl-6">
                      {item.point.map((ele, index) => (
                        <li key={index}>{`${ele} ${index}`}</li>
                      ))}
                    </ul>
                  ) : (
                    <p>{item.description}</p>
                  )}
                </div>
              </Collapse>
            </div>
          ))}
        </div>

            </section>



        </>
    );
}

export default ValuePeople;
