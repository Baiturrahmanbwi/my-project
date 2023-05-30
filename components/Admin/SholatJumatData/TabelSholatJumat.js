import DataSholatJumat from "./DataSholatJumat";


const TabelSholatJumat = ({sholatjumats, handleDelete, setEditSholatJumat}) => {
    
    const sholatjumatGenerator = () => {
        return (
            <>
                {
                    sholatjumats.map(sholatjumat => {
                        return (
                            <DataSholatJumat setEditSholatJumat={setEditSholatJumat} key={sholatjumat.id} sholatjumat={sholatjumat} handleDelete={handleDelete} />
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
                            <th>Bilal Awal</th>
                            <th>Bilal Akhir</th>
                            <th>Khotib</th>
                            <th>Imam</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sholatjumatGenerator()}
                    </tbody>
                </table>
            </div>

        </>
    );
}

export default TabelSholatJumat;