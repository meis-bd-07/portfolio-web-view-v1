import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

interface NavItem {
  title: string;
  href: string;
}
interface INavs {
  previous?: NavItem;
  next?: NavItem;
}

// Define the documentation navigation order
const docsNavOrder: Record<string, INavs> = {
  '/': {
    next: { title: "About Me", href: "/about-me" }
  },
  '/about-me': {
    previous: { title: "Introduction", href: "/" },
    next: { title: "Projects", href: "/projects" }
  },
  '/projects': {
    previous: { title: "About Me", href: "/about-me" },
    next: { title: "Skills", href: "/skills" }
  },
  '/skills': {
    previous: { title: "Projects", href: "/projects" },
    next: { title: "Tools", href: "/tools" }
  }
};

export function PrevNextNav() {
  const location = useLocation();

  const prevItem = docsNavOrder[location.pathname].previous || null
  const nextItem = docsNavOrder[location.pathname].next || null

  return (
    <nav className="flex justify-between items-center py-8">
      <div className="w-1/2 flex justify-start">
        {prevItem && (
          <Link to={prevItem.href} className="group flex flex-col items-start max-w-max">
            <span className="flex items-center gap-1.5 text-xs text-muted-foreground mb-1">
              <ChevronLeft className="h-3.5 w-3.5 group-hover:-translate-x-0.5 transition-transform" />
              Previous
            </span>
            <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
              {prevItem.title}
            </span>
          </Link>
        )}
      </div>

      <div className="w-1/2 flex justify-end">
        {nextItem && (
          <Link to={nextItem.href} className="group flex flex-col items-end max-w-max">
            <span className="flex items-center gap-1.5 text-xs text-muted-foreground mb-1">
              Next
              <ChevronRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
            </span>
            <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
              {nextItem.title}
            </span>
          </Link>
        )}
      </div>
    </nav>
  );
}
