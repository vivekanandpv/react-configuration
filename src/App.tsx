import * as React from 'react';
import { APP_CONFIG } from './config.provider';

interface AppProps {}

const App: React.FunctionComponent<AppProps> = (props) => {
  return (
    <>
      <div className='App'>
        <h3>Current Configuration: {APP_CONFIG.configuration}</h3>
        <hr />
        <p>Base Url: {APP_CONFIG.baseUrl}</p>
      </div>
    </>
  );
};

export default App;
