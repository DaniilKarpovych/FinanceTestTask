import { financeModel } from '../../../types/types';
import { RootState } from '../init/store';


export const getFinanceState = (state: RootState): financeModel[] => {
    return state.finance.financeState
};
