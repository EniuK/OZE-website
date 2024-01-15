"use client";
import "./globals.css";
import ThemeRegistry from "./components/ThemeRegistry";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import HomePage from "./pages/HomePage";
import HomeMeta from "./MetaData";
import Home from "./page";
import NotFound from "./pages/NotFound";
import { usePathname } from "next/navigation";
import Realizations from "./pages/Realizations";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  const renderContent = () => {
    switch (pathname) {
      case "/Kontakt":
        return <Contact />;
      case "/Serwis":
        return <Services />;
      case "/Realizacje":
        return <Realizations />;
      case "/" || "/Home":
        return <HomePage />;
      default:
        return <NotFound />;
    }
  };

  return (
    <html lang="en">
      <ThemeRegistry>
        <body>
          <Header />
          <HomeMeta>{renderContent() || children}</HomeMeta>
          <Footer />
        </body>
      </ThemeRegistry>
    </html>
  );
};

export default RootLayout;
