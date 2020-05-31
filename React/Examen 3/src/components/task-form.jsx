import React from 'react';
import '../App.css';
import { useState } from 'react';

const TaskForm = (props) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [urgent, setUrgent] = useState(false);

    const handleSubmitEvent = (e) => {
        e.preventDefault();
        if(props.closeModal != null) {
            props.updateTask(name, description, urgent);
            props.closeModal();
        }else {
            props.addTask(name, description, urgent);
        }
        setName('');
        setDescription('');
        setUrgent(false);
    }

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    }

    const handleUrgentChange = (e) => {
        setUrgent(e.target.value);
    }

    return (
        <div className="task-form">
            <h4 className="app-title-text">{props.title}</h4>
            <form>
                <div className="form-group row">
                    <label htmlFor="taskName" className="col-sm-2 col-form-label">Nombre</label>
                    <div className="col-sm-8">
                        <input type="text" className="form-control" id="taskName" value={name} onChange={handleNameChange} placeholder="Escribe el nombre" />
                    </div>
                    <div className="form-check col-sm-2">
                        <input type="checkbox" className="form-check-input c" value={urgent} id="urgentTask" onChange={handleUrgentChange} />
                        <label className="form-check-label" htmlFor="urgentTask">Tarea Urgente</label>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="taskDescription" className="col-sm-2 col-form-label">Descripcion</label>
                    <div className="col-sm-8">
                        <textarea className="form-control" id="taskDescription" value={description} rows="3" onChange={handleDescriptionChange}/>   
                    </div>
                </div>
                <button onClick={handleSubmitEvent} type="submit" className="btn btn-primary">{props.buttonText}</button>
            </form>
        </div>
    )
}

export default TaskForm;