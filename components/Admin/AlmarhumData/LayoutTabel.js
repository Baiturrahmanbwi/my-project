import { useContext, useState } from "react";
import AppContext from "../../../context/appContext";
import Alert from "./Alert";
import Pagination from "./Pagination";
import TabelAlmarhum from "./TabelAlmarhum";
import TabelHeader from "./TabelHeader";
import { Paginate } from "../../../helpers/paginate"


const LayoutTabel = () => {
    const value = useContext(AppContext)


    const [alertMessage, setAlertMessage] = useState('');
    const [saveAlmarhum, setSaveAlmarhum] = useState({
        nama: "",
        tanggal_wafat: "",
        tanggal_lahir: "",
        rt: "",
        rw: "",
        bin: ""
    });

    const [editAlmarhum, setEditAlmarhum] = useState({
        id: "",
        nama: "",
        tanggal_wafat: "",
        tanggal_lahir: "",
        rt: "",
        rw: "",
        bin: ""
    })
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 2;

    const onPageChange = (page) => {
        setCurrentPage(page)
    }

    let paginatedAlmarhums = Paginate(value.almarhums, currentPage, pageSize);

    const handleSaveChange = ({ target: { name, value } }) => {
        setSaveAlmarhum({ ...saveAlmarhum, [name]: value })
    }

    const handleAddSubmit = async (e) => {
        e.preventDefault();
        const reqOption = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(saveAlmarhum)
        }

        const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/almarhums/`, reqOption);

        const result = await response.json();

        if (result) {
            setAlertMessage("Data Added Successfully")
            document.getElementsByClassName("addCancel")[0].click();
            var prevAlmarhums = value.almarhums;

            value.setMyAlmarhums(prevAlmarhums);
            location.replace('/admin/almarhum')
        }
        console.log(result);
    }

    const handleDelete = async (almarhumId) => {
        var reqOption = {
            method: "DELETE",
        }

        var response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/almarhums/` + almarhumId, reqOption)
        var result = await response.json();

        if (result) {
            var prevAlmarhums = value.almarhums;
            var newAlmarhums = prevAlmarhums.filter(almarhum => {
                return almarhum.id = almarhumId;
            })
            value.setMyAlmarhums(newAlmarhums);
            setAlertMessage("Data berhasil di hapus", location.replace('/admin/almarhum'))
        }
    }

    const handleEditChange = async ({ target: { name, value } }) => {
        setEditAlmarhum({ ...editAlmarhum, [name]: value });
    }

    const handleEditSubmit = async (e) => {
        e.preventDefault();

        const reqOptions = {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(editAlmarhum),
        }

        const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/almarhums/` + editAlmarhum.id, reqOptions)
        const result = await response.json();

        if (result) {
            setAlertMessage("Data has been updated");
            document.getElementsByClassName("editCancel")[0].click();

            const prevAlmarhums = value.almarhums.filter(almarhum => {
                return almarhum.id != editAlmarhum.id
            });

            value.setMyAlmarhums(prevAlmarhums);
            location.replace('/admin/almarhum')
        }
    }
    return (
        <>
            <div id="addEmployeeModal" className="modal fade">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form onSubmit={handleAddSubmit}>
                            <div className="modal-header">
                                <h4 className="modal-title">Tambah Data</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                            </div>
                            <div className="modal-body">
                                <div className="row g-3">
                                    <div className="col-sm-12">
                                        <label>Nama</label>
                                        <input value={saveAlmarhum.nama} onChange={handleSaveChange} type="text" className="form-control text-capitalize" name="nama" required />
                                    </div>
                                </div>
                                <div className="row g-3 mt-2">
                                    <div className="col-sm-6">
                                        <label>Tanggal Wafat</label>
                                        <input value={saveAlmarhum.tanggal_wafat} onChange={handleSaveChange} type="date" placeholder="Tanggal Bulan Tahun" className="form-control text-capitalize" name="tanggal_wafat" required />
                                    </div>
                                    <div className="col-sm-6">
                                        <label>Tanggal Lahir</label>
                                        <input value={saveAlmarhum.tanggal_lahir} onChange={handleSaveChange} type="date" placeholder="Tanggal Bulan Tahun" className="form-control text-capitalize" name="tanggal_lahir" required />
                                    </div>
                                </div>
                                <div className="row g-3 mt-2">
                                    <div className="col-sm-6">
                                        <label>RT</label>
                                        <input value={saveAlmarhum.rt} onChange={handleSaveChange} type="text" className="form-control text-capitalize" name="rt" required />
                                    </div>
                                    <div className="col-sm-6">
                                        <label>RW</label>
                                        <input value={saveAlmarhum.rw} onChange={handleSaveChange} type="text" className="form-control text-capitalize" name="rw" required />
                                    </div>
                                </div>
                                <div className="row g-3 mt-2 mb-2">
                                    <div className="col-sm-12">
                                        <label>Bin</label>
                                        <input value={saveAlmarhum.bin} onChange={handleSaveChange} type="text" className="form-control text-capitalize" name="bin" required />
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <input type="button" className="btn btn-danger rounded-lg addCancel" name="submit" data-dismiss="modal" value="Cancel" />
                                <input type="submit" className="btn btn-primary rounded-lg" value="Tambah Data" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div id="editEmployeeModal" className="modal fade">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form onSubmit={handleEditSubmit}>
                            <div className="modal-header">
                                <h4 className="modal-title">Edit Employee</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                            </div>
                            <div className="modal-body">
                                <div className="row g-3">
                                    <div className="col-sm-12">
                                        <label>Nama</label>
                                        <input type="text" value={editAlmarhum.nama} onChange={handleEditChange} className="form-control text-capitalize" name="nama" required />
                                    </div>
                                </div>
                                <div className="row g-3 mt-2">
                                    <div className="col-sm-6">
                                        <label>Tanggal Wafat</label>
                                        <input type="date" value={editAlmarhum.tanggal_wafat} onChange={handleEditChange} className="form-control text-capitalize" name="tanggal_wafat" required />
                                    </div>
                                    <div className="col-sm-6">
                                        <label>Tanggal Lahir</label>
                                        <input type="date" value={editAlmarhum.tanggal_lahir} onChange={handleEditChange} className="form-control text-capitalize" name="tanggal_lahir" required />
                                    </div>
                                </div>
                                <div className="row g-3 mt-2">
                                    <div className="col-sm-6">
                                        <label>RT</label>
                                        <input type="text" value={editAlmarhum.rt} onChange={handleEditChange} className="form-control text-capitalize" name="rt" required />
                                    </div>
                                    <div className="col-sm-6">
                                        <label>RW</label>
                                        <input type="text" value={editAlmarhum.rw} onChange={handleEditChange} className="form-control text-capitalize" name="rw" required />
                                    </div>
                                </div>
                                <div className="row g-3 mt-2 mb-2">
                                    <div className="col-sm-12">
                                        <label>Bin</label>
                                        <input type="text" value={editAlmarhum.bin} onChange={handleEditChange} className="form-control text-capitalize" name="bin" required />
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <input type="button" name="submit" className="btn btn-danger rounded-lg editCancel" data-dismiss="modal" value="Cancel" />
                                <input type="submit" className="btn btn-primary rounded-lg" value="Simpan" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="container-xl">
                <div className="table-responsive d-flex flex-column">
                    <Alert text={alertMessage} setAlertMessage={setAlertMessage} style={alertMessage.length > 0 ? 'block' : 'none'} />
                    <div className="table-wrapper">
                        <TabelHeader setAlertMessage={setAlertMessage} />
                        <TabelAlmarhum setEditAlmarhum={setEditAlmarhum} almarhums={paginatedAlmarhums} handleDelete={handleDelete} />
                        <Pagination almarhumsCount={value.almarhums.length} currentPage={currentPage} pageSize={pageSize} onPageChange={onPageChange} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default LayoutTabel;