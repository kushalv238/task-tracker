import { useState } from "react";

//components
import Header from "./Header";
import '../index.css';
import Tasks from './Tasks';
import AddTask from './AddTask';

let ID = 0;

const App = () => {
    const [showAdd, setShowAdd] = useState(false);
    const [tasks, setTasks] = useState(
        [
        ]
    );

    const toggleRemainder = (id) => {
        setTasks(tasks.map((tasks) => tasks.id === id ? {...tasks, remainder: !tasks.remainder} : tasks));
    }

    const addTask = (task) => {
        const id = ++ID;
        const newTask = { id, ...task };
        setTasks([newTask, ...tasks])
        setShowAdd(false);
    }

    const deleteTasks = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
        ID--;
        
    }
    return (
        <div className="container">
            <Header onAdd={() => setShowAdd(!showAdd)} showAdd={showAdd} title='Task Tracker'/>

            {showAdd && <AddTask onAdd={addTask} />}

            {
                tasks.length > 0
                ?
                <Tasks tasks={tasks} onDelete={deleteTasks} onToggleRemainder={toggleRemainder}/>
                :
                <>
                    <p>
                        No tasks available.
                    </p>
                    <p>
                        Click Add button to add tasks
                    </p>
                </>
            }
        </div>
    );
}

export default App;