const DataJadwalSholat = ({ jadwalsholat, handleDelete, setEditJadwalSholat }) => {

    const fetchJadwalSholat = async (jadwalsholatId) => {
        const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/jadwalsholats/` + jadwalsholatId)
        const result = await response.json();

        setEditJadwalSholat(result);
    }

    return (
        <>
            <tr>
                <input type="hidden" id="jadwalsholatId" name="id" value='' />
                <td style={{width:150, textAlign:"center"}}>{new Date(jadwalsholat.tanggal).toLocaleDateString('id-ID')}</td>
                <td className="text-center">{jadwalsholat.imsyak}</td>
                <td className="text-center">{jadwalsholat.subuh}</td>
                <td className="text-center">{jadwalsholat.terbit}</td>
                <td className="text-center">{jadwalsholat.dzuhur}</td>
                <td className="text-center">{jadwalsholat.ashar}</td>
                <td className="text-center">{jadwalsholat.maghrib}</td>
                <td className="text-center">{jadwalsholat.isya}</td>
                <td className="text-center">
                    <a href="#editEmployeeModal" onClick={() => fetchJadwalSholat(jadwalsholat.id)} className="edit" data-toggle="modal"><i className="bi bi-pencil" style={{ fontSize: "20px", marginRight: "10px" }} data-toggle="tooltip" title="Edit"></i></a>
                    <a href="#deleteEmployeeModal" onClick={() => handleDelete(jadwalsholat.id)} className="delete" data-toggle="modal"><i className="bi bi-trash" style={{ fontSize: "20px" }} data-toggle="tooltip" title="Delete"></i></a>
                </td>
            </tr>
        </>
    );
}

export default DataJadwalSholat;