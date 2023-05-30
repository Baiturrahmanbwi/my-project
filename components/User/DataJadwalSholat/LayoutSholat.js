import { useContext, useState } from "react";
import styles from "../../../styles/Home.module.css";
import AppContext from "../../../context/appContext";
import { Paginate } from "../../../helpers/paginate";
import TabelSholat from "./TabelSholat";
import Pagination from "./Pagination";

const LayoutSholat = () => {
    const value = useContext(AppContext)

    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 5;

    const onPageChange = (page) => {
        setCurrentPage(page)
    }

    let paginatedJadwalSholats = Paginate(value.jadwalsholats, currentPage, pageSize);

    return (
        <>
            <div style={{ backgroundColor: "#E3F6FF", paddingLeft: "7.5rem", paddingRight: "7.5rem", paddingTop: "3rem", paddingBottom: "3rem" }}>
                <div className='container' style={{ backgroundColor: "#FFE7A0", borderRadius: "20px", paddingTop: "2rem", paddingBottom: "1rem" }}>
                    <div className='text-center' style={{ paddingBottom: "10px", fontSize: "32px", fontWeight: "bold", color: "black" }}>
                        Jadwal Sholat
                    </div>
                    <p className={styles.warningsholat}>Mari Sholat Berjama'ah</p>
                    <p className={styles.hadistsholat}>
                        Dari Abu Darba' Radhiyallahu'anhu bahwa Rasulullah Shalallahu Alaihi Wassalam bersabda "Tidaklah 3 orang yang tinggal di suatu kampung atau pelosok tapi tidak melakukan shalat jama'ah, kecuali setan telah menguasai mereka. Hendaklah kalian berjama'ah, sebab serigala itu memakan domba yang lepas dari kawanannya". (HR. Abu Daud 547 dan Nasai 2/106 dengan sanad yang hasan)
                    </p>
                    <div className={styles.tablesholat}>
                        <p className={styles.tbsholat}>Jadwal Sholat <span className={styles.sholatkota}>Banyuwangi</span></p>
                        <p className={styles.keterangan}>Per Satu Bulan. Jadwal akan berubah setiap bulan-nya</p>
                        <TabelSholat jadwalsholats={paginatedJadwalSholats} />
                        <Pagination jadwalsholatsCount={value.jadwalsholats.length} currentPage={currentPage} pageSize={pageSize} onPageChange={onPageChange} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default LayoutSholat;