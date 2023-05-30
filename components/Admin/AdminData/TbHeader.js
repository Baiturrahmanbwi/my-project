const TbHeader = () => {
    return (
        <>
            <div className="table-title">
                <div className="row">
                    <div className="col-sm-6">
                        <h2><b>Data Admin</b></h2>
                    </div>
                    <div className="col-sm-6">
                        <a href="#addEmployeeModal" className="btn btn-primary rounded-lg" data-toggle="modal"><i className="bi bi-plus" style={{ fontSize: "15px" }}></i> <span>Tambah Data</span></a>
                    </div>
                </div>
            </div>

        </>
    );
}

export default TbHeader;