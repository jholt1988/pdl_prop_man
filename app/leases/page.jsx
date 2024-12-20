"use client"
import React, {useEffect} from "react";
import NewLeaseForm from "../../components/forms/addLeaseForm";
import LeasesList from "../../components/data_display/lease_list";
import { fetchLeases } from "../../store/slices/leaseSlice";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";

function LeasesPage() {
    const tenants = useAppSelector(selectTenants);
    const properties = useAppSelector(selectProperties);
    const leases = dispatch(fetchLeases());
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchLeases());
    }, []);
    return (
        <>
            <NewLeaseForm tenants={tenants} properties={properties} />
            <LeasesList  leases={leases}/>
        </>
    )
}       

export default LeasesPage