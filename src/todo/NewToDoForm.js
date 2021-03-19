import React, { useState } from 'react';
import { v4 as uuid } from "uuid";

const NewToDoForm = ({ NewTask }) => {
    const [task, setTask] = useState('');

    const handleChange = evt => {
        setTask(evt.target.value);
    };
    
    const getValues = (evt) => {
        evt.preventDefault();
        NewTask({task, id: uuid() });
        setTask('');
        
    };

    return (
        <div>
            <form onSubmit={getValues}>
                <div>
                    <label htmlFor='Task'>Task:</label>
                    <input 
                        onChange={handleChange}
                        value={task}
                        name="task"
                        type="text"
                    />
                    <button>Add ToDo</button>
                </div>
            </form>
        </div>
    );
};

export default NewToDoForm;