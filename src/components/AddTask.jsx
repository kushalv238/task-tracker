import { useState } from "react";

const AddTask = ({ onAdd }) => {
    const [text, setText] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [rem, setRem] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();

        if(!text) {
            alert('Please add a task');
            return;
        }
        const dateTime =  <><p> Date: {date}</p> <p>Time: {time}</p></>;

        onAdd({ text, day: dateTime, remainder: rem });

        setText('');
        setDate('');
        setRem(false);
    }

    return(
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Task</label>
                <input
                    type='text'
                    placeholder="Add Task"
                    value={text}
                    onChange={(e) => {setText(e.target.value)}}
                />
            </div>

            <div className="form-control dateTime-form">
                <label>Date</label>
                <input
                    type='date'
                    placeholder="Add date"
                    value={date}
                    onChange={(e) => {setDate(e.target.value)}}
                />
            </div>
            <div className="form-control dateTime-form">
                <label>Time</label>
                <input
                    type='time'
                    placeholder="Add time"
                    value={time}
                    onChange={(e) => {setTime(e.target.value)}}
                />
            </div>

            <div className="form-control form-control-check">
                <label>Set Remainder</label>
                <input
                    type='checkbox'
                    checked={ rem }
                    value={rem}
                    onChange={(e) => {setRem(e.currentTarget.checked)}}
                />
            </div>

            <input className="btn btn-block" type='submit' value='Add Task'/>
        </form>
    );
}

export default AddTask;