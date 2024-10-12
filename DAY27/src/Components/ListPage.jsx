import React, { useState } from "react";
import { useUserContext } from "./context/usercontext";

function ListPages() {
  const { data, handleDelete, handleUpdate } = useUserContext();
  const [editingUserId, setEditingUserId] = useState(null);
  const [updatedName, setUpdatedName] = useState("");
  const [updatedEmail, setUpdatedEmail] = useState("");
  const [updatedPhone, setUpdatedPhone] = useState("");

  const handleEditClick = (user) => {
    setEditingUserId(user.id);
    setUpdatedName(user.name);
    setUpdatedEmail(user.email);
    setUpdatedPhone(user.phone);
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    if (editingUserId) {
      handleUpdate(editingUserId, {
        name: updatedName,
        email: updatedEmail,
        phone: updatedPhone,
      });
      setEditingUserId(null);
      setUpdatedName("");
      setUpdatedEmail("");
      setUpdatedPhone("");
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{
        backgroundImage: "linear-gradient(to right, #00c6ff, #0072ff)",
        padding: "20px",
      }}
    >
      <div className="col-lg-8 col-md-10">
        <div className="card shadow-lg border-0 rounded-3">
          <div className="card-body p-4">
            <h2 className="text-center mb-4">
              <span className="text-primary">User List</span>
            </h2>

            <table className="table table-hover table-bordered">
              <thead className="bg-dark text-white">
                <tr className="table-row">
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {data.map((user, index) => (
                  <tr key={user.id} className="align-middle">
                    <td>{index + 1}</td>
                    <td>
                      {editingUserId === user.id ? (
                        <input
                          type="text"
                          className="form-control"
                          value={updatedName}
                          onChange={(e) => setUpdatedName(e.target.value)}
                        />
                      ) : (
                        user.name
                      )}
                    </td>
                    <td>
                      {editingUserId === user.id ? (
                        <input
                          type="email"
                          className="form-control"
                          value={updatedEmail}
                          onChange={(e) => setUpdatedEmail(e.target.value)}
                        />
                      ) : (
                        user.email
                      )}
                    </td>
                    <td>
                      {editingUserId === user.id ? (
                        <input
                          type="text"
                          className="form-control"
                          value={updatedPhone}
                          onChange={(e) => setUpdatedPhone(e.target.value)}
                        />
                      ) : (
                        user.phone
                      )}
                    </td>
                    <td>
                      {editingUserId === user.id ? (
                        <button
                          type="button"
                          className="btn btn-warning btn-sm"
                          onClick={handleEditSubmit}
                        >
                          Update
                        </button>
                      ) : (
                        <>
                          <button
                            type="button"
                            className="btn btn-primary btn-sm me-2"
                            onClick={() => handleEditClick(user)}
                          >
                            Edit
                          </button>
                          <button
                            type="button"
                            className="btn btn-danger btn-sm"
                            onClick={() => handleDelete(user.id)}
                          >
                            Delete
                          </button>
                        </>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListPages;
