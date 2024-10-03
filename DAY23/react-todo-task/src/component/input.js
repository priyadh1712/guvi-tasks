function Input({handleButton, handleInput, value}) {
    return (
        <>

            <h1 className="text-center my-4">My Todo Application</h1>

            <div className="d-flex justify-content-center">
                <div className="w-25">
                    <div className="input-group mb-3">
                        <input 
                            onChange={(e) => handleInput(e)} 
                            value={value.todoName} 
                            placeholder='Todo Name' 
                            name='todoName' 
                            type="text" 
                            className="form-control" 
                            aria-label="Todo Name Input" 
                            aria-describedby="inputGroup-sizing-default" 
                        />
                    </div>
                </div>
                <div className="w-25 ms-4">
                    <div className="input-group mb-3">
                        <input 
                            onChange={(e) => handleInput(e)} 
                            value={value.todoDescription} 
                            placeholder='Todo Description' 
                            name='todoDescription' 
                            type="text" 
                            className="form-control" 
                            aria-label="Todo Description Input" 
                            aria-describedby="inputGroup-sizing-default" 
                        />
                    </div>
                </div>
                <div className="ms-4">
                    <button 
                        onClick={(event) => handleButton(event)} 
                        type="button" 
                        className="btn btn-info">
                        Add Todo
                    </button>
                </div>
            </div>
        </>
    );
}

export default Input;
