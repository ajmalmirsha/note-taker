import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

import  { persistor, store } from '../../redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

export const metadata: Metadata = {
  title: 'Note Taker',
  description: 'machine test for Bipolar Factory',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  if (typeof window === 'undefined') {
    console.log('window is undefined');
    
    return (
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    );
  }

  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}> */}
            {children}
          {/* </PersistGate>
        </Provider> */}
      </body>
    </html>
  )
}
