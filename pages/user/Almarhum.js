import { useState } from "react";
import LayoutUser from "../../components/User/Layout";
import AppContext from "../../context/appContext";
import LayoutData from "../../components/User/DataAlmarhum/LayoutData";

const Almarhum = ({ almarhums }) => {

    const [myAlmarhums, setMyAlmarhums] = useState(almarhums);

    return (
        <>
            <AppContext.Provider value={{ almarhums: myAlmarhums, setMyAlmarhums: setMyAlmarhums }}>
                <LayoutUser>
                    <LayoutData/>
                </LayoutUser>
            </AppContext.Provider>
        </>
    );
}

export default Almarhum;

export async function getServerSideProps() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/almarhums`);
    const almarhums = await res.json();

    return {
        props: {
            almarhums: almarhums
        }
    }
}