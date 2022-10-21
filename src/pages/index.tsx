import { type NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Mune</title>
            </Head>
            <div className="mt-20">
                <div className="text-xl text-center">
                    <p>A student majoring Information System at University of Information Technology in Vietnam</p>
                </div>
            </div>
        </>
    );
};

export default Home;
