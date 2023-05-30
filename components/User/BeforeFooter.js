import styles from '../../styles/Home.module.css'

const BeforeFooter = () => {
    return (
        <div className={styles.beforefooter}>
            <div className='container'>
                <div style={{ backgroundColor: "#FFE7A0", borderRadius: "20px", padding:"1rem" }}>
                    <div className="fw-bolder fs-3 d-flex justify-content-center text-black" style={{paddingTop:"0.5rem", paddingBottom:"0.5rem"}}>
                        Deskripsi Singkat
                    </div>
                    <div className='d-flex justify-content-center' style={{paddingTop:"0.5rem", paddingBottom:"0.5rem"}}>
                        <img src='/2.jpeg' width={350} height={225} className='mb-2' />
                    </div>
                    <p className={styles.bDeskripsi} style={{color:"black", fontWeight:'600', fontSize:"16px", paddingTop:"0.5rem", paddingBottom:"0.5rem", paddingLeft:"6rem", paddingRight:"6rem"}}>Masjid Baiturrahman Banyuwangi adalah masjid tua yang harus di rawat dan di jaga. Untuk merawat dan menjaga masjid ini dilakukanlah beberapa kali renovasi (pembangunan) sejak pertama masjid ini dibangun. Renovasi pertama pada tahun 1844, renovasi kedua pada tahun1971, dan renovasi ketiga pada tahun 1990, dan yang terakhir dilakukan pada tahun 2005. Renovasi yang telah dilakukan dari waktu ke waktu membawa perubahan pada Masjid Baiturrahman Banyuwangi, mulai dari bangunan hingga fasilitas-fasilitas masjid yang membuat jamaah semakin kerasan dan rindu dengan Masjid Baiturrahman Banyuwangi.</p>
                </div>
            </div>
        </div>
    );
}

export default BeforeFooter;