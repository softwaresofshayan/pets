import { HomeIcon, InfoIcon, NewspaperIcon, PhoneIcon, HelpCircleIcon, ShoppingBagIcon, HeartPulseIcon } from "lucide-react";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import News from "./pages/News.jsx";
import Contact from "./pages/Contact.jsx";
import Help from "./pages/Help.jsx";
import PetMarketplace from "./pages/PetMarketplace.jsx";
import PetCare from "./pages/PetCare.jsx";

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <HomeIcon className="h-4 w-4" />,
    page: <Home />,
  },
  {
    title: "About Us",
    to: "/about",
    icon: <InfoIcon className="h-4 w-4" />,
    page: <About />,
  },
  {
    title: "News",
    to: "/news",
    icon: <NewspaperIcon className="h-4 w-4" />,
    page: <News />,
  },
  {
    title: "Pet Marketplace",
    to: "/marketplace",
    icon: <ShoppingBagIcon className="h-4 w-4" />,
    page: <PetMarketplace />,
  },
  {
    title: "Pet Care",
    to: "/pet-care",
    icon: <HeartPulseIcon className="h-4 w-4" />,
    page: <PetCare />,
  },
  {
    title: "Contact",
    to: "/contact",
    icon: <PhoneIcon className="h-4 w-4" />,
    page: <Contact />,
  },
  {
    title: "Help",
    to: "/help",
    icon: <HelpCircleIcon className="h-4 w-4" />,
    page: <Help />,
  },
];