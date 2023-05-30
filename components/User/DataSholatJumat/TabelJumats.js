import Data from "./Data";




const TabelJumats = ({sholatjumats}) => {
    const sholatjumatGenerator = () => {
        return (
            <>
                {
                    sholatjumats.map(sholatjumat => {
                        return (
                            <Data key={sholatjumat.id} sholatjumat={sholatjumat} />
                        )
                    })
                }
            </>
        )
    }
    return (
        <>
            <div className='table-responsive'>
            <table className="table table-borderless" style={{ backgroundColor: "#E3F6FF", borderRadius: "15px" }}>
                    <thead>
                    <tr className="text-center" style={{ fontSize: "18px" }}>
                    <th style={{ width: 200 }}>Tanggal</th>
                                <th style={{ width: 200 }}>Bilal Awal</th>
                                <th style={{ width: 200 }}>Bilal Akhir</th>
                                <th style={{ width: 200 }}>Khotib</th>
                                <th style={{ width: 200 }}>Imam</th>
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

export default TabelJumats;