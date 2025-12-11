import AnimatedTextBlock from "@/components/custom/animated-text-block";

const CoverLetter = () => {
    return (
        <>
            {/* header */}
            <div className="mb-6 sm:mb-8">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-2">
                    Cover Letter
                </h1>
                <blockquote className="text-xl sm:text-2xl font-semibold text-muted-foreground mb-3 sm:mb-4 blockquote">
                    <AnimatedTextBlock containerClass="" htmlText={"My Career Intent — The Why Behind the Role"} speed={15} />
                </blockquote>
            </div>

            <div className="max-w-3xl w-full bg-white shadow-lg rounded-xl p-10 border border-gray-200">
                {/* Body */}
                <div className="space-y-5 text-[17px] leading-relaxed text-gray-700 font-serif">
                    <p>Dear Visitor 👋,</p>

                    <p>
                        I am writing to express my interest in the position advertised in your 
                        recent job circular. With over 7 years of professional experience 
                        as a JavaScript-based developer—and more than five years specializing 
                        in React Native—I bring a proven track record of building robust, 
                        scalable, and user-centered applications across both mobile and web 
                        platforms.
                    </p>

                    <p>
                        I have also worked on a SaaS-based CRM product built with a 
                        micro-frontend architecture, which strengthened my ability to design 
                        modular, maintainable, and large-scale systems.
                    </p>

                    <p>
                        My technical expertise includes React, Vite, Next.js, React Native, 
                        TypeScript, Redux, RTK Query, Zustand, Firebase, and various real-time 
                        communication technologies. I have hands-on experience integrating 
                        advanced features such as mapping solutions, Twilio voice calls, push 
                        notifications, SMS/MMS services, email automation, and live data 
                        synchronization using sockets. These capabilities have enabled me to 
                        deliver end-to-end solutions that are performant, reliable, and aligned 
                        with modern industry standards.
                    </p>

                    <p>
                        On the backend, I have experience with Node.js and Nest.js, working 
                        with both MySQL and PostgreSQL databases to build secure and scalable 
                        APIs.
                    </p>

                    <p>
                        I am particularly passionate about creating clean, efficient 
                        architectures and writing high-quality, scalable code. I enjoy 
                        collaborating with cross-functional teams, solving complex technical 
                        challenges, and contributing to overall product strategy and user 
                        experience.
                    </p>

                    <p>
                        I am confident that my background, strong ownership mindset, and 
                        dedication to delivering exceptional results make me a valuable 
                        addition to your team. I would welcome the opportunity to discuss how 
                        my skills and experience align with your project and organizational 
                        goals.
                    </p>

                    <p>
                        Thank you for your time and consideration. I look forward to the 
                        possibility of contributing to your team.
                    </p>

                    <p className="mt-8 font-semibold text-gray-800">
                        Sincerely, <br />
                        Mohammad Erfanul Islam Sifat
                    </p>
                </div>
            </div>
        </>
    )
};

export default CoverLetter;



