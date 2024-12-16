import React,{useEffect} from "react";
import TransactionManager from "../../components/transaction_manager/transaction_manager";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import { fetchTransactions, selectAllTransactions } from "../../store/slices/ledgerSlice";
import { selectTenants } from "../../store/slices/ledgerSlice";
import {selectLeases} from "../../store/slices/leaseSlice";
function TransactonPage() {
    const dispatch = useAppDispatch();
    const transactions = useAppSelector(selectAllTransactions);
    const tenants = useAppSelector(selectTenants);
    const leases = useAppSelector(selectLeases);
    useEffect(() => {
        dispatch(fetchTransactions());
    }, []);

    return (
        <TransactionManager tenants={tenants} lease={leases} transactions={transactions} />
    )
}

export default TransactonPage