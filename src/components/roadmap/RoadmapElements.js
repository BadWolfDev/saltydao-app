import styled from 'styled-components';

export const Container = styled.div`
background-color: transparent;
max-height: 870px;
height: auto;
overflow-y: scroll;
display: block;
margin: 0;
top: 0;
bottom: 0;

@media screen and (max-width: 540px){
    display: block;
    height: auto;
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