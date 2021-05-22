import React from 'react';
import { StyledLayout } from './style';

type SidebarType = {
  menu: React.ReactNode;
};

export const SideBar = ({ menu }: SidebarType) => {
  return (
    <StyledLayout
      className="sidebar"
      breakpoint={'lg'}
      theme="light"
      collapsedWidth={0}
      trigger={null}
    >
      {menu}
    </StyledLayout>
  );
};

export default SideBar;
