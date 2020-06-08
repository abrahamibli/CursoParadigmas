import React, { useEffect } from 'react';
import '../App.css';
import { useState } from 'react';

const TaskForm = (props) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [urgent, setUrgent] = useState(false);
    const [cancelBtnId, setCancelBtnId] = useState('cancel-btn-none');

    useEffect(() => {
        if (props.taskValues != null) {
            setName(props.taskValues.name);
            setDescription(props.taskValues.description);
            setUrgent(props.taskValues.urgent);
            setCancelBtnId('');
        }
    }, []);

    const handleSubmitEvent = (e) => {
        e.preventDefault();
        if (props.closeModal !== undefined) {
            props.updateTask(props.taskValues.id, name, description, urgent, props.taskValues.finished);
            props.closeModal();
        } else {
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
        setUrgent(e.target.checked);
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
                        <input type="checkbox" className="form-check-input c" checked={urgent} id="urgentTask" onChange={handleUrgentChange} />
                        <label className="form-check-label" htmlFor="urgentTask">Tarea Urgente</label>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="taskDescription" className="col-sm-2 col-form-label">Descripcion</label>
                    <div className="col-sm-8">
                        <textarea className="form-control" id="taskDescription" value={description} rows="3" onChange={handleDescriptionChange} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-6 col-sm-12">
                        <button onClick={handleSubmitEvent} type="submit" className="btn-bonito">{props.buttonText}</button>

                    </div>
                    <div className="col-xl-6 col-sm-12">
                        <button onClick={props.closeModal} className="btn-bonito btn-cancel" id={cancelBtnId}>Cancelar</button>
                    </div>
                </div>

            </form>
        </div>
    )
}

export default TaskForm;