import styled from 'styled-components';
import Kami from '../../images/kami.svg';

export const ContainerFluid = styled.div`
width: 100%;
margin: 10px 0.1rem;
`;

export const Accordion = styled.div`
display: flex;
width: 100%;
padding: 1rem 5px;
border: 2px solid #6db5ff;
border-radius: 2px;
margin: 10px 0;
align-items: center;
cursor: pointer;
`;

export const Icon = styled.div`
margin: 0 10px 0 0;
width: 30px;
height: 30px;
background: url("../../images/kami.svg") no-repeat 8px 7px #000;
border-radius: 50%;
float: left;
transition: all 0.5s;
`;

export const Question = styled.h5`
font-size: 22px;
margin: 0;
padding: 3px 0 0 3px;
font-weight: normal;
color: #1f5c9a;
`;

export const Panel = styled.div`
padding: 0 15px;
border-left: 1px solid black;
margin-left: 25px;
font-size: 14px;
text-align: justify;
overflow: hidden;
max-height: 300px;
transition: all 0.5s ease-in;

&:active{
    display: "block";
}
`;

export const Answer = styled.p`
font-size: 22px;
margin: 0;
padding: 3px 0 0 2.5rem;
font-weight: normal;
color: #1f5c9a;
`;