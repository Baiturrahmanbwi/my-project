import { useState } from 'react';
import LayoutUser from '../../components/User/Layout'
import LayoutSholat from '../../components/User/DataJadwalSholat/LayoutSholat';
import AppContext from '../../context/appContext';

const JadwalSholat = ({jadwalsholats}) => {
    const [myJadwalSholats, setMyJadwalSholats] = useState(jadwalsholats)

    return (
        <>
            <AppContext.Provider value={{ jadwalsholats: myJadwalSholats, setMyJadwalSholats: setMyJadwalSholats }}>
                <LayoutUser>
                    <LayoutSholat/>
                </LayoutUser>
            </AppContext.Provider>

        </>
    );
}

export default JadwalSholat;


export async function getServerSideProps() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/jadwalsholats`);
    const jadwalsholats = await response.json();

    return {
        props: {
            jadwalsholats: jadwalsholats
        }
    };
}   