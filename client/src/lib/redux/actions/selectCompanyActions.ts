import { Action } from "../init/store";
import { financeTypes } from "../types/financeTypes";

export const selectCompanyActions = Object.freeze({
    selectCompany: (selectedCompany: string): Action => {
        return {
            type: financeTypes.SELECT_COMPANY,
            payload: selectedCompany,
        };
    },
    resetCompany: () => {
        return {
            type: financeTypes.RESET_COMPANY,            
        };
    },
})