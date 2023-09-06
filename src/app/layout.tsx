import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
// import { PrimeReactProvider } from 'primereact/context';
import "primereact/resources/themes/lara-light-indigo/theme.css";     
import "primereact/resources/primereact.min.css";   
/* eslint-disable */
const inter = Inter({ subsets: ['latin'] })

import  { persistor, store } from '../../redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Toaster } from 'react-hot-toast';

export const metadata: Metadata = {
  title: 'Note Taker',
  description: 'machine test for Bipolar Factory',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}> */}
             {/* <PrimeReactProvider> */}
              {children}
            {/* </PrimeReactProvider> */}
          {/* </PersistGate>
        </Provider> */}
        <Toaster
  position="top-center"
  reverseOrder={false}
/>
      </body>
    </html>
  )
}
