
import React from "react";
import DataList from "./data_list";

/**
 * VendorsList component displays a list of vendors with their contact information.
 *
 * @component
 * @example
 * return (
 *   <VendorsList />
 * )
 *
 * @returns {JSX.Element} A table displaying vendor names, contact emails, and phone numbers.
 */
const VendorsList = ({vendors}) => {

    const vendors = [
        { name: "ABC Plumbing", contact: "plumbing@example.com", phone: "111-222-3333" },
        { name: "XYZ Electrical", contact: "electrical@example.com", phone: "444-555-6666" },
    ];

    const headers = ["ID", "Vendor Name", "Contact Email", "Phone"];

    return (
        <DataList
            headers={headers}
            data={vendors}
            renderRow={(vendor) => (
                <>
                    <td className="px-4 py-2">{vendor.id}</td>
                    <td className="px-4 py-2">{vendor.name}</td>
                    <td className="px-4 py-2">{vendor.contact}</td>
                    <td className="px-4 py-2">{vendor.phone}</td>
                </>
            )}
        />
    );
};

export default VendorsList;
