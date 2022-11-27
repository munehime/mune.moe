import Link from "next/link";
import Image from "next/legacy/image";

const links: Array<{
    title: string,
    href: string,
}> = [
    {
        title: "Home",
        href: "/"
    },
    {
        title: "Works",
        href: "/works"
    }
];

const NavItems = () => {
    return (
        <>
            {links.map(link => {
                return (
                    <li key={link.title.toLowerCase()}>
                        <Link href={link.href} className="text-neutral-500 hover:text-white transition-color duration-300">
                            {link.title}
                        </Link>
                    </li>
                );
            })}
        </>
    );
};

const Header = () => {
    return (
        <header
            className="relative w-full flex-none border-b border-b-neutral-800 font-betvietnampro text-lg font-semibold">
            <div className="max-w-8xl px-4 py-3 mx-auto">
                <div className="flex justify-between items-center">
                    <div>
                        <Link href="/" className="w-96">
                            <div className="relative w-16 h-16">
                                <Image
                                    src="/assets/images/yae_browser.png"
                                    alt="Yae Miko Browser"
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </div>
                        </Link>
                    </div>
                    <nav>
                        <ul className="flex space-x-8">
                            <NavItems/>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
