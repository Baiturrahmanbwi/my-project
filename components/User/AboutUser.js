import styles from '../../styles/Home.module.css'

const AboutUser = () => {
    return (
        <div style={{ backgroundColor: "#E3F6FF", minHeight: "50vh", paddingTop:"4rem", paddingBottom:"4rem" }}>
            <div className='container'>
                <div style={{ backgroundColor: "#FFE7A0", borderRadius:"20px", paddingTop:"3rem", paddingLeft:"4rem", paddingBottom:"3rem", paddingRight:"4rem" }}>
                    <p className={styles.jdAbout}>About</p>
                    <p className={styles.dividerAbout} style={{marginLeft:"1rem", marginRight:"1rem"}} />
                    <p className={styles.isiAbout}>
                        Sistem Informasi adalah suatu sistem di dalam organisasi yang mempertemukan kebutuhan pengelolaan transaksi harian mendukung operasi bersifat manajemen dan kegiatan strategi dari suatu organisasi dan menyediakan pihak luar tertentu dengan laporan - laporan yang dibutuhkan. Sistem Informasi masjid ini dibuat untuk memenuhi kebutuhan/keperluan takmir dalam hal menyampaikan informasi seputar agenda masjid dan lain sebagainya kepada masyarakat agar lebih efisien, mudah, dan cepat. Diharapkan program ini dapat bermanfaat bagi masyarakat seperti yang diharapkan.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AboutUser;