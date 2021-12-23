import React, {useState, useEffect} from 'react';
import { menuData } from '../../../data/MenuData';
import { Nav, Logo, MobileIcon, NavMenu, NavMenuLinks, NavBtn, NavItem, NavBtnlink, LogoC } from "./NavElements";
import { FaBars } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import  {SocialIcons, SocialIconLink} from "../../footer/FooterElements";
import { FaDiscord, FaTwitter } from "react-icons/fa";
import BikiniSteads from "../../../images/bikiLogo.png";


const Navbar = ({ toggle }) => {

    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if(window.scrollY >= 400){
            setScrollNav(true)
        }else{
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    const SocialColorT = ({hover}) => (
        {
            color: hover ? 'black':'#00acee',
            fontSize: '20px',
        }
    );

    const SocialColorD = ({hover}) => (
        {
            color: hover ? 'black':'#5865F2',
            fontSize: '20px',
        }
    );

    const [hover, setHover] = useState(false);

    return (
        <Nav scrollNav={scrollNav}>
            <MobileIcon onClick={toggle}>
                <FaBars />
            </MobileIcon>
            <NavMenu>
            {menuData.map((item, index) => (
                    <NavItem>
                        <NavMenuLinks 
                        to={item.link} 
                        key={index}
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-50}
                        >
                            {item.title}
                        </NavMenuLinks>
                    </NavItem>))}
            </NavMenu>
            <SocialIcons>
                <SocialIconLink onPointerOver={() => setHover(true)} onPointerOut={() => setHover(false)} href="https://twitter.com/BikiniSteads?s=20" target='_blank' aria-label='twitter' style={SocialColorT({ hover })}>
                    <FaTwitter />
                </SocialIconLink>
                <SocialIconLink onPointerOver={() => setHover(true)} onPointerOut={() => setHover(false)} href="https://t.co/ZWQb9KKurf" target='_blank' aria-label='discord' style={SocialColorD({ hover })}>
                    <FaDiscord />
                </SocialIconLink>
            </SocialIcons>
            <NavBtn>
                <NavBtnlink to='mint' primary={true} >Mint</NavBtnlink>
            </NavBtn>
        </Nav>
    )
}

export default Navbar;