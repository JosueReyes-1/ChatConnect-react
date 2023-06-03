import { useState } from "react";
import { ChatContainer } from "./components/ChatContainer"
import { Header } from "./components/Header"
import { useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
function App() {

    const [messages, setMessages] = useState([]);
    const [inputMessage, setInputMessage] = useState('');
    const [socket, setSocket] = useState(null);
    const [clientId, setClientId] = useState(null);
    useEffect(() => {
        const newSocket = new WebSocket('wss://f3zuv1ax80.execute-api.us-east-1.amazonaws.com/production')
        setSocket(newSocket)
        const id = uuidv4();
        setClientId(id)
    }, []);

    useEffect(() => {
        if(socket!==null){
            socket.onmessage = function (event) {
                const newMessage = {
                    message: event.data
                }
                console.log(newMessage);
                // setMessages([...messages,newMessage])
                setMessages(prevMessages => [...prevMessages, newMessage]);
                console.log(`[message] Datos recibidos del servidor: ${event.data}`);
            };
        }
    }, [socket]);
    return (
        <div className="max-h-[100vh] h-[100vh]">
            <Header />
            <ChatContainer
                setInputMessage={setInputMessage}
                inputMessage={inputMessage}
                socket={socket}
                messages={messages}
                clientId={clientId}
            />
        </div>
    )
}

export default App
