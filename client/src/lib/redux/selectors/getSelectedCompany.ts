import { RootState } from '../init/store';


export const getCompanyState = (state: RootState):{selectedCompany: string[]}=> {
    return state.selectedCompany
};
