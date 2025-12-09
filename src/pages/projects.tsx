import AnimatedTextBlock from "@/components/custom/animated-text-block";
import { projects } from "@/constants/projects";
import { ExternalLink } from "lucide-react";

export default function Projects() {

  return (
    <>

    <div className="mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-2">
            Projects
        </h1>
        <blockquote className="text-xl sm:text-2xl font-semibold text-muted-foreground mb-3 sm:mb-4 blockquote">
            <p>
                <AnimatedTextBlock containerClass="" htmlText={"From Crafts to Celebration — Live or in the Lab"} speed={30} />
            </p>
        </blockquote>
    </div>

    {/* Projects Grid */}
    <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
        <div
            key={idx}
            id={idx.toString()}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
        >
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
            {project.keywords.map((k, i) => (
                <span
                key={i}
                className="bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-100 px-2 py-1 rounded-full text-xs font-medium"
                >
                {k}
                </span>
            ))}
            </div>

            <p className="text-gray-500 dark:text-gray-400 text-xs mb-2">Role: {project.role}</p>
            <p className="text-gray-500 dark:text-gray-400 text-xs mb-4">Date: {project.date}</p>

            <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-gray-400 font-medium cursor-not-allowed pointer-events-none"
            >
                Read More <ExternalLink height={14} width={14} className="ml-1" />
            </a>
        </div>
        ))}
    </div>
    </>
  );
}
