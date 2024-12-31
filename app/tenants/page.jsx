'use client'
import React, { useEffect } from "react";
import NewTenantForm from "../../components/forms/newTenantForm";
import TenantList from "../../components/data_display/tenant_list";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import { useGetTenantListQuery } from "../../features/tenants/store/tenant";

export default function TenantPage() {
    const dispatch = useAppDispatch();
    const { data, error, isLoading, refetch } = useGetTenantListQuery({ pollingInterval:3000 , refetchOnFocus: true, refetchOnMountOrArgChange: true, skip:false});
    console.log(data)
    return(
        <>
            <TenantList tenants={data?.data ?? []} />
        <NewTenantForm/>
    
        </>
    )
}