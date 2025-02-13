import { useState } from "react";

export default function SetGoals(props) {

    const [goals, setGoals] = useState([]);

    const [inputGoal, setInputGoal] = useState('');  // To store the current input value

    const addGoalWithKey = (e) => {

        if (e.key === 'Enter') {

            setGoals(g => [...g, { id: Date.now(), goal: inputGoal, checked: false }])
            setInputGoal('');
        }
    }

    const addGoalOnClick = () => {
        if (inputGoal) {
            setGoals(g => [...g, { id: Date.now(), goal: inputGoal, checked: false }])
            setInputGoal('');
        }
    }

    const deleteGoal = (e) => {
        const idOfGoal = parseInt(e.target.id);

        const updatedGoals = goals.filter(goal => goal.id !== idOfGoal)
        setGoals(updatedGoals);
    }

    const deleteLists = () => {
        setGoals([]);
    }

    return (
        <div className={`h-screen w-full flex justify-center items-center bg-[${props.currentTheme.bgcol}]`}>
            <main
                className={`w-[19rem] min-w-[19rem] md:w-[45rem] md:min-w-[45rem] h-[45rem] min-h-[45rem] md:h-[37.5rem] md:min-h-[37.5rem] py-10 rounded-2xl flex flex-col justify-center items-center gap-5`}
                style={{ border: `2px solid ${props.currentTheme.linecol}` }} // 1px solid dynamic border for main container
            >

                <section className="font-[Monoton] text-center w-[15rem] md:w-[30rem]">
                    <h1 className="text-3xl md:text-4xl text-white">Goals</h1>
                </section>

                <section className="font-[Rubik] flex justify-center gap-2 text-white w-[15rem]">
                    <button
                        onClick={() => props.onClick('home')}
                        className={`size-10 text-xl p-4 shadow-2xl rounded-full flex justify-center items-center`}
                        style={{ border: `2px solid ${props.currentTheme.linecol}` }} // 1px solid dynamic border for button
                    >
                        <i className="fa-solid fa-house text-[#00b492]"></i>
                    </button>

                    <button
                        onClick={() => props.onClick('todolist')}
                        className={`size-10 text-xl p-4 shadow-2xl rounded-full flex justify-center items-center`}
                        style={{ border: `2px solid ${props.currentTheme.linecol}` }} // 1px solid dynamic border for button
                    >
                        <i className="fa-solid fa-list-check text-[#F46036]"></i>
                    </button>

                    <button
                        onClick={() => props.onClick('reminders')}
                        className={`size-10 text-xl p-4 shadow-2xl rounded-full flex justify-center items-center`}
                        style={{ border: `2px solid ${props.currentTheme.linecol}` }} // 1px solid dynamic border for button
                    >
                        <i className="fa-solid fa-bell text-[#C5D86D]"></i>
                    </button>

                    <button
                        className={`size-10 text-xl p-4 shadow-2xl rounded-full flex justify-center items-center`}
                        style={{ border: `2px solid ${props.currentTheme.linecol}` }} // 1px solid dynamic border for button
                    >
                        <i
                            onClick={deleteLists}
                            className="fa-solid fa-trash-can"
                        />
                    </button>
                </section>

                <hr
                    className="w-full"
                    style={{ border: `1px solid ${props.currentTheme.linecol}` }} // 1px solid dynamic border for the separator
                />

                <section className="font-[Rubik] text-white h-[438px] md:h-[350px] w-[15rem] md:w-[30rem] flex-1 flex flex-col gap-3 overflow-y-auto">

                    <ul>
                        {
                            goals.map((goal) => (
                                <li
                                    className="py-1 flex items-center justify-between"
                                    key={goal.id}
                                    style={{ borderBottom: `1px solid ${props.currentTheme.linecol}` }} // 1px solid dynamic border for list items
                                >
                                    <div>
                                        <label htmlFor={goal.id} className="w-[30px] md:w-[50px] overflow-x-scroll h-[30px] text-white">
                                            <input
                                                type="checkbox"
                                                id={goal.id}
                                            />
                                            &nbsp;&nbsp;&nbsp;{goal.goal}
                                        </label>
                                    </div>
                                    <div>
                                        <i
                                            id={goal.id}
                                            onClick={deleteGoal}
                                            className="fa-solid fa-circle-xmark text-sm md:text-xl"
                                            style={{ color: props.currentTheme.linecol }} // Dynamic color for delete icon
                                        />
                                    </div>
                                </li>
                            ))
                        }
                    </ul>

                </section>

                <section className="font-[Rubik] text-white w-[15rem] md:w-[30rem] shadow-2xl flex">
                    {/* Input field for adding tasks */}
                    <input
                        className="w-[12rem] md:w-[30rem] outline-none px-3 border-t-2 border-b-2 border-l-2 rounded-tl-md rounded-bl-md border-slate-400"
                        value={inputGoal}
                        onChange={(e) => setInputGoal(e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1))}  // Capitalize the first letter
                        onKeyDown={addGoalWithKey}  // Add task on Enter key press
                        autoFocus
                        style={{ borderColor: props.currentTheme.linecol }} // Dynamic border for input field
                    />
                    {/* Add task button */}
                    <button
                        onClick={addGoalOnClick}
                        className={`px-4 py-2 font-bold rounded-tr-md rounded-br-md text-black`}
                        style={{ backgroundColor: props.currentTheme.linecol }} // Dynamic background color for button
                    >
                        +
                    </button>
                </section>

            </main>
        </div>
    );

}
