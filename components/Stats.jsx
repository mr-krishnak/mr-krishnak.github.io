"use client";

import CountUp from "react-countup";

const stats = [
    { num: 7, text: "Years of experience" },
    { num: 10, text: "Projects Completed" },
    { num: 5, text: "Technologies mastered" },
    { num: 550, text: "Code Commits" },
];

const Stats = () => {
    return (
        <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
            <div className="container mx-auto">
                <div className="flex flex-wrap gap-6 mx-auto max-w-[80vw] xl:max-w-none">
                    {stats.map((item, index) => (
                        <div key={index} className="flex-1 flex gap-4 items-center justify-center xl:justify-center">
                            <CountUp end={item.num} duration={5} delay={2} className="text-4xl xl:text-6xl font-extrabold" />
                            <p className={`${item.text < 15 ? "max-w-[100px]": "max-w-[150px]"} leading-snug text-white/80`}>{item.text}</p>
                        </div>
                        
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
