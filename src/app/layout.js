import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata = {
  title: 'Meera Laboratory | Trusted Pathology & Diagnostic Lab in Surat',
  description:
    'Meera Laboratory - Trusted pathology and diagnostic laboratory in Surat, Gujarat. Accurate reports, same day results, home sample collection. CBC, Thyroid, Lipid Profile, HbA1c & more.',
  keywords:
    'pathology lab surat, diagnostic lab surat, blood test surat, CBC test, thyroid test, lipid profile, meera laboratory',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
