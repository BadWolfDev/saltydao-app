import React, { useState } from "react";
import Slider from 'react-slick';
import './Hero.css';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { 
    Column1, 
    Column2,
    InfoRow, 
    InfoWrapper, 
    TextWrapper,
    ImgWrap, 
    TopLine, 
    Heading,
    Img, 
    Subtitle } from "../standard/StSectionelements";
import { 
    HeroSection, 
    HeroWrapper, Background } from "./HeroElements";

import BikiniSteadss from '../../images/bikiLogo.png';

const Hero = ({ id, img, alt }) => {

    const NextArrow = ({ onClick }) => {
        return (
            <div className="arrow next" onClick={onClick}>
                <FaArrowRight />
            </div>
        );
    };

    const PrevArrow = ({ onClick }) => {
        return (
            <div className="arrow prev" onClick={onClick}>
                <FaArrowLeft />
            </div>
        );
    };

    const [imageIndex, setImageIndex] = useState(0);

    const settings = {
        draggable: true,
        infinite: true,
        lazyLoad: true,
        speed: 300,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        adaptiveHeight: true,
        beforeChange: (current, next) => setImageIndex(next),
    };

    return (
        <>
            <HeroSection id={id} >
                    <HeroWrapper imgURL={BikiniSteadss}> 
                    <InfoWrapper>
                        <InfoRow>
                            <Column1>
                                <TextWrapper>
                                    <TopLine>gm</TopLine>
                                    <Heading>Down in the deep blue sea, lies the county of Solana bottom. 
                                        3 Neighborhoods fight for power, honor, and greed. Corruption lives on every corner and in every office.
                                        Money is king and everyone wants a piece of the action. Only the Mayors mansion can contain all the chaos,
                                        because with great power, comes even greater corruption. Deep in the heart of the city lies Shell Bank. 
                                        Every deal, racket, and dime bag, a piece gets kicked back to the bank. If you think otherwise,
                                        the mayor will send a couple of the boys to put your paper hands in a vice and your pearls in a clamp.
                                        If you gonna make it in this city, you better not be a fool.</Heading>
                                </TextWrapper>
                            </Column1>
                            <Column2>
                                <ImgWrap>
                                    <Img src={BikiniSteadss}/>
                                </ImgWrap>
                            </Column2>
                        </InfoRow>
                    </InfoWrapper>
                    </HeroWrapper>
            </HeroSection>
        </>
    )
};

export default Hero;