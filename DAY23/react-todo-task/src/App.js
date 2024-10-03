import { useState } from 'react';
import Input from './component/input';
import MyTodos from './component/MyTodos';

function App() {
  const [todo, setTodo] = useState([]);
  const [todoCopy, setTodoCopy] = useState([]);
  const [inputValues, setInputValues] = useState({
    todoName: '',
    todoDescription: '',
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInputValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleButton = (event) => {
    if (inputValues.todoName.trim() && inputValues.todoDescription.trim()) {
      const newTodo = {
        id: Math.random().toString(36),
        todoName: inputValues.todoName,
        todoDescription: inputValues.todoDescription,
        status: 'Not Completed',
      };
      setTodo([...todo, newTodo]);
      setTodoCopy([...todo, newTodo]);
      setInputValues({ todoName: '', todoDescription: '' });
    }
  };

  const handleStatus = (event, todoData) => {
    const newStatus = event.target.value;
    
    const updatedTodos = todo.map(item => {
      if (item.id === todoData.id) {
        return { ...item, status: newStatus };
      }
      return item;
    });
    
    const updatedTodosCopy = todoCopy.map(item => {
      if (item.id === todoData.id) {
        return { ...item, status: newStatus };
      }
      return item;
    });

    setTodo(updatedTodos);
    setTodoCopy(updatedTodosCopy);
  };

  return (
    <div className="App">
      <Input
        handleButton={handleButton}
        handleInput={handleInput}
        value={inputValues}
      />
      <MyTodos
        todo={todo}
        setTodo={setTodo}
        todoCopy={todoCopy}
        setTodoCopy={setTodoCopy}
        handleStatus={handleStatus}
      />
    </div>
  );
}

export default App;
