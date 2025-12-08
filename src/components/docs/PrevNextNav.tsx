import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

interface NavItem {
  title: string;
  href: string;
}

// Define the documentation navigation order
const docsNavOrder: NavItem[] = [
  { title: "Getting Started", href: "/getting-started" },
  { title: "Layouts and Pages", href: "/" },
  { title: "API Reference", href: "/api-reference" },
];

export function PrevNextNav() {
  const location = useLocation();
  const currentIndex = docsNavOrder.findIndex(
    (item) => item.href === location.pathname
  );

  const prevItem = currentIndex > 0 ? docsNavOrder[currentIndex - 1] : null;
  const nextItem =
    currentIndex < docsNavOrder.length - 1 ? docsNavOrder[currentIndex + 1] : null;

  return (
    <nav className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-border">
      <div className="flex items-center justify-between gap-4">
        {prevItem ? (
          <Link
            to={prevItem.href}
            className="group flex-1 flex flex-col items-start p-4 rounded-lg border border-border bg-card hover:border-primary/50 hover:bg-accent/50 transition-all"
          >
            <span className="flex items-center gap-1.5 text-xs text-muted-foreground mb-1">
              <ChevronLeft className="h-3.5 w-3.5 group-hover:-translate-x-0.5 transition-transform" />
              Previous
            </span>
            <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
              {prevItem.title}
            </span>
          </Link>
        ) : (
          <div className="flex-1" />
        )}

        {nextItem ? (
          <Link
            to={nextItem.href}
            className="group flex-1 flex flex-col items-end p-4 rounded-lg border border-border bg-card hover:border-primary/50 hover:bg-accent/50 transition-all"
          >
            <span className="flex items-center gap-1.5 text-xs text-muted-foreground mb-1">
              Next
              <ChevronRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
            </span>
            <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
              {nextItem.title}
            </span>
          </Link>
        ) : (
          <div className="flex-1" />
        )}
      </div>
    </nav>
  );
}
