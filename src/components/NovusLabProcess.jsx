

import React, { useState } from 'react';
import "../App.css";
import Collapse from '@mui/material/Collapse';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
const NovusLabProcess = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index); 
    };

    const content = [
        {
            id: 0,
            title: 'Custom Product Development',
            point: [],
            description: `Solutions that are specifically crafted to meet your business needs and original 
            concepts. We create original concepts, designs, and product development from the ground up.`
        },
        {
            id: 1,
            title: 'Intuitive UX/UI Design',
            point: [],
            description: `Solutions that are specifically crafted to meet 
            your business needs and original concepts. We create original 
            concepts, designs, and product development from the ground up.`
        },
        {
            id: 2,
            title: 'Mobile App Development',
            point: [],
            description: 'Solutions that are specifically crafted to meet your business needs and original concepts. We create original concepts, designs, and product development from the ground up.'
        },

        ,
        {
            id: 3,
            title: 'Web and Backend Development',
            point: [],
            description: `Solutions that are specifically crafted to meet your business
             needs and original concepts. We create original concepts, designs,
             and product development from the ground up.`
        },
    ];
    return (
        <section className="py-12">
        <div className="text-center  mx-auto mb-8">
          <h1 className="text-4xl  mb-5">The Novuslab Process</h1>
          <p className="text-lg font-light mb-4">
            Agility is key to maintaining our consistent track record within software development, as well as ensuring that we always deliver high-quality products at an efficient pace.
          </p>
          <p className="text-lg font-light">
            The Scrum approach is at the heart of our processes, combined with a genuine passion for products and the desire to see our clients win. We’re with you every step of the way, building the blocks, making adjustments, and helping you reach your goals.
          </p>
        </div>
      
        <div className="space-y-4  mx-auto">
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
      
    );
}

export default NovusLabProcess;
