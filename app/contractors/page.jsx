import React from "react";
import VendorsList from "../components/data_display/vendorsList";
import {AddVendor} from "../components/forms/addVendor";

function ContractorsPage() {
    return (
        <>
        <VendorsList />
            <AddVendor />
        </>
    )
}


export default ContractorsPage