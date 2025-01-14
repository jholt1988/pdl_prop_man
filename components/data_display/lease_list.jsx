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
const LeasesList = ({leases}) => {
   

    const headers = ["ID","Tenant", "Property","Unit",  "Term","Begin Date", "End Date", "Monthly Rent", "Deposit", "Pet Deposit", "Utilities"];

    return (
        <DataList
            headers={headers}
            data={leases}
            renderRow={(lease) => (
                <>
                    <td className="px-4 py-2">{lease.id}</td>
                    <td className="px-4 py-2">{`${lease.tenant.firstName} ${lease.tenant.lastName}`}</td>
                    <td className="px-4 py-2">{lease.property.name}</td>
                    <td className="px-4 py-2">{lease.unit.unitNumber}</td>
                    <td className="px-4 py-2">{lease.termOfLease}</td>
                    <td className="px-4 py-2">{lease.beginDate}</td>
                    <td className="px-4 py-2">{lease.endDate}</td>
                    <td className="px-4 py-2">{lease.monthlyRent}</td>
                    <td className="px-4 py-2">{lease.deposit}</td>
                    <td className="px-4 py-2">{lease.petDeposit}</td>
                   

                </>
            )}
        />
    );
};

export default LeasesList;
