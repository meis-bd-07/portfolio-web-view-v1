import AnimatedTextBlock from "@/components/custom/animated-text-block";
import ExperienceTimeline from "../components/custom/experience-timeline";

export default function Experiences() {

  return (
    <>
    <div className="mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-2">
            Experiences
        </h1>
        <blockquote className="text-xl sm:text-2xl font-semibold text-muted-foreground mb-3 sm:mb-4 blockquote">
            <AnimatedTextBlock containerClass="" htmlText={"Deploy workable code first, but ensure maintainability is the priority"} speed={30} />
        </blockquote>
    </div>

    <p className="dark:text-gray-400 mb-10 text-muted-foreground">
        Over the years, I have worked across diverse projects, delivering production-ready features with a focus on clean architecture, maintainable code, and scalable design. From building mobile and web applications to optimizing performance, refactoring legacy modules, and implementing modern development practices, I ensure each solution is both reliable and future-friendly. My experience spans full development lifecycles—planning, coding, debugging, testing, deployment, and continuous improvement—always with a priority on long-term maintainability and real-world usability.
    </p>

    <ExperienceTimeline />

    </>
  );
}
