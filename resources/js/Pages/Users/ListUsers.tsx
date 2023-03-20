import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ListUsers() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('/users')
            .then(response => {
                setUsers(response.data.users);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);
    return (
        <div>
            <table className="table table-striped">
                <thead>
                <tr >
                    <th scope="col-1">#</th>
                    <th scope="col-4">Name</th>
                    <th scope="col-4">Email</th>
                    <th scope="col-3">Handle</th>
                </tr>
                </thead>
                <tbody>
                {
                    users.map(user => (
                        <tr>
                            <th scope="row" className={'col-1'}>{user.id}</th>
                            <td className={'col-4'}>{user.name}</td>
                            <td className={'col-4'}>{user.email}</td>
                            <td className={'col-3'}>

                                <button className="btn btn-warning">Edit</button>
                                <button className={"btn btn-info ml-4"}>Detail</button>
                                <button className={"btn btn-danger ml-4"}>Delete</button>
                            </td>
                        </tr>
                    ))
                }

                </tbody>
            </table>
        </div>
    );
}

export default ListUsers;
