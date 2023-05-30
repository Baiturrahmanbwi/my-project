import Head from "next/head";
import HeaderAdmin from "./Header";

const LayoutAdmin = ({ children}) => {
    return (
        <>
            <Head>
                <title>Masjid Agung Baiturrahman Banyuwangi</title>
                <link rel="icon" href="/masjid.png" />
            </Head>
            <HeaderAdmin />
            {children}
        </>
    );
};

export default LayoutAdmin;
