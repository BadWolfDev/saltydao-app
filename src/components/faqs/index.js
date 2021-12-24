import React, {useState} from 'react';
import QuestionComponent from './QuestionComponent';
import {
    InfoContainer, 
    InfoRow, 
    InfoWrapper, 
    Column2, 
    Column1, 
    Img, 
    ImgWrap, 
    TextWrapper, 
    TopLine, 
    Heading} from '../standard/StSectionelements';

const styles = {
    "padding-bottom":"0px",
}

const top = {
    "color":"#397174"
}

const maxWidth = {
    "max-width":"870px"
}

const FAQ = ({ id, lightBg, imgStart, img, alt, topLine, span, description, headLine }) => {

    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper style={maxWidth}>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper style={styles}>
                                <TopLine style={top}>{topLine}</TopLine>
                                <Heading>{headLine}</Heading>
                            </TextWrapper>
                            <QuestionComponent/>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt} />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default FAQ;