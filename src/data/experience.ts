import { CareerType } from "@/types";

const myExperience:CareerType[] = [
  {
    title: "Software Engineer & Graduate Research Assistant",
    subtitle: "University of Maryland, Baltimore County",
    date:"July, 2023 – Present",
    description: `Leading a 4-member development team in creating a privacy focused full-stack web and mobile application, using agile methodologies, which doubled the project delivery speed.
    Conceptualized and designed 5 innovative and user-centric "nutritional label" designs for software transparency, leveraging market research, user surveys, A/B testing, and iterative feedback, which secured lab funding.
    Engineered a real-time backend system for tracking Terms of Service, Policies and app updates for 100+ apps in marketplaces, leveraging web scraping and Twilio’s Send Grid API, reducing manual efforts by 90% and saving 200+ hours annually.`
  },
  {
    title: "Software Engineer, Full-Stack",
    subtitle: "Deque Systems - APAC",
    date:"April, 2022 - December, 2022",
    description: `Engineered a backend framework, by integrating TypeScript, Node.js, Express.js and Object Oriented Programming principles, leading to acceleration in development processes for developers.
    Developed 3+ Proofs-of-Concept, and integrated one into an existing product, resulting in a increase in user retention.
    Enhanced a deprecated product by migrating to React for the frontend and Node.js for the backend, achieving a uptick in performance, which translated into a 10% increase in user engagement and satisfaction.`
  },
  {
    title: "Software Development Engineer",
    subtitle:"Devathon",
    date:"May, 2021 - April, 2022",
    description: `Migrated 50+ legacy React Class Components to Functional Components, resulting in a 80% improvement in code quality.
    Architected and scaled 15+ Restful API endpoints by leveraging software design patterns, data structures and algorithms, which reduced API response times by 60-80%, enhancing overall app performance.
    Designed relational database models adhering to ACID properties, and utilized Sequelize ORM, Mongoose ODM for validations and constraints, which ensured 99.9% data integrity across 5000+ records.`
  },
  {
    title: "SWE Apprentice (Engage Mentorship Program)",
    subtitle: "Microsoft",
    date:"November, 2021",
    description: `Designed and built “Engage Board”, a real time forum and note sharing platform, completing within a three-week timeline, demonstrating rapid development and deployment capabilities.
    Developed scalable features such as chat room spaces capable of handling 2000+ daily messages utilizing socket.io.
    Integrated Azure Content Moderation AI for 98% profanity filtering to enhance the user experience and content safety.`
  }
];

export default myExperience;