import styled from 'styled-components';
import { Link } from 'react-scroll'

export const Button = styled(Link)`
background: ${({ primary }) => (primary ? '#699b86' : 'black')};
display: ${({show}) => (show ? 'none' : 'flex')};
white-space: nowrap;
outline: none;
border: none;
min-width: 100px;
max-width: 200px;
cursor: pointer;
text-decoration: none;
transition: 0.3s;
justify-content: center;
align-items: center;
border-radius: 1px;
padding: ${({big}) => (big ? '16px 40px' : '14px 24px')};
color: ${({primary}) => (primary ? 'white' : 'white')};
font-size: ${({big}) => (big ? '20px' : '15px')};
transition: all 0.2s ease-in-out;
font-family: 'Montserrat', sans-serif;
font-weight: 700;
letter-spacing: 1px;
text-transform: uppercase;

&:hover {
    transition: all 0.2s ease-in-out;
    transform: translateY(-1px);
    background: ${({ primary }) => (primary ? 'black' : '#699b86')}
}
`