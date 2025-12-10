import { cn } from "@/lib/utils";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { tocItems as globalTocItems } from "@/constants/right-sidebar";
import { Link, useLocation } from "react-router-dom";
import UserCard from "../custom/visiting-card";


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
                <Link to={'/contact-me'} className="font-medium transition-colors text-primary hover:text-primary/80">
                Erfanul Islam</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-1 p-3 border rounded-2xl shadow-md bg-white/80 mb-2">
          {["Open To Work", "Remote", "On-Site", "Full-Time"].map((item) => (
            <code key={item} className="code-inline bg-foreground text-background text-xs sm:text-xs">{item}</code>
          ))}
        </div>

        <UserCard />
      </div>
    </aside>
  );
}
