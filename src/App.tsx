import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import NotFound from "@/pages/NotFound";
import { DocsLayout } from "@/components/layout/DocsLayout";
import { lazy, Suspense } from "react";
import AboutSkeleton from "@/components/skeletons/about-skeleton";

const Index = lazy(() => import("@/pages/Index"));
const AboutMe = lazy(() => import("@/pages/about-me"));
const Projects = lazy(() => import("@/pages/projects"));
const Skills = lazy(() => import("@/pages/skills"));
const Integrations = lazy(() => import("@/pages/integrations"));
const Experiences = lazy(() => import("@/pages/experiences"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<DocsLayout />}>
              <Route path="/" element={(
                <Suspense fallback={<AboutSkeleton />}>
                  <Index />
                </Suspense>
              )} index />
              <Route path="/about-me" element={(
                <Suspense fallback={<AboutSkeleton />}>
                  <AboutMe />
                </Suspense>
              )} />
              <Route path="/projects" element={(
                <Suspense fallback={<AboutSkeleton />}>
                  <Projects />
                </Suspense>
              )} />
              <Route path="/skills" element={(
                <Suspense fallback={<AboutSkeleton />}>
                  <Skills />
                </Suspense>
              )} />
              <Route path="/integrations" element={(
                <Suspense fallback={<AboutSkeleton />}>
                  <Integrations />
                </Suspense>
              )} />
              <Route path="/experiences" element={(
                <Suspense fallback={<AboutSkeleton />}>
                  <Experiences />
                </Suspense>
              )} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
