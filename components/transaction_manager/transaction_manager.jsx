
'use client'
import React, { useState } from "react";
import { useAppDispatch, useAppSelector} from "../../utils/hooks";
import createTenantStatement from "../../app/reports/tenantStatement";
import { addTransaction as saveTransaction } from "../../app/store/ledgerSlice";

const TransactionManager = ({tenants, lease}) => {
    const dispatch = useAppDispatch();

    // Sample tenants and leases for dropdowns
    // const tenants = [
    //     { id: "1", name: "John Doe" },
    //     { id: "2", name: "Jane Smith" },
    // ];

    // const leases = [
    //     { id: "101", name: "Sunset Apartments - Unit 1" },
    //     { id: "102", name: "Downtown Lofts - Unit 3" },
    // ];

    // State for transactions and filtering
    const nonNullTenants = tenants.filter((tenant) => tenant !== null);
    const [leases, setLeases] = useState(nonNullTenants);
    const [transactions, setTransactions] = useState([]);
    const [filter, setFilter] = useState("all"); // 'all', 'tenant', or 'lease'
    const [selectedFilterValue, setSelectedFilterValue] = useState("");
    const [form, setForm] = useState({
        id: null,
        tenant: "",
        lease: "",
        description: "",
        amount: "",
        date: "",
    });

    // Handle form changes
    const handleFormChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    // Add a new transaction
    const addTransaction = () => {
        if (!form.tenant || !form.lease || !form.amount || !form.date) return;
        const newTransaction = { ...form, id: Date.now() };
        setTransactions([...transactions, newTransaction]);
        dispatch(saveTransaction({ tenantId: form.tenant, transaction:newTransaction }));
        resetForm();
    };

    // Edit an existing transaction
    const editTransaction = (id) => {
        const transaction = transactions.find((t) => t.id === id);
        setForm(transaction);
    };

    // Update transaction after editing
    const updateTransaction = () => {
        setTransactions(
            transactions.map((t) => (t.id === form.id ? form : t))
        );
        resetForm();
    };

    // Delete a transaction
    const deleteTransaction = (id) => {
        setTransactions(transactions.filter((t) => t.id !== id));
    };

    // Reset the form
    const resetForm = () => {
        setForm({ id: null, tenant: "", lease: "", description: "", amount: "", date: "" });
    };

    // Filter transactions based on selected filter and value
    const filteredTransactions = () => {
        if (filter === "tenant") {
            return transactions.filter((t) => t.tenant === selectedFilterValue);
        } else if (filter === "lease") {
            return transactions.filter((t) => t.lease === selectedFilterValue);
        }
        return transactions;
    };

    return (
        <div className="p-4 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Transaction Manager</h2>

            {/* Add/Edit Form */}
            <div className="p-4 border rounded-lg shadow mb-4">
                <h3 className="text-lg font-semibold mb-2">
                    {form.id ? "Edit Transaction" : "Add New Transaction"}
                </h3>
                <div className="space-y-2">
                    <div>
                        <label className="block text-sm font-medium">Tenant</label>
                        <select
                            name="tenant"
                            value={form.tenant}
                            onChange={handleFormChange}
                            className="block w-full border-gray-300 text-accent rounded-md shadow-sm"
                        >
                            <option className="text-accent" value="">Select a Tenant</option>
                            {tenants.map((tenant) => (
                                <option  key={tenant.id} value={tenant.id}>
                                    {tenant.firstName + " " + tenant.lastName}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium">Lease</label>
                        <select
                            name="lease"
                            value={form.lease}
                            onChange={handleFormChange}
                            className="block w-full border-gray-300 rounded-md text-accent shadow-sm"
                        >
                            <option value="">Select a Lease</option>
                            {leases.map((lease, i) => (
                                <option key={lease.id} value={lease.id}>
                                    {lease.tenant + " " + lease.property}
                                </option>
                            ))}
                        </select>
                    </div>
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
                            onClick={form.id ? updateTransaction : addTransaction}
                            className="px-4 py-2 bg-blue-600 text-white rounded-md mt-2"
                        >
                            {form.id ? "Update Transaction" : "Add Transaction"}
                        </button>
                        <button className="button" onClick={() => createTenantStatement(form.tenant, filteredTransactions())}>
    )
                            Print Statement
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

            {/* Filter Options */}
            <div className="p-4 border rounded-lg shadow mb-4">
                <h3 className="text-lg font-semibold mb-2">Filter Transactions</h3>
                <div className="space-y-2">
                    <select
                        value={filter}
                        onChange={(e) => {
                            setFilter(e.target.value);
                            setSelectedFilterValue("");
                        }}
                        className="block w-full border-gray-300 rounded-md"
                    >
                        <option value="all">All Transactions</option>
                        <option value="tenant">By Tenant</option>
                        <option value="lease">By Lease</option>
                    </select>
                    {filter !== "all" && (
                        <select
                            value={selectedFilterValue}
                            onChange={(e) => setSelectedFilterValue(e.target.value)}
                            className="block w-full border-gray-300 rounded-md"
                        >
                            <option value="">
                                {filter === "tenant" ? "Select a Tenant" : "Select a Lease"}
                            </option>
                            {(filter === "tenant" ? tenants : leases).map((item) => (
                                <option key={item.id} value={item.id}>
                                    {item.name}
                                </option>
                            ))}
                        </select>
                    )}
                </div>
            </div>

            {/* Transactions List */}
            <div className="p-4 border rounded-lg shadow">
                <h3 className="text-lg font-semibold mb-2">Transactions</h3>
                {filteredTransactions().length > 0 ? (
                    <table className="min-w-full table-auto border-collapse">
                        <thead>
                            <tr className="bg-black-100">
                                <th className="px-4 py-2 text-left text-accent text-sm font-medium">Tenant</th>
                                <th className="px-4 py-2 text-left text-accent text-sm font-medium">Lease</th>
                                <th className="px-4 py-2 text-left text-accent text-sm font-medium">Description</th>
                                <th className="px-4 py-2 text-left text-accent text-sm font-medium">Amount</th>
                                <th className="px-4 py-2 text-left text-accent text-sm font-medium">Date</th>
                                <th className="px-4 py-2 text-left text-accent text-sm font-medium">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredTransactions().map((t) => (
                                <tr key={t.id} className="border-t">
                                    <td className="px-4 py-2">
                                        {tenants.find((tenant) => tenant.id === t.tenant)?.name || t.tenant}
                                    </td>
                                    <td className="px-4 py-2">
                                        {leases.find((lease) => lease.id === t.lease)?.name || t.lease}
                                    </td>
                                    <td className="px-4 py-2">{t.description}</td>
                                    <td className="px-4 py-2">{t.amount}</td>
                                    <td className="px-4 py-2">{t.date}</td>
                                    <td className="px-4 py-2">
                                        <button
                                            onClick={() => editTransaction(t.id)}
                                            className="px-2 py-1 bg-yellow-500 text-white rounded-md mr-2"
                                        >
                                            Edit
                                        </button>
                                        <button
                                            onClick={() => deleteTransaction(t.id)}
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
                    <p className="text-gray-500">No transactions found.</p>
                )}
            </div>
        </div>
    );
};

export default TransactionManager;
