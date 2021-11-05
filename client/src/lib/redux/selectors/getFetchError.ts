import { RootState } from '../init/store';


export const getFetchError = (state: RootState):string=> {
    return state.finance.errorMessage;
};
