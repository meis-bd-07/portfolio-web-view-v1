import AnimatedTextBlock from "@/components/custom/animated-text-block";
import EducationTimeline from "../components/custom/education-timeline";

export default function Education() {
  return (
    <>
        <div className="mb-6 sm:mb-8">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-2">
                Education
            </h1>
            <blockquote className="text-xl sm:text-2xl font-semibold text-muted-foreground mb-3 sm:mb-4 blockquote">
                <AnimatedTextBlock containerClass="" htmlText={"Smile & be the reason of other's smile"} speed={30} />
            </blockquote>
        </div>

        <p className="dark:text-gray-400 mb-10 text-muted-foreground">
            I believe learning is a lifelong journey that shapes the way we think, build, and solve real problems. Every skill I gain becomes a tool to create something meaningful.
            Through continuous learning and hands-on practice, I strengthen my foundation in modern development. Education, for me, is an evolving process—always growing, always building.
        </p>

        <EducationTimeline />
    </>
  );
}
