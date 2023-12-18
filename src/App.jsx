// import { motion } from "./framer-motion/framer-motion"
import Head from "./components/header/head";
import { MouseFollower } from "react-mouse-follower";


import './css.css'
import Content from "./components/content/content";
import Footer from "./components/footer/footer";



export default function App() {
  return (
    
    <div className="">
    <MouseFollower />
    <Head/>
    <Content/>
    <Footer/>
    </div>
    
  )
}

