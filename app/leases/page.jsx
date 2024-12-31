"use client"
import React, {useEffect} from "react";
import NewLeaseForm from "../../components/forms/addLeaseForm";
import LeasesList from "../../components/data_display/lease_list";
import { fetchLeases } from "../../store/slices/leaseSlice";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import { useGetLeaseListQuery } from "../../features/leases/store/lease";
import { useGetTenantListQuery } from "../../features/tenants/store/tenant";
import { useGetPropertyListWithUnitsQuery } from "../../features/properties/store/property";

function LeasesPage() {
    
    const {data: leases} = useGetLeaseListQuery({ pollingInterval: 3000, refetchonFocus: true, refetchOnReconnect: true, refetchOnMountOrArgChange: true, skip: false })
    const { data: tenants } = useGetTenantListQuery({ pollingInterval: 3000, refetchonFocus: true, refetchOnReconnect: true, refetchOnMountOrArgChange: true, skip: false })    
    const { data: properties } = useGetPropertyListWithUnitsQuery({ pollingInterval: 3000, refetchonFocus: true, refetchOnReconnect: true, refetchOnMountOrArgChange: true, skip: false })   
    return (
        <>
            <NewLeaseForm tenants={tenants?.data ?? []} properties={properties?.data ?? []} />
            <LeasesList leases={leases?.data ?? []} />
        </>
    )
}       

export default LeasesPage