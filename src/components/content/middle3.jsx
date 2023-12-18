import React, { useRef } from 'react';
import bg from '../../img/agency-home-img-1.PNG'

import { motion } from "framer-motion";
import { MouseFollower, UpdateFollower } from 'react-mouse-follower';

const Middle3 = () => {
    

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,


            transition: {
                type: "spring",
                stiffness: 500,
                staggerChildren: 0.45,

            }

        }
    }


    const item1 = {
        hidden: { scale: -1, opacity: 0 },
        show: {
            scale: 1, opacity: 1, transition: {
                type: "spring",
                duration: 0.5,
                stiffness: 50,
                mass: 0.3,
            }
        }
    }
    const item2 = {
        hidden: { y: -50, opacity: 0 },
        show: {
            y: 0, opacity: 1, transition: {
                type: "spring",
                duration: 0.5,
                stiffness: 50,
                mass: 0.3,
            }
        }
    }
    const item3 = {
        hidden: { x: 100, opacity: 0 },
        show: {
            x: 0, opacity: 1, transition: {
                type: "spring",
                duration: 0.5,
                stiffness: 50,
                mass: 0.3,
            }
        }
    }
    const item4 = {
        hidden: { y: 100, opacity: 0 },
        show: {
            y: 0, opacity: 1, transition: {
                type: "spring",
                duration: 0.5,
                stiffness: 50,
                mass: 0.3,
            }
        }
    }

    const figure1 = {
        hidden: { x: 100, opacity: 0 },
        show: {
            x: 0, opacity: 1, transition: {
                type: "spring",
                duration: 0.5,
                stiffness: 150,
                mass: 0.3,
            }
        }
    }

    const part1 = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1, transition: {
                type: "spring",
                duration: 0.5,

                stiffness: 50,
                mass: 0.3,
            }
        }
    }
    const part2 = {
        hidden: { scale: 0, opacity: 0 },
        show: {
            scale: 1, opacity: 1, transition: {
                type: "spring",
                duration: 0.5,
                stiffness: 50,
                mass: 0.3,
            }
        }
    }
    const part3 = {
        hidden: { y: 500, opacity: 0 },
        show: {
            y: 0, opacity: 1, transition: {
                type: "spring",
                duration: 0.5,
                stiffness: 50,
                mass: 0.3,
            }
        }
    }

    const div = useRef()
    return (
        <UpdateFollower 
            mouseOptions={{
                backgroundColor: '#ffff',
                // textColor:'white',
                scale: 4,
                mixBlendMode: 'difference',
                zIndex: 40,

                followSpeed: 1.5,
            }}
            >
        <div className='my-16 w-full  ' >



            <div className='flex flex-wrap relative justify-center '>
            <div className='absolute top-0 left-[5%] w-[90%] h-[90%] bg-white  -z-10 border-2 border-black skew-x-6 skew-y-2 '></div>




                <motion.div variants={container} initial='hidden' whileInView='show' className='md:w-1/2 p-3 w-full '>
                    

                    <motion.div variants={part1}>
                        <motion.h1 variants={container} initial='hidden' whileInView='show' className=' text-7xl capitalize p-1 font-teko'>
                            
                                <span className='overflow-hidden'><motion.span variants={item1} className='font-bold inline-block'>we are </motion.span></span>
                                <span className='overflow-hidden'><motion.span variants={item2} className=' font-thin inline-block ms-2'>fully </motion.span></span>
                                <span className='overflow-hidden'><motion.span variants={item3} className=' font-thin inline-block ms-2'> dedicated </motion.span></span>
                                <span className='overflow-hidden'><motion.span variants={item4} className='font-bold inline-block ms-2 md:ms-0 ' > to you</motion.span></span>
                            
                        </motion.h1>
                    </motion.div>
                    <motion.p variants={part2} className='p-1 mt-12 text-xl font-patrick indent-2 md:px-20 px-11  '> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam vel maiores quasi ut autem id facere aut veniam. Quidem saepe fuga illum nisi est eius repellat adipisci laboriosam quia dolor!</motion.p>

                    <motion.button variants={part3} className='capitalize font-teko text-white bg-black mt-10 p-5 text-2xl rounded-3xl font-bold'>
                        
                            view more
                        
                    </motion.button>

                </motion.div>

                <motion.div variants={container} initial='hidden' whileInView='show' className=' mt-12 md:mt-0  relative overflow-hidden  flex items-center  sm:w-1/2 w-full p-3  '>
                
                            
                        
                    <motion.figure variants={figure1} className=' overflow-hidden '>
                        <img className='' src={bg} alt="" />

                    </motion.figure>
                   
                    

                </motion.div>

            </div>
            
      




        </div>
        </UpdateFollower>
    );
}

export default Middle3;