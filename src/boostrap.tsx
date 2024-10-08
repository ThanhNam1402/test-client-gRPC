import React from 'react'
import ReactDOM from 'react-dom/client'
import 'remixicon/fonts/remixicon.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import GlobalStyles from './app/components/GlobalStyles'
import { AppProvider } from './app/shared/AppContext'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <GlobalStyles>
                <AppProvider>
                    <QueryClientProvider client={queryClient}>
                        <App />
                        <ReactQueryDevtools initialIsOpen={false} />
                    </QueryClientProvider>
                </AppProvider>
            </GlobalStyles>
        </BrowserRouter>
    </React.StrictMode>
)
