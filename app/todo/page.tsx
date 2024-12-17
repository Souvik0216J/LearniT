'use client'
import React, { useState, useEffect } from 'react';

interface Task {
  text: string;
  completed: boolean;
}

// Main App Component
const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState<string>('');

  // Load tasks from localStorage when the component mounts
  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  // Save tasks to localStorage whenever the task list changes
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Function to handle adding a new task
  const addTask = (): void => {
    if (newTask.trim()) {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  // Function to toggle task completion
  const toggleTask = (index: number): void => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  // Function to delete a task
  const deleteTask = (index: number): void => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
      <div className="app-container !rounded-lg">
        <header>
          <div className="todo-header w-full !rounded-none">
            <h1>To-Do List</h1>
          </div>
        </header>
        <div className="m-7">
          <div className="task-input">
            <input
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              placeholder="Add a new task..."
            />
            <button onClick={addTask}>Add</button>
          </div>

          <ul className="task-list">
            {tasks.map((task, index) => (
              <li key={index} className={task.completed ? 'completed' : ''}>
                <span onClick={() => toggleTask(index)}>{task.text}</span>
                <button onClick={() => deleteTask(index)}>&times;</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
  );
};

export default App;
