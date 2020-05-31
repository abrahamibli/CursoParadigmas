import React, { useState, useEffect, useCallback } from 'react';
import './App.css';
import TaskList from './components/tasks-list';
import Header from './components/header';
import { firebase } from './firebase';
import TaskForm from './components/task-form';

function App() {
  const collection = 'tasks';
  const db = firebase.firestore();

  const [tasks, setTasks] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    getTasks();
  }, []);

  const getTasks = async () => {
    try {
      const snapshot = await db.collection(collection).get();
      const tasks = snapshot.docs.map((task) => ({id: task.id, ...task.data()}));
      console.log(tasks);
      setTasks(tasks);
    }catch(error) {
      console.error(error);
    }
  }

  const addTask = async (name, description, urgent) => {
    try {
      const newTask = {
        'name': name,
        'description': description,
        'urgent': urgent 
      }
      const snapshot = await db.collection(collection).add(newTask);

      setTasks([
        ...tasks,
        {'id': snapshot.id, ...newTask},
      ]);
      console.log(`task added: ${snapshot}`);
    }catch(error) {
      console.error(error);
    }
  }

  const updateTask = async (id, name, description, urgent) => {
    try {
      const snapshot = await db.collection(collection).doc(id).update({
        'name': name,
        'description': description,
        'urgent': urgent
      });
      setTasks([tasks.map((task) => {
        if(task.id === id) 
          return {'id': id, 'name': name, 'description': description, 'urgent': urgent}
        else
          return task;
      })]);
      console.log(`task updated: ${snapshot}`);
    }catch(error) {
      console.error(error);
    }
  }

  const deleteTask = async (id) => {
    try {
      await db.collection(collection).doc(id).delete();
      setTasks(tasks.filter((task) =>task.id !== id));
      console.log('task deleted');
    }catch(error) {
      console.error(error);
    }
  }

  return (
    <div className="App">
      <div className="container">
        <Header />
        <TaskForm addTask={addTask} title="Añadir Nueva Tarea" buttonText="Añadir Tarea"/>
        <TaskList tasks={tasks} updateTask={updateTask}/>
      </div>
    </div>
  );
}

export default App;
