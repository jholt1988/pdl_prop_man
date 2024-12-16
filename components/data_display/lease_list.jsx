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
   

    const headers = ["ID","Tenant", "Property","Unit",  "Begin Date", "End Date", "Monthly Rent", "Deposit", "Pet Deposit", "Utilities"];

    return (
        <DataList
            headers={headers}
            data={leases}
            renderRow={(lease) => (
                <>
                    <td className="px-4 py-2">{lease.tenant}</td>
                    <td className="px-4 py-2">{lease.property}</td>
                    <td className="px-4 py-2">{lease.start}</td>
                    <td className="px-4 py-2">{lease.end}</td>
                    <td className="px-4 py-2">{lease.rent}</td>
                    <td className="px-4 py-2">{lease.deposit}</td>
                    <td className="px-4 py-2">{lease.petDeposit}</td>
                    <td className="px-4 py-2">{lease.utilities}</td>

                </>
            )}
        />
    );
};

export default LeasesList;
