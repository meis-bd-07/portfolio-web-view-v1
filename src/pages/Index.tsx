import { CodeBlock } from "@/components/docs/CodeBlock";
import DecryptText from "@/components/custom/decrypt-text";
import AnimatedTextBlock from "@/components/custom/animated-text-block";
import TypingText from "@/components/custom/typing-text";

const blockText = `
  <p className="text-sm sm:text-base text-muted-foreground">
    JavaScript full-stack developer with 7+ years’ experience, 
    specializing in <strong className="highlight">React Native</strong> (hybrid Android & iOS apps), 
    <strong className="highlight">React - Vite</strong>, 
    Next.js, Node.js, Nest.js, and 
    <strong className="highlight">TypeScript</strong>. 
    Skilled in 
    <strong className="highlight">micro-frontend architecture</strong>, 
    multilingual apps, permission based structure, and optimized backend services. 
    With 3+ years in <strong className="highlight">team leadership</strong>, 
    I drive Agile development using GitHub, CI/CD, Docker, and modern cloud technologies, delivering clean, scalable, high-quality products.
  </p>
`

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
