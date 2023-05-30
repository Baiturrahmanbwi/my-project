const DataSholatJumat = ({ sholatjumat, handleDelete, setEditSholatJumat }) => {

    const fetchSholatJumat = async (sholatjumatId) => {
        const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/sholatjumats/` + sholatjumatId)
        const result = await response.json();

        setEditSholatJumat(result);
    }

    return (
        <>
            <tr>
                <input type="hidden" id="sholatjumatId" name="id" value='' />
                <td style={{width:150, textAlign:"center"}}>{new Date(sholatjumat.tanggal).toLocaleDateString('id-ID')}</td>
                <td className="text-center text-capitalize">{sholatjumat.bilalAwal}</td>
                <td className="text-center text-capitalize">{sholatjumat.bilalAkhir}</td>
                <td className="text-center text-capitalize">{sholatjumat.khotib}</td>
                <td className="text-center text-capitalize">{sholatjumat.imam}</td>
                <td className="text-center">
                    <a href="#editEmployeeModal" onClick={() => fetchSholatJumat(sholatjumat.id)} className="edit" data-toggle="modal"><i className="bi bi-pencil" style={{ fontSize: "20px", marginRight: "10px" }} data-toggle="tooltip" title="Edit"></i></a>
                    <a href="#deleteEmployeeModal" onClick={() => handleDelete(sholatjumat.id)} className="delete" data-toggle="modal"><i className="bi bi-trash" style={{ fontSize: "20px" }} data-toggle="tooltip" title="Delete"></i></a>
                </td>
            </tr>
        </>
    );
}

export default DataSholatJumat;