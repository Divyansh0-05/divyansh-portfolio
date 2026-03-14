export type Project = {
  id: string
  title: string
  description: string
  details: string
  tech: string[]
  image: string
  github: string
  live: string
}

export const projects: Project[] = [
  {
    id: "insurance-management-system",
    title: "Insurance Management System (IMS)",
    description:
      "A full-stack web application for managing insurance policies, customers, and claims through a structured dashboard.",
    details:
      "IMS is built for streamlined policy lifecycle handling with role-based JWT access control and document uploads for claim workflows. The dashboard structure keeps customer records, policy data, and claim documents organized in one place for faster operations and better traceability.",
    tech: [
      "React + Vite",
      "Node.js + Express",
      "MongoDB (Mongoose)",
      "JWT (Role-Based)",
      "Multer",
    ],
    image:
      "https://images.pexels.com/photos/7578860/pexels-photo-7578860.jpeg?auto=compress&cs=tinysrgb&w=1600",
    github: "https://github.com/Divyansh0-05/insurance-management-system",
    live: "https://insurance-management-system-roan.vercel.app/",
  },
  {
    id: "learnix",
    title: "Learnix - Skill Barter Platform",
    description:
      "A full-stack platform where users can exchange skills with each other without money.",
    details:
      "Learnix focuses on peer-to-peer learning by matching people based on teach/learn interests. It combines modern React UX patterns with real-time Socket.IO communication, JWT authentication, media hosting, caching, and toast notifications for a fast and engaging user experience.",
    tech: [
      "React + Tailwind",
      "React Router",
      "Axios",
      "Node.js + Express",
      "MongoDB + Mongoose",
      "Socket.IO",
      "JWT",
      "Cloudinary",
      "Redis",
      "React Hot Toast",
    ],
    image:
      "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1600",
    github: "https://github.com/Divyansh0-05/learnix",
    live: "https://learnix-frontend.onrender.com/",
  },
  {
    id: "imc",
    title: "IMC - E-Commerce Platform",
    description:
      "A modern e-commerce platform with product browsing, authentication, secure payments, and cloud image storage.",
    details:
      "IMC delivers a complete shopping workflow with Redux Toolkit state management and responsive React UI. It includes secure JWT-based account flows, Cloudinary-powered product media, and Razorpay integration for safe and seamless checkout.",
    tech: [
      "React",
      "Redux Toolkit",
      "Tailwind CSS",
      "Node.js + Express",
      "MongoDB",
      "JWT",
      "Cloudinary",
      "Razorpay",
    ],
    image:
      "https://images.pexels.com/photos/5632397/pexels-photo-5632397.jpeg?auto=compress&cs=tinysrgb&w=1600",
    github: "https://github.com/rashisanger/ecommerce-imc",
    live: "https://imc-frontend-mu.vercel.app/",
  },
  {
    id: "clovix",
    title: "Clovix",
    description:
      "An AI-powered web platform integrating MediaPipe to enable real-time intelligent interactions with a modern responsive UI.",
    details:
      "Clovix combines Next.js performance with real-time MediaPipe computer vision to power interactive AI experiences. The interface is designed to stay responsive across devices while handling intelligent browser-side and backend-assisted interactions.",
    tech: ["Next.js", "React", "Node.js", "MediaPipe (AI Computer Vision)"],
    image:
      "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1600",
    github: "https://github.com/Divyansh0-05/clovix",
    live: "https://www.clovix.in/",
  },
]

