import React from 'react';
import Stack from './components/Stack';
import {ThemeProvider} from '@rneui/themed';
import theme from './config/theme';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <Stack />
    </ThemeProvider>
  );
}

export default App;
