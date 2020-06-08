import React, { useState, Fragment, useEffect } from 'react';
import '../App.css';
import TaskForm from './task-form';
import Modal from 'react-modal';

const TaskList = (props) => {
    const [showModal, setShowModal] = useState(false);
    const [modalInfo, setModalInfo] = useState([]);
    const [noFinishedTasks, setNoFinishedTasks] = useState([]);
    const [finishedTasks, setFinishedTasks] = useState([]);

    Modal.setAppElement('#root');

    useEffect(() => {
        if (props.tasks.length > 0) {
            setFinishedTasks(props.tasks.filter(task => task.finished === true));
            setNoFinishedTasks(props.tasks.filter(task => task.finished === false));
        }
    }, [props.tasks]);

    const handleOpenModal = (task) => {
        setModalInfo(task);
        setShowModal(true);
    }

    const handleCloseModal = () => {
        setShowModal(false);
    }

    const handleFinishedCheckbox = (task) => {
        props.updateTask(task.id, task.name, task.description, task.urgent, !task.finished);
    }

    const afterOpenModal = () => {
        // references are now sync'd and can be accessed.
        //subtitle.style.color = '#f00';
    }

    const customModalStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            background: 'white',
            maxHeight: '95vh',
            minWidth: '98vh',
        }
    };

    return (
        <Fragment>
            <div className="task-list">
                <h4 className="app-title-text">Tareas Actuales</h4>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col">ID</th>
                            <th scope="col">Tarea</th>
                            <th scope="col">Descripcion</th>
                            <th scope="col">Prioridad</th>
                        </tr>
                    </thead>
                    <tbody>
                        {noFinishedTasks.length > 0
                            ? noFinishedTasks.map((task) => {
                                return (
                                    <tr key={task.id} className="task-row">
                                        <td>
                                            <div className="row">
                                                <label htmlFor="finished" className="finished-task-btn">
                                                    <input id="finished" className="m-r-15" type="checkbox" checked={task.finished} onChange={() => handleFinishedCheckbox(task)} />
                                                </label>
                                            </div>
                                        </td>
                                        <td>
                                            {task.id}
                                        </td>
                                        <td>
                                            {task.name}
                                        </td>
                                        <td>
                                            {task.description}
                                        </td>
                                        <td className={task.urgent ? "app-primary-text" : ""}>
                                            {task.urgent ? 'URGENTE' : 'NO URGENTE'}
                                        </td>
                                        <td >

                                        </td>
                                        <td>
                                            <div className="col-sm-2 task-contol-col">
                                                <div className="row">
                                                    <button className="task-control-btn" onClick={() => handleOpenModal(task)} data-toggle="tooltip" data-placement="right" title="Editar"><i className="fas fa-pencil-alt"></i></button>
                                                </div>
                                                <div className="row">
                                                    <button className="task-control-btn red m-t-10" onClick={() => props.deleteTask(task.id)} data-toggle="tooltip" data-placement="right" title="Eliminar"><i className="fas fa-trash-alt"></i></button>
                                                </div>
                                            </div>
                                        </td>

                                    </tr>
                                )
                            })
                            : <tr><td>No hay tareas...</td></tr>}
                    </tbody>
                </table>
            </div>
            <Modal
                isOpen={showModal}
                onAfterOpen={afterOpenModal}
                onRequestClose={handleCloseModal}
                style={customModalStyles}
                contentLabel="Character"
            >
                <TaskForm updateTask={props.updateTask} title="Editar Tarea" buttonText="Editar Tarea" closeModal={handleCloseModal} taskValues={modalInfo} />
            </Modal>
            <div className="task-list-finished">
                <h4 className="app-title-text">Tareas Terminadas</h4>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col">ID</th>
                            <th scope="col">Tarea</th>
                            <th scope="col">Descripcion</th>
                            <th scope="col">Prioridad</th>
                        </tr>
                    </thead>
                    <tbody>
                        {finishedTasks.length > 0
                            ? finishedTasks.map((task) => {
                                return (
                                    <tr key={task.id}>
                                        <td>
                                            <div className="row">
                                                <label htmlFor="finished" className="finished-task-btn">
                                                    <input id="finished" type="checkbox" checked={task.finished} onChange={() => handleFinishedCheckbox(task)} />
                                                </label>
                                            </div>
                                        </td>
                                        <td>
                                            {task.id}
                                        </td>
                                        <td>
                                            {task.name}
                                        </td>
                                        <td>
                                            {task.description}
                                        </td>
                                        <td className={task.urgent ? "app-primary-text" : ""}>
                                            {task.urgent ? 'URGENTE' : 'NO URGENTE'}
                                        </td>
                                        <td >
                                            <div className="col-sm-2 task-contol-col">
                                                <div className="row">
                                                    <button className="task-control-btn" onClick={() => handleOpenModal(task)} data-toggle="tooltip" data-placement="right" title="Editar"><i className="fas fa-pencil-alt"></i></button>
                                                </div>
                                                <div className="row">
                                                    <button className="task-control-btn red m-t-10" onClick={() => props.deleteTask(task.id)} data-toggle="tooltip" data-placement="right" title="Eliminar"><i className="fas fa-trash-alt"></i></button>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })
                            : <tr><td>No hay tareas...</td></tr>}
                    </tbody>
                </table>
            </div>
        </Fragment>
    );
}

export default TaskList;