import React, {useState} from 'react';
import NewTodoForm from './NewToDoForm';
import ToDo from './Todo';

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const addTodo = (newToDo) => {
        setTodos(todos => [...todos, newToDo])
    };

    // const update = (id, updatedTask) => {
    //     setTodos(todos =>
    //       todos.map(todo =>
    //         todo.id === id ? { ...todo, task: updatedTask } : todo
    //       )
    //     );
    // };
    
    const remove = id => {
        setTodos(todos => todos.filter(todo => todo.id !== id));
      };
    const TaskValues = todos.map(todo => (
        <ToDo
            key={todo.id}
            id={todo.id}
            task={todo.task}
            remove={remove}
        />));


    return (
        <div>
            <NewTodoForm NewTask={addTodo} />
            <ul>{TaskValues}</ul>
        </div>
    )
};

export default TodoList;
