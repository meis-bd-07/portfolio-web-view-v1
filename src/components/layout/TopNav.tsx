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
              <svg viewBox="0 0 387 322" className="h-5 w-5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_2001_97)">
                  <path d="M384.087 164.535C379.231 157.48 369.595 155.71 362.54 160.565L199.275 273.108L210.55 192.442L323.166 115.096C332.67 108.573 333.32 94.7746 324.465 87.3957L223.684 3.30571C214.844 -4.05843 201.356 1.63808 200.5 13.1197L181.846 167.339L6.53773 289.445C-1.23963 296.012 -2.22841 307.656 4.35357 315.433C8.39721 320.215 14.3446 322.428 20.1444 321.912C23.7748 321.573 27.3462 320.156 30.3421 317.632L175.928 216.217L163.797 303.155L163.708 303.73C163.664 304.099 163.62 304.468 163.59 304.822C163.546 305.427 163.546 306.033 163.576 306.623C163.59 306.844 163.605 307.08 163.62 307.302V307.376C163.679 307.818 163.738 308.246 163.812 308.674C163.812 308.718 163.812 308.748 163.826 308.777C163.871 308.984 163.915 309.191 163.959 309.383C164.003 309.619 164.063 309.84 164.136 310.061C164.195 310.283 164.254 310.504 164.328 310.711C164.476 311.139 164.623 311.567 164.815 311.98C164.992 312.423 165.199 312.865 165.435 313.279C165.538 313.456 165.642 313.633 165.745 313.81C166.35 314.828 167.073 315.787 167.9 316.629C168.18 316.924 168.46 317.204 168.756 317.47C168.933 317.617 169.11 317.765 169.287 317.913C169.449 318.06 169.641 318.193 169.818 318.326C170.187 318.606 170.571 318.857 170.954 319.093C172.047 319.772 173.242 320.318 174.526 320.702C175.352 320.953 176.193 321.13 177.035 321.248C177.359 321.292 177.684 321.322 177.994 321.336C178.363 321.366 178.717 321.381 179.071 321.381C179.455 321.381 179.824 321.366 180.208 321.336C180.503 321.336 180.798 321.292 181.093 321.248C181.123 321.248 181.152 321.248 181.182 321.248C181.3 321.233 181.418 321.218 181.536 321.189C181.846 321.145 182.156 321.086 182.466 321.012C182.864 320.923 183.248 320.82 183.646 320.702C183.941 320.613 184.236 320.51 184.532 320.392C184.945 320.23 185.373 320.052 185.786 319.861C186.111 319.698 186.435 319.521 186.76 319.344C187.218 319.078 187.675 318.783 188.118 318.459L380.132 186.096C387.171 181.241 388.942 171.589 384.087 164.549V164.535ZM227.728 73.4791C228.023 70.4685 231.609 69.037 233.896 71.0293L259.959 93.7268C262.246 95.7191 262.01 99.3495 259.457 101.017L220.142 126.814L227.728 73.4791Z" fill="url(#paint0_linear_2001_97)"/>
                </g>
                <defs>
                  <linearGradient id="paint0_linear_2001_97" x1="193.411" y1="0.00561523" x2="193.411" y2="321.985" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#17614B"/>
                    <stop offset="1" stopColor="#283364"/>
                  </linearGradient>
                  <clipPath id="clip0_2001_97">
                    <rect width="386.832" height="321.986" fill="white"/>
                  </clipPath>
                </defs>
              </svg>

              <span className="text-base sm:text-lg font-semibold text-foreground">erfan</span>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-4 xl:gap-6 ml-4 xl:ml-6">
            <a href="#" className="nav-link nav-link-active">Home</a>
            <a href="https://www.linkedin.com/in/mohammad-erfanul-islam-sifat-6547351a6/" target="_blank" className="nav-link flex flex-row gap-1">LinkedIn <ExternalLink height={17} width={15} /></a>
            <a href="https://drive.google.com/file/d/1LyfCMpzjxMQhiAiYaW0a9JunGqgjyuv7/view?usp=sharing" target="_blank" className="nav-link flex flex-row gap-1">Resume <ExternalLink height={17} width={15} /></a>
            <a href="https://github.com/ErfanOrangetoolz" target="_blank" className="nav-link flex flex-row gap-1">Github <ExternalLink height={17} width={15} /></a>
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
