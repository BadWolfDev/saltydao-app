import React, {useState, useEffect} from 'react';
import { menuData } from '../../../data/MenuData';
import { Nav, Logo, MobileIcon, NavMenu, NavMenuLinks, NavBtn, NavItem, NavBtnlink, LogoC, MobileTitle } from "./NavElements";
import { FaBars } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import  {SocialIcons, SocialIconLink} from "../../footer/FooterElements";
import { FaDiscord, FaTwitter } from "react-icons/fa";


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
            color: hover ? '#00acee':'#00acee',
            fontSize: '20px',
        }
    );

    const SocialColorD = ({hover}) => (
        {
            color: hover ? '#5865F2':'#5865F2',
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
            <MobileTitle>SaltyDao</MobileTitle>
            <SocialIcons>
                <SocialIconLink href="https://twitter.com/SaltyDAOSolana?s=20" width='2rem' target='_blank' aria-label='twitter' style={SocialColorT({ hover })}>
                    <FaTwitter size={32} />
                </SocialIconLink>
                <SocialIconLink onPointerOut={() => setHover(false)} href="https://discord.gg/P7ZEmB8ERp" target='_blank' aria-label='discord' style={SocialColorD({ hover })}>
                    <FaDiscord size={32} />
                </SocialIconLink>
            </SocialIcons>
        </Nav>
    )
}

export default Navbar;