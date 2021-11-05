// Types
import { AnyAction } from 'redux';
import { financeTypes } from '../types/financeTypes';

const initialState = {
    financeState: [],
    errorMessage: '',
};

export const financeReducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {

        case financeTypes.FETCH_FINANCE: {
            return {
                ...state,
                financeState: action.payload,
            };
        }
        case financeTypes.FETCH_ERROR: {
            return {
                ...state,
                errorMessage: action.payload,
            };
        }

        default: {
            return state;
        }
    }
};
