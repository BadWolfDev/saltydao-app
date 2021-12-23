import styled, { css } from 'styled-components/macro';
import {IoMdArrowRoundForward} from 'react-icons/io';
import {IoArrowForward, IoArrowBack} from 'react-icons/io5';

export const HeroSection = styled.section`
position: relative;
overflow: hidden;
justify-content: center;
align-items: center;
display: flex;
background-color: black;

@media screen and (max-width: 768px) {
    padding: 100px 0;
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
}
`;

export const Title = styled.h1`
text-align: right;
padding-top: 24px;
font-size: 48px;
line-height: 1.1;
font-weight: 600;
color: red;

@media screen and (max-width: 480px){
    font-size: 32px;
}
`;

export const HeroWrapper = styled.div`
width: 35%;
top: 8rem;
left: 6rem;
display: flex;
justify-content: center;
align-items: center;
overflow: hidden;
position: relative;
background: url(${(props)=>props.imgURL});
background-size: contain;
background-repeat: no-repeat;


&::before{
    position: absolute;
    content: '';
    background: rgba(0,0,0,0.5);
}
`;

export const HeroSlide = styled.div`
z-index: 1;
width: 100%;
height: 100%;
transition: all 1s ease-in-out;
`;

export const HeroSlider = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
transition: all 1s ease-in-out;

&::before {
    content: '';
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 100vh;
    bottom: 0vh;
    left: 0;
    overflow: hidden;
    opacity: 0.4;
    background: linear-gradient(
        180deg,
        rgba(0,0,0,0.2) 0%,
        rgba(0,0,0,0.2) 50%,
        rgba(0,0,0,0.6) 100%,
    )
}
`;

export const HeroImage = styled.img`
position: absolute;
width: 100vw;
height: 100vh;
object-fit: cover;
transition: all 1s ease-in-out;
`;

export const HeroContent = styled.div`
position: relative;
z-index: 10;
display: flex;
flex-direction: column;
max-width: 1600px;
width: calc(100% - 100px);
color: yellow;

h1{
    font-size: clamp(1rem, 8vw, 2rem);
    font-weight: 400;
    text-transform: uppercase;
    text-shadow: 0px 0px 20px rgba(0,0,0,0.4);
    text-align: left;
    margin-bottom: 0.8rem;
}

p{
    margin-bottom: 1.2rem;
    text-shadow: 0px 0px 20px rgba(0,0,0,0.4);
}
`;

export const SliderButtons = styled.div`
position: absolute;
bottom: 25px;
right: 50px;
display: flex;
z-index: 10;
display: none;
`;

export const Arrow = styled(IoMdArrowRoundForward)`
margin-left: 0.5rem;
`;

export const arrowButtons = css`
background-color: #fff;
cursor: pointer;
position: absolute;
z-index: 10;

&:hover{
    background: #68edff;
    transition: color 300ms;
    transform: scale(1.05);

}
`;

export const PrevArrow = styled(IoArrowBack)`
${arrowButtons}
left: 0;
top: 50%;
`;

export const NextArrow = styled(IoArrowForward)`
${arrowButtons}
right: 0;
top: 50%;
`;