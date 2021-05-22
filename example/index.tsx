import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import 'antd/dist/antd.css';
import { Main } from './pages/Main';
const App = () => {
  return (
    <div>
      {/* <NavBar selectedPage="" /> */}
      <Main />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
