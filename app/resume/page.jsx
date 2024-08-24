"use client";

import {
    FaHtml5,
    FaCss3,
    FaJs,
    FaReact,
    FaNodeJs,
    FaPython,
    FaLinux,
} from "react-icons/fa";
import { DiNginx } from "react-icons/di";
import {
    SiNextdotjs,
    SiTailwindcss,
    SiLua,
    SiGnubash,
    SiAsterisk,
    SiKamailio,
    SiWebrtc,
} from "react-icons/si";
import { MdOutlineDialerSip } from "react-icons/md";

//componants
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { delay, motion } from "framer-motion";

// about data
const about = {
    title: "About me",
    description:
        "Experienced and versatile IT professional with a strong background in VOIP developer, system administration, web development, and network engineering. Proficient in designing and implementing innovative projects, such as inbound call solutions and auto-dialing frameworks. Adept at managing software/hardware installations and providing robust support across various IT domains.",
    info: [
        {
            feildName: "Name",
            feildValue: "Krishna Kumar",
        },
        {
            feildName: "Phone",
            feildValue: "+91-8989065744",
        },
        {
            feildName: "Experiance",
            feildValue: "7 Years",
        },
        {
            feildName: "Skype",
            feildValue: "krishna7448",
        },
        {
            feildName: "Nationality",
            feildValue: "Indian",
        },
        {
            feildName: "Email",
            feildValue: "krishna7448@gmail.com",
        },
        {
            feildName: "Freelance",
            feildValue: "Available",
        },
        {
            feildName: "Languages",
            feildValue: "English, Hindi",
        },
    ],
};

//experiance data
const experiance = {
    icon: "/assets/resume/badge.svg",
    title: "Experiance",
    description:
        "I have worked with many companies and individuals over the years and have picked up many skills along the way. These are some of the technologies I have been working with recently:",
    items: [
        {
            company: "TGC Services Pvt. Ltd.",
            position: "Senior Linux Administrator",
            duration: "Jul 2023 - Present",
        },
        {
            company: "Taurus BPO Services India LLP",
            position: "IT Team Leader",
            duration: "Mar 2022 - Jun 2023",
        },
        {
            company: "Ledx Legal Leaning Edutech Pvt Ltd",
            position: "Network Engineer",
            duration: "October 2021 - March 2022",
        },
        {
            company: "Iwebxtreme",
            position: "Web Developer",
            duration: "Dec 2018 - Sep 2021",
        },
        {
            company: "Techvialinux",
            position: "System Administrator",
            duration: "May 2017 - Nov 2018",
        },
    ],
};

//education data
const education = {
    icon: "/assets/resume/cap.svg",
    title: "Education",
    description:
        "I have a Bachelor of Engineering degree in Computer Science and Engineering from Rajiv Gandhi Proudyogiki Vishwavidyalaya.",
    items: [
        {
            institution: "Rajiv Gandhi Proudyogiki Vishwavidyalaya",
            degree: "Bachelor of Engineering (CSE)",
            duration: "2016 - 2019",
        },
        {
            institution: "Dhar Polytechnic College, Dhar",
            degree: "Diploma in Computer Science",
            duration: "2012 - 2015",
        },
    ],
};

//skills data
const skills = {
    icon: "/assets/resume/tools.svg",
    title: "Skills",
    description:
        "I have worked with many technologies over the years and have picked up many skills along the way.",
    skillList: [
        {
            name: "SIP",
            icon: <MdOutlineDialerSip />,
        },
        {
            name: "Asterisk",
            icon: <SiAsterisk />,
        },
        {
            name: "Kamailio",
            icon: <SiKamailio />,
        },
        {
            name: "WebRTC",
            icon: <SiWebrtc />,
        },
        {
            name: "Next.js",
            icon: <SiNextdotjs />,
        },
        {
            name: "Tailwind",
            icon: <SiTailwindcss />,
        },
        {
            name: "Lua",
            icon: <SiLua />,
        },
        {
            name: "Bash",
            icon: <SiGnubash />,
        },
        {
            name: "HTML",
            icon: <FaHtml5 />,
        },
        {
            name: "CSS",
            icon: <FaCss3 />,
        },
        {
            name: "JavaScript",
            icon: <FaJs />,
        },
        {
            name: "React",
            icon: <FaReact />,
        },
        {
            name: "Node.js",
            icon: <FaNodeJs />,
        },
        {
            name: "Python",
            icon: <FaPython />,
        },
        {
            name: "Linux",
            icon: <FaLinux />,
        },
        {
            name: "Nginx",
            icon: <DiNginx />,
        },
    ],
};

const Resume = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
            }}
            className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
        >
            <div className="container mx-auto">
                <Tabs
                    defaultValue="experience"
                    className="flex flex-col xl:flex-row gap-[60px]"
                >
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value="experience">experience</TabsTrigger>
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="about">About</TabsTrigger>
                    </TabsList>
                    <div className="min-h-[70vh] w-full">
                        <TabsContent value="experience" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">
                                    {experiance.title}
                                </h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                    {experiance.description}
                                </p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {experiance.items.map((item, index) => {
                                            return (
                                                <li
                                                    key={index}
                                                    className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                                                >
                                                    <span className="text-accent">
                                                        {item.duration}
                                                    </span>
                                                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                                                        {item.position}
                                                    </h3>
                                                    <div className="flex items-center gap-3">
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                        <p className="text-white/60 text-sm">
                                                            {item.company}
                                                        </p>
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        <TabsContent value="education" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">
                                    {education.title}
                                </h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                    {education.description}
                                </p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {education.items.map((item, index) => {
                                            return (
                                                <li
                                                    key={index}
                                                    className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                                                >
                                                    <span className="text-accent">
                                                        {item.duration}
                                                    </span>
                                                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                                                        {item.degree}
                                                    </h3>
                                                    <div className="flex items-center gap-3">
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                        <p className="text-white/60 text-sm">
                                                            {item.institution}
                                                        </p>
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        <TabsContent value="skills" className="w-full">
                            <div className="flex flex-col gap-[30px]">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className="text-4xl font-bold">
                                        {skills.title}
                                    </h3>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                        {skills.description}
                                    </p>
                                </div>
                                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                                    {skills.skillList.map((skill, index) => {
                                        return (
                                            <li key={index} className="">
                                                <TooltipProvider
                                                    delayDuration={100}
                                                >
                                                    <Tooltip>
                                                        <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                                            <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                                                {skill.icon}
                                                            </div>
                                                        </TooltipTrigger>
                                                        <TooltipContent>
                                                            <p className="capitalize">
                                                                {skill.name}
                                                            </p>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </TabsContent>
                        <TabsContent
                            value="about"
                            className="w-full text-center xl:text-left"
                        >
                            <div className="flex flex-col gap-[30px]">
                                <h3 className="text-4xl font-bold">
                                    {about.title}
                                </h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                    {about.description}
                                </p>
                                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                                    {about.info.map((item, index) => {
                                        return (
                                            <li
                                                key={index}
                                                className="flex items-center justify-center xl:justify-start gap-4"
                                            >
                                                <span className="text-white/60">
                                                    {item.feildName}
                                                </span>
                                                <span className="text-xl">
                                                    {item.feildValue}
                                                </span>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    );
};

export default Resume;
