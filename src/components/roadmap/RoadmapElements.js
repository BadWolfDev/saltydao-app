import styled from 'styled-components';

export const Container = styled.div`
background-color: transparent;
max-height: 625px;
display: block;
column-fill: balance;
column-count: 1;
column-width: 100%;

@media screen and (max-width: 540px){
    display: block;
    max-height: 860px;
}
`;

export const List = styled.ul`
padding: 0;
margin-left: 2rem;
text-decoration: none;
font-family: 'Montserrat', sans-serif;
text-transform: uppercase;
font-size: 14px;
line-height: 24px;
text-align: justify;
max-width: 80%;
`