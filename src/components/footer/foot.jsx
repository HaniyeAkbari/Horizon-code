import React from 'react';
import { useRef } from "react";
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    useMotionValue,
    useVelocity,
    useAnimationFrame
} from "framer-motion";
import { wrap } from "@motionone/utils";
import logo from '../../img/logo-light.png'
import { UpdateFollower } from 'react-mouse-follower';


const Foot = () => {
    return (
        <div className='mt-10'>
            <UpdateFollower
            mouseOptions={{
                backgroundColor: '#ffff',
                // textColor:'white',
                scale: 4,
                mixBlendMode: 'difference',
                zIndex: 20,

                followSpeed: 1.5,
            }}
            >
            <ParallaxText baseVelocity={-5}>show the world</ParallaxText>
            <ParallaxText baseVelocity={5}>your unique & creative side</ParallaxText>
            <Bottom />
            </UpdateFollower>
        </div>
    );
}

export default Foot;

function ParallaxText({ children, baseVelocity = 100 }) {
    const baseX = useMotionValue(0)
    const { scrollY } = useScroll()
    const scrollVelocity = useVelocity(scrollY)
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 400
    })
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
        clamp: false
    })

    const x = useTransform(baseX, v => `${wrap(-20, -45, v)}%`)

    const directionFactor = useRef(1)
    useAnimationFrame((t, delta) => {
        let moveBy = directionFactor.current * baseVelocity * (delta / 1000)

        /**
         * This is what changes the direction of the scroll once we
         * switch scrolling directions.
         */
        if (velocityFactor.get() < 0) {
            directionFactor.current = -1
        } else if (velocityFactor.get() > 0) {
            directionFactor.current = 1
        }

        moveBy += directionFactor.current * moveBy * velocityFactor.get()

        baseX.set(baseX.get() + moveBy)
    })


    return (
        <div className="parallax overflow-hidden whitespace-nowrap flex py-3 flex-nowrap bg-black">
            <motion.div className="scroller uppercase font-teko text-8xl  text-white whitespace-nowrap flex flex-nowrap" style={{ x }}>
                <span className='mr-[35px] block'>{children} </span>
                <span className='mr-[35px] block'>{children} </span>
                <span className='mr-[35px] block'>{children} </span>
                <span className='mr-[35px] block'>{children} </span>
            </motion.div>
        </div>
    )
}

const Bottom = () => {
    const option = {
        
        scale: 1.6,
        color:'yellow',
        transition: {
            type: 'spring',
            stiffness: 700,
            velocity: 10
        }
    
}
return (
    <div className='w-full bg-black h-[100vh] flex justify-center items-center'>
        <div className='sm:w-1/3 w-3/4  items-center h-[80%] text-white  flex flex-wrap justify-center'>
            <figure className='w-[70%] flex items-center justify-center'><img src={logo} alt="" /></figure>
            <div className='w-full text-center font-patrick capitalize text-2xl'>
                <p className='font-bold mt-5'>feel free to contact us , anytime</p>
                <p className='text-xl mt-5'>t's time to propel your creative drive and start creating something truly wondrous.</p>
                <div className='flex w-full justify-center mt-5 gap-4 text-3xl'>
                    <motion.a whileHover={option} href="https://github.com/HaniyeAkbari"><i className='bi bi-github'></i></motion.a>
                    <motion.a whileHover={option} href="https://instagram.com/front.by.h"><i className='bi bi-instagram'></i></motion.a>
                    <motion.a whileHover={option} href="https://t.me/itsrolz"><i className='bi bi-telegram'></i></motion.a>
                    <motion.a whileHover={option} href="www.linkedin.com/in/haniye-akbari"><i className='bi bi-linkedin'></i></motion.a>
                </div>
            </div>

        </div>

    </div>
)
}