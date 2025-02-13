export default function Themes(props) {

    return (
        <div className="h-screen w-full flex justify-center items-center" style={{ backgroundColor: props.currentTheme.bgcol }}>

            <main
                className={`w-[19rem] min-w-[19rem] md:w-[45rem] md:min-w-[45rem] h-[45rem] min-h-[45rem] md:h-[37.5rem] md:min-h-[37.5rem] py-10 rounded-2xl flex flex-col justify-center items-center gap-5`}
                style={{
                    border: `2px solid ${props.currentTheme.linecol}`
                }}
            >
                <section className={`font-[Popins] font-bold text-center w-[15rem] md:w-[30rem]`}>
                    <h1 className={`text-3xl md:text-4xl text-white`} >Themes</h1>

                </section>

                <section className={`font-[Rubik] flex justify-center gap-2 w-[15rem] text-white`}>
                    <button
                        onClick={() => props.onClick('home')}
                        className={`size-10 text-xl p-4 shadow-2xl rounded-full flex justify-center items-center`}
                        style={{ border: `2px solid ${props.currentTheme.linecol}` }}
                    >
                        <i className={`fa-solid fa-house text-[#00b492]`}></i>
                    </button>

                    <button
                        onClick={() => props.onClick('todolist')}
                        className={`size-10 text-xl p-4 shadow-2xl rounded-full flex justify-center items-center`}
                        style={{ border: `2px solid ${props.currentTheme.linecol}` }}
                    >
                        <i className={`fa-solid fa-list-check text-[#F46036]`}></i>
                    </button>

                    <button
                        onClick={() => props.onClick('reminders')}
                        className={`size-10 text-xl p-4 shadow-2xl rounded-full flex justify-center items-center`}
                        style={{ border: `2px solid ${props.currentTheme.linecol}` }}
                    >
                        <i className={`fa-solid fa-bell text-[#C5D86D]`}></i>
                    </button>

                    <button
                        onClick={() => props.onClick('goals')}
                        className={`size-10 text-xl p-4 shadow-2xl rounded-full flex justify-center items-center`}
                        style={{ border: `2px solid ${props.currentTheme.linecol}` }}
                    >
                        <i className={`fa-solid fa-bullseye text-[#E71D36]`}></i>
                    </button>
                </section>

                <hr
                    className={`w-full`}
                    style={{ border: `1px solid ${props.currentTheme.linecol}` }}
                />

                <section className={`font-[Rubik] h-[438px] md:h-[350px] w-[15rem] md:w-[30rem] flex flex-col gap-2 justify-center items-center overflow-y-auto text-white`}>

                    <div className={`flex justify-center items-center gap-3`}>
                        <div><h1>Space Cadet & Persian Green</h1></div>

                        <div onClick={() => props.changeTheme('scpg')} className={`flex cursor-pointer`}>
                            <div className={`size-10 bg-[#2E294E]`}
                                style={{ border: `2px solid ${props.currentTheme.linecol}` }}></div>
                            <div className={`bg-[#1B998B] size-10`}
                                style={{ border: `2px solid ${props.currentTheme.linecol}` }}
                            ></div>
                        </div>
                    </div>

                    <div className={`flex justify-center items-center gap-3`}>
                        <div><h1>Space Cadet & Giant's Orange</h1></div>

                        <div onClick={() => props.changeTheme('pgsc')} className={`flex cursor-pointer`}>
                            <div className={`bg-[#2E294E] size-10`}
                                style={{ border: `2px solid ${props.currentTheme.linecol}` }}
                            ></div>
                            <div className={`size-10 bg-[#F46036]`}
                                style={{ border: `2px solid ${props.currentTheme.linecol}` }}
                            ></div>
                        </div>
                    </div>

                    <div className={`flex justify-center items-center gap-3`}>
                        <div><h1>Space Cadet & Mindaro</h1></div>
                        <div onClick={() => props.changeTheme('scmi')} className={`flex cursor-pointer`}>
                            <div className={`bg-[#2E294E] size-10`}
                                style={{ border: `2px solid ${props.currentTheme.linecol}` }}
                            ></div>
                            <div className={`size-10 bg-[#C5D86D]`}
                                style={{ border: `2px solid ${props.currentTheme.linecol}` }}
                            ></div>
                        </div>
                    </div>

                    <div className={`flex justify-center items-center gap-3`}>
                        <div><h1>Space Cadet & Cream</h1></div>
                        <div onClick={() => props.changeTheme('sccr')} className={`flex cursor-pointer`}>
                            <div className={`bg-[#2E294E] size-10`}
                                style={{ border: `2px solid ${props.currentTheme.linecol}` }}
                            ></div>
                            <div className={`size-10 bg-[#EAEFBD]`}
                                style={{ border: `2px solid ${props.currentTheme.linecol}` }}
                            ></div>
                        </div>



                    </div>

                    <div className={`flex justify-center items-center gap-3`}>
                        <div><h1>Space Cadet & Cream</h1></div>
                        <div onClick={() => props.changeTheme('scbe')} className={`flex cursor-pointer`}>
                            <div className={`bg-[#2E294E] size-10`}
                                style={{ border: `2px solid ${props.currentTheme.linecol}` }}
                            ></div>
                            <div className={`size-10 bg-[#877666]`}
                                style={{ border: `2px solid ${props.currentTheme.linecol}` }}
                            ></div>
                        </div>
                    </div>

                </section>
            </main>
        </div>
    );
}
