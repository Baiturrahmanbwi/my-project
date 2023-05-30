import { useState } from "react";
import LayoutAdmin from "../../components/Admin/LayoutAdmin";
import LayoutTabel from "../../components/Admin/AlmarhumData/LayoutTabel"
import AppContext from "../../context/appContext";
import DashboardAdmin from "../../components/Admin/Dashboard";

const Almarhum_Admin = ({ almarhums }) => {

    const [myAlmarhums, setMyAlmarhums] = useState(almarhums)

    return (
        <>
            <AppContext.Provider value={{ almarhums: myAlmarhums, setMyAlmarhums: setMyAlmarhums }}>
                <LayoutAdmin>
                    <DashboardAdmin/>
                    <LayoutTabel />
                </LayoutAdmin>
            </AppContext.Provider>
        </>
    );
}

export default Almarhum_Admin;

export async function getServerSideProps() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/almarhums`);
    const almarhums = await response.json();

    return {
        props: {
            almarhums: almarhums
        }
    };
}
