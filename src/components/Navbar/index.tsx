import React, { useState } from 'react';
import { Drawer, Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
const logo = require('../../../public/logo-new.png');
import { StyledNavBar } from './style';

type NavBarType = {
  menu: React.ReactNode;
};

export const NavBar = ({ menu }: NavBarType) => {
  const [visible, setVisible] = useState(false);
  return (
    <StyledNavBar>
      <Button
        className="menu"
        type="primary"
        icon={<MenuOutlined />}
        onClick={() => setVisible(true)}
      />
      <Drawer
        title="Topics"
        placement="left"
        onClose={() => setVisible(false)}
        visible={visible}
      >
        {menu}
      </Drawer>
      <a href="/">
        <img src={logo} className="logo" alt="logo" />
      </a>
    </StyledNavBar>
  );
};
