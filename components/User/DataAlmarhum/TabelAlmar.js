import DataAlmar from "./Data";

const TabelAlmar = ({ almarhums }) => {
    const almarhumGenerator = () => {
        return (
            <>
                {
                    almarhums.map(almarhum => {
                        return (
                            <DataAlmar key={almarhum.id} almarhum={almarhum} />
                        )
                    })
                }
            </>
        )
    }
    return (
        <>
            <div className='table-responsive' style={{ backgroundColor: "#E3F6FF", borderRadius: "10px" }}>
                <table className="table table-borderless">
                    <thead>
                        <tr className='text-center' style={{fontSize:"18px"}}>
                            <th>Nama</th>
                            <th>Tanggal Wafat</th>
                            <th>Tanggal Lahir</th>
                            <th>RT</th>
                            <th>RW</th>
                            <th>Bin</th>
                        </tr>
                    </thead>
                    <tbody>
                        {almarhumGenerator()}
                    </tbody>
                </table>
            </div>

        </>
    );
}

export default TabelAlmar;