'use client'
import React, { useState, useMemo } from "react";
import createTenantStatement from "../reports/tenantStatement";
import { useCreateTransactionMutation } from "../../features/ledgers/store/transaction";
import { useGetTransactionListQuery } from "../../features/ledgers/store/transaction";
import { transactionApi } from "../../features/ledgers/store/transaction";

const TransactionManager = ({ tenants, leases }) => {

    // const tenants = [
    //     { id: "1", name: "John Doe" },
    //     { id: "2", name: "Jane Smith" },
    // ];

    // const leases = [
    //     { id: "101", name: "Sunset Apartments - Unit 1" },
    //     { id: "102", name: "Downtown Lofts - Unit 3" },
    // ];

    // State for transactions and filtering
    const { data: transactions } = useGetTransactionListQuery({ pollingInterval: 10000, refetchOnFocus: true, refetchOnReconnect: true })
    const [leaseList, setLeaseList] = useState(leases);
    const [tenantList, setTenantList] = useState(tenants);
    const [transactionList, setTransactionList] = useState([]);
    const [error, setError] = useState(null);
    const [filter, setFilter] = useState("all");
    const [selectedFilterValue, setSelectedFilterValue] = useState("");
    const [form, setForm] = useState({
     
        tenant: {},
        lease:{},
        description: "",
        amount: Number(""),
        date: "",
    });

    const [ createTransaction ] = useCreateTransactionMutation();

    function transactionsByTenant(tenantId) {
        const { transactions } = transactionApi.useGetTransactionListQuery(undefined, {
            selectFromResult: ({ data }) => ({
                transactions: data?.find((t) => t.tenant.id === tenantId) || [],
            })
        })
            return transactions;
    }
    // Create a statement for a tenant
    function createTenantStatement(tenant, transactions) {
        const tenantTransactions = transactions.filter((t) => t.tenant === tenant);
        const tenantName = tenantList.find((t) => t.id === tenant)?.name || tenant;
        createTenantStatement(tenantName, tenantTransactions)
    }
    const resetForm = () => { 
        setForm({
           
            tenant:{},
            lease: {},
            description: "",
            amount: "",
            date: "",
        });
    }

    const handleSelectTenant = (e) => { 
        setFilter("tenant");
        setSelectedFilterValue(e.target.value.id);
        setTransactionList(transactionsByTenant(e.target.value.id));
    }
    // Handle form changes
    const handleFormChange = (e) => {

        setForm({ ...form, [e.target.name]: e.target.value });
        if (e.target.name === "tenant") {
            handleSelectTenant(e);
        }
    };

    // Add a new transaction
    const addTransaction = async () => {
        if (!form.tenant || !form.lease || !form.amount || !form.date) return;
        try {
            const newTransaction = { ...form, amount: Number(form.amount) }
            console.log(newTransaction);
            const response = await createTransaction(newTransaction).unwrap();
            setTransactionList([...transactionList, { ...newTransaction, id: response.id, tenant: newTransaction.tenant.lastName, lease: newTransaction.lease.id }]);
            resetForm();
            setError(null);
        } catch (err) {
            setError("Failed to add transaction. Please try again.");
        }
                setForm({
               
                    tenant: {},
                    lease: {},
                    description: "",
                    amount: "",
                    date: "",
                });
            }

    const editTransaction = (id) => {
        const transaction = transactionList.find((t) => t.id === id);
        if (!transaction) return;
        setForm(transaction);
    };

    // Edit an existing transaction


    const updateTransaction = () => {
        try {
            setTransactionList(
                transactionList.map((t) => (t.id === form.id ? form : t))
            );
            resetForm();
            setError(null);
        } catch (err) {
            setError("Failed to update transaction. Please try again.");
        }
    };

    const deleteTransaction = async (id) => {
        try {
            await createTransaction({ id }).unwrap();
            setTransactionList(transactionList.filter((t) => t.id !== id));
            setError(null);
        } catch (err) {
            setError("Failed to delete transaction. Please try again.");
        }
    };

 

    const filteredTransactions = useMemo(() => {
        if (filter === "tenant") {
            return transactionList.filter((t) => t.tenant.id === selectedFilterValue);
        } else if (filter === "lease") {
            return transactionList.filter((t) => t.lease === selectedFilterValue);
        }
        return transactionList;
    }, [filter, selectedFilterValue, transactionList]);
        


        


    return (
        <div className="p-4 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Transaction Manager</h2>

            {error && <div className="text-red-500 mb-4">{error}</div>}
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
                            <option className="text-accent" >Select a Tenant</option>
                            {tenants.map((tenant) => (
                                <option  key={tenant.id} value={tenant}>
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
                            className="block w-full border-gray-300 rounded-md text-accent shadow-sm">
                            <option value="">Select a Lease</option>
                            {leases.map((lease, i) => (
                                <option key={lease.id} value={lease}>
                                    {lease.tenant.firstName + " "+lease.tenant.lastName + "-" + lease.property.name}
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
                            value={Number(form.amount)}
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
                        <button className="button" onClick={() => createTenantStatement(form.tenant, filteredTransactions)}>
                            Print Statement
                        </button>
                               
                            <button
                                onClick={resetForm}
                                className="px-4 py-2 bg-gray-600 text-white rounded-md mt-2 ml-2"
                            >
                                Cancel
                            </button>
                        
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
                        <button
                            onClick={() => createTenantStatement(form.tenant, filteredTransactions)}
                            className="px-4 py-2 bg-blue-600 text-white rounded-md mt-2 ml-2"
                        >
                            Print Statement
                        </button>

            {/* Transactions List */}
            <div className="p-4 border rounded-lg shadow">
                <h3 className="text-lg font-semibold mb-2">Transactions</h3>
                    {transactionList.length > 0 ? (
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
                                 {filteredTransactions.map((t) => (
                                    <tr key={t.id} className="border-t">
                                        <td className="px-4 py-2">
                                            {tenants.find((tenant) => tenant.id === t.tenant)?.name || t.tenant}
                                        </td>
                                        <td className="px-4 py-2">
                                             {leases.find((lease) => lease.id === t.lease?.tenant.firstName + t.lease?.tenant.lastName + "-" + leases.find((lease) => lease.id === t.lease?.property.name || t.lease))}
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
            </div>
        </div>
    );
};

export default TransactionManager;
