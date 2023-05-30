import useSWR from 'swr'

// const fetch = (url) => fetch(url).then((res) => res.json());

const DataAdmin = ({user, handleDelete, setEditUser}) => {

    const fetchUser = async (userId) => {
        const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/users/` + userId)
        const result = await response.json();

        setEditUser(result);
    }    
    return (
        <>
            <tr>
                <input type="hidden" id="userId" name="id" value='' />
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                    <a href="#editEmployeeModal" onClick={() => fetchUser(user.id)} className="edit" data-toggle="modal"><i className="bi bi-pencil" style={{ fontSize: "16px" }} data-toggle="tooltip" title="Edit"></i></a>
                    <a href="#deleteEmployeeModal" onClick={() => handleDelete(user.id)} className="delete" data-toggle="modal"><i className="bi bi-trash" style={{ fontSize: "16px" }} data-toggle="tooltip" title="Delete"></i></a>
                </td>
            </tr>
        </>
    );
}

export default DataAdmin;