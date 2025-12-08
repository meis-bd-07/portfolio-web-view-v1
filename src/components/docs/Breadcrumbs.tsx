import { ChevronRight, Home } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

interface BreadcrumbItem {
  label: string;
  href: string;
}

// Route to breadcrumb mapping
const routeBreadcrumbs: Record<string, BreadcrumbItem[]> = {
  "/": [
    { label: "Docs", href: "/" },
    { label: "Layouts and Pages", href: "/" },
  ],
  "/getting-started": [
    { label: "Docs", href: "/" },
    { label: "Getting Started", href: "/getting-started" },
  ],
  "/api-reference": [
    { label: "Docs", href: "/" },
    { label: "API Reference", href: "/api-reference" },
  ],
};

export function Breadcrumbs() {
  const location = useLocation();
  const breadcrumbs = routeBreadcrumbs[location.pathname] || [
    { label: "Docs", href: "/" },
  ];

  return (
    <nav aria-label="Breadcrumb" className="mb-4 sm:mb-6">
      <ol className="flex items-center gap-1.5 text-sm text-muted-foreground">
        <li>
          <Link 
            to="/" 
            className="flex items-center hover:text-foreground transition-colors"
          >
            <Home className="h-4 w-4" />
            <span className="sr-only">Home</span>
          </Link>
        </li>
        {breadcrumbs.map((item, index) => (
          <li key={item.href} className="flex items-center gap-1.5">
            <ChevronRight className="h-3.5 w-3.5 text-muted-foreground/50" />
            {index === breadcrumbs.length - 1 ? (
              <span className="text-foreground font-medium">{item.label}</span>
            ) : (
              <Link 
                to={item.href} 
                className="hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
