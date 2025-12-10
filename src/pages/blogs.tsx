import AllBlogs from "@/components/custom/all-blogs";
import AnimatedTextBlock from "@/components/custom/animated-text-block";
import ResumePreview from "@/components/custom/resume-view";

const Blogs = () => {
    return (
        <>
            {/* header */}
            <div className="mb-6 sm:mb-8">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-2">
                    Blogs
                </h1>
                <blockquote className="text-xl sm:text-2xl font-semibold text-muted-foreground mb-3 sm:mb-4 blockquote">
                    <p>
                        <AnimatedTextBlock containerClass="" htmlText={"Behind the Build: My Tech Notes"} speed={15} />
                    </p>
                </blockquote>
            </div>

            <AllBlogs />
        </>
    )
};

export default Blogs;



