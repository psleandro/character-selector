import './globals.css';
import { Oxanium } from 'next/font/google';

const oxanium = Oxanium({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

export const metadata = {
  title: 'X-Men',
  description: 'Web application to select x-men character',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={oxanium.className}>{children}</body>
    </html>
  );
}
