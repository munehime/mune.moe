import Head from "next/head";
import { type AppProps } from "next/app";
import { AnimatePresence, motion } from "framer-motion";

import "../styles/globals.css";
import { Layout } from "../common/components";

const variants = {
    initial: {
        opacity: 0,
    },
    enter: {
        opacity: 1,
    },
    exit: {
        opacity: 0,
    },
};

const onExitComplete = () => {
    if (typeof window !== "undefined") {
        window.scrollTo({ top: 0, left: 0 });
    }
};

const App = ({ Component, pageProps, router }: AppProps) => {
    return (
        <>
            <Head>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
                <link rel="manifest" href="/site.webmanifest"/>
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#ef74cc"/>
                <meta name="msapplication-TileColor" content="#ef74cc"/>
                <meta name="theme-color" content="#ef74cc"/>
            </Head>
            <Layout>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={router.route}
                        initial="initial" animate="enter" exit="exit"
                        variants={variants}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                        <Component {...pageProps} />
                    </motion.div>
                </AnimatePresence>
            </Layout>
        </>
    );
};

export default App;
