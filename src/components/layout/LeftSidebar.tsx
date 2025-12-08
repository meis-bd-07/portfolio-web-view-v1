import { useState } from "react";
import { ChevronDown, ChevronRight, Package, Tag } from "lucide-react";
import { cn } from "@/lib/utils";
import { MobileToc } from "@/components/docs/MobileToc";

interface NavItem {
  label: string;
  href?: string;
  active?: boolean;
  items?: NavItem[];
}

interface NavGroupProps {
  label: string;
  icon?: React.ReactNode;
  subtitle?: string;
  items?: NavItem[];
  expandable?: boolean;
  defaultOpen?: boolean;
}

const navGroups: NavGroupProps[] = [
  {
    label: "Using App Router",
    subtitle: "Features available in /app",
    icon: <Package className="h-4 w-4" />,
    expandable: true,
    defaultOpen: true,
  },
  {
    label: "Latest Version",
    subtitle: "16.0.7",
    icon: <Tag className="h-4 w-4" />,
    expandable: true,
  },
];

const navItems: NavItem[] = [
  { label: "Layouts and Pages", href: "#", active: true },
  { label: "Linking and Navigating", href: "#" },
  { label: "Server and Client Components", href: "#" },
  { label: "Cache Components", href: "#" },
  { label: "Fetching Data", href: "#" },
  { label: "Updating Data", href: "#" },
  { label: "Caching and Revalidating", href: "#" },
  { label: "Error Handling", href: "#" },
  { label: "CSS", href: "#" },
  { label: "Image Optimization", href: "#" },
  { label: "Font Optimization", href: "#" },
  { label: "Metadata and OG Images", href: "#" },
  { label: "Route Handlers", href: "#" },
  { label: "Proxy", href: "#" },
  { label: "Deploying", href: "#" },
  { label: "Upgrading", href: "#" },
];

const sections: { label: string; items?: NavItem[]; expandable?: boolean }[] = [
  {
    label: "Guides",
    expandable: true,
  },
  {
    label: "API Reference",
    expandable: true,
    items: [
      { label: "Directives", href: "#" },
      { label: "Components", href: "#" },
    ],
  },
];

function NavGroup({ label, icon, subtitle, expandable }: NavGroupProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-2">
      <button
        onClick={() => expandable && setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full py-2 px-2 rounded-md hover:bg-secondary/50 transition-colors"
      >
        <div className="flex items-center gap-2 sm:gap-3">
          {icon && <span className="text-muted-foreground">{icon}</span>}
          <div className="text-left">
            <div className="text-xs sm:text-sm font-medium text-foreground">{label}</div>
            {subtitle && (
              <div className="text-[10px] sm:text-xs text-muted-foreground">{subtitle}</div>
            )}
          </div>
        </div>
        {expandable && (
          <ChevronDown
            className={cn(
              "h-4 w-4 text-muted-foreground transition-transform",
              isOpen && "rotate-180"
            )}
          />
        )}
      </button>
    </div>
  );
}

function SidebarSection({
  label,
  items,
  expandable,
}: {
  label: string;
  items?: NavItem[];
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
              "h-4 w-4 text-muted-foreground transition-transform",
              isOpen && "rotate-90"
            )}
          />
        )}
      </button>
      {items && isOpen && (
        <div className="mt-1 space-y-0.5 pl-2">
          {items.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="sidebar-link flex items-center justify-between text-xs sm:text-sm"
            >
              <span>{item.label}</span>
              {item.items && <ChevronRight className="h-3 w-3" />}
            </a>
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
        <MobileToc onNavigate={onClose} />

        {/* Nav groups */}
        {navGroups.map((group) => (
          <NavGroup key={group.label} {...group} />
        ))}

        {/* Main nav items */}
        <div className="mt-4 space-y-0.5 border-l-2 border-border pl-2 sm:pl-3">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={cn("sidebar-link text-xs sm:text-sm", item.active && "sidebar-link-active")}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Sections */}
        <div className="mt-6">
          {sections.map((section) => (
            <SidebarSection key={section.label} {...section} />
          ))}
        </div>
      </aside>
    </>
  );
}
