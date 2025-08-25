import ProductCard from '@/components/ProductCard';
import './globals.css';
import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'E-commerce App',
  description: 'Next.js and MongoDB e-commerce platform',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <ProductCard />
        
        {children}
      </body>
    </html>
  );
}