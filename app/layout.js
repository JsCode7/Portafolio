import '../styles/globals.css';
import { Analytics } from '@vercel/analytics/react';

export const metadata = {
  title: 'José Daniel - Software Engineer & Fullstack Developer',
  description: 'Ingeniero de Software y Desarrollador Fullstack. Especializado en Clean Architecture, Arquitectura Hexagonal y desarrollo de sistemas robustos, mantenibles y escalables.',
  metadataBase: new URL(
    process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : 'http://localhost:3000'
  ),
  icons: {
    icon: '/favicon.png',
  },
  openGraph: {
    title: 'José Daniel - Software Engineer & Fullstack Developer',
    description: 'Ingeniero de Software y Desarrollador Fullstack. Especializado en Clean Architecture, Arquitectura Hexagonal y desarrollo de sistemas robustos, mantenibles y escalables.',
    siteName: 'José Daniel Sánchez Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 675,
        alt: 'José Daniel Sánchez - Software Engineer Portfolio',
      },
    ],
    locale: 'es_CL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'José Daniel - Software Engineer & Fullstack Developer',
    description: 'Ingeniero de Software y Desarrollador Fullstack. Especializado en Clean Architecture, Arquitectura Hexagonal y desarrollo de sistemas robustos, mantenibles y escalables.',
    images: ['/og-image.jpg'],
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
