import { useState, useEffect } from "react";
import { Copy, Check, Folder, FileCode, ChevronDown, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import Prism from "prismjs";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-tsx";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-json";
import { cn } from "@/lib/utils";

interface CodeBlockProps {
  code?: string;
  filename?: string;
  language?: string;
  collapsible?: boolean;
  defaultCollapsed?: boolean;
  component?: React.ReactNode;
  renderHtmlCode?: boolean;
}

export function CodeBlock({ 
  code, 
  filename, 
  language = "typescript",
  collapsible = false,
  defaultCollapsed = false,
  component = null,
  renderHtmlCode = false
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(defaultCollapsed);
  const [highlightedCode, setHighlightedCode] = useState("");

  useEffect(() => {
    if(!code || renderHtmlCode){return}
    const lang = language === "tsx" ? "tsx" : 
                 language === "jsx" ? "jsx" :
                 language === "bash" ? "bash" :
                 language === "json" ? "json" : "typescript";
    
    const grammar = Prism.languages[lang] || Prism.languages.typescript;
    const highlighted = Prism.highlight(code, grammar, lang);
    setHighlightedCode(highlighted);
  }, [code, language, renderHtmlCode]);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    toast({ description: "Copied to clipboard" });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-lg border border-border overflow-hidden bg-card">
      {filename && (
        <div className="flex items-center justify-between px-3 sm:px-4 py-2 border-b border-border bg-secondary/30">
          <div className="flex items-center gap-2 text-sm text-muted-foreground min-w-0">
            {collapsible && (
              <Button
                variant="ghost"
                size="icon"
                className="h-5 w-5 shrink-0"
                onClick={() => setIsCollapsed(!isCollapsed)}
              >
                {isCollapsed ? (
                  <ChevronRight className="h-3.5 w-3.5" />
                ) : (
                  <ChevronDown className="h-3.5 w-3.5" />
                )}
              </Button>
            )}
            <FileCode className="h-4 w-4 shrink-0" />
            <span className="truncate">{filename}</span>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <span className="hidden sm:inline text-xs text-muted-foreground">{language}</span>
            {code && <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6 text-muted-foreground hover:text-foreground"
              onClick={handleCopy}
            >
              {copied ? (
                <Check className="h-3.5 w-3.5 text-green-500" />
              ) : (
                <Copy className="h-3.5 w-3.5" />
              )}
            </Button>}
          </div>
        </div>
      )}
      <div
        className={cn(
          "overflow-hidden transition-all duration-200",
          isCollapsed ? "max-h-0" : "max-h-[1000px]"
        )}
      >
        {(code && !renderHtmlCode) && <pre className="p-3 sm:p-4 overflow-x-auto text-xs sm:text-sm">
          <code 
            className="language-typescript"
            dangerouslySetInnerHTML={{ __html: highlightedCode }}
          />
        </pre>}
         {(code && renderHtmlCode) &&
          <div 
            className="p-3 sm:p-4 overflow-x-auto text-xs sm:text-sm language-typescript"
            dangerouslySetInnerHTML={{ __html: code }}
          />}
        {component && component}
      </div>
    </div>
  );
}

interface FileTreeProps {
  items: { name: string; type: "folder" | "file"; indicator?: boolean }[];
  arrow?: boolean;
  result?: string;
}

export function FileTree({ items, arrow, result }: FileTreeProps) {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg bg-card border border-border overflow-x-auto">
      <div className="flex flex-col gap-1 px-3 sm:px-4 py-2 sm:py-3 rounded-md bg-secondary/50">
        {items.map((item, idx) => (
          <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm">
            {item.type === "folder" ? (
              <Folder className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-muted-foreground" />
            ) : (
              <FileCode className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-muted-foreground" />
            )}
            <span className="text-foreground">{item.name}</span>
            {item.indicator && (
              <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-primary" />
            )}
          </div>
        ))}
      </div>
      
      {arrow && (
        <div className="hidden sm:block text-muted-foreground">
          <svg width="40" height="12" viewBox="0 0 40 12" fill="none">
            <path d="M0 6H38M38 6L33 1M38 6L33 11" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </div>
      )}
      
      {result && (
        <div className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-3 rounded-md bg-secondary/50">
          <span className="text-muted-foreground">⊙</span>
          <span className="text-foreground text-xs sm:text-sm">{result}</span>
        </div>
      )}
    </div>
  );
}
