import { type NextPage } from "next";
import Head from "next/head";

const StoryboardingQueue: NextPage = () => {
    return (
        <>
            <Head>
                <title>Mune | osu! Storyboarding Queue</title>
            </Head>
            <div>
                <div className="w-full mb-4">
                    <h1 className="text-4xl font-semibold text-center uppercase">osu! Storyboarding Queue</h1>
                </div>
                <div className="mt-20 select-text">
                    <div className="grid grid-cols-4 text-center font-bold">
                        <div>#</div>
                        <div>Song / Beatmap</div>
                        <div>Mapper</div>
                        <div>Status</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default StoryboardingQueue;
