
import React, { useState } from 'react';
import '../App.css';
import { Container } from '@mui/material';

import Collapse from '@mui/material/Collapse';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
const WeCanDo = () => {
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
<div className="py-20 bg-gray-50">
  <div className="max-w-6xl mx-auto px-4">
    <h1 className="text-center text-4xl font-medium mb-6">
      How we support your needs
    </h1>

    <p className="text-center text-lg font-light mb-8">
      Whether going through the first phase of mapping out the MVP or developing a back-end for your core product, our team is ready to support you with expert UX/UI design, software development, and cloud modernization.
    </p>

    <div className="space-y-4">
      {content.map((item) => (
        <div key={item.id} className="rounded-lg shadow-md border">
          <div
            className={`flex items-center p-4 cursor-pointer ${
              openIndex === item.id ? "bg-teal-50" : ""
            }`}
            onClick={() => handleToggle(item.id)}
          >
            {openIndex === item.id ? (
              <RemoveIcon className="text-teal-600 mr-2" />
            ) : (
              <AddIcon className="text-teal-600 mr-2" />
            )}
            <h3 className="text-md font-semibold">{item.title}</h3>
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
  </div>
</div>

      


    );
}

export default WeCanDo;
