import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import ContextProvider from './Context';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')).render(
  <ContextProvider>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </ContextProvider>
);
