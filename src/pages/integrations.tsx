import AnimatedTextBlock from "@/components/custom/animated-text-block";
import { integrations } from "@/constants/skills";

export default function Integrations() {

  return (
    <>
    <div className="mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-2">
            Integrations
        </h1>
        <blockquote className="text-xl sm:text-2xl font-semibold text-muted-foreground mb-3 sm:mb-4 blockquote">
            <p>
                <AnimatedTextBlock containerClass="" htmlText={"Plug, Play & Extend — Third-Party Services in Action"} speed={30} />
            </p>
        </blockquote>
    </div>

    <p className="dark:text-gray-400 mb-10 text-muted-foreground">
        Over the years, I have integrated a wide variety of third-party services to enhance communication, payments, automation, authentication, analytics, and cloud workflows. From messaging APIs and email providers to payment gateways, AI services, and cloud storage, I build reliable, scalable, and seamless integrations that power real-world features across mobile and web platforms.
    </p>

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {integrations.map((integration) => (
        <div
            key={integration.name}
            className="flex items-center gap-2 p-3 rounded-xl 
            border border-gray-200 dark:border-gray-700 
            bg-white dark:bg-gray-800 
            shadow-sm hover:shadow-md transition-all"
        >
            <span className="text-xl">{integration.icon}</span>
            <span className="text-gray-800 dark:text-gray-200 font-medium text-sm">
            {integration.name}
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
