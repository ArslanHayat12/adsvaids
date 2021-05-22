import React, { useState } from 'react';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import {
  MenuItems,
  SideBar,
  NavBar,
  CardLayout,
} from '../../../src/components/';
import { dummyData } from '../../../src/data';
import { StyledLayoutWrapper } from './style';

export const Main = () => {
  const menuList = dummyData.map(data => data.name);
  const [contentIndex, setContentIndex] = useState(0);
  const [selectedKey, setSelectedKey] = useState('0');
  const changeSelectedKey = event => {
    const key = event.key;
    setSelectedKey(key);
    setContentIndex(+key);
  };
  const Menu = (
    <MenuItems
      menuList={menuList}
      selectedKey={selectedKey}
      changeSelectedKey={changeSelectedKey}
    />
  );
  return (
    <div className="App">
      <Layout>
        <NavBar menu={Menu} />
        <StyledLayoutWrapper>
          <SideBar menu={Menu} />
          <Layout.Content>
            <CardLayout contentList={dummyData} />
          </Layout.Content>
        </StyledLayoutWrapper>
      </Layout>
    </div>
  );
};
