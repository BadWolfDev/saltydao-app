import styled from 'styled-components';

export const InfContainer = styled.div`
background: ${({lightBg}) => (lightBg ? '#f9f9f9' : '#010606')};
height: 150rem;

@media screen and (max-width: 768px) {
    padding: 100px 0;
}
`;

export const TopLineR = styled.p`
color: #01bf71;
font-size: 24px;
line-height: 16px;
font-weight: 700;
letter-spacing: 1.4px;
text-transform: uppercase;
margin-bottom: 10px;
margin-top: 7rem;
color: white;
font-family: 'Montserrat', 'sans-serif';
`;

export const TimeContainer = styled.div`
min-height: 80vh;
width: 65rem;
display: flex;
align-items: center;
justify-content: center;
padding: 100px 0;
`;

export const TimeLine =  styled.div`
width: 100%;
height: auto;
max-width: 90%;
margin: 0 auto;
position: relative;

@media screen and (min-width: 768px){
    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 2px;
        height: 100%;
        background-color: gray;
    }
}
`;

export const List = styled.ul`
list-style: none;
`;

export const Item = styled.li`
padding: 20px;
background-color: #1e1f22;
color: white;
border-radius: 10px;
margin-bottom: 20px;

&:last-child{
    margin-bottom: 0;
}

&:nth-child(odd) {
    float: left;
    clear: right;
    transform: translateX(-30px);
    border-radius: 20px 0px 20px 20px;
}

&:nth-child(even) {
    float: right;
    clear: left;
    transform: translateX(30px);
    border-radius: 0px 20px 20px 20px;
}

&:nth-child(odd)::before{
    transform: translate(50%, -50%);
    right: -30px;
}

&:nth-child(even)::before{
    transform: translate(50%, -50%);
    right: -30px;
}

@media screen and (min-width: 768px) {
    width: 50%;
    position: relative;
    margin-bottom: 50px;
    &:nth-child(odd) {
        float: left;
        clear: right;
        transform: translateX(-30px);
        border-radius: 20px 0px 20px 20px;
    }
    
    &:nth-child(even) {
        float: right;
        clear: left;
        transform: translateX(30px);
        border-radius: 0px 20px 20px 20px;
    }
    
    &:nth-child(odd)::before{
        transform: translate(50%, -50%);
        right: -30px;
    }
    
    &:nth-child(even)::before{
        transform: translate(50%, -50%);
        left: -50px;
    }
    &::before {
        content: "";
        position: absolute;
        height: 20px;
        width: 20px;
        border-radius: 50%;
        background-color: gray;
        top: 0px;
}

&:hover{
    &::before{
        background-color: red;
    }
}`;

export const InfoDate = styled.h3`
font-size: 1.1rem;
font-weight: 300;
font-family: 'Teko', 'sans-serif';
margin-bottom: 10px;
letter-spacing: 2px;
color: ${({darkText}) => (darkText ? '#010606' : 'red')};

@media screen and (min-width: 768px){
    position: absolute;
    top: -30px;
}
`;

export const InfoTitle = styled.h1`
font-weight: 500;
font-size: 25px;
line-height: 30px;
margin-bottom: 10px;
color: ${({lightText}) => (lightText ? '#f7f8fa' : '#010606')};
font-family: 'Teko','sans-serif';
text-transform: uppercase;
`;

export const InfoText = styled.p`
font-size: 16px;
line-height: 30px;
font-weight: 300;
color: ${({lightText}) => (lightText ? '#f7f8fa' : '#010606')};
font-family: 'Montserrat','sans-serif';
text-align: justify;
`;