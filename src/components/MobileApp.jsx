import '../App.css';

import { Container } from '@mui/material';
import React, { useState } from 'react';


import Collapse from '@mui/material/Collapse';
import NothingStandsComponent from './NothingStandsComponent'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const MobileApp = () => {
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
<>
<Container maxWidth="lg">
  <section className="py-12">
    <h4 className="font-light text-lg md:text-xl lg:text-2xl mb-8">
      Ready to make your product mobile, but lack the internal resources or knowledge?
      <br />
      Whatever technology you’re looking for, we’ll help you develop a mobile environment
      that will integrate into your business, engage with customers, generate ROI, and drive
      long-term business results.
    </h4>

    <div className="mb-12">
      <img
        className="w-full h-auto"
        src="https://storage.googleapis.com/mc-blog-uploads/2021/08/Mobile-App-development-Mooncascade-scaled.jpg"
        alt=""
      />
    </div>

    <div className="py-12">
      <h1 className="text-center text-xl md:text-2xl font-medium mb-8">What you get out of it</h1>

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

    <div className="py-12">
      <h1 className="text-center text-xl md:text-2xl font-medium mb-8">
        Working with us means working with a team of industry experts
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="space-y-4">
          <img
            className="w-full h-auto"
            src="https://storage.googleapis.com/mc-blog-uploads/2021/08/Kelian.png"
            alt="Paria Molayemvand"
          />
          <h2 className="text-lg font-semibold">Paria Molayemvand, Project Manager</h2>
          <p>
            As a project manager, I think a software development project cannot succeed without a
            UX/UI designer throughout the whole lifecycle of the project. I rely on the input of our
            brilliant designers from early requirement meetings with the client, to analysis,
            development, and even maintenance.
          </p>
        </div>
        <div className="space-y-4">
          <img
            className="w-full h-auto"
            src="https://storage.googleapis.com/mc-blog-uploads/2021/08/1f79f709-mooncascade-ii-276-scaled-e1692012773612.jpg"
            alt="Lander Arregi"
          />
          <h2 className="text-lg font-semibold">Lander Arregi, UX/UI Designer</h2>
          <p>
            I enjoy following projects across different stages - learning from them and improving.
            The impact that the design choices and decisions have on product development makes the
            work very rewarding.
          </p>
        </div>
        <div className="space-y-4">
          <img
            className="w-full h-auto"
            src="https://storage.googleapis.com/mc-blog-uploads/2021/08/Mathias-No%CC%88ps.png"
            alt="Paria Molayemvand"
          />
          <h2 className="text-lg font-semibold">Paria Molayemvand, Project Manager</h2>
          <p>
            As a project manager, I think a software development project cannot succeed without a
            UX/UI designer throughout the whole lifecycle of the project. I rely on the input of our
            brilliant designers from early requirement meetings with the client, to analysis,
            development, and even maintenance.
          </p>
        </div>
      </div>
    </div>

    <div className="py-12">
      <h1 className="text-center text-xl md:text-2xl font-medium mb-8">Related projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Coinmetro</h2>
          <p>FinTech, UX/UI Design, Mobile App Development</p>
          <img
            className="w-full h-auto"
            src="https://storage.googleapis.com/mc-blog-uploads/2021/11/Wise.png"
            alt="Coinmetro"
          />
        </div>
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">iZwop</h2>
          <p>Web & Back-End Development, Cloud Services</p>
          <img
            className="w-full h-auto"
            src="https://storage.googleapis.com/mc-blog-uploads/2022/04/36d67e3a-thumbnail_2400x2400-two-pictures-in-one-row.png"
            alt="iZwop"
          />
        </div>
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Swedbank</h2>
          <p>FinTech, UX/UI Design, Mobile App Development</p>
          <img
            className="w-full h-auto"
            src="https://storage.googleapis.com/mc-blog-uploads/2024/08/3fb82965-alldevice-logo.png"
            alt="Swedbank"
          />
        </div>
      </div>
    </div>
  </section>
</Container>


<NothingStandsComponent/>
</>

      
    );
}

export default MobileApp;
