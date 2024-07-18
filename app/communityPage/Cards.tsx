import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { getCards } from '@/lib/types/cards';
import { Card } from '@/lib/types/interfaces';
import EmptyPage from './EmptyPage';

const Cards = ({ searchTerm }: { searchTerm: string }) => {
  const [cards, setCards] = useState<Card[]>([]);
  const [filteredCards, setFilteredCards] = useState<Card[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [cardsPerPage, setCardsPerPage] = useState<number>(15); 
  const [loading, setLoading] = useState<boolean>(true); 
  const [isHovered, setIsHovered] = useState(false);
  const truncateTitle = (title:any) => {
    return title.length > 8 ? `${title.slice(0, 8)}...` : title;
  };
  
  const truncateParagraph = (para:any) => {
    return para.length > 200 ? `${para.slice(0, 200)}...` : para;
  };
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedCards = await getCards();
        console.log('Fetched Cards:', fetchedCards); // Log the fetched data
        // Filter out cards where published is false
        const publishedCards = fetchedCards.filter(card => card.published === true);
        setCards(publishedCards);
        setFilteredCards(publishedCards);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching cards:', error);
        setLoading(false);
      }
    };
  
    fetchData();
  }, []);
  
  const handleResize = () => {
    const width = window.innerWidth;
    if (width < 768) {
      setCardsPerPage(5); 
    } else {
      setCardsPerPage(15); 
    }
  };

  useEffect(() => {
    handleResize(); 
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const filtered = cards.filter(card =>
      card.communityName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      card.communityDescription.toLowerCase().includes(searchTerm.toLowerCase()) ||
      card.communityType.toLowerCase().includes(searchTerm.toLowerCase()) ||
      card.communityLocation?.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCards(filtered);
    setCurrentPage(1); 
  }, [searchTerm, cards]);

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = filteredCards.slice(indexOfFirstCard, indexOfLastCard);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  if (loading) {
    return (
    <div className="loader inset-0 justify-center align-middle absolute items-center">
      
    </div>); 
  }

  if (filteredCards.length === 0) {
    return <EmptyPage />; 
  }

  return (
    <>
         <img src='/images/rightBg.png' className="absolute inset-0 -z-10 m-0 left-40 h-[300vh] hidden md:block" />

    <div className="md:h-[3200px] relative md:bg-[url('/images/bottombg.png')] md:bg-no-repeat md:bg-left-bottom md:bg-[length:100vw_130vh] bg-no-repeat bg-right">
      <div className="relative flex justify-center ">
   
        
        <img src='/images/pinkyBg.png' className="absolute inset-0 -z-10 w-[180vw] opacity-[.7] h-[100%] mobile" />
        <img src="/images/Ellipse1.png" className="absolute -z-20 w-full m-96 h-[70%] mobile bg-center"/>
        <img src="/images/Ellipse2.png" className="absolute -z-20 w-full m-96 h-[70%] mobile bg-center"/>
        <img src="/images/Ellipse3.png" className="absolute -z-20 w-full m-96 h-[70%] mobile bg-center"/>

        <div className="grid grid-cols-1 justify-center md:grid-cols-2 lg:grid-cols-3 m-4 md:m-[4rem] mb-10 md:gap-[30px] pb-20">
          {currentCards.map((card, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{scale: 1.05 }}
              transition={{ duration: 0.2, delay: index * 0.1 }}
              className="card mx-auto p-[25px] flex flex-col justify-between my-4 lg:w-[412px] lg:h-[549px] w-[300px] h-[446px] border-[2px] border-[#f488b0] rounded-xl"
            >
              <div className='flex flex-col h-full justify-between'>
                <div>
                  <div className="flex">
                  <div className="shadow iconCard relative bg-gradient-to-b from-[#3E21F333] to-[#A020F0] p-[1.15px] w-[87px] h-[87px] rounded-md">
                          {card.communityLogo && card.communityLogo.asset && (
                            <img
                              src={card.communityLogo.asset.url}
                              alt=""
                              className="object-cover w-full h-full rounded-md"
                            />
                          )}
                        </div>

                    <div className="ml-4">
                  
                      <p className="clash uppercase mr-2 flex flex-wrap w-fit font-medium text-[#404040] text-[24px] sm:text-[30px] leading-[28px] sm:leading-[36px]">
                        {isHovered ? card.communityName : truncateTitle(card.communityName)}
                      </p>
    
                      <p className="text-[14px] sm:text-[16px] leading-[20px] sm:leading-[25px] bg-[#A2FF9324] bg-opacity-[14%] rounded-[10px] mt-1  text-center w-fit roboto-mono">{card.communityType}</p>
                      {card.communityLocation &&(
                      <div className="flex items-center  mt-2">
                           <img src="/images/location-pin.png" alt="" className='w-5' />
                         <p className="leading-6 text-[16px] fira-mono-regular text-[#404040] ">{card.communityLocation}</p>
                      </div>
                         )}
                    </div>
                  </div>
                  <div>
                    <p className="text-[#696969] max-w-fit flex flex-wrap text-wrap text-[14px] sm:text-[16px] leading-[18px] sm:leading-[20px] fira-mono-regular pt-5 md:h-[80px] h-[90px] mr-5 py-5 overflow-hidden">
                      {truncateParagraph(card.communityDescription)}
                    </p>
                  </div>
                  <div className=" lg:mt-36 mt-12 flex flex-col">
                  {card.communityWebsite && (
                      <div  className="flex items-center mb-2">
                        <div className="w-[20px] h-[20px] mr-2">
                          <img className="w-full h-full object-cover" src={card.communityLogo.asset?.url} alt="" />
                        </div>
                        <a className="text-[#4428F2] leading-[20px] sm:leading-[30px] font-medium tracking-normal text-[14px] sm:text-[16px] clash" href={card.communityWebsite} target='_blank'>{card.communityWebsite}</a>
                      </div>)}

                      <div  className="flex items-center mb-2 ">
                      {card.warpastHandle &&(
                        <div className="w-[20px] h-[20px] mr-2">
                          <img className="w-full h-full object-cover" src="/images/w.png" alt="" />
                        </div>)}
                        <a className="text-[#4428F2] leading-[20px] sm:leading-[30px] font-medium tracking-normal text-[14px] sm:text-[16px] clash"href={card.warpastHandle} target='_blank'>{card.warpastHandle}</a>
                      </div>

                        <div className="flex items-center mb-2">
                        {card.xHandle && (
                        <div className="w-[20px] h-[20px] mr-2">
                        <img className="w-full h-full object-cover" src="/images/x.png" alt="" />
                        </div>
                        )}
                        <a className="text-[#4428F2] leading-20px sm:leading-30px font-medium tracking-normal text-[14px] sm:text-[16px] clash" href={card.xHandle} target="_blank">
                        {card.xHandle}
                        </a>
                        </div>    
                  </div>
                </div>
                <div className="">
                  <button className="m-auto bottom-2 z-10 clash font-medium text-[16px] sm:text-[20px] leading-[24px] sm:leading-[30px] text-center py-[8px] custom-border-gradient w-full rounded-lg">
                    App List’s Common Ground
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
     
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute bottom-0 w-full flex md:gap-7 gap-2 justify-center my-5 mx-aut"
      >
        <motion.div 
          whileHover={{ scale: 1.1 }}
          className="w-12 h-12 rounded-md border-[#FAB7D0] border flex justify-center items-center hover:bg-black hover:text-white" 
          onClick={() => paginate(currentPage - 1)}
        >
          <i className="fas fa-chevron-left text-sm"></i>
        </motion.div>
        {Array.from(Array(Math.ceil(filteredCards.length / cardsPerPage)).keys()).map(number => (
  <motion.div 
          key={number} 
          whileHover={{ scale: 1.1 }}
          className={`w-12 h-12 rounded-md border-[#FAB7D0] border flex justify-center items-center hover:bg-black hover:text-white ${currentPage === number + 1 ? 'bg-black text-white' : ''}`} 
          onClick={() => paginate(number + 1)}
        >
          {number + 1}
          </motion.div>
        ))}
        <motion.div 
          whileHover={{ scale: 1.1 }}
          className="w-12 h-12 rounded-md border-[#FAB7D0] border flex justify-center items-center hover:bg-black hover:text-white" 
          onClick={() => paginate(currentPage + 1)}
        >
          <i className="fas fa-chevron-right text-sm"></i>
        </motion.div>
      </motion.div>
      </div>
      </>
  );
};

export default Cards;
