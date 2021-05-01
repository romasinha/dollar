import React, {useState} from 'react'
import Hero from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { homeObjOne, homeObjThree, homeObjTwo } from '../components/InfoSection/Data';
import Navbar from '../components/Navbar'
import Services from '../components/Services';
import Sidebar from '../components/Sidebar'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = ()=>{
        setIsOpen(!isOpen);
    }

    return (
        <>
        <Sidebar isOpen = {isOpen} toggle = {toggle}></Sidebar>
        <Navbar toggle= {toggle}></Navbar>
        <Hero/>
        <InfoSection {...homeObjOne}/>
        <InfoSection {...homeObjTwo}/>
        <Services/>
        <InfoSection {...homeObjThree}/>
        </>
    )
}

export default Home
