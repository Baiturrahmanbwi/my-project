import styles from '../../styles/Home.module.css'

const VisiMisiUser = () => {
    return (
        <div className={styles.visimisi}  style={{ backgroundColor: "#E3F6FF", minHeight: "50vh", paddingTop:"2rem", paddingBottom:"2rem" }}>
            <div className='container'style={{ backgroundColor: "#FFE7A0", borderRadius:"20px", paddingTop:"2rem", paddingLeft:"3rem", paddingBottom:"2rem", paddingRight:"3rem" }}>
                <p className={styles.judulvisi}>Visi</p>
                <p className={styles.isivisi}>
                    Menjadikan Masjid sebagai sarana untuk menyatukan dan memajukan umat menuju kesejahteraan dan kemandirian muslim di lingkungan tersebut.
                </p>
                <p className={styles.divider}  style={{marginLeft:"0.5rem", marginRight:"0.5rem"}}></p>
                <p className={styles.judulmisi}>Misi</p>
                <p className={styles.isimisi}>
                    <p>
                        Meningkatkan kualitas pelayanan ibadah yang sesuai dengan syariah berhaluan ahlus sunnah wal jama'ah
                    </p>
                    <p>
                        Menerapkan pengelolaan masjid yang modern dan wawasan lingkungan
                    </p>
                    <p>
                        Meningkatkan kesejahteraan masyarakat dan menumbuhkan kepedulian sosial
                    </p>
                    <p>
                        Menyelenggarakan manajemen masjid yang modern, akuntabel, amanah, dan Profesional (Mantap)
                    </p>
                </p>
            </div>
        </div>
    );
}

export default VisiMisiUser;