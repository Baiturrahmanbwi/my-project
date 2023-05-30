import "bootstrap-icons/font/bootstrap-icons.css";
import Link from "next/link";

const HeaderAdmin = () => {

  return (
    <>
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 px-5 border-bottom">
        <div className="col-md-3 mb-2 mb-md-0">
          <Link
            href="/admin"
            className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
          >
            <img
              src="/masjid.png"
              width={50}
              height="auto"
              title="Baiturrahman Banyuwangi"
            />
          </Link>
        </div>
        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li>
            <Link href="/admin-baiturrahman">
              <i
                className="bi-grid-fill text-outline-primary fs-4 nav-link"
                title="Dashboard"
              />
            </Link>
          </li>
          <li>
            <Link href="/admin-baiturrahman/almarhum">
              <i
                className="bi-moon-stars-fill text-outline-primary fs-4 nav-link"
                title="Data Almarhum"
              />
            </Link>
          </li>
          <li>
            <Link href="/admin-baiturrahman/jadwal_sholat">
              <i
                className="bi-clock-fill text-outline-primary fs-4 nav-link"
                title="Jadwal Sholat"
              />
            </Link>
          </li>
          <li>
            <Link href="/admin-baiturrahman/petugas_sholat">
              <i
                className="bi-people-fill text-outline-primary fs-4 nav-link"
                title="Petugas Sholat"
              />
            </Link>
          </li>
          <li>
            <Link href="/admin-baiturrahman/pengurus_takmir">
              <i
                className="bi-person-fill text-outline-primary fs-4 nav-link"
                title="Pengurus Takmir"
              />
            </Link>
          </li>
          <li>
            <Link href="/admin-baiturrahman/agenda_kegiatan">
              <i
                className="bi-calendar-event-fill text-outline-primary fs-4 nav-link"
                title="Agenda Kegiatan"
              />
            </Link>
          </li>
        </ul>
      </header>
    </>
  );
};

export default HeaderAdmin;