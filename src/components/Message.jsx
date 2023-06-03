import { useState } from "react";
import { useEffect } from "react"

export const Message = ({ message, clientId }) => {
    const [messageValue, setMessageValue] = useState('');
    const [isMyMessage, setIsMyMessage] = useState(false);
    useEffect(() => {
        const message2 = JSON.parse(message.message)
        setMessageValue(message2.message)
        console.log(clientId);
        console.log(message2.clientId);
        if (message2.clientId === clientId) {
            setIsMyMessage(true)
        }
    }, [message]);

    return (

        <>
            {isMyMessage ? (
                <div className="mb-10 mx-2 flex justify-end">
                    <div className="relative inline-block bg-blue-950 text-white rounded-lg p-4 ml-auto">
                        <p className="m-0 pe-3">{messageValue.replace(/["']/g, '')}</p>
                        <div className="absolute right-2 bottom-0 h-6 w-6 bg-blue-950 transform rotate-45"></div>
                    </div>
                </div>
            ) : (
                <div className="mb-10 mx-2">
                    <div className="relative inline-block text-white bg-blue-400 rounded-lg p-4 ">
                        <p className="m-0 ps-2">{messageValue.replace(/["']/g, '')}</p>
                        <div className="absolute left-2 bottom-0 h-6 w-6 bg-blue-400 transform rotate-45"></div>
                    </div>
                </div>
            )}
        </>




    )
}
