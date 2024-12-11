import DataList from "./data_list";
/**
 * LeasesList component renders a list of leases with tenant, property, and start date information.
 * 
 * @component
 * @example
 * return (
 *   <LeasesList />
 * )
 * 
 * @returns {JSX.Element} A table displaying the list of leases.
 */
const LeasesList = () => {
    const leases = [
        { tenant: "John Doe", property: "Sunset Apartments", start: "2024-01-01" },
        { tenant: "Jane Smith", property: "Downtown Lofts", start: "2024-02-01" },
    ];

    const headers = ["Tenant", "Property","Unit",  "Begin Date", "End Date", "Monthly Rent", "Deposit", "Pet Deposit", "Utilities"];

    return (
        <DataList
            headers={headers}
            data={leases}
            renderRow={(lease) => (
                <>
                    <td className="px-4 py-2">{lease.tenant}</td>
                    <td className="px-4 py-2">{lease.property}</td>
                    <td className="px-4 py-2">{lease.start}</td>
                </>
            )}
        />
    );
};

export default LeasesList;
