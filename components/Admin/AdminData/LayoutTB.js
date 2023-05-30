import { useContext, useState } from "react";
import AppContext from "../../../context/appContext";
import Alert from "./Alert";
import Pagination from "./Pagination";
import TbAdmin from "./TbAdmin";
import TbHeader from "./TbHeader";
import { Paginate } from "../../../helpers/paginate";


const LayoutTB = () => {
    const value = useContext(AppContext)

    const [alertMessage, setAlertMessage] = useState('');
    const [saveUser, setSaveUser] = useState({
        username: "",
        email: ""
    });

    const [editUser, setEditUser] = useState({
        id: "",
        email: "",
        username: ""
    })
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 5;

    const onPageChange = (page) => {
        setCurrentPage(page)
    }

    let paginatedUsers = Paginate(value.users, currentPage, pageSize);

    const handleSaveChange = ({ target: { name, value } }) => {
        setSaveUser({ ...saveUser, [name]: value })
    }

    const handleAddSubmit = async (e) => {
        e.preventDefault();
        const reqOption = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(saveUser)
        }

        const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/users/`, reqOption);

        const result = await response.json();

        if (result) {
            setAlertMessage("User Added Successfully")
            document.getElementsByClassName("addCancel")[0].click();
            var prevUsers = value.users;

            value.setMyUsers(prevUsers);
            location.replace('/admin')
        }
    }

    const handleDelete = async (userId) => {
        var reqOption = {
            method: "DELETE",
        }

        var response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/users/` + userId, reqOption)
        var result = await response.json();

        if (result) {
            var prevUsers = value.users;
            var newUsers = prevUsers.filter(user => {
                return user.id = userId;
            })
            value.setMyUsers(newUsers);
            setAlertMessage("Data berhasil di hapus", location.replace('/admin'))
        }
    }

    const handleEditChange = async ({ target: { name, value } }) => {
        setEditUser({ ...editUser, [name]: value });
    }

    const handleEditSubmit = async (e) => {
        e.preventDefault();

        const reqOptions = {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(editUser),
        }

        const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/users/` + editUser.id, reqOptions)
        const result = await response.json();

        if (result) {
            setAlertMessage("User has been updated");
            document.getElementsByClassName("editCancel")[0].click();

            const prevUsers = value.users.filter(user => {
                return user.id != editUser.id
            });

            value.setMyUsers(prevUsers);
            location.replace('/admin')
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
                                <div className="form-group">
                                    <label>Name</label>
                                    <input value={saveUser.username} onChange={handleSaveChange} type="text" className="form-control" name="username" required />
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input value={saveUser.email} onChange={handleSaveChange} type="email" className="form-control" name="email" required />
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
                                <input type="hidden" name="updateId" className="updateId" />
                                <div className="form-group">
                                    <label>Name</label>
                                    <input type="text" value={editUser.username} onChange={handleEditChange} className="form-control updateUsername" name="username" required />
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="email" value={editUser.email} onChange={handleEditChange} className="form-control updatePassword" name="email" required />
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
                        <TbHeader setAlertMessage={setAlertMessage} />
                        <TbAdmin setEditUser={setEditUser} users={paginatedUsers} handleDelete={handleDelete} />
                        <Pagination usersCount={value.users.length} currentPage={currentPage} pageSize={pageSize} onPageChange={onPageChange} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default LayoutTB;