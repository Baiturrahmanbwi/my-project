const DataAlmarhum = ({ almarhum, handleDelete, setEditAlmarhum }) => {
    
    const fetchAlmarhum = async (almarhumId) => {
        const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/almarhums/` + almarhumId)
        const result = await response.json();

        setEditAlmarhum(result);
    }    
    return (
        <>
            <tr>
                <input type="hidden" id="almarhumId" name="id" value='' />
                <td style={{width:175}}>{almarhum.nama}</td>
                <td className="text-center">{new Date(almarhum.tanggal_wafat).toLocaleDateString("id-ID")}</td>
                <td className="text-center">{new Date(almarhum.tanggal_lahir).toLocaleDateString("id-ID")}</td>
                <td className="text-center">{almarhum.rt}</td>
                <td className="text-center">{almarhum.rw}</td>
                <td style={{width:150}}>{almarhum.bin}</td>
                <td className="text-center">
                    <a href="#editEmployeeModal" onClick={() => fetchAlmarhum(almarhum.id)} className="edit" data-toggle="modal"><i className="bi bi-pencil" style={{ fontSize: "20px", marginRight:"10px" }} data-toggle="tooltip" title="Edit"></i></a>
                    <a href="#deleteEmployeeModal" onClick={() => handleDelete(almarhum.id)} className="delete" data-toggle="modal"><i className="bi bi-trash" style={{ fontSize: "20px" }} data-toggle="tooltip" title="Delete"></i></a>
                </td>
            </tr>
        </>
    );
}

export default DataAlmarhum;