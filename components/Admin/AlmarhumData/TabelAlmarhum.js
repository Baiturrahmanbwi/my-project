import DataAlmarhum from "./DataAlmarhum";


const TabelAlmarhum = ({almarhums, handleDelete, setEditAlmarhum}) => {

    const almarhumGenerator = () => {
        return (
            <>
                {
                    almarhums.map(almarhum => {
                        return (
                            <DataAlmarhum setEditAlmarhum={setEditAlmarhum} key={almarhum.id} almarhum={almarhum} handleDelete={ handleDelete } />
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
                            <th style={{width:175}}>Nama</th>
                            <th>Tanggal Wafat</th>
                            <th>Tanggal Lahir</th>
                            <th>RT</th>
                            <th>RW</th>
                            <th style={{width:150}}>Bin</th>
                            <th>Actions</th>
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

export default TabelAlmarhum;