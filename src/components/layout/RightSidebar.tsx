import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { useScrollSpy } from "@/hooks/useScrollSpy";

interface TocItem {
  id: string;
  label: string;
  indent?: boolean;
}

const tocItems: TocItem[] = [
  { id: "creating-a-page", label: "Creating a page" },
  { id: "creating-a-layout", label: "Creating a layout" },
  { id: "creating-a-nested-route", label: "Creating a nested route" },
  { id: "nesting-layouts", label: "Nesting layouts" },
  { id: "creating-a-dynamic-segment", label: "Creating a dynamic segment" },
  { id: "rendering-with-search-params", label: "Rendering with search params" },
  { id: "what-to-use", label: "What to use and when", indent: true },
  { id: "linking-between-pages", label: "Linking between pages" },
  { id: "route-props-helpers", label: "Route Props Helpers" },
  { id: "api-reference", label: "API Reference" },
];

export function RightSidebar() {
  const sectionIds = tocItems.map((item) => item.id);
  const activeId = useScrollSpy(sectionIds, 120);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <aside className="hidden xl:block fixed top-nav right-0 h-[calc(100vh-var(--nav-height))] w-toc overflow-y-auto p-4 2xl:p-6">
      <div className="text-sm">
        <h3 className="font-medium text-foreground mb-3">On this page</h3>
        <nav className="space-y-1">
          {tocItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleClick(e, item.id)}
              className={cn(
                "toc-link",
                activeId === item.id && "toc-link-active",
                item.indent && "pl-3"
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="mt-8 pt-4 border-t border-border">
          <a
            href="#"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Edit this page on GitHub
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      </div>
    </aside>
  );
}
