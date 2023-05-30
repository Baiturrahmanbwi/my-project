import { useContext, useState } from "react";
import AppContext from "../../../context/appContext";
import Alert from "./Alert";
import Pagination from "./Pagination";
import TabelHeaderSholat from "./TabelHeaderSholatJumat";
import { Paginate } from "../../../helpers/paginate";
import TabelSholatJumat from "./TabelSholatJumat";

const LayoutTabelSholatJumat = () => {
    const value = useContext(AppContext)

    const [alertMessage, setAlertMessage] = useState('');
    const [saveSholatJumat, setSaveSholatJumat] = useState({
        tanggal: "",
        bilalAwal: "",
        bilalAkhir: "",
        khotib: "",
        imam: ""
    });

    const [editSholatJumat, setEditSholatJumat] = useState({
        id: "",
        tanggal: "",
        bilalAwal: "",
        bilalAkhir: "",
        khotib: "",
        imam: ""
    })

    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 5;

    const onPageChange = (page) => {
        setCurrentPage(page)
    }

    let paginatedSholatJumats = Paginate(value.sholatjumats, currentPage, pageSize);

    const handleSaveChange = ({ target: { name, value } }) => {
        setSaveSholatJumat({ ...saveSholatJumat, [name]: value })
    }

    const handleAddSubmit = async (e) => {
        e.preventDefault();
        const reqOption = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(saveSholatJumat)
        }

        const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/sholatjumats/`, reqOption);

        const result = await response.json();

        if (result) {
            setAlertMessage("Data Added Successfully")
            document.getElementsByClassName("addCancel")[0].click();
            var prevSholatJumats = value.sholatjumats;

            value.setMySholatJumats(prevSholatJumats);
            location.reload()
        }
    }

    const handleDelete = async (sholatjumatId) => {
        var reqOption = {
            method: "DELETE",
        }

        var response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/sholatjumats/` + sholatjumatId, reqOption)
        var result = await response.json();

        if (result) {
            var prevSholatJumats = value.sholatjumats;
            var newSholatJumats = prevSholatJumats.filter(sholatjumat => {
                return sholatjumat.id = sholatjumatId;
            })
            value.setMySholatJumats(newSholatJumats);
            setAlertMessage("Data berhasil di hapus", location.replace('/admin/petugas_sholat'))
        }
    }

    const handleEditChange = async ({ target: { name, value } }) => {
        setEditSholatJumat({ ...editSholatJumat, [name]: value });
    }

    const handleEditSubmit = async (e) => {
        e.preventDefault();

        const reqOptions = {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(editSholatJumat),
        }

        const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/sholatjumats/` + editSholatJumat.id, reqOptions)
        const result = await response.json();

        if (result) {
            setAlertMessage("Data has been updated");
            document.getElementsByClassName("editCancel")[0].click();

            const prevSholatJumats = value.sholatjumats.filter(sholatjumat => {
                return sholatjumat.id != editSholatJumat.id
            });

            value.setMySholatJumats(prevSholatJumats);
            location.reload()
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
                                        <label>Tanggal</label>
                                        <input value={saveSholatJumat.tanggal} onChange={handleSaveChange} type="date" className="form-control" name="tanggal" required />
                                    </div>
                                </div>
                                <div className="row g-3 mt-2">
                                <div className="col-sm-6">
                                        <label>Bilal Awal</label>
                                        <input value={saveSholatJumat.bilalAwal} onChange={handleSaveChange} type="text" className="form-control text-capitalize" name="bilalAwal" required />
                                    </div>
                                    <div className="col-sm-6">
                                        <label>bilalAkhir</label>
                                        <input value={saveSholatJumat.bilalAkhir} onChange={handleSaveChange} type="text" className="form-control text-capitalize" name="bilalAkhir" required />
                                    </div>
                                </div>
                                <div className="row g-3 mt-2">
                                    <div className="col-sm-6">
                                        <label>Khotib</label>
                                        <input value={saveSholatJumat.khotib} onChange={handleSaveChange} type="text" className="form-control text-capitalize" name="khotib" required />
                                    </div>
                                    <div className="col-sm-6">
                                        <label>Imam</label>
                                        <input value={saveSholatJumat.imam} onChange={handleSaveChange} type="text" className="form-control text-capitalize" name="imam" required />
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <input type="button" className="btn btn-default addCancel" name="submit" data-dismiss="modal" value="Cancel" />
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
                                    <div className="col-sm-6">
                                        <label>Tanggal</label>
                                        <input value={editSholatJumat.tanggal} onChange={handleEditChange} type="date" className="form-control" name="tanggal" required />
                                    </div>
                                    <div className="col-sm-6">
                                        <label>Bilal Awal</label>
                                        <input value={editSholatJumat.bilalAwal} onChange={handleEditChange} type="text" className="form-control text-capitalize" name="bilalAwal" required />
                                    </div>
                                </div>
                                <div className="row g-3 mt-2">
                                    <div className="col-sm-4">
                                        <label>Bilal Akhir</label>
                                        <input value={editSholatJumat.bilalAkhir} onChange={handleEditChange} type="text" className="form-control text-capitalize" name="bilalAkhir" required />
                                    </div>
                                    <div className="col-sm-4">
                                        <label>Khotib</label>
                                        <input value={editSholatJumat.khotib} onChange={handleEditChange} type="text" className="form-control text-capitalize" name="khotib" required />
                                    </div>
                                    <div className="col-sm-4">
                                        <label>Imam</label>
                                        <input value={editSholatJumat.imam} onChange={handleEditChange} type="text" className="form-control text-capitalize" name="imam" required />
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <input type="button" name="submit" className="btn btn-default editCancel" data-dismiss="modal" value="Cancel" />
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
                        <TabelHeaderSholat setAlertMessage={setAlertMessage} />
                        <TabelSholatJumat setEditSholatJumat={setEditSholatJumat} sholatjumats={paginatedSholatJumats} handleDelete={handleDelete} />
                        <Pagination sholatjumatsCount={value.sholatjumats.length} currentPage={currentPage} pageSize={pageSize} onPageChange={onPageChange} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default LayoutTabelSholatJumat;