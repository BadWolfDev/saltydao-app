import React from 'react';
import { Button } from '../ButtonElements';
import { 
    BtnWrap, 
    Column1, 
    InfoRow, 
    InfoContainer, 
    InfoWrapper, 
    Subtitle, 
    TextWrapper, 
    Column2, 
    ImgWrap, 
    Img, 
    TopLine, 
    Heading } from './StSectionelements';

const Standard = ({ lightBg, show, imgStart, topLine, headLine, darkText, buttonLabel, img, alt, id, lightText, description, primary, dark, dark2 }) => {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headLine}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                                <BtnWrap>
                                    <Button to='home'
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact="true"
                                    offset={-80}
                                    show={show}
                                    >{buttonLabel}</Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt}/>
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default Standard;
