// Types
import { AnyAction } from 'redux';
import { soketTypes } from '../types/soketType';

const initialState = {
    socket: null,
};

export const socketReducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {

        case soketTypes.ADD_SOKET: {
            return {
                ...state,
                socket: action.payload,
            };
        }

        default: {
            return state;
        }
    }
};
