import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Poppins } from 'next/font/google';
import './globals.css';
import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import '@mantine/tiptap/styles.css';
import { ColorSchemeScript, MantineProvider, createTheme } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { ModalsProvider } from '@mantine/modals';

const inter = Inter({ subsets: ['latin'] });

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  primaryColor: 'purple',
  colors: {
    'bright-orange': ['#fff8e1', '#ffefcc', '#ffdd9b', '#ffca64', '#ffba38', '#ffb01b', '#ffab09', '#e39500', '#ca8500', '#af7100'],
    green: ['#e5feee', '#d2f9e0', '#a8f1c0', '#7aea9f', '#53e383', '#3bdf70', '#2bdd66', '#1ac455', '#0caf49', '#00963c'],
    'blue-gray': ['#f3f3fe', '#e4e6ed', '#c8cad3', '#a9adb9', '#9093a4', '#808496', '#767c91', '#656a7e', '#585e72', '#4a5167'],
    purple: ['#f3edff', '#e0d7fa', '#beabf0', '#9a7ce6', '#7c56de', '#683dd9', '#5f2fd8', '#4f23c0', '#451eac', '#3a1899'],
  },
  white: '#ffffff',
});

export const metadata: Metadata = {
  title: 'Digicon - Forum for IT Entusiasts',
  description: 'Web based forum for IT enthusiasts to discuss and share knowledge about information technology.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <ColorSchemeScript defaultColorScheme='auto' />
      </head>
      <body className={poppins.className}>
        <MantineProvider
          theme={theme}
          defaultColorScheme='auto'
        >
          <Notifications />
          {/* <AuthContextProvider> */}
          {/* <Middleware> */}
          <ModalsProvider>{children}</ModalsProvider>
          {/* </Middleware> */}
          {/* </AuthContextProvider> */}
        </MantineProvider>
      </body>
    </html>
  );
}
