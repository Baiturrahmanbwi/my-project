import { useContext, useState } from "react";
import AppContext from "../../../context/appContext";
import { Paginate } from "../../../helpers/paginate";
import styles from "../../../styles/Home.module.css";
import TabelJumats from "./TabelJumats";
import Pagination from "./Pagination";

const TabelLayout = () => {
    const value = useContext(AppContext)
    
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 1;

    const onPageChange = (page) => {
        setCurrentPage(page)
    }

    let paginatedSholatJumats = Paginate(value.sholatjumats, currentPage, pageSize);

    return (
        <div style={{ backgroundColor: "#E3F6FF", paddingLeft: "7.5rem", paddingRight: "7.5rem", paddingTop: "3rem", paddingBottom: "3rem" }}>
            <div style={{ backgroundColor: "#FFE7A0", paddingLeft: "5rem", paddingRight: "5rem", paddingBottom: "1rem", borderRadius: "20px" }}>
                <div className='text-center' style={{ paddingTop: "1.5rem", fontSize: "32px", fontWeight: "bold", color: "black" }}>
                    Petugas Sholat Jumat
                </div>
                <div className={styles.table}>
                    <TabelJumats sholatjumats={paginatedSholatJumats} />
                    <Pagination sholatjumatsCount={value.sholatjumats.length} currentPage={currentPage} pageSize={pageSize} onPageChange={onPageChange}/>
                </div>
            </div>
        </div>
    );
}

export default TabelLayout;