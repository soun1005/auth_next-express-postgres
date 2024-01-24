// root layout (manage SEO here)

import { Inter } from 'next/font/google';
import './globals.css';
import ButtonWithLink from './components/ButtonWithLink/index';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Login',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav>
          <ButtonWithLink text="🏠" className="homeBtn" />
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
