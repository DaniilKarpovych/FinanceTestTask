// Core
import { combineReducers } from 'redux';

// Reducers
import { financeReducer as finance } from '../reducers/financeReducer';
import { selectCompanyReducer as selectedCompany } from '../reducers/selectCompanyReduser';
import { socketReducer as socket } from '../reducers/socketReducer';
export const rootReducer = combineReducers({
    finance,
    selectedCompany,
    socket,
});
