function TodoCard({ data, handleEdit, handleDelete, handleStatus }) {

    return (
        <div className="col-4">
            <div className="todo-content p-3 border" style={{ backgroundColor: "rgb(204, 245, 211)" }}>
                <h6>Name : {data.todoName}</h6>
                <h6>Description : {data.todoDescription}</h6>

                <div className="d-flex align-items-center">
                    <h6>Status :</h6>
                    <select 
                        onChange={(event) => handleStatus(event, data)} 
                        className="ms-2 bg-primary text-white" 
                        style={{ border: "none", padding: "3px" }} 
                        value={data.status} 
                        name="todoStatus" 
                        id="status">
                        <option value="Not Completed">Not Completed</option>
                        <option value="Completed">Completed</option>
                    </select>
                </div>

                <div className="d-flex justify-content-end mt-5">
                    <button 
                        onClick={() => handleEdit(data)} 
                        type="button" 
                        className="btn-sm btn-success me-3">
                        Edit
                    </button>
                    <button 
                        onClick={() => handleDelete(data)} 
                        type="button" 
                        className="btn-sm btn-danger">
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
}

export default TodoCard;
