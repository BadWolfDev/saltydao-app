import React, {useState} from "react";
import { FaDiscord, FaTwitter } from "react-icons/fa";
import { 
    FooterContainer, 
    FooterWrap, 
    FooterLinksContainer, 
    FooterLinksWrapper, 
    FooterLinkItem, 
    FooterLinkTitle, 
    FooterLink, 
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
            {/*<FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItem>
                            <FooterLinkTitle>Hola</FooterLinkTitle>
                                <FooterLink to="/mint">mint</FooterLink>
                                <FooterLink to="/mint">who</FooterLink>
                                <FooterLink to="/mint">testimonials</FooterLink>
                                <FooterLink to="/mint">lmao</FooterLink>
                                <FooterLink to="/mint">lol</FooterLink>
                        </FooterLinkItem>
                        <FooterLinkItem>
                            <FooterLinkTitle>Hola</FooterLinkTitle>
                                <FooterLink to="/mint">mint</FooterLink>
                                <FooterLink to="/mint">who</FooterLink>
                                <FooterLink to="/mint">testimonials</FooterLink>
                                <FooterLink to="/mint">lmao</FooterLink>
                                <FooterLink to="/mint">lol</FooterLink>
                        </FooterLinkItem>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItem>
                            <FooterLinkTitle>Hola</FooterLinkTitle>
                                <FooterLink to="/mint">mint</FooterLink>
                                <FooterLink to="/mint">who</FooterLink>
                                <FooterLink to="/mint">testimonials</FooterLink>
                                <FooterLink to="/mint">lmao</FooterLink>
                                <FooterLink to="/mint">lol</FooterLink>
                        </FooterLinkItem>
                        <FooterLinkItem>
                            <FooterLinkTitle>Hola</FooterLinkTitle>
                                <FooterLink to="/mint">mint</FooterLink>
                                <FooterLink to="/mint">who</FooterLink>
                                <FooterLink to="/mint">testimonials</FooterLink>
                                <FooterLink to="/mint">lmao</FooterLink>
                                <FooterLink to="/mint">lol</FooterLink>
                        </FooterLinkItem>
                    </FooterLinksWrapper>
                </FooterLinksContainer>*/}
                <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to='/' onClick={toggleHome}>
                    BKINI STEADS
                    </SocialLogo>
                    <WebsiteRights>Kamijejetls {new Date().getFullYear()}
                    All Rights reserved.</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink onPointerOver={() => setHover(true)} onPointerOut={() => setHover(false)} href="https://twitter.com/BikiniSteads?s=20" target='_blank' aria-label='twitter' style={SocialColorT({hover})}>
                            <FaTwitter/>
                        </SocialIconLink>
                        <SocialIconLink onPointerOver={() => setHover(true)} onPointerOut={() => setHover(false)} href="https://t.co/ZWQb9KKurf" target='_blank' aria-label='discord' style={SocialColorD({hover})}>
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