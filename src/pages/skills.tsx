import AnimatedTextBlock from "@/components/custom/animated-text-block";
import { skills } from "@/constants/skills";

export default function Skills() {

  return (
    <>
    <div className="mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-2">
            Skills
        </h1>
        <blockquote className="text-xl sm:text-2xl font-semibold text-muted-foreground mb-3 sm:mb-4 blockquote">
            <AnimatedTextBlock containerClass="" htmlText={"Crafted Through Sleepless Nights & Relentless Debugging"} speed={30} />
        </blockquote>
    </div>

    <p className="dark:text-gray-400 mb-10 text-muted-foreground">
        Over the years, I have worked with a wide range of technologies across mobile, web, and backend ecosystems. I build cross-platform mobile apps with React Native, modern web applications with React/Next.js, and scalable SaaS platforms with micro-frontend architecture. My backend experience includes Node.js, Nest.js, Prisma, and robust SQL/NoSQL database design. I also work with CI/CD, containerization, and cloud deployment to deliver reliable end-to-end systems.
    </p>

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {skills.map((skill) => (
        <div
            key={skill.name}
            className="flex items-center gap-2 p-3 rounded-xl 
            border border-gray-200 dark:border-gray-700 
            bg-white dark:bg-gray-800 
            shadow-sm hover:shadow-md transition-all"
        >
            <span className="text-xl">{skill.icon}</span>
            <span className="text-gray-800 dark:text-gray-200 font-medium text-sm">
            {skill.name}
            </span>
        </div>
        ))}
    </div>

    <p className="mt-10 text-gray-600 dark:text-gray-400 italic text-center">
        ...and many more!
    </p>

    </>
  );
}
