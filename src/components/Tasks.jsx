import Task from "./Task";

const Tasks = ( {tasks, onDelete, onToggleRemainder} ) => {
    return(
        <>
            {
                tasks.map((tasks) => (
                    <Task
                    key={tasks.id}
                    onDelete={onDelete}
                    task={tasks}
                    onToggleRemainder = {onToggleRemainder}
                    >
                    {tasks.text}
                    </Task>
                ))
            }
            <p>Double click a task to toggle remainder</p>
        </>
    );
}

export default Tasks;