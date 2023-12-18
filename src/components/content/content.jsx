import Accordion from "./accordion";
import Contact from "./contact";
import Count from "./count";
import Gallery from "./gallery";
import Horizon from "./horizon";
import Intro from "./intro";
import Meet from "./meet";
import Middle from "./middle";
import Middle2 from "./middle2";
import Middle3 from "./middle3";

export default function Content() {
    return(
        <div >
        <Intro/>
        <Middle/>
        <Middle2/>
        <Middle3/>
        <Gallery/>
        <Contact/>
        <Count/>
        <Accordion/>
        <Meet/>
        <Horizon/>
        </div>
    )
};
