import React, { useState } from "react";

function Todo({ task = "default todo", id = "1", remove }) {
  const [editTask, setEditTask] = useState(task);
  

  const handleChange = evt => {
    setEditTask(evt.target.value);
  };

  const handleDelete = () => remove(id);

  return (
      <div>
        <form value={editTask} onSubmit={handleChange}>
            <li>{task}</li>     
            <button onClick={handleDelete}>X</button>
        </form>
    </div>
  );

}

export default Todo;