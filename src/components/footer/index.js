import React, {useState} from "react";
import { FaDiscord, FaTwitter } from "react-icons/fa";
import { 
    FooterContainer, 
    FooterWrap,
    SocialMedia, 
    SocialMediaWrap, 
    SocialLogo, 
    WebsiteRights, 
    SocialIcons, 
    SocialIconLink } from './FooterElements';
import { animateScroll as scroll } from 'react-scroll'

function Footer() {

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    const SocialColorT = ({hover}) => (
        {
            color: hover ? '#00acee':'#fff',
        }
    );

    const SocialColorD = ({hover}) => (
        {
            color: hover ? '#5865F2':'#fff',
        }
    );

    const [hover, setHover] = useState(false);

    return(
        <>
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to='/' onClick={toggleHome}>
                    SaltyDAO
                    </SocialLogo>
                    <WebsiteRights>SaltyDAO {new Date().getFullYear()} | All Rights reserved</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink onPointerOver={() => setHover(true)} onPointerOut={() => setHover(false)} href="https://twitter.com/SaltyDAOSolana?s=20" target='_blank' aria-label='twitter' style={SocialColorT({hover})}>
                            <FaTwitter/>
                        </SocialIconLink>
                        <SocialIconLink onPointerOver={() => setHover(true)} onPointerOut={() => setHover(false)} href="https://discord.gg/P7ZEmB8ERp" target='_blank' aria-label='discord' style={SocialColorD({hover})}>
                            <FaDiscord/>
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
        </>
    )
}

export default Footer;