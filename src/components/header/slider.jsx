import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/swiper-react';

import 'swiper/swiper.min.css';
import './styles.css';
import 'swiper/modules/effect-fade.css';
import 'swiper/modules/navigation.css';
import 'swiper/modules/pagination.css';
import bg1 from '../../img/bg1.JPG'
import  bg2 from '../../img/bg3.webp'
import  bg4 from '../../img/bg2.JPG'
import logo from '../../img/logo-light.PNG'



import { EffectFade, Navigation, Pagination } from '../../swiper/modules';
import { UpdateFollower } from 'react-mouse-follower';

export default function Slider() {
    return (
        <>
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
            <figure className='w-[40px] h-[40px] pt-8 md:p-8 fixed mix-blend-difference left-0 z-40 gap-2 flex '>
                <img src={logo} className='absolute z-30 md:w-3/4  ' alt="" />
            </figure>
            <Swiper
                spaceBetween={30}
                speed={1000}
                style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                    '--swiper-navigation-size': '18px',
                    '--swiper-pagination-bullet-inactive-opacity': '0.5',
                    '--swiper-pagination-bullet-inactive-color': '#fff',
                    'position': 'relative'
                }}

                effect={'fade'}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                modules={[EffectFade, Navigation, Pagination]}
                className="mySwiper"
            >

                <SwiperSlide>
                    <img src={bg1} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={bg4} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={bg2} />
                </SwiperSlide>
            </Swiper>
            </UpdateFollower>
        </>
    )
};
