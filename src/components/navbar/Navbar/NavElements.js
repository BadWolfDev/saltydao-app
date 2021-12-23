import styled, {css} from 'styled-components/macro';
import { Link as LinkR} from 'react-router-dom';
import { Link as LinkS} from 'react-scroll';

export const Nav = styled.nav`
height: 80px;
display: flex;
justify-content: space-between;
align-items: center;
font-size: 1rem;
padding: 1rem 2rem;
z-index: 10;
position: fixed;
width: 100%;
top: 0;
background: ${({scrollNav}) => (scrollNav ? "#fff" : "transparent")};
box-shadow: ${({scrollNav}) => (scrollNav ? "0 1px 3px #010606" : 'none')};
transition: all 0.3s ease-in-out;

@media screen and (max-width: 960px){
    transition: all 0.8s ease;
}
`;

export const LogoC = styled.div`
color: #0B5D33;
align-items: center;
padding: 0 1rem;
font-size: 1rem;
text-decoration: none;
font-family: 'Montserrat', sans-serif;
font-weight: 900;
cursor: pointer;
`;

export const Logo = styled.img`
padding: 0;
width: 5rem;
height: 4rem;
left: 0;
margin: 0;
cursor: pointer;
`

export const NavMenu = styled.ul`
display: flex;
align-items: center;
list-style: none;
text-align: center;
margin-right: -22px;

@media screen and (max-width: 768px) {
    display: none;
}
`;

export const NavItem = styled.li`
display: flex;
align-items: center;
padding: 0 1rem;
font-size: 2rem;
height: 100%;
font-weight: 400;
cursor: pointer;
text-decoration: none;
height: 80px;
`;

export const MobileIcon = styled.div`
display: none;

@media screen and (max-width: 768px){
    display: block;
    position: absolute;
    color: red;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    &:hover {
        color: red;
    }
}
`;

export const NavMenuLinks = styled(LinkS)`
color: #ACAEAD;
display: flex;
width: 100%;
align-items: center;
padding: 0 1rem;
font-size: 1rem;
height: 100%;
font-weight: bold;
cursor: pointer;
font-family: 'Montserrat', sans-serif;
text-decoration: none;
text-transform: uppercase;

&:hover {
    color: #699b86;
    border-bottom: 3.5px solid #699b86;
};

&.active {
    color: #699b86;
    border-bottom: 3.5px solid #699b86;
};

`;

export const NavBtn = styled.nav`
display: flex;
align-items: center;

@media screen and (max-width: 768px) {
    display: none;
}
`;

export const NavBtnlink = styled(LinkR)`
background: ${({ primary }) => (primary ? '#699b86' : '#ACAEAD')};
white-space: nowrap;
outline: none;
border: none;
min-width: 100px;
max-width: 200px;
cursor: pointer;
text-decoration: none;
transition: 0.3s;
display: flex;
justify-content: center;
align-items: center;
border-radius: 3px;
padding: ${({big}) => (big ? '16px 40px' : '14px 24px')};
color: white;
font-size: ${({big})=>(big ? '20px' : '15px')};
transition: all 0.2s ease-in-out;
border-radius: 1.3px;
font-family: 'Montserrat', sans-serif;
font-weight: 700;
letter-spacing: 1px;
text-transform: uppercase;

&:hover {
    transition: all 0.2s ease-in-out;
    transform: translateY(-1px);
    background: ${({ primary }) => (primary ? '#ACAEAD' : '#699b86')};
}
`;