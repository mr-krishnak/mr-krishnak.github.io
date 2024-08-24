import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const socials = [
    {
        icon: <FaGithub />,
        path: "https://github.com/mr-krishnak",
    },
    {
        icon: <FaLinkedin />,
        path: "https://www.linkedin.com/in/mr-krishna/",
    },
];
const Social = ({ containerStyles, iconStyles }) => {
    return (
        <div className={containerStyles}>
            {socials.map((item, index) => {
                return (
                    <Link href={item.path} key={index} className={iconStyles}>
                        {item.icon}
                    </Link>
                );
            })}
        </div>
    );
};

export default Social;
