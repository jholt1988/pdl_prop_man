import React,{use, useEffect} from "react";
import ExpenseManager from "../../components/expense_manager/expense_manager";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import { fetchExpenses, selectExpenses } from "../../store/slices/expenseSlice";

function ExpensePage() {
    const dispatch = useAppDispatch();
    const expenses = useAppSelector(selectExpenses);
    useEffect(() => {
        dispatch(fetchExpenses());
     }, []);
    return (
        <ExpenseManager expenses={expenses} />
    )
}   

export default ExpenseManager