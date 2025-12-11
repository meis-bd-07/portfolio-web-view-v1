import AnimatedTextBlock from "@/components/custom/animated-text-block";
import { Calendar, Copy, Droplet, FileUser, FlagTriangleRight, Github, Globe, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import ContactCardUpComing from "../components/custom/contact-me-up-coming-feature";

function InfoItem({ icon, label, value, showCopy = false }) {
    return (
    <div className="flex items-center gap-2 p-2 rounded-lg bg-gray-50 hover:bg-gray-100 transition-all text-sm">
        <div className="text-gray-600 w-4 h-4 flex items-center justify-center">{icon}</div>
        <span className="font-medium text-gray-800">{label}:</span>
        <span className="text-gray-600" style={{wordBreak: 'break-all'}}>{value}</span>
        {showCopy && <button
            onClick={() => navigator.clipboard.writeText(value)}
            className="ml-auto text-gray-400 hover:text-gray-700"
        >
            <Copy size={14} />
        </button>}
    </div>
    );
}

const ContactMe = () => {
    return (
        <>
            {/* header */}
            <div className="mb-6 sm:mb-8">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-2">
                    Contact @erfan
                </h1>
                <blockquote className="text-xl sm:text-2xl font-semibold text-muted-foreground mb-3 sm:mb-4 blockquote">
                    <AnimatedTextBlock containerClass="" htmlText={"Reach Out, Let’s Talk"} speed={20} />
                </blockquote>
            </div>

            {/* personal info */}
            <div className="border rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-md">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <InfoItem icon={<Mail />} label="Email" value="erfan.orangetoolz@gmail.com" showCopy />
                    <InfoItem icon={<Phone />} label="Phone" value="+880 1825 262557" showCopy />
                    <InfoItem icon={<MapPin />} label="Permanent Address" value="Talukdar Bari, West Alahabad, Chandanaish, Chattogram" />
                    <InfoItem icon={<MapPin />} label="Present Address" value="Sector 10, Uttara, Dhaka" />
                    <InfoItem icon={<Globe />} label="Nationality" value="Bangladeshi" />
                    <InfoItem icon={<Calendar />} label="Date of Birth" value="07 March, 1993" />
                    <InfoItem icon={<Droplet />} label="Blood Group" value="O-" />
                    <InfoItem icon={<FlagTriangleRight />} label="Timezone" value="🇧🇩 Bangladesh (UTC+6)" />
                    <InfoItem icon={<Linkedin />} label="LinkedIn" value="https://www.linkedin.com/in/mohammad-erfanul-islam-sifat-6547351a6/"  showCopy={true}/>
                    <InfoItem icon={<Github />} label="Github" value="https://github.com/ErfanOrangetoolz"  showCopy={true}/>
                    <InfoItem icon={<FileUser />} label="Resume" value="https://drive.google.com/file/d/1LyfCMpzjxMQhiAiYaW0a9JunGqgjyuv7/view"  showCopy={true}/>
                </div>
            </div>

            <ContactCardUpComing />
        </>
    )
};

export default ContactMe;