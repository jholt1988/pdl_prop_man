'use client'
import React, { useState } from "react";
import { addTransaction } from "../../store/expenseSlice";
import { useAppDispatch, useAppSelector } from "../../lib/hooks";

const ExpenseManager = ({expenses}) => {
    // State for expenses and filters
    const dispatch = useAppDispatch();
    const [expenses, setExpenses] = useState([]);
    const [filter, setFilter] = useState("");
    const [form, setForm] = useState({
        id: null,
        description: "",
        category: "",
        amount: "",
        date: "",
    });

    // Handle form changes
    const handleFormChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    // Add a new expense
    const addExpense = () => {
        if (!form.description || !form.category || !form.amount || !form.date) return;
        const newExpense = { ...form, id: Date.now() };
        setExpenses([...expenses, newExpense]);
        dispatch(addTransaction(newExpense));
        resetForm();
    };

    // Edit an existing expense
    const editExpense = (id) => {
        const expense = expenses.find((e) => e.id === id);
        setForm(expense);
    };

    // Update expense after editing
    const updateExpense = () => {
        setExpenses(expenses.map((e) => (e.id === form.id ? form : e)));
        resetForm();
    };

    // Delete an expense
    const deleteExpense = (id) => {
        setExpenses(expenses.filter((e) => e.id !== id));
    };

    // Reset the form
    const resetForm = () => {
        setForm({ id: null, description: "", category: "", amount: "", date: "" });
    };

    // Filter expenses by category
    const filteredExpenses = () => {
        if (!filter) return expenses;
        return expenses.filter((e) => e.category.toLowerCase() === filter.toLowerCase());
    };

    return (
        <div className="p-4 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Expense Manager</h2>

            {/* Add/Edit Form */}
            <div className="p-4 border rounded-lg shadow mb-4">
                <h3 className="text-lg font-semibold mb-2">
                    {form.id ? "Edit Expense" : "Add New Expense"}
                </h3>
                <div className="space-y-2">
                    <div>
                        <label className="block text-sm font-medium">Description</label>
                        <input
                            type="text"
                            name="description"
                            value={form.description}
                            onChange={handleFormChange}
                            className="block w-full border-gray-300 rounded-md shadow-sm"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium">Category</label>
                        <input
                            type="text"
                            name="category"
                            value={form.category}
                            onChange={handleFormChange}
                            className="block w-full border-gray-300 rounded-md shadow-sm"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium">Amount</label>
                        <input
                            type="number"
                            name="amount"
                            value={form.amount}
                            onChange={handleFormChange}
                            className="block w-full border-gray-300 rounded-md shadow-sm"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium">Date</label>
                        <input
                            type="date"
                            name="date"
                            value={form.date}
                            onChange={handleFormChange}
                            className="block w-full border-gray-300 rounded-md shadow-sm"
                        />
                    </div>
                    <div>
                        <button
                            onClick={form.id ? updateExpense : addExpense}
                            className="px-4 py-2 bg-blue-600 text-white rounded-md mt-2"
                        >
                            {form.id ? "Update Expense" : "Add Expense"}
                        </button>
                        {form.id && (
                            <button
                                onClick={resetForm}
                                className="px-4 py-2 bg-gray-600 text-white rounded-md mt-2 ml-2"
                            >
                                Cancel
                            </button>
                        )}
                    </div>
                </div>
            </div>

            {/* Filter Expenses */}
            <div className="p-4 border rounded-lg shadow mb-4">
                <h3 className="text-lg font-semibold mb-2">Filter Expenses</h3>
                <div className="space-y-2">
                    <input
                        type="text"
                        placeholder="Filter by Category"
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                        className="block w-full border-gray-300 rounded-md shadow-sm"
                    />
                </div>
            </div>

            {/* Expenses List */}
            <div className="p-4 border rounded-lg shadow">
                <h3 className="text-lg font-semibold mb-2">Expenses</h3>
                {filteredExpenses().length > 0 ? (
                    <table className="min-w-full table-auto border-collapse">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="px-4 py-2 text-left text-sm font-medium">Description</th>
                                <th className="px-4 py-2 text-left text-sm font-medium">Category</th>
                                <th className="px-4 py-2 text-left text-sm font-medium">Amount</th>
                                <th className="px-4 py-2 text-left text-sm font-medium">Date</th>
                                <th className="px-4 py-2 text-left text-sm font-medium">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredExpenses().map((e) => (
                                <tr key={e.id} className="border-t">
                                    <td className="px-4 py-2">{e.description}</td>
                                    <td className="px-4 py-2">{e.category}</td>
                                    <td className="px-4 py-2">{e.amount}</td>
                                    <td className="px-4 py-2">{e.date}</td>
                                    <td className="px-4 py-2">
                                        <button
                                            onClick={() => editExpense(e.id)}
                                            className="px-2 py-1 bg-yellow-500 text-white rounded-md mr-2"
                                        >
                                            Edit
                                        </button>
                                        <button
                                            onClick={() => deleteExpense(e.id)}
                                            className="px-2 py-1 bg-red-600 text-white rounded-md"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p className="text-gray-500">No expenses found.</p>
                )}
            </div>
        </div>
    );
};

export default ExpenseManager;
