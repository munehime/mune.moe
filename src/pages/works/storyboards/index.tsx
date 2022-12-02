import Head from "next/head";
import Image from "next/legacy/image";
import Link from "next/link";
import useSWR from "swr";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

import { Storyboard } from "../../../interfaces";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const WorksStoryboards = () => {
    const { data, error } = useSWR("/api/works/storyboards", fetcher);

    if (error) return <div>failed to load</div>;
    if (!data) return <div>loading...</div>;

    const { storyboards } = data;

    return (
        <>
            <Head>
                <title>Mune | Storyboards</title>
            </Head>
            <div>
                <div className="w-full mb-4 grid grid-cols-3">
                    <div className="flex items-center">
                        <Link href="/works" scroll={false}>
                            <FontAwesomeIcon icon={faAngleLeft} className="h-7" />
                        </Link>
                    </div>
                    <h1 className="text-4xl font-semibold text-center uppercase">Storyboards</h1>
                </div>
                <ul className="w-full grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {storyboards.map((storyboard: Storyboard) => {
                        return (
                            <li key={storyboard.beatmapSetId}>
                                <div className="relative rounded-lg overflow-hidden">
                                    <Link href={"/works/storyboards/" + storyboard.id} scroll={false}>
                                        <div className="relative w-auto h-96">
                                            <Image
                                                src={"/assets/images/storyboards/" + storyboard.beatmapSetId + ".png"}
                                                alt="Screenshot of the storyboard"
                                                layout="fill"
                                                objectFit="cover"
                                            />
                                            <div className="absolute w-full h-full flex flex-col justify-end bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-500">
                                                <div className="py-4 bg-black/75 text-center">
                                                    <h3 className="text-xl font-semibold">
                                                        {storyboard.artist + " - " + storyboard.title}
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </>
    );
};

export default WorksStoryboards;
