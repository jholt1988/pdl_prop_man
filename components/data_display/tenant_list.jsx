"use client";
import React from "react";
import DataList from "./data_list";
import { useAppSelector } from "../../lib/hooks";
import { selectTenants } from "../../store/tenantSlice";

/**
 * TenantList component renders a list of tenants with their details.
 *
 * This component uses the DataList component to display tenant information
 * in a tabular format. Each tenant has a name, email, and phone number.
 *
 * @component
 * @example
 * return (
 *   <TenantList />
 * )
 */
const TenantList = () => {
    const selectedTenants = useAppSelector(selectTenants)
    const tenants = [
        { name: "John Doe", email: "john@example.com", phone: "123-456-7890" },
        { name: "Jane Smith", email: "jane@example.com", phone: "987-654-3210" },
    ];

    const headers = ["Name", "Email", "Phone", "DOB", "SSN", "Drivers License", "Emergency Contact", "Emergency Contact Phone"];

    return (
        <DataList
            headers={headers}
            data={selectedTenants}
            renderRow={(tenant) => (
                <>
                    <td className="px-4 py-2">{tenant.name}</td>
                    <td className="px-4 py-2">{tenant.email}</td>
                    <td className="px-4 py-2">{tenant.phone}</td>
                </>
            )}
        />
    );
};

export default TenantList;
