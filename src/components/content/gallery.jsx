import React, { children } from 'react';
import img1 from '../../img/h1-port-img1.jpg'
import img2 from '../../img/h1-port-img2.jpg'
import img3 from '../../img/h1-port-img3.jpg'
import img4 from '../../img/h1-port-img4.jpg'
import img5 from '../../img/h1-port-img5.jpg'
import img6 from '../../img/h1-port-img6.jpg'
import { UpdateFollower } from 'react-mouse-follower';

const Gallery = () => {
    return (

        <div className='mt-5 overflow-hidden'>

            <div className="sm:grid grid-cols-4 grid-rows-2 flex flex-wrap ">
                <Article classes="col-span-2 cursor-pointer group relative" text='two skeleton'><img src={img1} alt="" /></Article>
                <Article classes="row-span-2 cursor-pointer col-start-3 group relative" text='to the top'><img src={img2} alt="" /></Article>
                <Article classes="col-start-4 cursor-pointer group relative" text='white stone'><img src={img3} alt="" /></Article>
                <Article classes="row-start-2 cursor-pointer group relative" text='empty cube'><img src={img4} alt="" /></Article>
                <Article classes="row-start-2 cursor-pointer group relative" text='poster art'><img src={img5} alt="" /></Article>
                <Article classes="col-start-4 cursor-pointer row-start-2 group relative" text='rhe artist'><img src={img6} alt="" /></Article>
            </div>

        </div>
    );
}

const Article = ({ children, classes, text }) => {
    return (

        <article className={classes}>

            <UpdateFollower
                mouseOptions={{
                    backgroundColor: '#ffff',
                    // textColor:'white',
                    scale: 6,
                    mixBlendMode: 'difference',
                    zIndex: 20,

                    followSpeed: 1.5,
                }}>

                <div>
                    <figure >
                        {children}
                    </figure>

                    <div className='absolute top-0 left-0 w-full h-full bg-stone-800 group-hover:bg-opacity-60 transition duration-500 bg-opacity-40 sm:bg-opacity-0 uppercase flex font-teko flex-wrap justify-center items-center'>
                        <div className=' p-5  relative group-hover:opacity-100 sm:opacity-0 transition duration-500 text-white'>
                            <h4 className='text-2xl '>design</h4>
                            <h3 className='text-5xl font-bold mt-2'>{text}</h3>
                            <div className='absolute top-0 left-0 z-1 w-full h-full border  border-white sm:skew-x-0 sm:skew-y-0 sm:opacity-0  group-hover:opacity-100 transition duration-500 group-hover:translate-y-0 sm:translate-y-10 skew-y-3 skew-x-6 group-hover:skew-x-6 group-hover:skew-y-3'></div>
                        </div>
                    </div>
                </div>
            </UpdateFollower>

        </article >

    )
}

export default Gallery;
