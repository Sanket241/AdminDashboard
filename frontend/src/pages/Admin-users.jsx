import { useEffect, useState } from "react"
import { useAuth } from "../store/auth"
export const AdminUsers = () => {
    const { authorizationToken } = useAuth()
    const [users, setUsers] = useState([])
    const getallUserData = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/admin/user", {
                method: "GET",
                headers: {
                    Authorization: authorizationToken,
                }

            })
            const data = await response.json();
            setUsers(data)
            console.log(`user ${data}`)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getallUserData();
    }, [])
    return (
        <>
            <section className="admin-users-section">
                <div className="container">
                    <h1>Admin Users Data</h1>
                </div>
                <div className="container admin-users">
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                        users.map((curUsers, index) => {
                            return <tr key={index}>
                                <td>{curUsers.username}</td>
                                <td>{curUsers.email}</td>
                                <td>Edit</td>
                                <td>Delete</td>
                            </tr>

                        })
                    }
                        </tbody>
                    </table>
                   
                </div>
            </section>


        </>
    )
}