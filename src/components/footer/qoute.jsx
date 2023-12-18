import React, { useRef } from 'react';
import img from '../../img/main-home-img-5.png'
import { motion } from 'framer-motion';
import { UpdateFollower } from 'react-mouse-follower';




const Qoute = () => {
const box = useRef(null)
const margin = 400
let x = 1
const forward = ()=>{
    
    if(x==3){
        box.current.style.marginLeft = 0
        x=1
    }else{
        box.current.style.marginLeft= -(margin*x) + 'px'
        x++
    }
}

    return (
            <UpdateFollower 
            mouseOptions={{
                backgroundColor: '#ffff',
                // textColor:'white',
                scale: 3,
                mixBlendMode: 'difference',
                zIndex: 20,

                followSpeed: 1.5,
            }}
            >
        <div className='flex flex-wrap justify-between bg-white sm:px-4 items-center overflow-hidden '>
            <figure className='sm:w-1/2 w-full flex justify-center items-center'>
                <img className='w-2/3' src={img} alt="" />
            </figure>
            <div className='sm:w-1/2 w-full  flex flex-wrap  justify-center overflow-hidden mt-10 sm:mt-0 '>
                <div  className='flex flex-nowrap w-[400px]  items-center overflow-hidden shadow-2xl  ' >
                    <div ref={box} style={{transition:'.5s ease-in' }} className='w-[400px] h-[300px]  shrink-0  p-2 py-5 text-2xl font-patrick tracking-wider '>
                        <p className='h-[200px] p-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, dolores repellendus nisi nesciunt magni expedita voluptatibus facilis velit dignissimos ipsam?</p>
                        <h5 className='mt-3'><i className='bi bi-quote inline-block '></i><span className='text-2xl font-bold font-teko px-3'>john doe</span><i className='bi bi-quote inline-block rotate-180 scale-y-[-1]'></i></h5>
                    </div>
                    <div className='w-[400px] h-[300px] shrink-0 p-2 py-5 text-xl font-patrick tracking-wider '>
                        <p className='h-[200px] p-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim ullam adipisci cupiditate hic porro voluptates.</p>
                        <h5 className='mt-3'><i className='bi bi-quote inline-block '></i><span className='text-2xl font-bold font-teko px-3'>sara x</span><i className='bi bi-quote inline-block rotate-180 scale-y-[-1]'></i></h5>
                    </div>
                    <div  className='w-[400px] h-[300px] shrink-0  p-2 py-5 text-xl font-patrick tracking-wider '>
                        <p className='h-[200px] p-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident, voluptates?</p>
                        <h5 className='mt-3'><i className='bi bi-quote inline-block '></i><span className='text-2xl font-bold font-teko px-3'>kevin y</span><i className='bi bi-quote inline-block rotate-180 scale-y-[-1]'></i></h5>
                    </div>
                </div>
                <div onClick={forward} className='  w-full flex justify-center  my-5 ' >
                <UpdateFollower 
            mouseOptions={{
                backgroundColor: '#ffff',
                // textColor:'white',
                scale: 6,
                mixBlendMode: 'difference',
                zIndex: 20,

                followSpeed: 1.5,
            }}
            >
                    <motion.button className=' p-3'  whileTap={{scale:[1.6,0.8,1] , transition:{
                        type:'spring',
                        stiffness:900,
                        velocity:30
                        
                    }}} >
                        <i className='bi bi-play text-3xl'></i>
                        </motion.button>
                        </UpdateFollower>
                    </div>
            </div>
            
            
        </div>
        </UpdateFollower>
    );
}

export default Qoute;
