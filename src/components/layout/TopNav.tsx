import { Search, Menu, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { AudioToggle } from "@/components/navbar-right/AudioToggle";

interface TopNavProps {
  onMenuClick: () => void;
  onSearchClick: () => void;
}

export function TopNav({ onMenuClick, onSearchClick }: TopNavProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-nav border-b border-border bg-background/80 backdrop-blur-sm">
      <div className="flex h-full items-center justify-between px-3 sm:px-4 lg:px-6">
        {/* Left section */}
        <div className="flex items-center gap-2 sm:gap-4">
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-muted-foreground hover:text-foreground"
            onClick={onMenuClick}
          >
            <Menu className="h-5 w-5" />
          </Button>
          
          <a href="/" className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <img src="./logo.png" className="h-5 w-5" />
              {/* <svg viewBox="0 0 180 180" fill="none" className="h-5 w-5">
                <mask id="mask" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180">
                  <circle cx="90" cy="90" r="90" fill="currentColor" className="text-foreground" />
                </mask>
                <g mask="url(#mask)">
                  <circle cx="90" cy="90" r="90" fill="currentColor" className="text-foreground" />
                  <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="currentColor" className="text-background" />
                  <rect x="115" y="54" width="12" height="72" fill="currentColor" className="text-background" />
                </g>
              </svg> */}
              <span className="text-base sm:text-lg font-semibold text-foreground">erfan</span>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-4 xl:gap-6 ml-4 xl:ml-6">
            <a href="#" className="nav-link nav-link-active">Home</a>
            <a href="https://www.linkedin.com/in/mohammad-erfanul-islam-sifat-6547351a6/" target="_blank" className="nav-link flex flex-row gap-1">LinkedIn <ExternalLink height={17} width={15} /></a>
            <a href="#" target="_blank" className="nav-link flex flex-row gap-1">Resume <ExternalLink height={17} width={15} /></a>
            <a href="https://github.com/ErfanOrangetoolz" target="_blank" className="hidden md:inline-flex text-muted-foreground hover:text-foreground items-center gap-1">Github <ExternalLink height={17} width={15} /></a>
          </nav>
        </div>

        {/* Right section */}
        <div className="flex items-center gap-1 sm:gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={onSearchClick}
            disabled
            className="flex items-center gap-2 px-2 sm:px-3 py-1.5 rounded-md border border-border bg-secondary/50 text-muted-foreground text-sm hover:bg-secondary"
          >
            <Search className="h-4 w-4" />
            <span className="hidden md:inline">Search...</span>
            <kbd className="hidden lg:inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-muted text-xs font-mono">
              ⌘K
            </kbd>
          </Button>
          
          <ThemeToggle />
          <AudioToggle />
          
          <Button disabled variant="ghost" size="sm" className="hidden md:inline-flex text-muted-foreground hover:text-foreground">
            Feedback
          </Button>
          
          <Button disabled size="sm" className="bg-foreground text-background hover:bg-foreground/90 text-xs sm:text-sm">
            Learn
          </Button>
        </div>
      </div>
    </header>
  );
}
