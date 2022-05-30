import React, { useState, useEffect } from "react";
import axios from "axios";
import {Link} from 'react-router-dom'

const UserList = () => {
  //* Initial value users adalah [] array kosong
  const [users, setUsers] = useState([]);

  //* ComponentDidMound fetch data dari api, dependency [] berguna agar
  //* useEffect jalan ketika component mounted ke dom
  useEffect(() => {
    getUsers();
  }, []);

  //*Method untuk fetch data dari api
  const getUsers = async () => {
    const response = await axios.get("http://localhost:5000/users");
    setUsers(response.data);
    //* console.log(response.data) => Cek hasil fetch apakah ada response
  };

  const deleteUser = async (id) =>{
    try {
      await axios.delete(`http://localhost:5000/users/${id}`)
      //? Ketika sukses update maka data list user dipanggil kembali
      getUsers();
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="columns mt-5 is-centered">
      <div className="colum is-half">
        <Link to={`add`} className="button is-success">Add New</Link>
        <table className="table is-stripped is-fullwidth">
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>

            {users.map((user, index) => (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.gender}</td>
                <td>
                    <Link to={`edit/${user.id}`} className="button is-small is-info mr-3">Edit</Link>
                    <button onClick={()=>deleteUser(user.id)} className="button is-small is-danger">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;
