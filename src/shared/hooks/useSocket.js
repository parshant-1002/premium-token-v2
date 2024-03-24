import { useEffect, useRef, useState } from 'react';
import io from 'socket.io-client';
import { SOCKET_URL } from '../constants';

const useSocket = () => {
    const socketObject = useRef(null);
    const [socket, setSocket] = useState(null);
    console.log(SOCKET_URL,"socketurl")
    useEffect(() => {
        socketObject.current = io(SOCKET_URL, { transports: ['websocket'] });

        socketObject.current.on('connect', () => {
            console.log('connected');
            setSocket(socketObject.current);
        });

        return () => {
            if (socket?.connected) {
                socket.removeAllListeners();
                socket.disconnect();
            }
        };
    }, []);

    return socket;
};

export default useSocket;
