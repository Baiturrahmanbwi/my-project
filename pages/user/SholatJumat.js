import { useState } from "react";
import LayoutUser from "../../components/User/Layout";
import AppContext from "../../context/appContext";
import TabelLayout from "../../components/User/DataSholatJumat/TabelLayout";

const SholatJumat = ({ sholatjumats }) => {

    const [mySholatJumats, setMySholatJumats] = useState(sholatjumats);

    return (
        <>
            <AppContext.Provider value={{
                sholatjumats: mySholatJumats,
                setMySholatJumats: setMySholatJumats
            }}>
                <LayoutUser>
                    <TabelLayout/>
                </LayoutUser>
            </AppContext.Provider>
        </>
    );
}

export default SholatJumat;


export async function getServerSideProps() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/sholatjumats`);
    const sholatjumats = await response.json();

    return {
        props: {
            sholatjumats: sholatjumats
        }
    };
}