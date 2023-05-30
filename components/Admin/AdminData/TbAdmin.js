import DataAdmin from "./DataAdmin";

const TbAdmin = ({users, handleDelete, setEditUser}) => {

    const userGenerator = () => {
        return (
            <>
                {
                    users.map(user => {
                        return (
                            <DataAdmin setEditUser={setEditUser} key={user.id} user={user} handleDelete={ handleDelete } />
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
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userGenerator()}
                    </tbody>
                </table>
            </div>

        </>
    );
}

export default TbAdmin;