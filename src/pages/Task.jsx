import React, { useState, useEffect, useRef } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import TaskList from './TaskList';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [loading, setLoading] = useState(true);

  // Load tasks from localStorage on component mount
  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
    setLoading(false); // Set loading to false after tasks are loaded
  }, []);

  // Save tasks to localStorage on component update and unmount
  const isFirstRender = useRef(true);
  useEffect(() => {
    if (!isFirstRender.current) {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
    isFirstRender.current = false; // Only save on subsequent renders
  }, [tasks]);

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), text: newTask }]);
      setNewTask('');
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Task Manager</h1>
      <TextField
        label="New Task"
        variant="outlined"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <Button variant="contained" onClick={addTask}>
        Add Task
      </Button>
      <TaskList tasks={tasks} onDelete={deleteTask} />
    </div>
  );
}

export default App;
