import ic1 from '../../img/main-home-icon-1.PNG'
import ic2 from '../../img/main-home-icon-2.PNG'
import ic3 from '../../img/main-home-icon-3.PNG'
import ic4 from '../../img/main-home-icon-4.PNG'
import ic5 from '../../img/main-home-icon-5.PNG'
import ic6 from '../../img/main-home-icon-6.PNG'
// import bg from '../../img/main-home-bg-3.PNG'
import '../header/styles.css'
import { motion } from "framer-motion";


export default function Intro() {


    
    return (
        <>

            <div 
             className='w-full overflow-hidden intro bg-no-repeat bg-cover my-16 flex flex-wrap justify-evenly items-center'>
                <Card src={ic1} h2Text={'high standard'} pText={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'} />
                <Card src={ic2} h2Text={'planning'} pText={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'} />
                <Card src={ic3} h2Text={'strategis'} pText={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'} />
                <Card src={ic4} h2Text={'marketing'} pText={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'} />
                <Card src={ic5} h2Text={'high quality'} pText={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'} />
                <Card src={ic6} h2Text={'stellar design'} pText={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'} />
            </div>

        </>
    )

};


function Card({ src, h2Text, pText }) {
    return (
        <motion.figure
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 ,  scale:[1.1,0.8,1] , transition:{
                // when: 'afterChildren',
                duration:0.5,
                // type:'spring',
                // stiffness:100
                

            } }}
            whileHover={
                {y:-7,
                    transition:{
                        type:'spring',
                        stiffness:200
                    }
            }
            }
            whileTap={
                {scale:1.05}
            }
            // onHoverStart={(e)=>console.log(e)}
            className='md:w-[30%] w-[75%]  sm:w-[45%] overflow-hidden  m-1 p-1 flex flex-wrap md:justify-between justify-center'>
            <img src={src} alt="" className='md:w-1/5 h-1/2' />
            <figcaption className='md:w-[70%] w-[90%] text-center py-2 md:text-left font-patrick capitalize'>
                <h2 className='uppercase font-bold font-teko text-2xl'>{h2Text}</h2>
                <p>{pText}</p>
            </figcaption>
        </motion.figure>
    )
}