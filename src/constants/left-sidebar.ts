
export type INavValue = "home" | "about-me" | "projects" | "skills" | "tools" | "experiences" | "education" | "contact-me" | "stats" | "cover-letter" | "resume" | 'blogs' | "gallery" | 'integrations' | 'achievements'

interface NavItem {
  label: string;
  href?: string;
  disable?: boolean;
  items?: NavItem[];
  value: INavValue;
}

const navItems: NavItem[] = [
  { label: "Introduction", href: "", value: 'home' },
  { label: "About Me", href: "/about-me", value: 'about-me' },
  { label: "Projects", href: "/projects", value: 'projects' },
  { label: "Skills", href: "/skills", value: 'skills' },
  { label: "Integrations", href: "/integrations", value: 'integrations' },
  { label: "Achievements", href: "/achievements", value: 'achievements', disable: true },
  { label: "Experiences", href: "/experiences", value: 'experiences' },
  { label: "Education", href: "/education", value: 'education' },
  { label: "Contact Me", href: "/contact-me", value: 'contact-me' },
  { label: "Stats", href: "/stats", value: 'stats', disable: true },
  { label: "Resume", href: "/resume", value: 'resume' },
  { label: "Cover Letter", href: "/cover-letter", value: 'cover-letter' },
  { label: "Gallery", href: "/gallery", value: 'gallery' }
];

export type ISection = Omit<NavItem, 'value'> & {
  value: string | null;
  disable?: boolean;
}

const allBlogs = [
  { 
    label: "JSON vs TOON in AI Context", 
    category: 'Ai Context',
    date: 'October 07, 2025',
    description: 'JSON (JavaScript Object Notation) is a lightweight data format used to store and exchange structured information in a readable way. It is widely used for APIs, configuration files, and data storage across applications. In the context of TOON AI, JSON often serves as the format for input parameters, model settings, and output data. TOON AI, on the other hand, is an AI-powered tool focused on generating creative content, such as cartoons or stylized images. Comparing JSON and TOON AI highlights the difference between a data format (JSON) and an AI-driven content generation system (TOON AI), where JSON acts as the bridge for communication and configuration.',
    href: "/blogs/wyiqxneojsjex", 
    value: "wyiqxneojsjex", 
    disable: true,
    show: true
  },
  { label: "Coming Soon", href: "#", value: null, disable: true, show: false },
]

const sections: { label: string; items?: ISection[]; expandable?: boolean }[] = [
  {
    label: "Blogs",
    expandable: true,
    items: [
      { label: "All Blogs", href: "/blogs", value: 'all', disable: false },
      ...allBlogs
    ],
  },
];

export {navItems, sections, allBlogs}