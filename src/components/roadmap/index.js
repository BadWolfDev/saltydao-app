import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Container, List } from './RoadmapElements';
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
    Heading,
} from '../standard/StSectionelements';

const Card = ({ lightBg, imgStart, topLine, headLine, id, lightText, description }) => {
    return (
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
    )
}

const Card1 = ({ lightBg, imgStart, topLine, headLine, id, lightText, description }) => {
    return (
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
                        <List>
                            <li>dsfsdf</li>
                            <li>dfsf</li>
                            <li>dsfds</li>
                        </List>
                    </TextWrapper>
                </Column2>
            </InfoRow>
            </InfoWrapper>
        </InfoContainer>
    )
}

const settings = {
    dots: true,
    dotsClass: 'slick-dots',
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    slidesToScroll: 1,
    rtl: true,
    appendDots: dots => (
        <div
            style={{
                backgroundColor: "#ddd",
                borderRadius: "2px",
                borderBottomLeftRadius: "0px",
                borderBottomRightRadius: "0px",
                padding: "10px"
            }}
        ><ul style={{ margin: '0px', color: '#fff' }}>{dots}</ul></div>),

}

const style = {
    'width':'fit-content'
}

const Roadmap = () => {
    return (
        <Container>
            <Card style={style} {...WhySalty}/>
            <Card {...whatIsSalty}/>
            <Card1 {...InsuranceLoans}/>
        </Container>
    );
}

export default Roadmap