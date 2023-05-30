const Data = ({ sholatjumat }) => {
    return (
        <>
            <tr>
                <input type="hidden" id="sholatjumatId" name="id" value='' />
                <td style={{ width: 150, textAlign: "center" }}>{new Date(sholatjumat.tanggal).toLocaleDateString('id-ID')}</td>
                <td className="text-center text-capitalize">{sholatjumat.bilalAwal}</td>
                <td className="text-center text-capitalize">{sholatjumat.bilalAkhir}</td>
                <td className="text-center text-capitalize">{sholatjumat.khotib}</td>
                <td className="text-center text-capitalize">{sholatjumat.imam}</td>
            </tr>
        </>
    );
}

export default Data;