import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { NavBar } from '../src/components/Navbar';
import { CardLayout } from '../src/components/CardLayout';
import { dummyData } from '../src/data';
import 'antd/dist/antd.css';
const App = () => {
  return (
    <div>
      <NavBar selectedPage="" />
      <CardLayout contentList={dummyData} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
