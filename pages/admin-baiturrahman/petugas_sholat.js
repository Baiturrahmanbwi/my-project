import { useState } from "react";
import LayoutAdmin from '../../components/Admin/LayoutAdmin'
import AppContext from "../../context/appContext";
import LayoutTabelSholatJumat from "../../components/Admin/SholatJumatData/LayoutTabelSholatJumat";
import DashboardAdmin from "../../components/Admin/Dashboard";

const Petugas_Sholat = ({ sholatjumats }) => {

    const [mySholatJumats, setMySholatJumats] = useState(sholatjumats)

    return (
        <>
            <AppContext.Provider value={{
                sholatjumats: mySholatJumats,
                setMySholatJumats: setMySholatJumats
            }}>
                <LayoutAdmin>
                    <DashboardAdmin/>
                    <LayoutTabelSholatJumat />
                </LayoutAdmin>
            </AppContext.Provider>
        </>
    );
}

export default Petugas_Sholat;

export async function getServerSideProps() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/sholatjumats`);
    const sholatjumats = await response.json();

    return {
        props: {
            sholatjumats: sholatjumats
        }
    };
}