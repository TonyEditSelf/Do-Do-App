import { useState } from "react";

export default function ToDoList(props) {

    const [tasks, setTasks] = useState([]);         // To store active tasks
    const [doneTasks, setDoneTasks] = useState([]);  // To store completed tasks
    const [inputTask, setInputTask] = useState('');  // To store the current input value

    const addTaskOnClick = () => {
        if (inputTask) {
            setTasks(t => [...t, { id: Date.now(), task: inputTask, checked: false }]);
            setInputTask("");  // Reset the input field
        }
    }

    const addTaskWithKey = (e) => {
        if (e.key === 'Enter') {
            setTasks(t => [...t, { id: Date.now(), task: inputTask, checked: false }]);
            setInputTask("");  // Reset the input field
        }
    }

    const pushIntoDoneTasks = (e) => {
        const taskId = parseInt(e.target.id);

        if (e.target.checked) {
            const task = tasks.find(task => task.id === taskId);
            setDoneTasks(d => [...d, { ...task, checked: true }]);
            const updatedTasks = tasks.filter(task => task.id !== taskId);
            setTasks(updatedTasks);
        }
    }

    const pushIntoTasks = (e) => {
        const taskId = parseInt(e.target.id);

        if (!e.target.checked) {
            const doneTask = doneTasks.find(doneTask => doneTask.id === taskId);
            setTasks(t => [...t, { ...doneTask, checked: false }]);
            const updatedDoneTasks = doneTasks.filter(doneTask => doneTask.id !== taskId);
            setDoneTasks(updatedDoneTasks);
        }
    }

    const deleteTask = (e) => {
        const idOfTask = parseInt(e.target.id);
        const updatedTasks = tasks.filter(task => task.id !== idOfTask);
        setTasks(updatedTasks);
    }

    const deleteDoneTask = (e) => {
        const idOfTask = parseInt(e.target.id);
        const updatedTasks = doneTasks.filter(doneTask => doneTask.id !== idOfTask);
        setDoneTasks(updatedTasks);
    }

    const deleteLists = () => {
        setTasks([]);
        setDoneTasks([]);
    }

    return (
        <div className={`h-screen w-full flex justify-center items-center bg-[${props.currentTheme.bgcol}]`}>
            <main className={`w-[19rem] min-w-[19rem] md:w-[45rem] md:min-w-[45rem] h-[45rem] min-h-[45rem] md:h-[37.5rem] md:min-h-[37.5rem] py-10 rounded-2xl flex flex-col justify-center items-center gap-5`} style={{
                border: `2px solid ${props.currentTheme.linecol}`
            }}>

                <section className="font-[Popins] font-bold text-center w-[15rem] md:w-[30rem]">
                    <h1 className="text-3xl md:text-4xl text-white">To-Do-List</h1>
                </section>

                <section className="font-[Rubik] flex justify-center gap-2 text-white w-[15rem]">
                    <button onClick={() => props.onClick('home')} className={`size-10 text-xl p-4 shadow-2xl rounded-full flex justify-center items-center `}
                        style={{ border: `2px solid ${props.currentTheme.linecol}` }}><i className="fa-solid fa-house text-[#00b492]"></i></button>

                    <button onClick={() => props.onClick('reminders')} className={`size-10 text-xl p-4 shadow-2xl rounded-full flex justify-center items-center `}
                        style={{ border: `2px solid ${props.currentTheme.linecol}` }}>
                        <i className="fa-solid fa-bell text-[#C5D86D]"></i></button>

                    <button onClick={() => props.onClick('goals')} className={`size-10 text-xl p-4 shadow-2xl rounded-full flex justify-center items-center `}
                        style={{ border: `2px solid ${props.currentTheme.linecol}` }}>
                        <i className="fa-solid fa-bullseye text-[#E71D36]"></i></button>

                    <button className={`size-10 text-xl p-4 shadow-2xl rounded-full flex justify-center items-center `}
                        style={{ border: `2px solid ${props.currentTheme.linecol}` }}>
                        <i onClick={deleteLists} className="fa-solid fa-trash-can"></i></button>
                </section>

                <hr className={`w-full`} style={{ border: `1px solid ${props.currentTheme.linecol}` }} />

                <section className="font-[Rubik] text-white w-[15rem] md:w-[30rem] shadow-2xl flex">
                    <input
                        className="w-[12rem] md:w-[30rem] outline-none px-3 border-t-2 border-b-2 border-l-2 rounded-tl-md rounded-bl-md border-slate-400"
                        style={{ borderColor: props.currentTheme.linecol }}
                        value={inputTask}
                        onChange={(e) => setInputTask(e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1))}
                        onKeyDown={addTaskWithKey}
                        autoFocus
                    />
                    <button onClick={addTaskOnClick} className={`px-4 py-2 font-bold text-black rounded-tr-md rounded-br-md bg-[${props.currentTheme.linecol}]`}>+</button>
                </section>

                <section className="font-[Rubik] text-white h-[438px] md:h-[350px] w-[15rem] md:w-[30rem] flex-1 flex flex-col gap-3 overflow-y-auto">
                    <ul className="w-full py-1 px-4 md:py-4 text-sm md:text-xl flex flex-col justify-center items-center">
                        {
                            tasks.map((task) => (
                                <li className="py-1 flex items-center justify-between w-[220px] md:w-[475px]" key={task.id}>
                                    <div>
                                        <label className="w-full overflow-x-auto h-[30px] text-white" htmlFor={`${task.id}`}>
                                            <input
                                                type="checkbox"
                                                onChange={pushIntoDoneTasks}
                                                checked={task.checked}
                                                name=""
                                                id={`${task.id}`}
                                            /> &nbsp;&nbsp;&nbsp;
                                            {task.task}
                                        </label>
                                    </div>
                                    <div>
                                        <i onClick={deleteTask} id={`${task.id}`} className="fa-solid fa-circle-xmark text-sm md:text-xl" style={{ color: props.currentTheme.linecol }}></i>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>

                    <ul className="w-full py-1 px-4 md:py-4 text-sm md:text-xl overflow-y-auto">
                        {
                            doneTasks.map((doneTask) => (
                                <li className="py-1 flex justify-between items-center" key={doneTask.id}>
                                    <div>
                                        <label className="line-through text-slate-400 w-[30px] md:w-[50px] h-[30px]" htmlFor={`${doneTask.id}`}>
                                            <input
                                                type="checkbox"
                                                checked={doneTask.checked}
                                                onChange={pushIntoTasks}
                                                name=""
                                                id={`${doneTask.id}`}
                                            /> &nbsp;
                                            {doneTask.task}
                                        </label>
                                    </div>
                                    <div>
                                        <i onClick={deleteDoneTask} id={`${doneTask.id}`} className="fa-solid fa-circle-xmark text-sm md:text-xl" style={{ color: props.currentTheme.linecol }}></i>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </section>
            </main>
        </div>
    );
}
