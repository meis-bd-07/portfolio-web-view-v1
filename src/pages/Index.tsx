import { DocsLayout } from "@/components/layout/DocsLayout";
import { CodeBlock, FileTree } from "@/components/docs/CodeBlock";
import { Breadcrumbs } from "@/components/docs/Breadcrumbs";
import { PrevNextNav } from "@/components/docs/PrevNextNav";

const Index = () => {
  return (
    <DocsLayout>
      {/* Breadcrumbs */}
      <Breadcrumbs />
      
      {/* Page header */}
      <div className="mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-2">
          Layouts and Pages
        </h1>
        <p className="text-xs sm:text-sm text-muted-foreground">
          Last updated October 22, 2025
        </p>
      </div>

      {/* Intro paragraph */}
      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6 sm:mb-8">
        Next.js uses <span className="text-foreground font-medium">file-system based routing</span>, meaning you can use folders and files to define routes. This page will guide you through how to create layouts and pages, and link between them.
      </p>

      <hr className="border-border mb-6 sm:mb-8" />

      {/* Creating a page section */}
      <section id="creating-a-page" className="mb-10 sm:mb-12">
        <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-3 sm:mb-4">
          Creating a page
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4 sm:mb-6">
          A <span className="text-foreground font-medium">page</span> is UI that is rendered on a specific route. To create a page, add a{" "}
          <code className="code-inline">page</code> file inside the{" "}
          <code className="code-inline">app</code> directory and default export a React component. For example, to create an index page (<code className="code-inline">/</code>):
        </p>

        <div className="space-y-4 mb-6">
          <FileTree
            items={[
              { name: "app", type: "folder" },
              { name: "page.js", type: "file", indicator: true },
            ]}
            arrow
            result="/"
          />

          <CodeBlock
            filename="app/page.tsx"
            language="tsx"
            collapsible
            code={`export default function Page() {
  return <h1>Hello Next.js!</h1>
}`}
          />
        </div>
      </section>

      {/* Creating a layout section */}
      <section id="creating-a-layout" className="content-section">
        <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-3 sm:mb-4">
          Creating a layout
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4 sm:mb-6">
          A layout is UI that is <span className="text-foreground font-medium">shared</span> between multiple pages. On navigation, layouts preserve state, remain interactive, and do not re-render.
        </p>
        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4 sm:mb-6">
          You can define a layout by default exporting a React component from a{" "}
          <code className="code-inline">layout</code> file. The component should accept a <code className="code-inline">children</code> prop which can be a page or another layout.
        </p>

        <CodeBlock
          filename="app/layout.tsx"
          language="tsx"
          collapsible
          code={`export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <nav>{/* Navigation */}</nav>
        <main>{children}</main>
      </body>
    </html>
  )
}`}
        />
      </section>

      {/* Creating a nested route section */}
      <section id="creating-a-nested-route" className="content-section">
        <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-3 sm:mb-4">
          Creating a nested route
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4 sm:mb-6">
          A nested route is a route composed of multiple URL segments. For example, the <code className="code-inline">/blog/[slug]</code> route is composed of three segments:
        </p>
        <ul className="list-disc list-inside text-sm sm:text-base text-muted-foreground space-y-2 mb-6">
          <li><code className="code-inline">/</code> (Root Segment)</li>
          <li><code className="code-inline">blog</code> (Segment)</li>
          <li><code className="code-inline">[slug]</code> (Leaf Segment)</li>
        </ul>
      </section>

      {/* Nesting layouts section */}
      <section id="nesting-layouts" className="content-section">
        <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-3 sm:mb-4">
          Nesting layouts
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4 sm:mb-6">
          By default, layouts in the folder hierarchy are nested, which means they wrap child layouts via their <code className="code-inline">children</code> prop. You can nest layouts by adding a <code className="code-inline">layout</code> file inside specific route segments (folders).
        </p>

        <CodeBlock
          filename="app/dashboard/layout.tsx"
          language="tsx"
          collapsible
          code={`export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      <nav>Dashboard Navigation</nav>
      {children}
    </section>
  )
}`}
        />
      </section>

      {/* Creating a dynamic segment section */}
      <section id="creating-a-dynamic-segment" className="content-section">
        <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-3 sm:mb-4">
          Creating a dynamic segment
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4 sm:mb-6">
          When you don't know the exact segment names ahead of time and want to create routes from dynamic data, you can use Dynamic Segments that are filled in at request time or prerendered at build time.
        </p>
        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4 sm:mb-6">
          A Dynamic Segment can be created by wrapping a folder's name in square brackets: <code className="code-inline">[folderName]</code>. For example, <code className="code-inline">[id]</code> or <code className="code-inline">[slug]</code>.
        </p>

        <CodeBlock
          filename="app/blog/[slug]/page.tsx"
          language="tsx"
          collapsible
          code={`export default function BlogPost({
  params,
}: {
  params: { slug: string }
}) {
  return <h1>Blog Post: {params.slug}</h1>
}`}
        />
      </section>

      {/* Linking between pages section */}
      <section id="linking-between-pages" className="content-section">
        <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-3 sm:mb-4">
          Linking between pages
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4 sm:mb-6">
          You can use the <code className="code-inline">&lt;Link&gt;</code> component to navigate between routes. <code className="code-inline">&lt;Link&gt;</code> is a built-in component that extends the HTML <code className="code-inline">&lt;a&gt;</code> tag to provide prefetching and client-side navigation.
        </p>

        <CodeBlock
          filename="app/page.tsx"
          language="tsx"
          collapsible
          code={`import Link from 'next/link'

export default function Page() {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/blog/hello-world">Blog Post</Link>
    </nav>
  )
}`}
        />
      </section>

      {/* API Reference section */}
      <section id="api-reference" className="content-section">
        <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-3 sm:mb-4">
          API Reference
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
          Learn more about the features mentioned in this page by reading the API Reference.
        </p>
      </section>

      {/* Previous/Next Navigation */}
      <PrevNextNav />
    </DocsLayout>
  );
};

export default Index;
