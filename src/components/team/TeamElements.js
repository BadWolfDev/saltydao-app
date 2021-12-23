import styled from 'styled-components';

export const TeamContainer = styled.div`
height: auto;
display: flex;
justify-content: center;
align-items: center;
background: #010606;
padding: 100px 0;
flex-flow: column;

@media screen and (max-width: 768px){
    height: auto;
    display: flex;
    flex-wrap: wrap;
};

@media screen and (max-width: 480px){
    height: auto;
    display: flex;
    flex-wrap: wrap;
};
`;

export const TeamWrapper = styled.div`
display: flex;
max-width: auto;
margin: 0 auto;
flex-wrap: wrap;
justify-content: space-around;
align-items: center;
grid-gap: 32px;
padding: 0 50px;

@media screen and (max-width: 768px){
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    width: auto;
    height: auto;
}

@media screen and (max-width: 480px){
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
    height: auto;
}
`;

export const TeamCard = styled.div`
background: #fff;
display: flex;
flex-direction: column;
justify-content: flex-start;
border-radius: 10px;
max-height: 340px;
padding: 30px;
box-shadow: 0 1px 3px rgba(0,0,0,0.2);
transition: all 0.2s ease-in-out;

&:hover{
    transform: scale(1.02);
    transition: all 0.2 ease-in-out;
    cursor: pointer;
}
`;

export const TeIcon = styled.img`
height: 160px;
width: 160px;
margin-bottom: 10px;
`

export const Teamh1 = styled.h1`
font-size: 2.5rem;
color: #fff;
font-family: 'Montserrat', sans-serif;
display: flex;
padding-bottom: 5rem;

@media screen and (max-width: 480px){
    font-size: 2rem;
}
`;

export const Teamh2 = styled.h2`
font-size: 1rem;
margin-bottom: 10px;
`;

export const TeamP = styled.p`
font-size: 1rem;
text-align: center;
`;