import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
    const osuStoryboardingRequestStatus = process.env.NEXT_PUBLIC_OSU_STORYBOARD_REQUEST_STATUS || "CLOSED";

    return (
        <>
            <Head>
                <title>Mune</title>
            </Head>
            <div className="mt-20 select-text">
                <div className="text-xl text-center">
                    <p className="text-2xl mb-1">Hi! I&#39;m Mune</p>
                    <p>A student majoring Information System at University of Information Technology in Vietnam</p>
                </div>
                <hr className="w-[35%] mx-auto my-10 border-t-2 border-neutral-400" />
                <div className="text-xl text-center">
                    <div className="font-bold">
                        osu! Storyboard Request:
                        <div
                            className={
                                "inline" +
                                (osuStoryboardingRequestStatus !== "CLOSED" ? " text-green-400" : " text-red-400")
                            }
                        >
                            &#160;{osuStoryboardingRequestStatus}
                        </div>
                    </div>
                    {/*<div className="mt-1 text-sm">*/}
                    {/*    <Link href="/works/storyboards/queue">*/}
                    {/*        Check out the storyboarding queue here*/}
                    {/*    </Link>*/}
                    {/*</div>*/}
                </div>
            </div>
        </>
    );
};

export default Home;
