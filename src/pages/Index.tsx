import { CodeBlock } from "@/components/docs/CodeBlock";
import DecryptText from "@/components/custom/decrypt-text";
import AnimatedTextBlock from "@/components/custom/animated-text-block";
import TypingText from "@/components/custom/typing-text";

const blockText = `
<p className="text-sm sm:text-base text-muted-foreground">
JavaScript-focused full-stack developer with <code className="code-inline">7+</code> years of experience specializing 
in React Native (hybrid app for <code className="code-inline underlined underline-clip">Android</code> & <code className="code-inline underlined underline-clip">iOS</code>) and modern web frameworks. 
I build smooth, scalable digital products with clean code, strong micro-frontend architecture, multilingual support, and optimized backend services 
powered by <code className="code-inline underlined underline-clip">React</code> - Vite, <code className="code-inline underlined underline-clip">React Native</code>, Next.js, Node.js, Nest.js and <code className="code-inline underlined underline-overflow">TypeScript</code>.

With 4+ years of team <code className="code-inline underlined underline-overflow">leadership</code>, I’ve led successful development initiatives in Agile environments using GitHub, CI/CD pipelines, Docker, and modern cloud technologies. 
I’m committed to delivering clean, maintainable code and high-quality products that exceed expectations.
</p>
`;

const Index = () => {
  return (
    <>
      {/* Page header */}
      <div className="mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-2">
          G'day 👋, I'm Erfanul Islam
        </h1>
        <blockquote className="text-xl sm:text-2xl font-semibold text-muted-foreground mb-3 sm:mb-4 blockquote">
          <DecryptText text="First Solve The Problem, Then Write Code" speed={30} />
        </blockquote>
      </div>

      <hr className="border-border mb-6 sm:mb-8" />
      <TypingText
        text={[
          "JavaScript-focused fullstack developer", 
          "Mobile Application By React Native", 
          "Cross Platform Mobile App Android & Ios",
          "React with Vite & Next.js",
          "Typescript",
          "Micro-frontend architecture, Multilingual platforms, and Permission-based systems",
          "Node.js, Nest.js with Prisma",
          "Agile environments using GitHub, CI/CD pipelines, Docker, and modern cloud integrations",
        ]}
        typingSpeed={75}
        pauseDuration={1500}
        showCursor={true}
        cursorCharacter="|"
        className="text-xl sm:text-2xl font-semibold text-muted-foreground"
        // textColors={['#3b82f6', '#8b5cf6', '#06b6d4']}
        variableSpeed={{ min: 50, max: 120 }}
      />
      <section id="creating-a-layout" className="content-section">
        <CodeBlock
          filename="/introduction-summary"
          language="txt"
          collapsible
          component={<AnimatedTextBlock classes="text-sm sm:text-base text-muted-foreground" htmlText={blockText.trim()} speed={0} showAnimation={false} />}
        />
      </section>
    </>
  );
};

export default Index;
