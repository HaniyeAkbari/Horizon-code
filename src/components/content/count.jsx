import React from 'react';
import { useEffect, useRef } from 'react'
import { UpdateFollower } from 'react-mouse-follower';


const Count = () => {

    const countupRef1 = useRef(null);
    const countupRef2 = useRef(null);
    const countupRef3 = useRef(null);
    const countupRef4 = useRef(null);
    const countupRef5 = useRef(null);
    let countUpAnim1;
    let countUpAnim2;
    let countUpAnim3;
    let countUpAnim4;
    let countUpAnim5;

    const option = {
        enableScrollSpy: true, duration: 3, useEasing: true, startVal: 0
    }
    useEffect(() => {
        initCountUp();
    }, []);

    async function initCountUp() {
        const countUpModule = await import('countup.js');
        countUpAnim1 = new countUpModule.CountUp(countupRef1.current, 138, option);
        countUpAnim2 = new countUpModule.CountUp(countupRef2.current, 3134, option);
        countUpAnim3 = new countUpModule.CountUp(countupRef3.current, 420, option);
        countUpAnim4 = new countUpModule.CountUp(countupRef4.current, 50, option);
        countUpAnim5 = new countUpModule.CountUp(countupRef5.current, 280, option);

        countUpAnim1.start();
        countUpAnim2.start();
        countUpAnim3.start();
        countUpAnim4.start();
        countUpAnim5.start();

    }
    return (
        <UpdateFollower
                    mouseOptions={{
                        backgroundColor: '#ffff',
                        // textColor:'white',
                        scale: 4,
                        mixBlendMode: 'difference',
                        zIndex: 20,

                        followSpeed: 1.5,
                    }}>
        <div className='w-full flex flex-wrap justify-evenly bg-black overflow-hidden sm:text-6xl text-2xl font-bold font-patrick uppercase'>
            <div className='my-0 sm:my-3 text-white sm:w-[19%] w-[30%] h-[250px] flex justify-center items-center'>
                <div className='text-center'>
                    <h3 ref={countupRef1}></h3>
                    <h4 className='text-xl'>days</h4>
                </div>
            </div>
            <div className='my-0 sm:my-3 text-white sm:w-[19%] w-[30%] h-[250px] flex justify-center items-center'>
                <div className='text-center'>
                    <h3 ref={countupRef2}></h3>
                    <h4 className='text-xl'>hours</h4>
                </div>
            </div>
            <div className='my-0 sm:my-3 text-white sm:w-[19%] w-[30%] h-[250px] flex justify-center items-center'>
                <div className='text-center'>
                    <h3 ref={countupRef3}></h3>
                    <h4 className='text-xl'>costumers</h4>
                </div>
            </div>
            <div className=' my-0 sm:my-3 text-white sm:w-[19%] w-[45%] h-[250px] flex justify-center items-center'>
                <div className='text-center'>
                    <h3 ref={countupRef4}></h3>
                    <h4 className='text-xl'>designers</h4>
                </div>
            </div>
            <div className=' my-0 sm:my-3 text-white sm:w-[19%] w-[45%] h-[250px] flex justify-center items-center'>
                <div className='text-center'>
                    <h3 ref={countupRef5}></h3>
                    <h4 className='text-xl'>developers</h4>
                </div>
            </div>
        </div>
        </UpdateFollower>
    );
}



export default Count;
