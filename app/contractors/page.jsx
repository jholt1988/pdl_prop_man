import React,{useEffect} from "react";
import VendorsList from "../../components/data_display/vendorsList";
import  AddVendor  from "../../components/forms/addVendor";
import { fetchVendors, selectVendors } from "../../store/slices/vendorSlice";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";


function ContractorsPage() {
    const dispatch = useAppDispatch();
    const vendors = useAppSelector(selectVendors);
    useEffect(() => {
        dispatch(fetchVendors());
    }, []);
    return (
        <>
        <VendorsList vendors={vendors} />
            <AddVendor />
        </>
    )
}


export default ContractorsPage