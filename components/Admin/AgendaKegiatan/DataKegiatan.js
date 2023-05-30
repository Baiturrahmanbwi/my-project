import useSWR from "swr";
import FotoKegiatan from './FotoKegiatan'

const handleDelete = async (kegiatanId, title) => {
    let accept = confirm(`Hapus Kegiatan ${title} ?`);

    if (accept) {
        const data = { id: kegiatanId };

        const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/kegiatans/deleteKegiatans`, {
            method: "POST",
            body: JSON.stringify(data),
        });

        let status = await response.json();

        if (status != null) {
            location.reload();
        }
    }
};

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function TabelKegiatan() {

    const { data, error } = useSWR(`${process.env.NEXT_PUBLIC_HOST}/api/kegiatans`, fetcher);

    if (error) return <p>Ada masalah saat fetching data</p>;
    if (!data) return <p>Loading...</p>;
    if (data.length == 0) return <p>Belum ada data</p>;

    console.log(data)

    return (
        <>
            <div className="container-xl mt-4">
                <div className="row row-cols-2 row-cols-lg-3 g-4" style={{ marginLeft: "2rem" }}>
                    {data.map((kegiatan,i => (
                        <div className="col" >
                            <div key={i} className="card" style={{ width: '17rem', height: '22.2rem' }}>
                                <FotoKegiatan foto={kegiatan.fotokegiatan} />
                                <div className="card-body">
                                    <h5 className="card-title"><b>{kegiatan.title}</b></h5>
                                    <p className="card-text text-justify" style={{ height: "6.5rem" }}>{kegiatan.deskripsi}
                                        <br />
                                        <br />
                                        <p>Rutinan yang akan datang dilakukan pada tanggal {new Date(kegiatan.tanggal).toLocaleDateString('id-ID')}</p>
                                    </p>
                                    <a onClick={(event) => {
                                        event.preventDefault();
                                        handleDelete(kegiatan.id, kegiatan.title);
                                    }} >
                                        <a className="btn btn-danger text-white" style={{ fontSize: "12px", cursor: "pointer" }}><i className="bi bi-trash" style={{ fontSize: "12px", cursor: "pointer" }} data-toggle="tooltip" title="Delete"></i> Delete</a>
                                    </a>
                                </div>
                            </div>
                        </div>
                    )))}
                </div>
            </div>
        </>
    );
}
