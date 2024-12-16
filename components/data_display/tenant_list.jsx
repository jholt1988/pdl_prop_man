;
import React from "react";
import DataList from "./data_list";

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
const TenantList = ({tenants}) => {

  

    const headers = ["Id","Name", "Email", "Phone", "DOB", "SSN", "Drivers License", "Emergency Contact", "Emergency Contact Phone"];

    return (
        <DataList
            headers={headers}
            data={tenants}
            renderRow={(tenant) => (
                <>
                    <td className="px-4 py-2">{tenant.id}</td>
                    <td className="px-4 py-2">{tenant.name}</td>
                    <td className="px-4 py-2">{tenant.email}</td>
                    <td className="px-4 py-2">{tenant.phone}</td>
                    <td className="px-4 py-2">{tenant.dob}</td>
                    <td className="px-4 py-2">{tenant.ssn}</td>
                    <td className="px-4 py-2">{tenant.driverslicense}</td>
                    <td className="px-4 py-2">{tenant.emergencycontact}</td>
                    <td className="px-4 py-2">{tenant.emergencyphone}</td>
                </>
            )}
        />
    );
};

export default TenantList;
