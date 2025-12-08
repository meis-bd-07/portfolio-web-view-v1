import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, FileText, Hash, ArrowRight } from "lucide-react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

interface SearchItem {
  id: string;
  title: string;
  section?: string;
  href: string;
  type: "page" | "section";
}

const searchItems: SearchItem[] = [
  { id: "1", title: "Layouts and Pages", href: "/", type: "page" },
  { id: "2", title: "Creating a page", section: "Layouts and Pages", href: "/#creating-a-page", type: "section" },
  { id: "3", title: "Creating a layout", section: "Layouts and Pages", href: "/#creating-a-layout", type: "section" },
  { id: "4", title: "Creating a nested route", section: "Layouts and Pages", href: "/#creating-a-nested-route", type: "section" },
  { id: "5", title: "Nesting layouts", section: "Layouts and Pages", href: "/#nesting-layouts", type: "section" },
  { id: "6", title: "Creating a dynamic segment", section: "Layouts and Pages", href: "/#creating-a-dynamic-segment", type: "section" },
  { id: "7", title: "Linking between pages", section: "Layouts and Pages", href: "/#linking-between-pages", type: "section" },
  { id: "8", title: "API Reference", section: "Layouts and Pages", href: "/#api-reference", type: "section" },
  { id: "9", title: "Linking and Navigating", href: "/linking", type: "page" },
  { id: "10", title: "Server and Client Components", href: "/components", type: "page" },
  { id: "11", title: "Fetching Data", href: "/fetching", type: "page" },
  { id: "12", title: "Error Handling", href: "/errors", type: "page" },
  { id: "13", title: "CSS Styling", href: "/css", type: "page" },
  { id: "14", title: "Image Optimization", href: "/images", type: "page" },
];

interface SearchDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function SearchDialog({ open, onOpenChange }: SearchDialogProps) {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const filteredItems = searchItems.filter(
    (item) =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.section?.toLowerCase().includes(query.toLowerCase())
  );

  const pages = filteredItems.filter((item) => item.type === "page");
  const sections = filteredItems.filter((item) => item.type === "section");

  const handleSelect = (href: string) => {
    onOpenChange(false);
    setQuery("");
    
    if (href.startsWith("/#")) {
      const id = href.replace("/#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(href);
    }
  };

  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <CommandInput 
        placeholder="Search documentation..." 
        value={query}
        onValueChange={setQuery}
      />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        
        {pages.length > 0 && (
          <CommandGroup heading="Pages">
            {pages.map((item) => (
              <CommandItem
                key={item.id}
                onSelect={() => handleSelect(item.href)}
                className="flex items-center gap-3 py-3"
              >
                <FileText className="h-4 w-4 text-muted-foreground" />
                <span>{item.title}</span>
                <ArrowRight className="ml-auto h-3 w-3 text-muted-foreground" />
              </CommandItem>
            ))}
          </CommandGroup>
        )}
        
        {sections.length > 0 && (
          <CommandGroup heading="Sections">
            {sections.map((item) => (
              <CommandItem
                key={item.id}
                onSelect={() => handleSelect(item.href)}
                className="flex items-center gap-3 py-3"
              >
                <Hash className="h-4 w-4 text-muted-foreground" />
                <div className="flex flex-col">
                  <span>{item.title}</span>
                  {item.section && (
                    <span className="text-xs text-muted-foreground">{item.section}</span>
                  )}
                </div>
                <ArrowRight className="ml-auto h-3 w-3 text-muted-foreground" />
              </CommandItem>
            ))}
          </CommandGroup>
        )}
      </CommandList>
    </CommandDialog>
  );
}

export function useSearchDialog() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return { open, setOpen };
}
