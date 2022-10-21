import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import useSWR from "swr";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

import { getCountryFlagByCountryCode, getCountryInfoByCountryCode } from "../../../utils";
import { User } from "../../../interfaces";

const fetcher = async (url: string) => {
    const res = await fetch(url);
    const data = await res.json();

    if (res.status !== 200) {
        throw  new Error(data.message);
    }

    return data;
};

const UserCard = ({ user }: { user: User }) => {
    return (
        <a
            href={"https://osu.ppy.sh/users/" + user.userId}
            target="_blank" rel="noopener noreferrer"
        >
            <div className="w-80 px-5 py-3 bg-black/25 hover:bg-neutral-800 rounded-xl transition-color duration-500">
                <div className="flex space-x-3">
                    <div className="relative w-16 h-16 rounded-xl overflow-hidden">
                        <Image
                            src={"https://a.ppy.sh/" + user.userId}
                            alt={"Avatar of " + user.username}
                            layout="fill" objectFit="cover"
                        />
                    </div>
                    <div>
                        <h4 className="text-xl font-bold">{user.username}</h4>
                        <div className="flex space-x-1.5 items-center">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                className="h-5"
                                src={getCountryFlagByCountryCode(user.country).src}
                                alt="Flag"
                            />
                            <span className="text-lg">
                                {getCountryInfoByCountryCode(user.country)?.name}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    );
};

const UserList = ({ users }: { users: Array<User> }) => {
    return (
        <ul className="flex flex-wrap gap-6 justify-center">
            {users.map((user: User) => {
                return (
                    <li key={user.userId}>
                        <UserCard user={{
                            userId: user.userId,
                            username: user.username,
                            country: user.country
                        }}/>
                    </li>
                );
            })}
        </ul>
    );
};

const VideoPlayer = ({ videoId }: { videoId: string }) => {
    return (
        <iframe
            src={"https://www.youtube-nocookie.com/embed/" + videoId}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-[426px] h-[240px] sm:w-[640px] sm:h-[360px] lg:w-[854px] lg:h-[480px]"
        >
        </iframe>
    );
};

const WorksStoryboardsDetails = () => {
    const { query: { id } } = useRouter();

    const {
        data,
        error
    } = useSWR(() => id && "/api/works/storyboards/" + id, fetcher);

    if (error) return <div>failed to load</div>;
    if (!data) return <div>loading...</div>;

    const { storyboard } = data;

    return (
        <>
            <Head>
                <title>Mune | Storyboards / {storyboard.artist + " - " + storyboard.title}</title>
            </Head>
            <div>
                <div className="w-full mb-4 grid grid-cols-3">
                    <div className="flex items-center">
                        <Link href="/works/storyboards" scroll={false}>
                            <a>
                                <FontAwesomeIcon icon={faAngleLeft} className="h-7"/>
                            </a>
                        </Link>
                    </div>
                    <h1 className="text-4xl font-semibold text-center uppercase">Storyboards</h1>
                </div>
                <div>
                    <div className="w-2/3 mx-auto">
                        <a
                            href={"https://osu.ppy.sh/beatmapsets/" + storyboard.beatmapSetId}
                            target="_blank" rel="noopener noreferrer"
                        >
                            <div className="relative w-auto h-32 rounded-3xl overflow-hidden">
                                <Image
                                    src={"https://assets.ppy.sh/beatmaps/" + storyboard.beatmapSetId + "/covers/cover.jpg"}
                                    alt="Cover image of the beatmapset"
                                    layout="fill" objectFit="cover"
                                />
                                <div className="absolute w-full h-full flex flex-col justify-center bg-black/70">
                                    <div className="text-center">
                                        <h2 className="text-2xl font-bold">
                                            {storyboard.artist + " - " + storyboard.title}
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="w-fit mx-auto mt-3 flex flex-col">
                        <div className="mx-auto">
                            <div className="mb-2 text-center">
                                <h3 className="text-lg font-semibold">Mappers</h3>
                            </div>
                            <div>
                                <UserList users={storyboard.mappers}/>
                            </div>
                        </div>
                        <div>
                            <div className="mt-4 mb-2 text-center">
                                <h3 className="text-lg font-semibold">Storyboarders</h3>
                            </div>
                            <div>
                                <UserList users={storyboard.storyboarders}/>
                            </div>
                        </div>
                        {(storyboard.videoId && storyboard.videoId !== "") && (
                            <div>
                                <div className="mt-4 mb-2 text-center">
                                    <h3 className="text-lg font-semibold">Video</h3>
                                </div>
                                <div className="flex justify-center">
                                    <VideoPlayer videoId={storyboard.videoId}/>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default WorksStoryboardsDetails;