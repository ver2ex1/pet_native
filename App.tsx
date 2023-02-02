import React from 'react';
import Stack from './components/Stack';
import {ThemeProvider} from '@rneui/themed';
import theme from './config/theme';
import {QueryClient, QueryClientProvider} from 'react-query';
const queryClient = new QueryClient();

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Stack />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
