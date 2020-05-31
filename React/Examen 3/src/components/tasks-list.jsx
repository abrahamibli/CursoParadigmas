import React, { useState } from 'react';
import { Overlay } from 'react-portal-overlay';
import '../App.css';
import TaskForm from './task-form';

const TaskList = (props) => {
    const [openModal, setOpenModal] = useState(false);

    const changeModalState = () => {

    }

    return (
        <div className="task-list">
            <h4 className="app-title-text">Tareas Actuales</h4>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Tarea</th>
                        <th scope="col">Descripcion</th>
                        <th scope="col">Prioridad</th>
                    </tr>
                </thead>
                <tbody>
                    {props.tasks.map((task) => {
                        return (
                            <tr key={task.id} onClick={() => changeModalState()}>
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
                            </tr>
                        )
                    })} 
                </tbody>
            </table>
            <Overlay open={openModal} onClose={() => setOpenModal(false)} closeOnClick>
                <TaskForm updateTask={props.updateTask} title="Editar Tarea" buttonText="Editar Tarea" closeModal={closeModal}/>
            </Overlay>
        </div>
    );
}

export default TaskList;