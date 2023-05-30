const DataAlmar = ({ almarhum }) => {
    return (
        <>
            <tr style={{fontSize:"14px"}}>
                <input type="hidden" id="almarhumId" name="id" value='' />
                <td style={{width:175}}>{almarhum.nama}</td>
                <td className="text-center" style={{width:175}}>{new Date(almarhum.tanggal_wafat).toLocaleDateString("id-ID")}</td>
                <td className="text-center" style={{width:175}}>{new Date(almarhum.tanggal_lahir).toLocaleDateString("id-ID")}</td>
                <td className="text-center" style={{width:175}}>{almarhum.rt}</td>
                <td className="text-center" style={{width:175}}>{almarhum.rw}</td>
                <td className="text-center" style={{width:175}}>{almarhum.bin}</td>
            </tr>
        </>
    );
}

export default DataAlmar;