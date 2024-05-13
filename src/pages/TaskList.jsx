import React from 'react';
import Button from '@mui/material/Button';

function TaskList({ tasks, onDelete }) {
    // Load tasks from localStorage on component moun
    return (
        <div>
            <h2>Tasks</h2>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        {task.text}
                        <Button
                            variant="contained"
                            color="error"
                            onClick={() => onDelete(task.id)}
                            sx={{ marginLeft: '10px' }}
                        >
                            Delete
                        </Button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TaskList;
