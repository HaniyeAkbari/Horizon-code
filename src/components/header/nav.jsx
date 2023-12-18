import React, { Children, useRef, useState } from 'react';
import { delay, motion } from "framer-motion";
import { AiFillHome , AiFillFolderOpen , AiFillShopping } from "react-icons/ai";
import { BsFillLayersFill , BsNewspaper } from "react-icons/bs";
import { UpdateFollower } from 'react-mouse-follower';


const Option = ({ text, setOpen, itemVariants,Icon}) => {
    return (
        <motion.li
            variants={itemVariants}
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 h-[calc(80vh/5)] w-full p-2 text-xs font-medium whitespace-nowrap rounded-md hover:bg-stone-200 text-black hover:text-stone-700 transition-colors cursor-pointer"
        >
            <motion.span className='text-4xl' >
                <Icon/>
            </motion.span>
            <span  className='text-lg md:text-2xl'>{text}</span>
        </motion.li>
    );
};

export default function DropDown() {

    const [open, setOpen] = useState(false);


    const wrapperVariants = {
        open: {
            scaleX: 1,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.15,
            },
        },
        closed: {
            scaleX: 0,
            transition: {
                when: "afterChildren",
                staggerChildren: 0.15,
            },
        },
    };

    const iconVariants = {
        open: { rotateY: 180,
            scale:[1.2,1],
        transition:{
            duration:.5
        }
        },
        closed: { rotateY: 0 ,
            scale:[1.2,1],
            transition:{
                duration:.5
            } },
    };

    const itemVariants = {
        open: {
            opacity: 1,
            x:[0,15,0,8,0],
            type: "inertia",
             velocity: 100,
            transition: {
                when: "beforeChildren",
            },
        },
        closed: {
            opacity: 0,
            y: -15,
            transition: {
                when: "afterChildren",
            },
        },
    };

    return (
        <div className="md:p-8 pt-8  flex items-center justify-between fixed  top-0 right-0 z-40 font-teko">
            
            <motion.div animate={open ? "open" : "closed"} className="relative">
            <UpdateFollower 
            mouseOptions={{
                backgroundColor: '#ffff',
                // textColor:'white',
                scale: 6,
                mixBlendMode: 'difference',
                zIndex: 40,

                followSpeed: 1.5,
            }}
            >
                <button
                    onClick={() => setOpen((pv) => !pv)}
                    className="flex items-center shadow-xl border border-black mix-blend-difference justify-center w-[40px]  font-bolder h-[40px] rounded-md bg-white hover:bg-stone-200 transition-colors"
                >
                    <motion.i
                        variants={iconVariants}
                        className='bi bi-chevron-compact-left flex items-center  text-3xl'
                    >

                    </motion.i>
                    
                </button>

                <motion.ul
                    initial={wrapperVariants.closed}
                    variants={wrapperVariants}
                    style={{ originX: "right" , translateX:'0'}}
                    className="flex flex-col gap-2 p-2 rounded-lg bg-white  shadow-xl absolute z-10  top-full right-0 md:w-[30vw] w-[50vw]  h-[80vh] overflow-hidden"
                >
                    <Option setOpen={setOpen}
                        itemVariants={itemVariants}
                        text="Home"
                        Icon={AiFillHome} />
                    <Option setOpen={setOpen}
                        itemVariants={itemVariants}
                        Icon={BsFillLayersFill}
                        text="Pages" />
                    <Option setOpen={setOpen}
                        itemVariants={itemVariants}
                        Icon={BsNewspaper}
                        text="Blog" />
                    <Option setOpen={setOpen}
                        itemVariants={itemVariants}
                        Icon={AiFillFolderOpen}
                        text="Portfolio" />
                    <Option setOpen={setOpen}
                        itemVariants={itemVariants}
                        Icon={AiFillShopping}
                        text="Shop" />
                </motion.ul>
            </UpdateFollower>
            </motion.div>
        </div>
    )


}