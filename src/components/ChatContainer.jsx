import { FormMensaje } from "./FormMensaje"
import { Message } from "./Message"

export const ChatContainer = ({ setInputMessage, inputMessage, socket,messages,clientId}) => {
    return (
        <div className="flex justify-center items-center h-[90%] md:h-3/4  md:mt-20">
            <div className="bg-white drop-shadow-2xl rounded-2xl h-[90%] md:w-3/4 flex flex-wrap justify-center w-[90%]">
                <div className="w-full px-10 h-[10%] flex items-center border-b-2 border-gray-50">
                    <h1 className="text-blue-950 font-bold text-2xl">Grupo</h1>
                </div>
                <div className="w-5/6 h-[90%] flex flex-col justify-end ">
                    <div className="max-h-[85%] overflow-x-auto">
                        {messages.map((message,i)=>(
                            <Message
                                key={i}
                                message={message}
                                clientId={clientId}
                            />
                        ))}
                        
                        
                    </div>
                    <FormMensaje
                        setInputMessage={setInputMessage}
                        inputMessage={inputMessage}
                        socket={socket}
                        clientId={clientId}
                    />
                </div>

            </div>
        </div>
    )
}
