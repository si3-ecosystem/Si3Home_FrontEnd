"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import CardPopup from './CardPopup';
import Cards from './Cards';
import "../../app/community.css";

const HomePage = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [showInfoPopup, setShowInfoPopup] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');


  const handleSearch = (event:any) => {
    setSearchTerm(event.target.value);
  };
  const handleCommunityTypeChange = (event:any) => {
    setSearchTerm(event.target.value);
  };
  
  const handleCommunityLocationChange = (event: any) => {
    setSearchTerm(event.target.value);
  };
  
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
  const toggleInfoPopup = () => {
    setShowInfoPopup(!showInfoPopup);
  };


  useEffect(() => {
    document.body.style.overflowX = 'hidden';
    return () => {
      document.body.style.overflowX = '';
    };
  }, []);

  return (
    <>
      <div className=" relative pb-10 lg:pt-32 pt-24 min-h-screen w-full px-4 lg:px-16 lg:bg-[url('/images/bgGradient.png')] bg-[length:100vw_150vh] bg-no-repeat bg-[#d6b3d2]">
        {/* <img
          src='/images/bgMobile.png'
          className='absolute z-10 inset-0 h-full w-full mobile'
        />
         */}
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative flex flex-col lg:flex-row justify-between items-start w-full"
        >
          <div className="z-20 font-semibold lg:text-[64px] text-[28px] lg:text-6xl leading-10 lg:leading-[79px] uppercase text-[#4428F2] clash mb-8 lg:w-[56%]">
            <h1 className="text-white">Discover The</h1>
            <h1>WOMEN & NON-BINARY WEB3 ECOSYSTEM.</h1>
          </div>
          <div className="info flex flex-col lg:flex-row items-center lg:mr-28 lg:w-auto ">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative flex items-center justify-center mb-4 lg:mb-0 lg:mr-12 gap-5 w-full lg:w-auto"
          >
            <div className=" hover:cursor-pointer fira-mono-bold text-[#4428F2] text-lg flex items-center gap-2 " onClick={toggleInfoPopup}>
              <div>Info</div>
              <div>
                <i className="far fa-question-circle w-6 h-6"></i>
              </div>
            </div>
            {showInfoPopup && (
              <div className="relative w-full">
                <div className="info fira-mono-regular leading-[20px] tracking-wider text-[14px] text-[#696969] dropdown p-5 border border-gray-300 rounded-md shadow-lg fixed inset-0 w-full flex items-center justify-center bg-black bg-opacity-50 px-4 py-8 overflow-auto z-50">
                  <div className='bg-white p-10 rounded-lg relative w-[25%]'>
                    <i className="fas fa-times text-gray-600 text-lg cursor-pointer absolute top-2 right-2" onClick={toggleInfoPopup}></i>
                    Submit your community for our team&apos;s review. We will respond back to the email address provided in 1-2 business days and share any questions we may have before adding your community to our discovery page.
                  </div>
                </div>
              </div>
            )}
          </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="glow-on-hover text-center relative z-20 text-[14px] clash uppercase rounded-lg text-white px-7 py-2 bg-black w-full lg:w-auto md:text-[20px] leading-[30px] font-medium" 
              onClick={togglePopup}
            >
              <p className='z-30 relative cursor-pointer '>Add a community</p>
            </motion.div>
            <CardPopup show={showPopup} handleClose={togglePopup} />
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="md:text-[20px] text-[14px] flex flex-col lg:flex-row justify-between lg:mr-28  gap-4 lg:gap-12"
        >
          <div className="info2 flex flex-col lg:flex-row items-center lg:mr-28 lg:w-auto ">
          <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative flex items-center justify-center mb-4 lg:mb-0 lg:mr-12 gap-5 w-full lg:w-auto"
            >
               <div className="z-50 justify-center hover:cursor-pointer fira-mono-bold  text-[#4428F2] text-lg flex gap-2 items-center" onClick={toggleInfoPopup}>
                  <div className='flex  justify-center'>
                  <div>Info</div> 
                  <div>
                    <i className="far fa-question-circle w-6 h-6 ml-2"></i>
                  </div>
                  </div>
              {showInfoPopup && (
              <div className="relative w-full">
         
          <div className="info2 fira-mono-regular leading-[20px] tracking-wider text-[14px] text-[#696969] dropdown p-10 border border-gray-300 rounded-md shadow-lg fixed inset-0 w-full flex justify-center items-center  bg-black bg-opacity-50    z-50">
            <div className='bg-white relative  p-10 rounded-lg   w-full mt-40'>
              <i className=" fas fa-times text-gray-600 text-lg cursor-pointer absolute top-2 right-4" onClick={toggleInfoPopup}></i>
              Submit your community for our team&apos;s review. We will respond back to the email address provided in 1-2 business days and share any questions we may have before adding your community to our discovery page.
            </div>
          </div>
        </div>
      )}
    </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="glow-on-hover text-center relative z-20 text-[14px] clash uppercase rounded-lg text-white px-7 py-2 bg-black w-full lg:w-auto md:text-[20px] leading-[30px] font-medium"
              onClick={togglePopup}
            >
              <p className='z-30 relative cursor-pointer '>Add a community</p>
            </motion.div>
            <CardPopup show={showPopup} handleClose={togglePopup} />
          </div>
          <div className="relative flex items-center border border-white pl-4 py-2 rounded-lg lg:w-[110%]">
            <div className="md:w-6 md:h-6 w-5 h-5 mr-2 flex items-center">
              <img
                src={'/images/bigSearch.png'}
                className="object-fit w-full h-full"
              />
            </div>
            <input
              className="pb-5 pt-1 md:p-0 z-20 w-full bg-transparent leading-6 placeholder-white fira-mono-regular outline-none text-white flex justify-center align-center flex-wrap"
              placeholder="Search By Name, Location, Description, Values."
              value={searchTerm}
              onChange={handleSearch}
              type='text'
            />
          </div>

          <div className="custom-select flex flex-row justify-between w-full gap-4 rounded-lg">
            <select
              name="communityType"
              id="communityType"
              className="text-wrap z-30 fira-mono-regular p-5 border border-white px-4 py-2 rounded-lg w-full cursor-pointer bg-transparent text-white outline-none"
              onChange={handleCommunityTypeChange}
              defaultValue=""
            >
              <option value="" disabled>Community Type</option>
              <option value="Education" className="rounded-lg text-black">Education</option>
              <option value="Regional" className="rounded-lg text-black">Regional</option>
              <option value="NFT Collection" className="rounded-lg text-black">NFT Collections</option>
              <option value="DAOs" className="rounded-lg text-black">DAO&apos;s</option>
            </select>

            <select
              name="communityLocation"
              id="communityLocation"
              className=" custom-select text-wrap z-30 fira-mono-regular p-5 border border-white px-4 py-2 rounded-lg w-full cursor-pointer bg-transparent text-white outline-none"
              onChange={handleCommunityLocationChange}
              defaultValue=""
            >
              <option value="" disabled>Community Location</option>
              <option value="Canada" className='fira-mono-regular hover:bg-pink-200 p-2 rounded-lg text-black'>Canada</option>
              <option value="U.S.A" className='rounded-lg text-black'>U.S.A</option>
              <option value="LATAM" className='rounded-lg text-black'>LATAM</option>
              <option value="Europe" className='rounded-lg text-black'>Europe</option>
              <option value="Africa" className='rounded-lg text-black'>Africa</option>
            </select>
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="z-50 glow-on-hover2 mt-9 py-6 bg-[#D574B633] bg-[url('/images/rectangle.png')] bg-no-repeat bg-cover bg-center bg-opacity-30 min-h-[30vh] rounded-lg flex flex-col justify-center items-center text-center p-6 w-full"
        >
          <p className="clash text-[#4428F2] text-[24px] md:text-[30px] font-medium leading-8 lg:leading-[68px] mb-4 ">JOIN OUR COMMON GROUND.</p>
          <motion.div
            className=" text-[#1C1B22] text-[14px] lg:text-[20px] leading-5 lg:leading-6 fira-mono-regular mb-5 "
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
          <p className=''> Stay connected to Si3’s ecosystem in the community membership platform Common Ground.</p> 
          </motion.div>
          <motion.button 
            whileHover={{ scale: 1.1 }}
            className=" z-50 bg-[#1C1B22] text-white px-6 py-4 rounded-lg leading-6 text-sm lg:text-[20px] fira-mono-regular"
          >
           <a href="https://app.cg/e/si3" target='_blank' className='btn-shine'> COMMON GROUND</a>
          </motion.button>
        </motion.div>
      </div>
      <div className='relative'>
        <Cards searchTerm={searchTerm} />
      </div>
    </>
  );
}

export default HomePage;
