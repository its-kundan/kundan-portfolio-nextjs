import localFont from "next/font/local";
import "./globals.css";
import Nav from "./../components/Nav";
import Nav2 from "./../components/Nav2";
import Footer from "./../components/Footer.jsx";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Kundan Portfolio",
  description: "Kundan Kumar portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`} // Flex layout with full height
      >
        <main className="flex-grow"> {/* Adjust the main content area */}
          <Nav2 />
            {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
