import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import img1 from '../../img/shop-img1.jpg'
import img2 from "../../img/shop-img4.jpg"
import img3 from "../../img/shop-img6.jpg"
import img4 from "../../img/shop-img11.jpg"
import img5 from "../../img/shop-img13.jpg"
import img6 from "../../img/shop-img14.jpg"
import img7 from "../../img/shop-img16.jpg"
import img8 from "../../img/agency-port1-img2.jpg"


const Horizon = () => {
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
        <div className="relative">
            <motion.div className='w-full relative left-10 overflow-hidden top-[90px] bg-white' variants={part1}>
          
                        <motion.h1 variants={container} initial='hidden' whileInView='show' className=' text-7xl sm:w-2/5 w-full capitalize p-1 font-teko'>
                            
                                <motion.span variants={item1} className='font-thin inline-block'>our </motion.span>
                                <motion.span variants={item2} className=' font-bold inline-block ms-2'> products</motion.span>
                 
                           
                        </motion.h1>
                        
                    </motion.div>
            <HorizontalScrollCarousel />

        </div>
    );
};

const HorizontalScrollCarousel = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-75%"]);

    return (
        <section ref={targetRef} className="relative h-[300vh] bg-white   ">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden ">
                <motion.div style={{ x }} className="flex gap-2  ">
                    <Card url={img8} />
                    <Card url={img2} />
                    <Card url={img3} />
                    <Card url={img4} />
                    <Card url={img5} />
                    <Card url={img6} />
                    <Card url={img7} />
                    <Card url={img1} />
                </motion.div>
            </div>
        </section>
    );
};

const Card = ({ url }) => {
    return (
        <div

            className="group relative w-[30vw] h-[30vw] overflow-hidden   "
        >
            <div
                style={{
                    backgroundImage: `url(${url})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
                className="absolute left-0 inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
            ></div>

            <div className='absolute top-0 left-0 w-full h-full bg-stone-800 group-hover:bg-opacity-60 transition duration-500 bg-opacity-40 sm:bg-opacity-0 uppercase flex font-teko flex-wrap justify-center items-center'>
                <div className=' p-5 cursor-pointer  relative group-hover:opacity-100 sm:opacity-0 transition duration-500 text-white'>
                    <h4 className='text-2xl '>add to cart</h4>

                    <div className='absolute top-0 left-0 z-1 w-full h-full border  border-white sm:skew-x-0 sm:skew-y-0 sm:opacity-0  group-hover:opacity-100 transition duration-500 group-hover:translate-y-0 sm:translate-y-10 skew-y-3 skew-x-6 group-hover:skew-x-6 group-hover:skew-y-3'></div>
                </div>
            </div>
        </div>
    );
};

export default Horizon;
