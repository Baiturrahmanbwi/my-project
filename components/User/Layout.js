import Navbar from "./Navbar";
import Footer from "./Footer";
import Head from "next/head";

const LayoutUser = ({children}) => {
    return (
        <div>
            <Head>
                <title>Masjid Baiturrahman Banyuwangi</title>
                <link rel="icon" href="/masjid.png" />
            </Head>
            <Navbar />
                {children}
            <Footer />
        </div>
    );
}

export default LayoutUser;