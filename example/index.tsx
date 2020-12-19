import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ThemeProvider } from '@emotion/react';
import { theme } from '../src/theme';
import { Button } from '../src';

const App = () => {
  return (
    <div>
      <Button>Hello</Button>
    </div>
  );
};

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root'),
);
