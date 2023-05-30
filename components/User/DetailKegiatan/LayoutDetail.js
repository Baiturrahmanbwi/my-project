import BodyDetailTakmir from './bodyDetail';
import styles from '../../../styles/Home.module.css';

const LayoutDetail_Kegiatan = () => {
    return (
        <>
            <div className={styles.kegiatan} style={{ paddingBottom: "2rem", paddingTop:"2rem" }}>
                <BodyDetailTakmir/>
            </div>
        </>
    );
}

export default LayoutDetail_Kegiatan;