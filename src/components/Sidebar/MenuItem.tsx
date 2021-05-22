import React from 'react';
import { Menu } from 'antd';

type MenuItemsType = {
  menuList: string[];
  selectedKey: string;
  changeSelectedKey: (event: any) => void;
};

export const MenuItems = ({
  menuList,
  selectedKey,
  changeSelectedKey,
}: MenuItemsType) => {
  const styledTopics = menuList.map((menu: string, index: number) => (
    <Menu.Item key={index} onClick={changeSelectedKey}>
      {menu}
    </Menu.Item>
  ));

  return (
    <Menu mode="inline" selectedKeys={[selectedKey]}>
      {styledTopics}
    </Menu>
  );
};
