import './globals.css';
import Navbar from '@/components/Navbar';
import CategoryBar from '@/components/CategoryBar';
import Headers from '@/components/Headers'
import Slider from '@/components/Slider';
import FestiveSections from '@/components/FestiveSections';


export const metadata = {
  title: 'E-commerce App',
  description: 'Next.js and MongoDB e-commerce platform',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Headers />
        <Navbar /> 
        <CategoryBar />
         <Slider />
         <FestiveSections />
        {children}
      </body>
    </html>
  );
}