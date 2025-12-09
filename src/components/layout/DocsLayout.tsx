import { useState } from "react";
import { TopNav } from "./TopNav";
import { LeftSidebar } from "./LeftSidebar";
import { RightSidebar } from "./RightSidebar";
import { SearchDialog, useSearchDialog } from "@/components/SearchDialog";
import { Outlet } from "react-router-dom";
import { Breadcrumbs } from "@/components/docs/Breadcrumbs";
import { PrevNextNav } from "@/components/docs/PrevNextNav";

export function DocsLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { open: searchOpen, setOpen: setSearchOpen } = useSearchDialog();

  return (
    <div className="min-h-screen bg-background">
      <TopNav 
        onMenuClick={() => setSidebarOpen(!sidebarOpen)} 
        onSearchClick={() => setSearchOpen(true)}
      />
      <LeftSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <RightSidebar />
      <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} />
      
      <main className="pt-nav lg:pl-sidebar xl:pr-toc">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-6 sm:py-10 animate-fade-in">
          <Breadcrumbs />
          <Outlet />
          <PrevNextNav />
        </div>
      </main>
    </div>
  );
}
