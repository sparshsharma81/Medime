import { Inter } from "next/font/google"; //this is basically the inner font jo hamne import kiya hai..jise ham use kar rahe hai
import "./globals.css";

// HERE WE WILL USE THE DEFAULT FONT 
const inter = Inter({ subsets: ["latin"] });
//this is one of the default font --- inter


export const metadata = {
  title: "MediMeet - Doctors Appointment App",
  description: "Connect with doctors anytime anywhere",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className}`}>
          {/* yaha pr ham header component add karege  */}
          <main className="min-h-screen">

          {/* // the min-h-screen dhyan rakhegi ki kam se kam 100 view port height to ho iski  */}
          {children}
</main>
          {/* yaha pr ham footer component add karege   */}
          <footer className ="bg-muted/50 py-12">
          {/* ye basically ek basic styling hai footer ki ..taaki vo center me aa jaye.... */}
            <div className="container mx-auto px-4 text-center text-gray-200">
              {/* container basically ek max width provide karta hai according to the size of the screen --basically app responsive ban sake */}
              {/* mx-auto --- this will insure that everything will be pushed inside the middle  */}
              {/* 4 rem padding -- 4 -- 1 rem -- 16px  */}
              <p>Made with Next-js from sparsh sharma</p>
            </div>
          </footer>
      </body>
    </html>
  );
}
