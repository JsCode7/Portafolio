import '../styles/globals.css';
import { Analytics } from '@vercel/analytics/react';

export const metadata = {
  title: 'José Daniel - Software Engineer & Fullstack Developer',
  icons: {
    icon: '/favicon.ico',
  },
};

const RootLayout = ({ children }) => (
  <html lang="en" data-scroll-behavior="smooth">
    <head>
      <link rel="preconnect" href="https://stijndv.com" />
      <link rel="stylesheet" href="https://stijndv.com/fonts/Eudoxus-Sans.css" />
    </head>
    <body>
      {children}
      <Analytics />
    </body>
  </html>
);

export default RootLayout;
