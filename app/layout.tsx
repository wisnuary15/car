import "./globals.css";
import Footer from "@/components/footer"; 
import Navbar from "@/components/Navbar"; 

export const metadata = {
  title: "Rent Car",
  description: "Nyoba NextJs App",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='relative'>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
