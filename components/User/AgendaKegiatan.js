import useSWR from 'swr';
import styles from '../../styles/Home.module.css'
import FotoKegiatan from './DataFoto/FotoKegiatan';

const fetcher = (url) => fetch(url).then((res) => res.json());

const AgendaKegiatan = () => {
    const { data, error } = useSWR("/api/kegiatans", fetcher);

    if (error) return <p>Ada masalah saat fetching data</p>;
    if (!data) return <p>Loading...</p>;
    if (data.length == 0) return <p>Belum ada data</p>;

    console.log(data)
    return (
        <>
            <div className={styles.kegiatan} style={{ paddingBottom: "2rem", paddingTop:"2rem" }}>
                <div className="container" style={{backgroundColor:"#FFE7A0", marginTop:"1rem", paddingTop:"1.5rem", paddingBottom:"2.5rem", borderRadius:"20px"}}>
                <div className='text-center' style={{ paddingBottom:"10px",fontSize: "32px", fontWeight: "bold", color: "black" }}>
                        Kegiatan
                    </div>
                    <div className='row row-cols-2 row-cols-lg-3 g-4' style={{ marginLeft: "4rem", marginRight:"2em" }}>
                        {data.map((kegiatan,i) => (
                            <div className='col'>
                                <div key={i} className='card shadow-sm' style={{backgroundColor:"#E3F6FF", width: '17.1rem', height: '17rem' }}>
                                    <FotoKegiatan foto={kegiatan.fotokegiatan} />
                                    <div className="card-body text-center">
                                        <h5 className="card-text text-black fw-bold">{kegiatan.title}</h5>
                                        <br />
                                        <a href={`/user/detail-kegiatan/`+ kegiatan.id} className="btn btn-primary">Detail Info</a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default AgendaKegiatan;