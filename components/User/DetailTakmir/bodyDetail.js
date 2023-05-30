import Link from 'next/link';
import useSWR from 'swr';


const fetcher = (url) => fetch(url).then((res) => res.json());

const BodyDetailTakmir = ({ takmirId }) => {
    const { data, error } = useSWR(`/api/detailtakmir/`+ takmirId, fetcher);

    if (error) return <p>Ada masalah saat fetching data</p>;
    if (!data) return <p>Loading...</p>;
    if (data.length == 0) return <p>Belum ada data</p>;

    console.log(data)
    return (
        <div style={{ marginLeft: "10rem", marginRight: "10rem" }}>
                <div style={{ backgroundColor: "#FFE7A0", opacity: "100%", borderRadius: "10px", paddingLeft: "5rem", paddingRight: "5rem"  }}>
                <div className='pt-3'>
                    <h2 className='text-center text-black'><b>Detail Takmir</b></h2>
                </div>
                    <div className="row">
                        <div className="col-6">
                            <h3 className="text-left mt-3" style={{ fontSize: "20px", opacity: "100%", color: "black", fontWeight: "bolder" }}>
                                Nama
                            </h3>
                            <h3 className="text-left mt-3" style={{ fontSize: "20px", opacity: "100%", color: "black", fontWeight: "bolder" }}>
                                Tanggal Lahir
                            </h3>
                            <h3 className="text-left mt-3" style={{ fontSize: "20px", opacity: "100%", color: "black", fontWeight: "bolder" }}>
                                Alamat
                            </h3>
                            <h3 className="text-left mt-3" style={{ fontSize: "20px", opacity: "100%", color: "black", fontWeight: "bolder" }}>
                                Jabatan
                            </h3>
                        </div>
                        <div className="col-6">
                                    <h3 className="text-end mt-3" style={{ fontSize: "20px", opacity: "100%", color: "black", fontWeight: "bolder" }}>
                                        {data.nama}
                                    </h3>
                                    <h3 className="text-end mt-3" style={{ fontSize: "20px", opacity: "100%", color: "black", fontWeight: "bolder" }}>
                                        {new Date(data.tanggal).toLocaleDateString('en-GB')}
                                    </h3>
                                    <h3 className="text-end mt-3" style={{ fontSize: "20px", opacity: "100%", color: "black", fontWeight: "bolder" }}>
                                        {data.alamat}
                                    </h3>
                                    <h3 className="text-end mt-3" style={{ fontSize: "20px", opacity: "100%", color: "black", fontWeight: "bolder" }}>
                                        {data.jabatan}
                                    </h3>

                        </div>
                        <div className='my-3 col-12 text-center'>
                    <Link href='/user/Takmir'>
                        <button className='btn btn-primary'>Kembali</button>
                    </Link>
                </div>
                    </div>
                </div>


        </div>

    );
}

export default BodyDetailTakmir;