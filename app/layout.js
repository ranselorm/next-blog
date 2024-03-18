import "./globals.css";
import { Inter } from "next/font/google";
// import Navbar from "@/components/Navbar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AuthProvider from "../providers/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Blog App",
  description: "The best blog app!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <AuthProvider>
          {/* <Navbar /> */}
          <div className="px-4 md:px-8">
            {children}
            {/* <Footer /> */}
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
