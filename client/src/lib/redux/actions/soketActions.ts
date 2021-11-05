import { Socket } from "socket.io-client";
import { Action } from "../init/store";
import { soketTypes } from "../types/soketType";

export const soketActions = Object.freeze({
    addSoket: (socket: Socket): Action => {
        return {
            type: soketTypes.ADD_SOKET,
            payload: socket,
        };
    },
    restartSoket: (action:boolean): Action => {
        return {
            type: soketTypes.RESTART_SOKET,
            payload: action,
        };
    },
})