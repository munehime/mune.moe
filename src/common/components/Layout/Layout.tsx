import { type ReactNode } from "react";
import { Footer, Header } from "../../components";

type Props = {
    children?: ReactNode;
}

const Layout = ({ children }: Props) => {
    return (
        <>
            <Header/>
            <div className="mt-4 font-betvietnampro">
                <div className="max-w-8xl mx-auto mb-20 px-4 sm:px-6 md:px-8">
                    {children}
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default Layout;