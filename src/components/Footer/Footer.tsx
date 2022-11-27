import {
    faDiscord,
    faFacebook,
    faGithub,
    faTwitch,
    faTwitter,
    faYoutube,
    type IconDefinition
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { OsuLogo } from "../index";

const links: Array<{
    title: string;
    href: string;
    icon?: IconDefinition
}> = [
    {
        title: "Facebook",
        href: "https://www.facebook.com/truongthinh295",
        icon: faFacebook
    },
    {
        title: "Twitter",
        href: "https://twitter.com/munehime2905",
        icon: faTwitter
    },
    {
        title: "GitHub",
        href: "https://github.com/munehime",
        icon: faGithub
    },
    {
        title: "YouTube",
        href: "https://www.youtube.com/c/Munehime",
        icon: faYoutube
    },
    {
        title: "Twitch",
        href: "https://www.twitch.tv/munehime",
        icon: faTwitch
    },
    {
        title: "Discord",
        href: "https://discordapp.com/channels/@me/203699280261808138",
        icon: faDiscord
    },
    {
        title: "osu",
        href: "https://osu.ppy.sh/users/8500334"
    }
];

const FooterItems = () => {
    return (
        <>
            {links.map(link => {
                return (
                    <li key={link.title.toLowerCase()}>
                        <a href={link.href} target="_blank" rel="noopener noreferrer">
                            {link.icon ? (
                                <FontAwesomeIcon
                                    icon={link.icon}
                                    className="h-7 text-neutral-400 hover:text-white transition-colors duration-300"
                                />
                            ) : (
                                link.title.toLowerCase() == "osu" && (
                                    <OsuLogo
                                        className="h-7 text-neutral-400 hover:text-white transition-colors duration-300"
                                    />
                                )
                            )}
                        </a>
                    </li>
                );
            })}
        </>
    );
};

const Footer = () => {
    return (
        <footer className="mb-20 font-betvietnampro">
            <hr className="w-[50%] lg:w-[32%] mx-auto mb-7 border-neutral-600 border rounded-xl"/>
            <div>
                <ul className="mx-auto px-2 lg:px-4 flex flex-wrap gap-12 justify-center">
                    <FooterItems/>
                </ul>
            </div>
            <div className="mt-7">
                <p className="text-center">
                    <small>
                        Copyright &copy; {(new Date()).getFullYear()} {" "}
                        <a
                            href="https://github.com/munehime"
                            target="_blank" rel="noopener noreferrer"
                        >
                            Mune
                        </a>
                    </small>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
