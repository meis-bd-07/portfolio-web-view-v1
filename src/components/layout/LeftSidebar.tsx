import { useLayoutEffect, useState } from "react";
import { ChevronRight, ExternalLink, Tag } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { INavValue, ISection, navItems, sections } from "@/constants/left-sidebar";


function SidebarSection({
  label,
  items,
  expandable,
  location
}: {
  location: string;
  label: string;
  items?: ISection[];
  expandable?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="mb-4">
      <button
        onClick={() => expandable && setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full py-1.5 text-xs sm:text-sm font-semibold text-foreground"
      >
        <span>{label}</span>
        {expandable && (
          <ChevronRight
            className={cn(
              "h-4 w-4 text-muted-foreground transition-transform cursor-pointer",
              isOpen && "rotate-90"
            )}
          />
        )}
      </button>
      {items && isOpen && (
        <div className="mt-1 space-y-0.5 pl-2">
          {items.map((item) => (
            <Button
              variant="link"
              disabled={item.disable}
              key={item.label}
              className="w-full p-0"
            >
              <Link
                to={item.href || '/'}
                className={`
                sidebar-link flex items-center justify-between w-full overflow-hidden text-xs sm:text-sm
                ${location === item.href ? "sidebar-link-active" : ""}
                `}
              >
                <span className="truncate">{item.label}</span>
                {item.items && <ChevronRight className="h-3 w-3 shrink-0 ml-2" />}
              </Link>
            </Button>
          ))}
        </div>
      )}
    </div>
  );
}

interface LeftSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function LeftSidebar({ isOpen, onClose }: LeftSidebarProps) {
  const location = useLocation();
  const [active, setActive] = useState<INavValue>(navItems[0].value);

  useLayoutEffect(() => {
    if(location.pathname === "" || location.pathname === "/"){
      setActive('home')
    }
    else{
      /* do something for multi-step path */
      setActive(location.pathname.replace("/", "") as INavValue)
    }

  }, [location.pathname])

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={cn(
          "fixed top-nav left-0 z-40 h-[calc(100vh-var(--nav-height))] w-64 sm:w-sidebar overflow-y-auto border-r border-border bg-background p-3 sm:p-4 transition-transform duration-200",
          "lg:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* Mobile Table of Contents */}
        {/* <MobileToc onNavigate={onClose} /> */}

        <div className="mb-2">
          <Button
            disabled
            variant="ghost"
            // onClick={() => expandable && setIsOpen(!isOpen)}
            className="flex items-center justify-between w-full py-2 px-2 rounded-md hover:bg-secondary/50 transition-colors cursor-pointer"
            
          >
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="text-muted-foreground"><Tag className="h-4 w-4" /></span>
              <div className="text-left">
                <div className="text-xs sm:text-sm font-medium text-foreground">Macbook Dock</div>
                <div className="text-[10px] sm:text-xs text-muted-foreground">In Progress</div>
              </div>
            </div>
            <ExternalLink className="h-4 w-4 text-muted-foreground transition-transform"/>
          </Button>
        </div>

        {/* Main nav items */}
        <div className="mt-4 space-y-0.5 border-l-2 border-border pl-2 sm:pl-3">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className={cn("sidebar-link text-xs sm:text-sm", item.disable && "cursor-not-allowed pointer-events-none opacity-50", item.value === active && "sidebar-link-active")}
            >
              {item.value === active ? `< ${item.label} />` : item.label}
            </Link>
          ))}
        </div>

        {/* Sections */}
        <div className="mt-6">
          {sections.map((section) => (
            <SidebarSection key={section.label}  location={location.pathname} {...section} />
          ))}
        </div>
      </aside>
    </>
  );
}
