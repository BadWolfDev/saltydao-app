import styled from 'styled-components';
import {FaTimes} from 'react-icons/fa';
import {Link as LinkR} from 'react-router-dom';
import {Link as LinkS} from 'react-scroll';

export const SidebarContainer = styled.aside`
position: fixed;
z-index: 999;
width: 100%;
height: 100%;
background: #898985;
display: grid;
align-items: center;
top: 0;
left: 0;
transition: 0.3s ease-in-out;
opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;

export const CloseIcon = styled(FaTimes)`
color: #65BCC1;
&:hover {
    color: #397174;
}
`;

export const Icon = styled.div`
position: absolute;
top: 1.2rem;
background: transparent;
font-size: 2rem;
outline: none;
cursor: pointer;
right: 1.5rem;
`;

export const SidebarWrapper = styled.div`
color: #fff;
`;

export const SidebarMenu = styled.ul`
display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(6, 80px);
text-align: center;

@media screen and (max-width: 480px){
    grid-template-rows: repeat(6, 60px);
}
`;

export const SidebarLink = styled(LinkS)`
display: flex;
align-items: center;
justify-content: center;
font-size: 1.5rem;
text-decoration: none;
list-style: none;
cursor: pointer;
transition: 0.2s ease-in-out;
color: #fff;
font-family: 'Montserrat','sans-serif';
text-transform: uppercase;
font-weight: 500;

&:hover {
    color: #65BCC1;
}
`;

export const SideBtnWrap = styled.div`
display: flex;
justify-content: center;
`;

export const SidebarRoute = styled(LinkR)`
border-radius: 1px;
background: #fff;
white-space: nowrap;
padding: 16px 64px;
color: #000;
font-size: 12px;
font-family: 'Montserrat','sans-serif';
text-transform: uppercase;
font-weight: bold;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;

&:hover {
    transition: all 0.2s ease-in-out;
    background: #65BCC1;
    color: #fff;
}
`;