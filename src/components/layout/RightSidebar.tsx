import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { tocItems as globalTocItems } from "@/constants/right-sidebar";
import { useLocation } from "react-router-dom";


export function RightSidebar() {
  const location = useLocation();
  const tocItems = globalTocItems[location.pathname] || []
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
        {tocItems.length > 0 && (
          <>
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
          </>
        )}

        <div className={`mt-8 pt-4 ${tocItems.length > 0 ? 'border-t border-border' : ''}`}>
          <div className="container-wrapper">
            <div className="container flex flex-col items-center justify-center py-4 space-y-2">
              <div className="max-w-3xl text-xs leading-relaxed text-center sm:text-sm text-balance text-muted-foreground">
                <span className="block sm:inline">©{new Date().getFullYear()}</span>
                <span className="hidden sm:inline"> · </span>
                <span className="block sm:inline">Built with&nbsp;
                  <span className="font-medium text-foreground">React with Vite & Typescript</span>, and 
                  <span className="font-medium text-foreground">&nbsp;Tailwind CSS</span>
                </span>
              </div>
              <div className="text-xs text-center sm:text-sm text-muted-foreground">
                Developed by&nbsp;
                <span className="font-medium transition-colors text-primary hover:text-primary/80">
                Erfanul Islam</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 p-4 border rounded-2xl shadow-md bg-white/80">
          {["Open To Work", "Remote", "On-Site", "Full-Time"].map((item) => (
            <span key={item} className="px-4 py-2 rounded-xl bg-gray-100 hover:bg-gray-200 transition shadow-sm">
              {item}
            </span>
          ))}
        </div>
      </div>
    </aside>
  );
}
