import { useState } from "react";
import LayoutAdmin from '../../components/Admin/LayoutAdmin'
import AppContext from "../../context/appContext";
import LayoutTabelSholat from "../../components/Admin/JadwalSholatData/LayoutTabelSholat";
import DashboardAdmin from "../../components/Admin/Dashboard";

const Jadwal_Sholat = ({ jadwalsholats }) => {

    const [myJadwalSholats, setMyJadwalSholats] = useState(jadwalsholats)

    return (
        <>
            <AppContext.Provider value={{ jadwalsholats: myJadwalSholats, setMyJadwalSholats: setMyJadwalSholats }}>
                <LayoutAdmin>
                    <DashboardAdmin/>
                    <LayoutTabelSholat />
                </LayoutAdmin>
            </AppContext.Provider>

        </>
    );
}

export default Jadwal_Sholat;

export async function getServerSideProps() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/jadwalsholats`);
    const jadwalsholats = await response.json();

    return {
        props: {
            jadwalsholats: jadwalsholats
        }
    };
}
