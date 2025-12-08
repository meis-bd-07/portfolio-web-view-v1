import { useState } from "react";
import { ChevronDown, List } from "lucide-react";
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

interface MobileTocProps {
  onNavigate?: () => void;
}

export function MobileToc({ onNavigate }: MobileTocProps) {
  const [isOpen, setIsOpen] = useState(false);
  const sectionIds = tocItems.map((item) => item.id);
  const activeId = useScrollSpy(sectionIds, 120);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
      onNavigate?.();
    }
  };

  const activeLabel = tocItems.find((item) => item.id === activeId)?.label || "On this page";

  return (
    <div className="xl:hidden mb-4 border-b border-border pb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full py-2 px-3 rounded-md bg-secondary/50 hover:bg-secondary transition-colors"
      >
        <div className="flex items-center gap-2">
          <List className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm font-medium text-foreground">On this page</span>
          <span className="text-xs text-muted-foreground truncate max-w-[140px]">
            — {activeLabel}
          </span>
        </div>
        <ChevronDown
          className={cn(
            "h-4 w-4 text-muted-foreground transition-transform",
            isOpen && "rotate-180"
          )}
        />
      </button>

      {isOpen && (
        <nav className="mt-2 py-2 px-3 rounded-md bg-secondary/30 space-y-1">
          {tocItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleClick(e, item.id)}
              className={cn(
                "block py-1.5 px-2 text-sm rounded-md transition-colors",
                "text-muted-foreground hover:text-foreground hover:bg-secondary/50",
                activeId === item.id && "text-primary bg-primary/10 font-medium",
                item.indent && "pl-5"
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </div>
  );
}
