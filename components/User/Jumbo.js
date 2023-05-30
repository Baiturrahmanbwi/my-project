import styles from '../../styles/Home.module.css'
import Link from 'next/link'

const Jumbo = () => {
    return (
        <main className={styles.main}>
            <div className='container text-center'>
                <h1  style={{fontSize:"38px"}}>
                    <strong>Assalamualaikum Wr. Wb.</strong>
                </h1>
                <p className='py-3' style={{fontSize:"24px"}}>
                    Kami Segenap Pengurus Masjid Baiturrahman
                    Mengucapkan Selamat Datang Di Website Kami.
                </p>
                <p style={{fontSize:"24px"}}>
                    "Sebagai Pusat Jamaah Islam di Dusun Kunir,
                    Masjid Darul Arham Harus Didukung Dengan Aplikasi Terbaik
                    Yang Mampu Memberikan Barbagai Fitur Pendukung untuk
                    Kemajuan Ummat"
                </p>
                <Link href="/user/VisiMisi">
                    <button className={styles.button}>
                        TELL ME MORE
                    </button>
                </Link>
            </div>
        </main>
    );
}

export default Jumbo;