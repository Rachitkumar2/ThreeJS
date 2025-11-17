import { coreline, Learnyfy, Pravisht, RapidResq } from "../assets/images";
import {
    twitter,
    css,
    express,
    git,
    github,
    html,
    java,
    javascript,
    linkedin,
    mongodb,
    motion,
    nextjs,
    nodejs,
    react,
    redux,
    tailwindcss,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: java,
        name: "Java",
        type: "Backend",
    }
];

export const experiences = [
    {
        title: "Web Developer Intern",
        company_name: "Coreline Solutions",
        icon: coreline,
        iconBg: "#accbe1",
        date: "April 2025 - May 2025",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
        ],
    },
    {
        title: "Backend Development Intern",
        company_name: "Pravisht Digital",
        icon: Pravisht,
        iconBg: "#d4c5f8",
        date: "June 2025 - July 2025",
        points: [
            " Developed and implemented robust RESTful APIs using Spring Boot, contributing to the backend architecture.",
            " Integrated backend services with both MySQL and MongoDB databases, ensuring efficient data persistence and retrieval for application functionalities.",
            " Utilized industry-standard development tools including Maven, Git, and Postman for build management, version control, and API testing, streamlining the development workflow.",
        ],
    }
];

export const socialLinks = [
    {
        name: 'twitter',
        iconUrl: twitter,
        link: 'https://x.com/rachitk20',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Rachitkumar2',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/rachit-kumar-2195a3265/',
    }
];

export const projects = [
    {
        iconUrl: Learnyfy ,
        theme:   'btn-back-yellow'  ,
        name:   'Learnyfy LMS' ,
        description: 'Developed the frontend of a full-featured LMS platform using React.js, following a modular and component-based architecture. Implemented key modules including Student Dashboard, Course Listings, and Educator Interface to enhance usability.',
        link:'https://learnyfy-lms.vercel.app/'
    },
    {
        iconUrl: RapidResq,
        theme:   'btn-back-red'  ,
        name:   'RapidResq' ,
        description: ' Built the backend for an animal rescue platform with NGO authentication, volunteer roles, and adoption request management .Created and implemented RESTful APIs for user authentication, emergency reporting, image uploads, and role-based access control.',
        link:'https://rapidresq.vercel.app/'
    },
    {
        iconUrl: github,
        theme:   'btn-back-pink' ,
        name:   'K72 clone' ,
        description: 'Made clone of a Agency called K72',
        link:'https://github.com/Rachitkumar2/React'
    }
    
];