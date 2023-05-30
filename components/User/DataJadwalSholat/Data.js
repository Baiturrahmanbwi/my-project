const Data = ({jadwalsholat}) => {
    return (
        <>
            <tr className='text-black text-center' style={{fontSize:"14px"}}>
                <input type="hidden" id="jadwalsholatId" name="id" value='' />
                <td style={{width:150, textAlign:"center"}}>{new Date(jadwalsholat.tanggal).toLocaleDateString('id-ID')}</td>
                <td className="text-center">{jadwalsholat.imsyak}</td>
                <td className="text-center">{jadwalsholat.subuh}</td>
                <td className="text-center">{jadwalsholat.terbit}</td>
                <td className="text-center">{jadwalsholat.dzuhur}</td>
                <td className="text-center">{jadwalsholat.ashar}</td>
                <td className="text-center">{jadwalsholat.maghrib}</td>
                <td className="text-center">{jadwalsholat.isya}</td>
            </tr>
        </>
    );
}

export default Data;