import styled from 'styled-components';

export const InfoContainer = styled.div`
color: #fff;
background: ${({lightBg}) => (lightBg ? '#f9f9f9' : '#010606')};

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
font-family: 'Roboto', sans-serif;
text-transform: uppercase;
text-align: justify;
`;


export const Heading = styled.h1`
margin-bottom: 24px;
font-size: 48px;
line-height: 1.1;
font-weight: 600;
<<<<<<< HEAD
color: ${({lightText}) => (lightText ? '#96A6AA' : '#010606')};
font-family: 'Bebas Neue', sans-serif;
=======
color: ${({lightText}) => (lightText ? 'white' : '#010606')};
font-family: 'Teko', sans-serif;
>>>>>>> 07678571b91903e14e4364820278cf600edfc462
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
color: ${({darkText}) => (darkText ? '#96A6AA' : '#fff')};
font-family: 'Roboto', sans-serif;
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








