// Types
import { AnyAction } from 'redux';
import { financeTypes } from '../types/financeTypes';

const initialState = {
     selectedCompany: [],
};

export const selectCompanyReducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {

        case financeTypes.RESET_COMPANY: {
            return {
                ...state,
                selectedCompany: [],
            };
        }

        case financeTypes.SELECT_COMPANY: {
            return {
                ...state,
                selectedCompany:  [...new Set([...state.selectedCompany, action.payload])]
            };
        }

        default: {
            return state;
        }
    }
};
