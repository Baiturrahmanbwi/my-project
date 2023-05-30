import useSWR from "swr";
import styles from '../../styles/Home.module.css'
import FotoTakmir from "./DataFoto/fotoTakmir";

const fetcher = (url) => fetch(url).then((res) => res.json());
const PetugasTakmir = () => {

    const { data, error } = useSWR("/api/takmirs", fetcher);

    if (error) return <p>Ada masalah saat fetching data</p>;
    if (!data) return <p>Loading...</p>;
    if (data.length == 0) return <p>Belum ada data</p>;

    console.log(data)
    return (
        <>
            <div style={{ backgroundColor: "#E3F6FF", paddingLeft: "7.5rem", paddingRight: "7.5rem", paddingTop: "3rem", paddingBottom: "3rem" }}>
                <center>
                    <div className='container' style={{ backgroundColor: "#FFE7A0", borderRadius: "20px" }}>
                        <div className='text-center' style={{ paddingTop: "1.5rem", fontSize: "32px", fontWeight: "bold", color: "black" }}>
                            Pengurus Takmir
                        </div>
                        <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3' style={{ paddingTop: "1rem", paddingBottom: "2rem" }}>
                            {data.map((takmir) => (
                                <div className="col" >
                                    <div className="card" style={{ width: '17rem', height: '16.5rem', backgroundColor: "#E3F6FF" }}>
                                        <FotoTakmir foto={takmir.fototakmir} />
                                        <div className="card-body">
                                            <h5 className="card-title text-black"><b>{takmir.nama}</b></h5>
                                            <br />
                                            <a href={`/user/detail-takmir/${takmir.id}`} className="btn btn-primary">Detail Info</a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </center>
            </div>
        </>
    );
}

export default PetugasTakmir;