
export const FormMensaje = ({ setInputMessage, inputMessage, socket, clientId }) => {


    const handlerMessage = (e) => {
        e.preventDefault()
        socket.send('{"action":"sendMessage","message": "' + inputMessage + '","clientId": "' + clientId + '"}');
        setInputMessage('')
    }

    return (
        <div className="h-[8%] mb-5">
            <form onSubmit={handlerMessage} className="flex h-full ">
                <input
                    type="text"
                    placeholder="Escribe tu mensaje"
                    className="w-full rounded shadow-2xl border-none outline-none px-5"
                    value={inputMessage}
                    onChange={e => setInputMessage(e.target.value)}
                />
                <div className="flex items-center">
                    <button className="ml-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
                        </svg>
                    </button>
                    <button type="submit" className="flex justify-center rounded-full items-center bg-blue-950 w-12 h-12 shadow-2xl md:ml-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                        </svg>
                    </button>
                </div>


            </form>
        </div>
    )
}
