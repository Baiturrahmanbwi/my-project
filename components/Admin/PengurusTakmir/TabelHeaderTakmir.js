import { useState } from "react";
import TambahDataTakmir from "./TambahDataTakmir";

const TabelHeaderTakmir = () => {
    const [visible, setVisible] = useState(false);

    const handlerForm = () => {
       setVisible(visible ? false : true);
    };
    return (
        <>
            <div className="table-title">
                <div className="row">
                    <div className="col-sm-6">
                        <h2><b>Pengurus Takmir</b></h2>
                    </div>
                    <div className="col-sm-6">
                        <a onClick={handlerForm} className="btn btn-primary rounded-lg"><i className="bi bi-plus" style={{ fontSize: "15px" }}></i> <span>Tambah Data</span></a>
                    </div>
                </div>
            </div>
            {visible ? <TambahDataTakmir></TambahDataTakmir> : <></>}
        </>
    );
}

export default TabelHeaderTakmir;