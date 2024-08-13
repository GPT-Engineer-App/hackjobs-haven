import { Home, Briefcase } from "lucide-react";
import Index from "./pages/Index.jsx";
import WhosHiring from "./pages/WhosHiring.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Who's Hiring",
    to: "/whos-hiring",
    icon: <Briefcase className="h-4 w-4" />,
    page: <WhosHiring />,
  },
];
