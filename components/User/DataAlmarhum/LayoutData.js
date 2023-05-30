import { useContext, useState } from "react";
import AppContext from "../../../context/appContext";
import TabelAlmar from "./TabelAlmar";
import Pagination from "../DataAlmarhum/Pagination";
import { Paginate } from "../../../helpers/paginate";
import styles from "../../../styles/Home.module.css";

const LayoutData = () => {
    const value = useContext(AppContext);

    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 3;

    const onPageChange = (page) => {
        setCurrentPage(page)
    }

    let paginatedAlmarhums = Paginate(value.almarhums, currentPage, pageSize);

    return (
        <>
            <div style={{ backgroundColor: "#E3F6FF", paddingLeft: "7.5rem", paddingRight: "7.5rem", paddingTop: "3rem", paddingBottom: "3rem" }}>
                <div className='container' style={{ backgroundColor: "#FFE7A0", borderRadius: "20px", paddingTop: "2rem", paddingBottom: "2rem" }}>
                    <div className='text-center' style={{ paddingBottom: "10px", fontSize: "32px", fontWeight: "bold", color: "black" }}>
                        Data Almarhum
                    </div>
                    <p className={styles.warning}>Ingat !! Kematian pasti datang menghampiri kita</p>
                    <p className={styles.hadist}>
                        Menurut Faidh Kusyani dalam buku Etika Islam: Menuju Evaluasi Diri dengan mengingat kematian seorang muslim akan bersikap zuhud dan menjauhi keburukan. Salah satu ayat Al-Qur'an yang membahas tentang kematian ada dalam surah An Nisa. Allah SWT berfirman:
                    </p>
                    <p className={styles.arabic}>
                        اَيْنَمَا تَكُوْنُوْا يُدْرِكْكُّمُ الْمَوْتُ وَلَوْ كُنْتُمْ فِيْ بُرُوْجٍ مُّشَيَّدَةٍ ۗ وَاِنْ تُصِبْهُمْ حَسَنَةٌ يَّقُوْلُوْا هٰذِهٖ مِنْ عِنْدِ اللّٰهِ ۚ وَاِنْ تُصِبْهُمْ سَيِّئَةٌ يَّقُوْلُوْا هٰذِهٖ مِنْ عِنْدِكَ ۗ قُلْ كُلٌّ مِّنْ عِنْدِ اللّٰهِ ۗ فَمَالِ هٰٓؤُلَاۤءِ الْقَوْمِ لَا يَكَادُوْنَ يَفْقَهُوْنَ حَدِيْثًا
                    </p>
                    <p className={styles.arti}>
                        Artinya: Di mana saja kamu berada, kematian akan mendapatkan kamu, kendatipun kamu di dalam benteng yang tinggi lagi kokoh, dan jika mereka memperoleh kebaikan, mereka mengatakan: "Ini adalah dari sisi Allah", dan kalau mereka ditimpa sesuatu bencana mereka mengatakan: "Ini (datangnya) dari sisi kamu (Muhammad)". Katakanlah: "Semuanya (datang) dari sisi Allah". Maka mengapa orang-orang itu (orang munafik) hampir-hampir tidak memahami pembicaraan sedikitpun?
                    </p>
                    <div className={styles.table}>
                            <TabelAlmar almarhums={paginatedAlmarhums} />
                            <Pagination almarhumsCount={value.almarhums.length} currentPage={currentPage} pageSize={pageSize} onPageChange={onPageChange} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default LayoutData;