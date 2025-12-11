import AnimatedTextBlock from "@/components/custom/animated-text-block";
import ResumePreview from "@/components/custom/resume-view";

const Resume = () => {
    return (
        <>
            {/* header */}
            <div className="mb-6 sm:mb-8">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-2">
                    My Resume
                </h1>
                <blockquote className="text-xl sm:text-2xl font-semibold text-muted-foreground mb-3 sm:mb-4 blockquote">
                    <AnimatedTextBlock containerClass="" htmlText={"A Snapshot of My Career. Where I’ve Been, What I’ve Built !"} speed={15} />
                </blockquote>
            </div>

            <ResumePreview />
        </>
    )
};

export default Resume;



