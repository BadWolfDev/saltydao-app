import React, {useState} from 'react';
import Sidebar from "../components/navbar/Sidebar";
import Navbar from "../components/navbar/Navbar";
import Benefits from '../components/Benefits';
import Standard from "../components/standard/index";
import Roadmap from '../components/roadmap';
import { aboutObj, RoadmapObj, faqObj, mintObj, heroObj } from '../data/Data';
import Team from "../components/team/index";
import FAQ from '../components/faqs/index';
import Footer from '../components/footer';


const Home = () => {

    const[isOpen, setIsopen] = useState(false);

    const toggle = () => {
        setIsopen(!isOpen);
    }

    return(
        <>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>
        <Standard {...heroObj}/>
        <Benefits />
        <Standard {...aboutObj}/>
        <Team />
        <FAQ {...faqObj}/>
        <Footer/>
        </>
    )
};

export default Home;