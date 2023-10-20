import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Diploma in Computer Engineering",
    location: "Gujarat, Rajkot",
    description:
      "Cleared Diploma in Computer Engineering from Gujarat Technological Unversity with 10 CGPA. ",
    icon: React.createElement(LuGraduationCap),
    date: "2017-2020",
  },
  {
    title: "Degree in Computer Engineering",
    location: "Gujarat, Rajkot",
    description:
      "Completed Graduation in Computer Engineering from Gujarat Technological Unversity with 8.64 CGPA. ",
    icon: React.createElement(LuGraduationCap),
    date: "2020-2023",
  },
  {
    title: "Software Developer Intern",
    location: "Gujarat , Rajkot",
    description:
      "I worked as a Software Developer Intern at Bonzark Tchnologies LLP, for 2 weeks as part of GTU summer internship. My core tech. stack included PHP, Laravel MVC, MS SQL, HTML, CSS",
    icon: React.createElement(CgWorkAlt),
    date: "2022 Jun - 2022 Jul",
  },
  {
    title: "Software Engineer Intern",
    location: "Gujarat, Rajkot",
    description:
      "I worked as a Software Engineer Intern at Version Systems Pvt. Ltd. , for 6 months. My core tech. stack included ASP.NET, C#, HTML, CSS, Bootstrap-5, MS SQL and Oracle.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 Feb - 2023 Aug",
  },
  {
    title: "Web Developer Intern",
    location: "Mumbai, Maharashtra",
    description:
      "I'm am currently working as a Web Developer Intern at Quantam Rental Solutions Pvt. Ltd. . My core tech. includes React, Express, Node, CSS, AWS and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 Sep - Present",
  },
] as const;

export const projectsData = [
  {
    title: "StudyNotion",
    description:
      "Developed a user-friendly and responsive Ed-tech platform built on the MERN stack, that offers learners a wide range of courses on the latest technologies, it also helps educators to showcase their teaching skills.",
    tags: ["React", "Express", "MongoDB", "Tailwind", "RazorPay", "Node", "Redux"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Bloggie",
    description:
      "Created a website using ASP.NET Core MVC that empowers users to create and upload blogs, attach tags to posts, and explore blogs from other users. Additionally, administrators possess the capability to oversee blogs, affix or revoke tags, as well as modify or remove user information.",
    tags: ["ASP.NET CORE", "MVC", "C#", "Boostrap-5", "MSSQL"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Rapid Attack and Defence (RAD)",
    description:
      "RAD is a multiplayer first person shooter game. The main aim of our game is to provide user friendly and enjoyable game-play experience .Here, facilities like hosting game and joining a game are provided .This game is developed with the help of Unity Engine.",
    tags: ["C#", "Unity", "U-NET"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "Redux Thunk",
  "Express",
  "Framer Motion",
  "ASP.NET CORE",
  "C#",
  "MS SQL",
  "Oracle",
  "SVN",
  "Postman"
] as const;