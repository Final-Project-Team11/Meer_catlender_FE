import React from 'react';
import Router from './shared/Router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import GlobalStyle from './styles/GlobalStyle';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { TabContext } from './api/hooks/Main/useTabContext';
import { RecoilRoot } from 'recoil';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <ReactQueryDevtools />
        <GlobalStyle />
        <TabContext>
          <Router />
        </TabContext>
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default App;
