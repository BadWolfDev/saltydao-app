import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {Container} from './RoadmapElements';
import Standard from '../standard/index';
import { WhySalty, whatIsSalty, InsuranceLoans } from '../../data/Data';
import { 
    Column1, 
    InfoRow, 
    InfoContainer, 
    InfoWrapper, 
    Subtitle, 
    TextWrapper, 
    Column2, 
    TopLine, 
    Heading } from '../standard/StSectionelements';

 const Settings = {
     dots: true,
     infinite: true,
     speed: 500,
     slidesToShow: 1,
     autoPlay: true,
     slidesToScroll: 1,
     arrows: true,
 }

const Roadmap = () => {
    return (
        <>
            <Container>
                <Slider {...Settings}>
                    <Card {...WhySalty}/>
                    <Card {...whatIsSalty}/>
                    <Card {...InsuranceLoans}/>
                </Slider>
            </Container>
        </>
    )
}

const Card = ({lightBg, imgStart, topLine, headLine, id, lightText, description }) => {
    return(
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headLine}</Heading>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <TextWrapper>
                                <Subtitle>{description}</Subtitle>
                            </TextWrapper>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default Roadmap;