import Container from '@/components/Container';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-with, height=device-height, initial-scale=1.0"
        />
      </head>
      <body>
        <Header />
        <main className="pt-navigation-height">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
