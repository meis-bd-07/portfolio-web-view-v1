import AnimatedTextBlock from "@/components/custom/animated-text-block";
import DiamondGallery from "@/components/custom/portfolio-gallery";

const Gallery = () => {
    return (
        <>
            {/* header */}
            <div className="mb-6 sm:mb-8">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-2">
                    Gallery
                </h1>
                <blockquote className="text-xl sm:text-2xl font-semibold text-muted-foreground mb-3 sm:mb-4 blockquote">
                    <AnimatedTextBlock containerClass="" htmlText={"In Frames — My Professional Journey"} speed={15} />
                </blockquote>
            </div>

            <DiamondGallery />
        </>
    )
};

export default Gallery;



