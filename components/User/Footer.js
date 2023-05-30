import Link from 'next/link';
import styles from '../../styles/Home.module.css'

const Footer = () => {
        
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <center>
                            <Link href='/'>
                                <img src="/masjid.png" width={75} height={55} />
                            </Link>
                            <p style={{ fontSize: "14px", color: "black", fontWeight: "400" }}>Masjid Baiturrahman Banyuwangi</p>
                            <p className={styles.footerarti} style={{ fontSize: "14px", color: "black", fontWeight: "400" }}>"Sebagai Pusat Jamaah Islam Di Kota Banyuwangi. Masjid Baiturrahman Banyuwangi harus Didukung Dengan Aplikasi Terbaik Yang Mampu Memberikan Berbagai Fitur Pendukung Untuk Kemajuan Umat."</p>
                        </center>
                    </div>
                    <div className="col">
                        <h5 className='px-4' style={{ fontSize: "20px", fontWeight: "700" }}>Profil</h5>
                        <ul className='nav px-4'>
                            <li className='nav-item mt-2'>
                                <Link href="/user/VisiMisi" className={styles.Link}>Visi dan Misi</Link>
                            </li>
                        </ul>
                        <ul className='nav px-4'>
                            <li className='nav-item mt-2'>
                                <Link href="/user/Takmir"className={styles.Link}>Petugas Ketakmiran</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col">
                        <h5 style={{ fontSize: "20px", fontWeight: "700" }}>Informasi</h5>
                        <ul className='nav'>
                            <li className='nav-item mt-2'>
                                <Link href="/user/JadwalSholat" className={styles.Link}>Jadwal Sholat</Link>
                            </li>
                        </ul>
                        <ul className='nav'>
                            <li className='nav-item mt-2'>
                                <Link href="/user/Almarhum" className={styles.Link}>Data Almarhum</Link>
                            </li>
                        </ul>
                        <ul className='nav'>
                            <li className='nav-item mt-2'>
                                <Link href="/user/Kegiatan" className={styles.Link}>Agenda Kegiatan</Link>
                            </li>
                        </ul>
                        <ul className='nav'>
                            <li className='nav-item mt-2'>
                                <Link href="/user/SholatJumat" className={styles.Link}>Petugas Sholat Jumat</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col">
                        <h5 style={{ fontSize: "20px", fontWeight: "700" }}>Lokasi</h5>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3948.933835435536!2d114.37061551478087!3d-8.209408994091902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd145250a20c0d3%3A0x80c707c40ff8996a!2sMasjid%20Agung%20Baiturrahman!5e0!3m2!1sid!2sid!4v1683188785690!5m2!1sid!2sid" width={250} height='auto' style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                    </div>
                </div>
            </div>

        </footer>
    );
}

export default Footer;