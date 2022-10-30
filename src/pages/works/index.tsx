import Head from "next/head";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import Image from "next/legacy/image";

const works: Array<{ title: string, href: string }> = [
    {
        title: "Storyboards",
        href: "/storyboards"
    }
];

const WorksItems = () => {
    return (
        <>
            {works.map((work) => {
                return (
                    <li key={work.title.toLowerCase()} className="w-[75%] md:w-[70%] lg:w-[60%] xl:w-[45%]">
                        <div>
                            <Link href={"/works" + work.href} scroll={false}>
                                <div className="relative w-auto h-96 rounded-3xl overflow-hidden">
                                    <Image
                                        src={"/assets/images/works/" + work.title.toLowerCase() + ".png"}
                                        alt="Screenshot of the storyboard"
                                        layout="fill"
                                        objectFit="cover"
                                    />
                                    <div
                                        className="absolute w-full h-full flex flex-col justify-end bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-500">
                                        <div className="py-4 bg-black/75 text-center">
                                            <h3 className="text-xl font-semibold">{work.title}</h3>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </li>
                );
            })}
        </>
    );
};

const Works = () => {
    return (
        <>
            <Head>
                <title>Mune | Works</title>
            </Head>
            <div>
                <div className="w-full mb-4">
                    <h1 className="text-4xl font-semibold text-center uppercase">Works</h1>
                </div>
                <div>
                    <div>
                        <ul className="w-full flex flex-wrap justify-center gap-12">
                            <WorksItems/>
                        </ul>
                    </div>
                    <div className="mt-10 text-center">
                        <p>Unlisted works can be found {" "}
                            <a
                                href="https://github.com/munehime"
                                className="font-bold">here
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Works;