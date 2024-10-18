import { color } from "framer-motion";
import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    mobi,
    DSA,
    carrent,
    jobit,
    tripguide,
    threejs,
    Finance,
    Crud
    
  } from "../assets";

  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Frontend Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "AngularJs Developer",
      company_name: "Mobi Office",
      icon: mobi,
      iconBg: "#383E56",
      date: "June 2023 - July 2023",
      points: [
        "Developing and maintaining web applications using Angularjs and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Frontend Developer",
      company_name: "Directorate Of Student Affairs",
      icon: DSA,
      iconBg: "#E6DEDD",
      date: "Feb 2024 - March 2024",
      points: [
        "Made Components of the front-end of the website on which the team is working on, a website for the user registration to the cultural fest of the university, SRM Milan.",
        "Used AWS to host the website and manage the traffic coming on the website and to manage the database.",
        "Collaborated with team members using version control systems such as Git to organize modifications and assign tasks.",
        "Also helped the team solve the issues with the website by testing the website by thorough testing , reporting bugs and creating issues on the GitHub repository.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Finance Tracker",
      description:
        "Web-based platform that allows users to track their income and expenses, view spending trends, and set financial goals.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mysql",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "express",
          color: "blue-text-gradient",
        }
      ],
      image: Finance,
      source_code_link: "https://github.com/Akasht3010/SPAP-FTP",
    },
    {
      name: "Blog App",
      description:
        "Web application that allows users to create, read, update, and delete blog posts.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "development",
          color: "green-text-gradient",
        },
        {
          name: "webdev",
          color: "pink-text-gradient",
        },
      ],
      image: Crud,
      source_code_link: "https://github.com/Akasht3010/BlogApp",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };