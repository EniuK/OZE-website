import { usePathname } from "next/navigation";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import HomePage from "./pages/HomePage";
import Realizations from "./pages/Realizations";
import NotFound from "./pages/NotFound";

export const useRenderContent = () => {
  const pathname = usePathname();

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
