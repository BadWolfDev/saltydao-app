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
    "color":"#397174",
    'font-weight':'200',
}

const maxWidth = {
    "max-width":"870px",
}

const maxHeight = {
    'position':'relative',
}

const FAQ = ({ id, lightBg, imgStart, img, alt, topLine, span, description, headLine }) => {

    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper style={maxWidth}>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper style={styles}>
                                <TopLine style={{"color":"#ACAEAD"}}>{topLine}</TopLine>
                                <Heading style={top}>{headLine}</Heading>
                            </TextWrapper>
                            <QuestionComponent/>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img style={maxHeight} src={img} alt={alt} />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default FAQ;