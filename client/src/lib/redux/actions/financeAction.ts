import { io } from 'socket.io-client';
import { financeModel } from '../../../types/types';
import { Action, AppThunk } from '../init/store';
import { getFinanceState } from '../selectors/financeStore';
import { financeTypes } from '../types/financeTypes';
import { soketActions } from './soketActions';

export const financeActions = Object.freeze({
    fetchFinance: (finance: financeModel[]): Action => {
        return {
            type: financeTypes.FETCH_FINANCE,
            payload: finance,
        };
    },
    
    fetchError: (errorMessage: string): Action => {
        return {
            type: financeTypes.FETCH_ERROR,
            payload: errorMessage,
        };
    },

    fetchFinanceAsync: (): AppThunk => (dispatch, getState) => {
        try {
            const socket = io('http://localhost:4000');
                    
            socket.emit('start');
            socket.on('ticker', function (finance: financeModel[]) {
                dispatch(soketActions.addSoket(socket))
                const state = getFinanceState(getState())
                if (state[0]) {
                    const changes = finance.map((item: financeModel, index: number) => {
                        const action = item?.price > state[index].price ? 'incresed' : item?.price === state[index]?.price ? 'no changes' : 'descresed'
                        return { ...item, direction: action }
                    })
                    dispatch(financeActions.fetchFinance(changes))
                } else {
                    dispatch(financeActions.fetchFinance(finance))
                }
            })
        } catch (error) {
            const { message } = error as Error;

            dispatch(financeActions.fetchError(message));
        }
    }
});
