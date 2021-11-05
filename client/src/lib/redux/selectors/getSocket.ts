import { Socket } from 'socket.io-client';
import { RootState } from '../init/store';


export const getSocket = (state: RootState): Socket => {
    return state.socket.socket;
};