import React from 'react'; 
import '../header/styles.css'
import { UpdateFollower } from 'react-mouse-follower';

const Contact = () => {
    return (
        <div className='my-10 overflow-hidden'>
            <div className='w-full bg-cover intro ps-16 h-[50vh]'>
                <h2 className='uppercase text-4xl font-bold font-teko bg-inherit'>our newsletter</h2>
             <UpdateFollower
                    mouseOptions={{
                        backgroundColor: '#ffff',
                        // textColor:'white',
                        scale: 3,
                        mixBlendMode: 'difference',
                        zIndex: 3,

                        followSpeed: 1.5,
                    }}>
                <input type="text" autoFocus placeholder='type ypur email here' className='w-[400px] h-[40px] mt-5 text-2xl placeholder:mx-2 placeholder:capitalize font-patrick border-b-2 focus:outline-none border-black' />
                
            </UpdateFollower>
            <button className='capitalize font-teko border-black border-2 hover:bg-black hover:text-white transition duration-300 mt-10 p-3 text-2xl skew-x-12 hover:skew-x-0 font-bold'>
            <UpdateFollower
                            className="sample  "
                            mouseOptions={{
                                backgroundColor: '#ffff',
                                // textColor:'white',
                                scale: 4,
                                mixBlendMode: 'difference',
                                zIndex: 3,
                                type:'spring',

                                followSpeed: 1.5,
                            }}>
                sign up</UpdateFollower></button>
            </div>
        </div>
    );
}

export default Contact;
