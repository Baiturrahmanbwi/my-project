import DataJadwalSholat from "./DataJadwalSholat";

const TabelSholat = ({jadwalsholats, handleDelete, setEditJadwalSholat}) => {
    
    const jadwalsholatGenerator = () => {
        return (
            <>
                {
                    jadwalsholats.map(jadwalsholat => {
                        return (
                            <DataJadwalSholat setEditJadwalSholat={setEditJadwalSholat} key={jadwalsholat.id} jadwalsholat={jadwalsholat} handleDelete={handleDelete} />
                        )
                    })
                }
            </>
        )
    }
    
    return (
        <>
            <div className="table-wrapper">
                <table className="table table-striped table-hover">
                    <thead>
                        <tr className="text-center" style={{fontSize:"14px"}}>
                            <th>Tanggal</th>
                            <th>Imsyak</th>
                            <th>Subuh</th>
                            <th>Terbit</th>
                            <th>Dzuhur</th>
                            <th>Ashar</th>
                            <th>Maghrib</th>
                            <th>Isya</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {jadwalsholatGenerator()}
                    </tbody>
                </table>
            </div>

        </>
    );
}

export default TabelSholat;