import styled from 'styled-components';
import { Layout } from 'antd';

const { Header } = Layout;

export const StyledImage = styled('img')`
  max-height: 70px;
  min-height: 70px;
`;
export const StyledHeader = styled(Header)`
  background: #fff;
  box-shadow: 0 2px 8px #f0f1f2;
  .ant-menu.ant-menu-dark,
  .ant-menu-dark .ant-menu-sub,
  .ant-menu.ant-menu-dark .ant-menu-sub {
    color: rgba(255, 255, 255, 0.65);
    background: transparent;
  }
  .ant-menu-dark.ant-menu-horizontal > .ant-menu-item,
  .ant-menu-dark.ant-menu-horizontal > .ant-menu-submenu {
    color: #001529;
  }
  .ant-menu.ant-menu-dark .ant-menu-item-selected, .ant-menu-submenu-popup.ant-menu-dark .ant-menu-item-selected{
      background-color: transparent;
      border-bottom: 3px solid #1890ff;
  }
  .ant-layout-header {
    padding: 0 20px;
    display: flex;
    align-items: center;
  }
  .ant-row {
    align-items: center;
  }
  .ant-menu-dark.ant-menu-horizontal > .ant-menu-item:hover {
    border-bottom: 3px solid #1890ff;
    background-color:transparent;
  }
  .header-fixed {
    h4 {
      margin-top: 15px;
      margin-bottom: 20px;
    }
  }
`;
