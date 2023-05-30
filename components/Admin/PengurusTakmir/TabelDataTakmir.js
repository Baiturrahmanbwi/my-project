import useSWR from "swr";
import FotoTakmir from "./FotoTakmir";

const handleDelete = async (takmirId, nama) => {
    let accept = confirm(`Hapus Takmir ${nama} ?`);

    if (accept) {
        const data = { id: takmirId };

        const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/takmirs/deleteDataTakmirs`, {
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

export default function TabelTakmir() {

    const { data, error } = useSWR(`${process.env.NEXT_PUBLIC_HOST}/api/takmirs`, fetcher);

    if (error) return <p>Ada masalah saat fetching data</p>;
    if (!data) return <p>Loading...</p>;
    if (data.length == 0) return <p>Belum ada data</p>;

    console.log(data)

    return (
        <>
            <div className="table-wrapper">
                <table className="table table-striped table-hover">
                    <thead>
                        <tr className="text-center" style={{ fontSize: "14px" }}>
                            <th>Foto</th>
                            <th>Nama</th>
                            <th>Tanggal Lahir</th>
                            <th>Alamat</th>
                            <th>Jabatan</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((takmir, i) => (
                            <tr key={i}>
                                <td>
                                    <FotoTakmir  foto={takmir.fototakmir} />
                                </td>
                                <td>{takmir.nama}</td>
                                <td className="text-center">{new Date(takmir.tanggal).toLocaleDateString('en-GB')}</td>
                                <td>{takmir.alamat}</td>
                                <td className="text-center">{takmir.jabatan}</td>
                                <td align="center">
                                    <a onClick = {(event) => {
                                event.preventDefault();
                                handleDelete(takmir.id, takmir.nama);
                            }}>
                                <a className=" text-danger"><i className="bi bi-trash" style={{ fontSize: "20px", cursor: "pointer" }} data-toggle="tooltip" title="Delete"></i></a>
                            </a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}
