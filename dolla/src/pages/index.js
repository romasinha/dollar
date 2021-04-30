import React, {useState} from 'react'
import Hero from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { homeObjOne, homeObjThree, homeObjTwo } from '../components/InfoSection/Data';
import Navbar from '../components/Navbar'
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
        <InfoSection {...homeObjThree}/>
        </>
    )
}

export default Home
