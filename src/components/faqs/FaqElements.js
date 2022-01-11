import styled from 'styled-components';

export const ContainerFluid = styled.div`
max-width: auto;
margin: 10px 0.1rem;
`;

export const Accordion = styled.details`
display: flex;
padding: 1rem 5px;
border: 2px solid #FFD423;
border-radius: 1px;
margin: 10px 0;
align-items: center;
cursor: pointer;
`;

export const Question = styled.summary`
font-size: 22px;
margin: 0;
padding: 3px 0 0 3px;
font-weight: 500;
color: white;
font-family: 'Teko', 'sans-serif';
outline: none;
`;

export const Answer = styled.p`
font-size: 16px;
margin: 0;
padding: 10px 0 0 2.5rem;
font-weight: 600;
color: #FFD423;
outline: none;
font-family: 'Montserrat', 'sans-serif';
`;