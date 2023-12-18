import { motion } from "framer-motion";
import { UpdateFollower } from 'react-mouse-follower';
import { useEffect, useRef } from 'react'


export default function Middle2() {

    const countupRef1 = useRef(null);
    const countupRef2 = useRef(null);
    const countupRef3 = useRef(null);
    const countupRef4 = useRef(null);
    let countUpAnim1;
    let countUpAnim2;
    let countUpAnim3;
    let countUpAnim4;

    const option = {
        enableScrollSpy: true, duration: 1, useEasing: true, startVal: 0, suffix: '%'
    }
    useEffect(() => {
        initCountUp();
    }, []);

    async function initCountUp() {
        const countUpModule = await import('countup.js');
        countUpAnim1 = new countUpModule.CountUp(countupRef1.current, 86, option);
        countUpAnim2 = new countUpModule.CountUp(countupRef2.current, 43, option);
        countUpAnim3 = new countUpModule.CountUp(countupRef3.current, 72, option);
        countUpAnim4 = new countUpModule.CountUp(countupRef4.current, 45, option);

        countUpAnim1.start();
        countUpAnim2.start();
        countUpAnim3.start();
        countUpAnim4.start();

    }

    const draw = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: (percent) => {
            const percentage = percent;
            return {
                pathLength: percentage,
                opacity: 1,
                transition: {
                    pathLength: { type: "spring", duration: 1.5, bounce: 0 },
                    opacity: { duration: 1 }

                }
            }

        }
    };

    return (
        <div className="my-16 flex justify-evenly p-3 flex-wrap md:flex-nowrap">
            

            <Circle draw={draw} x={'hidden'} y={'visible'} percent={0.86} countupRef={countupRef1} >project progress</Circle>
            <Circle draw={draw} x={'hidden'} y={'visible'} percent={0.43} countupRef={countupRef2} >branding plans</Circle>
            <Circle draw={draw} x={'hidden'} y={'visible'} percent={0.72} countupRef={countupRef3} >marketing</Circle>
            <Circle draw={draw} x={'hidden'} y={'visible'} percent={0.65} countupRef={countupRef4} >concept making</Circle>

        </div>
    )
};


const Circle = ({ draw, x, y, percent, children, countupRef }) => {

    return (
        <UpdateFollower
            className="w-full flex justify-evenly flex-wrap "
            mouseOptions={{
                backgroundColor: '#0000002e',
                scale: 3,
                zIndex: 3,
                followSpeed: 1.5,
            }}>
            <motion.svg
                className=' w-[170px] h-[170px]  '
                viewBox="0 0 200 200"
                initial={x}
                whileInView={y}
            >
                <motion.circle
                    className='-rotate-90 origin-center'
                    cx="100"
                    cy="100"
                    r="80"
                    custom={percent}
                    stroke="black"
                    strokeWidth='8'
                    variants={draw}
                    fill='white'
                    strokeLinecap='round'

                />
                <motion.text y='110' x='80' className=" font-patrick text-4xl " ref={countupRef}></motion.text>
            </motion.svg>
            <div className="p-2 flex flex-wrap items-center text-center sm:text-left">
                <h2 className="font-teko text-4xl font-bold uppercase w-full">{children}</h2>
                <p className="font-patrick text-lg w-full">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic.</p>
            </div>
        </UpdateFollower>
    )
}