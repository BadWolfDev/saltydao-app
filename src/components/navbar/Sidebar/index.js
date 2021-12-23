import React from 'react';
import { menuDataSlider } from '../../../data/MenuData';
import { CloseIcon, SidebarContainer, Icon, SideBtnWrap, SidebarLink, SidebarRoute, SidebarMenu, SidebarWrapper } from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    {menuDataSlider.map((item, index) => (
                        <SidebarLink to={item.link} key={index} onClick={toggle}>
                            {item.title}
                        </SidebarLink>
                    ))}
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to='/mint'>Mint</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
};

export default Sidebar;