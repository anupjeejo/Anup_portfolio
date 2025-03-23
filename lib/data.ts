import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import studyNotionImg from "@/public/StudyNotion-HomePage.png"
import pdfPundit from '@/public/PDF-Pundit.png'
import rad from '@/public/RAD.png'

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
    title: "Software Engineer",
    location: "Gujarat, Rajkot",
    description:
      "I worked as a Software Engineer at Version Systems Pvt. Ltd. My core tech. stack included ASP.NET, C#, HTML, CSS, Bootstrap-5, MS SQL and Oracle.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 Feb - 2023 Aug",
  },
  {
    title: "Web Developer",
    location: "Mumbai, Maharashtra",
    description:
      "I worked as a Web Developer at Quantam Rental Solutions Pvt. Ltd. My core tech. includes React, Express, Node, CSS, AWS and MongoDB.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 Sep - 2024 Mar",
  },
  {
    title: "Associate Software Engineer",
    location: "Mumbai, Maharashtra",
    description:
      "I'm am currently working as a Associate Software Engineer at Accenture Pvt. Ltd. My core tech. includes React, Express, Node and MongoDB.",
    icon: React.createElement(CgWorkAlt),
    date: "2024 Apr - Present",
  }
] as const;

export const projectsData = [
  {
    title: "StudyNotion",
    description:
      "It is a user-friendly and responsive Ed-tech platform built on the MERN stack, that offers learners courses and also helps educators to showcase their teaching skills.",
    tags: ["React", "Express", "MongoDB", "Tailwind", "RazorPay", "Node", "Redux"],
    imageUrl: studyNotionImg,
  },
  {
    title: "PDF-Pundit",
    description:
      "PDF-Pundit is an AI based web-app which can read through the information of the provided PDF and answer any questions related to it with ease.",
    tags: ["NextJs", "TypeScript", "AWS S3", "Tailwind", "PineCone", "NeonDB", "OpenAI SDK"],
    imageUrl: pdfPundit,
  },
  {
    title: "Rapid Attack and Defence (RAD)",
    description:
      "RAD is a multiplayer first person shooter game. Here, facilities like hosting game and joining a game are provided .This game is developed with the help of Unity Engine.",
    tags: ["C#", "Unity", "U-NET"],
    imageUrl: rad,
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