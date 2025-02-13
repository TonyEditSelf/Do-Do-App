
export default function Reminders(props) {

    return (
        <div className={`h-screen w-full flex justify-center items-center bg-[${props.currentTheme.bgcol}]`}>

            <main
                className={`w-[19rem] min-w-[19rem] md:w-[45rem] md:min-w-[45rem] h-[45rem] min-h-[45rem] md:h-[37.5rem] md:min-h-[37.5rem] py-10 rounded-2xl flex flex-col justify-center items-center gap-5`}
                style={{ border: `2px solid ${props.currentTheme.linecol}` }} // 1px solid dynamic border for main container
            >

                <section className="font-[Monoton] text-center w-[15rem] md:w-[30rem]">
                    <h1 className="text-3xl md:text-4xl text-white">Reminders</h1>
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
                        onClick={() => props.onClick('goals')}
                        className={`size-10 text-xl p-4 shadow-2xl rounded-full flex justify-center items-center`}
                        style={{ border: `2px solid ${props.currentTheme.linecol}` }} // 1px solid dynamic border for button
                    >
                        <i className="fa-solid fa-bullseye text-[#E71D36]"></i>
                    </button>

                    <button
                        className={`size-10 text-xl p-4 shadow-2xl rounded-full flex justify-center items-center`}
                        style={{ border: `2px solid ${props.currentTheme.linecol}` }} // 1px solid dynamic border for button
                    >
                        <i className="fa-solid fa-trash-can"></i>
                    </button>
                </section>

                <hr
                    className="w-full"
                    style={{ border: `1px solid ${props.currentTheme.linecol}` }} // 1px solid dynamic border for the separator
                />

                <section className="font-[Rubik] text-white h-[438px] md:h-[350px] w-[15rem] md:w-[30rem] flex-1 flex justify-center items-center gap-3 overflow-y-auto">

                    <h1 className="text-xl md:text-2xl text-white">Under construction</h1>

                </section>

            </main>
        </div>
    );
}
