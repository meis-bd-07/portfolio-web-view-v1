import AnimatedTextBlock from "@/components/custom/animated-text-block";
import { ArrowRight, Calendar, Copy, Download, Droplet, Globe, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import MyTimezone from "./timezone";

function InfoItem({ icon, label, value, showCopy = false }) {
    return (
    <div className="flex items-center gap-2 p-2 rounded-lg bg-gray-50 hover:bg-gray-100 transition-all text-sm">
        <div className="text-gray-600 w-4 h-4 flex items-center justify-center">{icon}</div>
        <span className="font-medium text-gray-800">{label}:</span>
        <span className="text-gray-600">{value}</span>
        {showCopy && <button
            onClick={() => navigator.clipboard.writeText(value)}
            className="ml-auto text-gray-400 hover:text-gray-700"
        >
            <Copy size={14} />
        </button>}
    </div>
    );
}

const AboutMe = () => {
    return (
        <>
            {/* header */}
            <div className="mb-6 sm:mb-8">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-2">
                    About Erfan
                </h1>
                <blockquote className="text-xl sm:text-2xl font-semibold text-muted-foreground mb-3 sm:mb-4 blockquote">
                    <p>
                        <AnimatedTextBlock containerClass="" htmlText={"More than just a title—let’s dive deeper!"} speed={20} />
                    </p>
                </blockquote>
            </div>

            {/* description */}
            <div className="border rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-md">
                <h2 className="text-2xl font-bold mb-4">About Me</h2>
                <p className="text-base leading-relaxed mb-6">
                I am a JavaScript-focused developer with 7+ years of experience building scalable, high-performance web and mobile applications. As a full-stack mobile app developer specializing in React Native, I create robust hybrid apps for both Android and iOS. My expertise includes React, React Native, Node.js, NestJS, Next.js, and TypeScript—allowing me to design complete end-to-end solutions. I have worked with micro-frontend architecture, multilingual platforms, permission-based systems, SaaS products, and social engagement features such as reviews, follow systems, collections, sharing, and stories.
                I also have strong skills in API development, database design (MySQL & PostgreSQL), Firebase notifications, and developer tooling including CodeRabbit, ESLint, Husky, and path aliases. With 4+ years of team leadership, I excel in Agile environments using GitHub, CI/CD, Docker, and cloud technologies.
                </p>

                <div className="flex gap-4 flex-wrap">
                    <Link 
                        to="/assets/pdf/Mohammad Erfanul_Islam.pdf"
                        download="Mohammad-Erfanul-Islam-Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer" 
                        className="px-5 py-2 rounded-xl bg-blue-950 text-white hover:bg-gray-700 shadow-md hover:shadow-xl transition-all flex flex-row items-center justify-center"
                    >
                        Download Resume&nbsp;
                        <Download height={14} width={14} />
                    </Link>
                    <Link to={"mailto:erfan.orangetoolz@gmail.com"} target="_blank" className="px-5 py-2 rounded-xl bg-none text-black hover:bg-neutral-200 transition-all flex flex-row items-center justify-center">
                        <Mail height={14} width={14} />
                        &nbsp;Send Email
                    </Link>
                    <Link
                        to="/contact-me"
                        className="group px-5 py-2 rounded-xl bg-none text-black transition-all flex flex-row items-center justify-center"
                    >
                        Contact Me&nbsp;
                        <span className="inline-block transition-transform duration-200">
                            <ArrowRight
                            height={14}
                            width={14}
                            className="transition-transform duration-200 group-hover:translate-x-1"
                            />
                        </span>
                    </Link>
                </div>
            </div>

            {/* personal info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
                <InfoItem icon={<Mail />} label="Email" value="erfan.orangetoolz@gmail.com" />
                <InfoItem icon={<Phone />} label="Phone" value="+880 1825 262557" />
                <InfoItem icon={<MapPin />} label="Permanent Address" value="Talukdar Bari, West Alahabad, Chandanaish, Chattogram" />
                <InfoItem icon={<MapPin />} label="Present Address" value="Sector 10, Uttara, Dhaka" />
                <InfoItem icon={<Globe />} label="Nationality" value="Bangladeshi" />
                <InfoItem icon={<Calendar />} label="Date of Birth" value="07 March, 1993" />
                <InfoItem icon={<Droplet />} label="Blood Group" value="O-" />
            </div>

            <MyTimezone />

        </>
    )
};

export default AboutMe;