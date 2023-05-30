import { useContext, useState } from "react";
import AppContext from "../../../context/appContext";
import Alert from "./Alert";
import Pagination from "./Pagination";
import TabelSholat from "./TabelSholat";
import TabelHeaderSholat from "./TabelHeaderSholat";
import { Paginate } from "../../../helpers/paginate";

const LayoutTabelSholat = () => {
    const value = useContext(AppContext)

    const [alertMessage, setAlertMessage] = useState('');
    const [saveJadwalSholat, setSaveJadwalSholat] = useState({
        tanggal: "",
        imsyak: "",
        subuh: "",
        terbit: "",
        dzuhur: "",
        ashar: "",
        maghrib: "",
        isya: ""
    });

    const [editJadwalSholat, setEditJadwalSholat] = useState({
        id: "",
        tanggal: "",
        imsyak: "",
        subuh: "",
        terbit: "",
        dzuhur: "",
        ashar: "",
        maghrib: "",
        isya: ""
    })

    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 5;

    const onPageChange = (page) => {
        setCurrentPage(page)
    }

    let paginatedJadwalSholats = Paginate(value.jadwalsholats, currentPage, pageSize);

    const handleSaveChange = ({ target: { name, value } }) => {
        setSaveJadwalSholat({ ...saveJadwalSholat, [name]: value })
    }

    const handleAddSubmit = async (e) => {
        e.preventDefault();
        const reqOption = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(saveJadwalSholat)
        }

        const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/jadwalsholats/`, reqOption);

        const result = await response.json();

        if (result) {
            setAlertMessage("Data Added Successfully")
            document.getElementsByClassName("addCancel")[0].click();
            var prevJadwalSholats = value.jadwalsholats;

            value.setMyJadwalSholats(prevJadwalSholats);
            location.reload()
        }
    }

    const handleDelete = async (jadwalsholatId) => {
        var reqOption = {
            method: "DELETE",
        }

        var response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/jadwalsholats/` + jadwalsholatId, reqOption)
        var result = await response.json();

        if (result) {
            var prevJadwalSholats = value.jadwalsholats;
            var newJadwalSholats = prevJadwalSholats.filter(jadwalsholat => {
                return jadwalsholat.id = jadwalsholatId;
            })
            value.setMyJadwalSholats(newJadwalSholats);
            setAlertMessage("Data berhasil di hapus", location.replace('/admin/jadwal_sholat'))
        }
    }

    const handleEditChange = async ({ target: { name, value } }) => {
        setEditJadwalSholat({ ...editJadwalSholat, [name]: value });
    }

    const handleEditSubmit = async (e) => {
        e.preventDefault();

        const reqOptions = {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(editJadwalSholat),
        }

        const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/jadwalsholats/` + editJadwalSholat.id, reqOptions)
        const result = await response.json();

        if (result) {
            setAlertMessage("Data has been updated");
            document.getElementsByClassName("editCancel")[0].click();

            const prevJadwalSholats = value.jadwalsholats.filter(jadwalsholat => {
                return jadwalsholat.id != editJadwalSholat.id
            });

            value.setMyJadwalSholats(prevJadwalSholats);
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
                                    <div className="col-sm-6">
                                        <label>Tanggal</label>
                                        <input value={saveJadwalSholat.tanggal} onChange={handleSaveChange} type="date" className="form-control" name="tanggal" required />
                                    </div>
                                </div>
                                <div className="row g-3 mt-2">
                                    <div className="col-sm-4">
                                        <label>Imsyak</label>
                                        <input value={saveJadwalSholat.imsyak} onChange={handleSaveChange} type="text" className="form-control" name="imsyak" placeholder="00.00" required />
                                    </div>
                                    <div className="col-sm-4">
                                        <label>Subuh</label>
                                        <input value={saveJadwalSholat.subuh} onChange={handleSaveChange} type="text" className="form-control" name="subuh" placeholder="00.00" required />
                                    </div>
                                    <div className="col-sm-4">
                                        <label>Terbit</label>
                                        <input value={saveJadwalSholat.terbit} onChange={handleSaveChange} type="text" className="form-control" name="terbit" placeholder="00.00" required />
                                    </div>
                                </div>
                                <div className="row g-3 mt-2">
                                    <div className="col-sm-6">
                                        <label>Dzuhur</label>
                                        <input value={saveJadwalSholat.dzuhur} onChange={handleSaveChange} type="text" className="form-control" name="dzuhur" placeholder="00.00" required />
                                    </div>
                                    <div className="col-sm-6">
                                        <label>Ashar</label>
                                        <input value={saveJadwalSholat.ashar} onChange={handleSaveChange} type="text" className="form-control" name="ashar" placeholder="00.00" required />
                                    </div>
                                </div>
                                <div className="row g-3 mt-2 mb-2">
                                    <div className="col-sm-6">
                                        <label>Maghrib</label>
                                        <input value={saveJadwalSholat.maghrib} onChange={handleSaveChange} type="text" className="form-control" name="maghrib" placeholder="00.00" required />
                                    </div>
                                    <div className="col-sm-6">
                                        <label>Isya</label>
                                        <input value={saveJadwalSholat.isya} onChange={handleSaveChange} type="text" className="form-control" name="isya" placeholder="00.00" required />
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
                                    <div className="col-sm-6">
                                        <label>Tanggal</label>
                                        <input value={editJadwalSholat.tanggal} onChange={handleEditChange} type="date" className="form-control" name="tanggal" required />
                                    </div>
                                </div>
                                <div className="row g-3 mt-2">
                                    <div className="col-sm-4">
                                        <label>Imsyak</label>
                                        <input value={editJadwalSholat.imsyak} onChange={handleEditChange} type="text" className="form-control" name="imsyak" required />
                                    </div>
                                    <div className="col-sm-4">
                                        <label>Subuh</label>
                                        <input value={editJadwalSholat.subuh} onChange={handleEditChange} type="text" className="form-control" name="subuh" required />
                                    </div>
                                    <div className="col-sm-4">
                                        <label>Terbit</label>
                                        <input value={editJadwalSholat.terbit} onChange={handleEditChange} type="text" className="form-control" name="terbit" required />
                                    </div>
                                </div>
                                <div className="row g-3 mt-2">
                                    <div className="col-sm-6">
                                        <label>Dzuhur</label>
                                        <input value={editJadwalSholat.dzuhur} onChange={handleEditChange} type="text" className="form-control" name="dzuhur" required />
                                    </div>
                                    <div className="col-sm-6">
                                        <label>Ashar</label>
                                        <input value={editJadwalSholat.ashar} onChange={handleEditChange} type="text" className="form-control" name="ashar" required />
                                    </div>
                                </div>
                                <div className="row g-3 mt-2 mb-2">
                                    <div className="col-sm-6">
                                        <label>Maghrib</label>
                                        <input value={editJadwalSholat.maghrib} onChange={handleEditChange} type="text" className="form-control" name="maghrib" required />
                                    </div>
                                    <div className="col-sm-6">
                                        <label>Isya</label>
                                        <input value={editJadwalSholat.isya} onChange={handleEditChange} type="text" className="form-control" name="isya" required />
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
                        <TabelHeaderSholat setAlertMessage={setAlertMessage} />
                        <TabelSholat setEditJadwalSholat={setEditJadwalSholat} jadwalsholats={paginatedJadwalSholats} handleDelete={handleDelete} />
                        <Pagination jadwalsholatsCount={value.jadwalsholats.length} currentPage={currentPage} pageSize={pageSize} onPageChange={onPageChange} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default LayoutTabelSholat;