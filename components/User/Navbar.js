import styles from '../../styles/Home.module.css'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className={styles.header}>
      <div className="container">
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start py-3">
          <Link href="/">
            <span className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
              <img src="/masjid.png" width={75} height={55} />
            </span>
          </Link>
          <div className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <ul className="nav col-12 col-md-auto mb-2 mb-md-0">
              <li className="nav-item">
                <Link href='/'>
                  <button className="btn text-black text-uppercase" style={{fontWeight: 600}} type="button">Home</button>
                </Link>
              </li>
              <div className="dropdown">
                <li className="btn dropdown-toggle text-black text-uppercase" style={{fontWeight:"600"}} data-bs-toggle="dropdown">
                  Profil
                </li>
                <ul className="dropdown-menu">
                  <li>
                    <Link href='/user/VisiMisi' style={{fontWeight:"400"}} className="dropdown-item">
                      Visi dan Misi
                    </Link>
                  </li>
                  <li>
                    <Link href='/user/Takmir' style={{fontWeight:"400"}} className="dropdown-item">
                      Petugas Ketakmiran
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="dropdown">
                <li className="btn dropdown-toggle text-black text-uppercase" style={{fontWeight:"600"}} data-bs-toggle="dropdown">
                  Informasi
                </li>
                <ul className="dropdown-menu">
                  <li>
                    <Link href='/user/JadwalSholat' style={{fontWeight:"400"}} className="dropdown-item">
                      Jadwal Sholat
                    </Link>
                  </li>
                  <li>
                    <Link href='/user/Almarhum' style={{fontWeight:"400"}} className="dropdown-item">
                      Data Almarhum
                    </Link>
                  </li>
                  <li>
                    <Link href='/user/Kegiatan' style={{fontWeight:"400"}} className="dropdown-item">
                      Agenda Kegiatan
                    </Link>
                  </li>
                  <li>
                    <Link href='/user/SholatJumat' style={{fontWeight:"400"}} className="dropdown-item">
                      Petugas Sholat Jumat
                    </Link>
                  </li>
                </ul>
              </div>
              <li className="nav-item">
                <Link href='/user/About'>
                  <button className="btn text-black text-uppercase" style={{fontWeight:"600"}} type="button">About</button>
                </Link>
              </li>
            </ul>
          </div>
        </header>
      </div>
    </div>
  );
}

export default Navbar;