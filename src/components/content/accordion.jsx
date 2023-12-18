import React, { useState } from "react";
import { TECollapse } from "tw-elements-react";
import img from '../../img/main-home-img-3.png'
import { UpdateFollower } from 'react-mouse-follower';

export default function Accordion() {
  const [activeElement, setActiveElement] = useState("");

  const handleClick = (value) => {
    if (value === activeElement) {
      setActiveElement("");
    } else {
      setActiveElement(value);
    }
  };
  return (
  <UpdateFollower
                    mouseOptions={{
                        backgroundColor: '#ffff',
                        // textColor:'white',
                        scale: 3,
                        mixBlendMode: 'difference',
                        zIndex: 20,

                        followSpeed: 1.5,
                    }}>
   <div className="w-full flex flex-wrap items-center py-10 bg-neutral-200 overflow-hidden">
    
    <AccordionItems activeElement={activeElement} handleClick={handleClick}/>
    <figure className="sm:w-1/2 w-full  flex justify-center "><img className=" w-3/4  flex object-cover" src={img} alt="" /></figure>
   </div>
    </UpdateFollower>
  )
}






const AccordionItems = ({activeElement , handleClick}) =>{
    return(
        <div className="sm:w-1/2 w-full p-10">
        <div id="accordionExample"  >
          <div className="rounded-t-lg border-b-2 border-black  dark:border-neutral-600 dark:bg-neutral-800">
            <h2 className="mb-0" id="headingOne">
              <button
                className={`${
                  activeElement === "element1" &&
                  `text-stone-400  [box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:!text-primary-400 dark:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]`
                } group relative text-2xl font-bold font-teko uppercase flex w-full items-center rounded-t-[15px] border-0  px-5 py-4 text-left  text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white`}
                type="button"
                onClick={() => handleClick("element1")}
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                designed with style
                <span
                  className={`${
                    activeElement === "element1"
                      ? `rotate-[-180deg] -mr-1`
                      : `rotate-0 fill-[#212529]  dark:fill-white`
                  } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              </button>
            </h2>
            <TECollapse
              show={activeElement === "element1"}
              className="!mt-0 !rounded-b-none !shadow-none"
            >
              <div className="px-5 py-4 font-patrick text-lg capitalize">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius quam explicabo nemo numquam, illo unde sunt enim quae voluptatem at.
              </div>
            </TECollapse>
          </div>
        </div>
        <div className="border-b-2 border-black  dark:border-neutral-600 dark:bg-neutral-800">
          <h2 className="mb-0" id="headingTwo">
            <button
              className={`${
                activeElement === "element2"
                  ? `text-stone-400  [box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:!text-primary-400 dark:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]`
                  : `transition-none rounded-b-[15px]`
              } group relative text-2xl font-bold font-teko  uppercase flex w-full items-center rounded-t-[15px] border-0  px-5 py-4 text-left text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white`}
              type="button"
              onClick={() => handleClick("element2")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              groovy interface
              <span
                className={`${
                  activeElement === "element2"
                    ? `rotate-[-180deg] -mr-1`
                    : `rotate-0 fill-[#212529] dark:fill-white`
                } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </button>
          </h2>
          <TECollapse
            show={activeElement === "element2"}
            className="!mt-0 !rounded-b-none !shadow-none"
          >
            <div className="px-5 py-4 font-patrick text-lg capitalize">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quas, dolor voluptate corporis ea ad eaque harum consectetur. Consectetur, minus!
            </div>
          </TECollapse>
        </div>
        <div className=" border-b-2 border-black  dark:border-neutral-600 dark:bg-neutral-800">
          <h2 className="accordion-header mb-0" id="headingThree">
            <button
              className={`${
                activeElement === "element3"
                  ? `text-stone-400  [box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:!text-primary-400 dark:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]`
                  : `transition-none rounded-b-[15px]`
              } group relative text-2xl font-bold font-teko uppercase flex w-full items-center rounded-t-[15px] border-0  px-5 py-4 text-left  text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white`}
              type="button"
              onClick={() => handleClick("element3")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              lovely fonts
              <span
                className={`${
                  activeElement === "element3"
                    ? `rotate-[-180deg] -mr-1`
                    : `rotate-0 fill-[#212529] dark:fill-white`
                } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </button>
          </h2>
          <TECollapse
            show={activeElement === "element3"}
            className="!mt-0 !shadow-none"
          >
            <div className="px-5 py-4 font-patrick text-lg capitalize">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi accusamus doloribus ipsam illo sunt doloremque dolorem porro architecto ipsa laudantium?
            </div>
          </TECollapse>
        </div>
        <div className="border-b-2 border-black  dark:border-neutral-600 dark:bg-neutral-800">
          <h2 className="accordion-header mb-0" id="headingFour">
            <button
              className={`${
                activeElement === "element4"
                  ? `text-stone-400  [box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:!text-primary-400 dark:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]`
                  : `transition-none rounded-b-[15px]`
              } group relative text-2xl font-bold font-teko uppercase flex w-full items-center rounded-t-[15px] border-0  px-5 py-4 text-left  text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white`}
              type="button"
              onClick={() => handleClick("element4")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              unique visuals
              <span
                className={`${
                  activeElement === "element4"
                    ? `rotate-[-180deg] -mr-1`
                    : `rotate-0 fill-[#212529] dark:fill-white`
                } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </button>
          </h2>
          <TECollapse
            show={activeElement === "element4"}
            className="!mt-0 !shadow-none"
          >
            <div className="px-5 py-4 font-patrick text-lg capitalize">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi, odit vero nobis maxime libero recusandae ab iusto reprehenderit doloremque perferendis?
            </div>
          </TECollapse>
        </div>
      </div>
    )
}