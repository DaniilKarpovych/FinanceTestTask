// Core
import { useEffect } from 'react';
// Other
import { useAppDispatch } from '../lib/redux/init/store';
import { financeActions } from '../lib/redux/actions/financeAction';

export const useFinance = () => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(financeActions.fetchFinanceAsync());
    }, [dispatch]);
};
