const TabelHeaderSholat = () => {
    return (
        <>
            <div className="table-title">
                <div className="row">
                    <div className="col-sm-6">
                        <h2 style={{fontSize:"18px"}}><b  style={{fontSize:"24px"}}>Jadwal Sholat</b> Banyuwangi dan sekitarnya</h2>
                    </div>
                    <div className="col-sm-6">
                        <a href="#addEmployeeModal" className="btn btn-primary rounded-lg" data-toggle="modal"><i className="bi bi-plus" style={{fontSize:"15px"}}></i> <span>Tambah Data</span></a>
                    </div>
                </div>
            </div>

        </>
    );
}

export default TabelHeaderSholat;