'use client'
import React, { useEffect } from "react";
import NewTenantForm from "../../components/forms/newTenantForm";
import TenantList from "../../components/data_display/tenant_list";
import { fetchTenants, selectTenants } from "../../store/slices/tenantSlice";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
export default function TenantPage() {
    const dispatch = useAppDispatch();
    const tenants =  dispatch(fetchTenants());
    return(
        <>
            <TenantList tenants={tenants} />
        <NewTenantForm/>
    
        </>
    )
}