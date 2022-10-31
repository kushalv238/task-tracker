import { FaTimes } from 'react-icons/fa';

const Task = ( {task, onDelete, onToggleRemainder} ) => {
    return(
    <div style={ { borderLeft: `5px solid ${task.remainder ? 'yellowgreen' : 'grey'}` } } className='task' onDoubleClick={() => onToggleRemainder(task.id)}>
            <h3>{task.text} <FaTimes onClick={() => onDelete(task.id)} /></h3>
            <p>{task.day}</p>
        </div>
    );
}


export default Task;