import { useEffect, useState } from "react";

export default function Home(props) {

    const [quotation, setQuotation] = useState('');
    const [author, setAuthor] = useState('');

    useEffect(() => {

        const storedQuotation = localStorage.getItem('quotation');

        if (quotation) {
            setQuotation(storedQuotation);
        } else {

            fetch('https://api.allorigins.win/raw?url=https://zenquotes.io/api/random', {
                method: 'GET',
            })
                .then(response => response.json())
                .then(data => {
                    const quote = data[0].q;
                    const quoteAuthor = data[0].a;
                    localStorage.setItem('quotation', quote);
                    localStorage.setItem('author', quoteAuthor);
                    setQuotation(quote);
                    setAuthor(quoteAuthor);
                })
                .catch(error => {
                    setQuotation('problem fetching from API');
                });
        }
    }, []);


    return (
        <div className={`h-screen w-full flex justify-center items-center bg-[${props.currentTheme.bgcol}]`}>

            <main
                className={`w-[19rem] min-w-[19rem] md:w-[45rem] md:min-w-[45rem] h-[45rem] min-h-[45rem] md:h-[35rem] md:min-h-[35rem] rounded-2xl flex flex-col justify-center items-center gap-7`}
                style={{ border: `2px solid ${props.currentTheme.linecol}` }}>

                <section className="font-[Popins] font-extrabold text-center w-[15rem]">
                    <h1 className="text-4xl m-2 text-white">Do-Do</h1>
                </section>

                <section className="font-[Rubik] flex flex-col md:flex md:flex-row md:justify-center md:items-center gap-10 md:gap-4 text-white w-[15rem] md:w-[40rem] flex-wrap">
                    <button
                        onClick={() => props.onClick('todolist')}
                        className="text-xl p-4 rounded-2xl shadow-2xl md:size-36"

                        style={{ border: `2px solid ${props.currentTheme.linecol}` }}>
                        To-Do-List &nbsp; <i className="fa-solid fa-list-check text-orange-400"></i>
                    </button>

                    <button
                        onClick={() => props.onClick('reminders')}
                        className="text-xl p-4 rounded-2xl shadow-2xl md:size-36"
                        style={{ border: `2px solid ${props.currentTheme.linecol}` }}>
                        Reminders &nbsp; <i className="fa-solid fa-bell text-[#C5D86D]"></i>
                    </button>

                    <button
                        onClick={() => props.onClick('goals')}
                        className="text-xl p-4 rounded-2xl shadow-2xl md:size-36 text-center"
                        style={{ border: `2px solid ${props.currentTheme.linecol}` }}>
                        Set Goals &nbsp; <i className="fa-solid fa-bullseye text-[#E71D36]"></i>
                    </button>

                    <button
                        onClick={() => props.onClick('themes')}
                        className="text-xl p-4 rounded-2xl shadow-2xl md:size-36"
                        style={{ border: `2px solid ${props.currentTheme.linecol}` }}>
                        Themes &nbsp; <i className="text-pink-500 fa-solid fa-paint-roller"></i>
                    </button>
                </section>

                <section className="w-[245px] md:w-[635px] h-auto md:h-[65px] overflow-auto rounded-lg md:p-4 p-3 bg-[#1f1c37] shadow-lg flex justify-center items-center">
                    <p className="text-white text-center md:py-0 py-3 px-2">{quotation} -- {author}</p>
                </section>


            </main >
        </div>
    );
}
