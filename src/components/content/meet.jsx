import React from 'react';
import { UpdateFollower } from 'react-mouse-follower';
import img1 from '../../img/team-1.jpg'
import img2 from '../../img/team-2.jpg'
import img3 from '../../img/team-3.jpg'
import img4 from '../../img/team-4.jpg'
import { motion } from "framer-motion";

const Meet = () => {
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
    return (
        <UpdateFollower
        mouseOptions={{
            backgroundColor: '#ffff',
            // textColor:'white',
            scale: 6,
            mixBlendMode: 'difference',
            zIndex: 20,

            followSpeed: 1.5,
                    }}>
        <div className='flex flex-wrap overflow-hidden '>
            <motion.div className='w-full p-10 bg-white' variants={part1}>
            <UpdateFollower
        mouseOptions={{
            backgroundColor: '#ffff',
            // textColor:'white',
            scale: 4,
            mixBlendMode: 'difference',
            zIndex: 20,

            followSpeed: 1.5,
                    }}>
                        <motion.h1 variants={container} initial='hidden' whileInView='show' className=' text-7xl sm:w-2/5 w-full capitalize p-1 font-teko'>
                            
                                <motion.span variants={item1} className='font-bold inline-block'>meet </motion.span>
                                <motion.span variants={item2} className=' font-thin inline-block ms-2'> our</motion.span>
                                <motion.span variants={item3} className=' font-thin inline-block ms-2'> team</motion.span>
                                <motion.span variants={item4} className='font-bold inline-block ms-2 md:ms-0 ' > members</motion.span>
                           
                        </motion.h1>
                        </UpdateFollower>
                    </motion.div>
            <Members fname='anne reid' job='designer' ><img src={img1} alt="" /></Members>
            <Members fname='dine miller' job='photographer' ><img src={img2} alt="" /></Members>
            <Members fname='mark hagne' job='hr specialist' ><img src={img3} alt="" /></Members>
            <Members fname='ellie holmes' job='media director' ><img src={img4} alt="" /></Members>
        </div>
            </UpdateFollower>
    );
}

const Members = ({children,fname,job}) => {
    return (
        <section className='cursor-pointer group relative w-1/2 sm:w-1/4'>
            <div>
                <figure >
                    {children}
                </figure>

                <div className='absolute top-0 left-0 w-full h-full bg-stone-800 group-hover:bg-opacity-60 transition duration-500 bg-opacity-40 sm:bg-opacity-0 uppercase flex font-teko flex-wrap justify-center items-center opacity-60 sm:opacity-100'>
                    <div className=' p-5 text-center relative group-hover:opacity-100 sm:opacity-0 transition duration-500 text-white'>
                        <h4 className='text-5xl font-bold'>{fname}</h4>
                        <h3 className='text-2xl  mt-2'>{job}</h3>
                        <div className='absolute top-0 left-[5%] z-1 w-[90%] h-full border  border-white sm:skew-x-0 sm:skew-y-0 sm:opacity-0  group-hover:opacity-100 transition duration-500 group-hover:translate-y-0 sm:translate-y-10 skew-y-3 skew-x-6 group-hover:skew-x-6 group-hover:skew-y-3'></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Meet;
