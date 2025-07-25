import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import '../../public/assets/css/style.css';
import Script from 'next/script';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Mehadi Hasan | Full Stack Developer",
  description: "Portfolio of Mehadi Hasan, a Full Stack Developer specializing in Laravel and React.js.",
};

export default function RootLayout({ children }) {  
  return (
    <html lang="en">   
      <body className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable}`}>
        {children}    
        <Script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"/>
        <Script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"/>
      </body>
    </html>
  );
}
