import styled from 'styled-components';

export const InfoContainer = styled.div`
color: #fff;

@media screen and (max-width: 768px) {
    padding: 100px 0;
}
`;

export const InfoWrapper = styled.div`
display: grid;
z-index: 1;
height: 860px;
width: 100%;
max-width: 1100px;
margin-right: auto;
margin-left: auto;
padding: 0 24px;
justify-content: center;
`;

export const InfoRow = styled.div`
display: grid;
grid-auto-columns: minmax(auto, 1fr);
align-items: center;
grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

@media screen and (max-width: 768px){
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)}
}
`;

export const Column1 = styled.div`
margin-bottom: 15px;
padding: 0 15px;
grid-area: col1;
`;

export const Column2 = styled.div`
margin-bottom: 15px;
padding: 0 15px;
grid-area: col2;
`;

export const TextWrapper = styled.div`
max-width: 540px;
padding-top: 0;
padding-bottom: 60px;
`;

export const TopLine = styled.p`
color: red;
font-size: 16px;
line-height: 16px;
font-weight: 700;
letter-spacing: 1.4px;
text-transform: uppercase;
margin-bottom: 16px;
font-family: 'Montserrat', sans-serif;
text-transform: uppercase;
text-align: justify;
`;


export const Heading = styled.h1`
margin-bottom: 24px;
font-size: 48px;
line-height: 1.1;
font-weight: 600;
color: ${({lightText}) => (lightText ? '#f7f8fa' : '#010606')};
font-family: 'Teko', sans-serif;
text-transform: uppercase;

@media screen and (max-width: 480px){
    font-size: 32px;
}
`;

export const Subtitle = styled.p`
max-width: 440px;
margin-bottom: 35px;
font-size: 14px;
line-height: 24px;
text-align: justify;
color: ${({darkText}) => (darkText ? '#010606' : '#fff')};
font-family: 'Montserrat', sans-serif;
text-transform: uppercase;
`;

export const BtnWrap = styled.div`
display: flex;
justify-content: flex-start;
`;

export const ImgWrap = styled.div`
max-width: 555px;
height: 100%;
`;

export const Img = styled.img`
width: 100%;
margin: 0 0 10px 0;
padding-right: 0;
`;

export const WhitepaperContainer = styled.div`
width: 100%;
background-color: #f9f9f9;
font-family: 'Montserrat', sans-serif;
padding: 30px;
height: auto;
justify-content: space-evenly;
`
export const WhitepaperContent = styled.div`
max-width: 80%;
margin: 0 auto;
justify-content: space-evenly;
display: flex;

@media screen and (max-width: 480px){
    display: block;
}
`;

export const WhitePaperCol = styled.div`
flex: 50%;

@media screen and (max-width: 480px){
    flex: 100%;
}
`

export const WhitepaperTitle = styled.h2`
margin: 50px;
text-align: center;
font-size: 36px;
font-family: 'Montserrat', sans-serif;
text-transform: uppercase;
color: #397174;
font-weight: 200;
`;

export const BenefitsTitle = styled.h4`
text-align: start;
font-size: 24px;
font-family: "Teko", 'sans-serif';
color: #65BCC1;
text-transform: uppercase;

@media screen and (max-width: 480px){
    padding-top: 3rem;
}
`

export const BenefitList = styled.ul`
padding-right: 50px;
text-align: justify;
`

export const BenefitListItem = styled.li`
list-style-type: square;
margin: 16px auto;
font-size: 16px;
font-weight: 100;
letter-spacing: 0.5px;
font-family: 'Montserrat', 'sans-serif';
`