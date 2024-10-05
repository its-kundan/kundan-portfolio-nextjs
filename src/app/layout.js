import localFont from "next/font/local";
import "./globals.css";
// import Nav from "./../components/Nav";
// import Footer from "./../components/Footer.jsx";

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
        {/* <Nav /> */}
        <main className="flex-grow pt-16"> {/* Adjust the main content area */}
          {children}
        </main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
