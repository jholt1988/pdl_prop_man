'use client'
import React, { useEffect } from "react";
import NewTenantForm from "../../components/forms/newTenantForm";
import TenantList from "../../components/data_display/tenant_list";
<<<<<<< HEAD
<<<<<<< HEAD
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
    
=======
import { fetchTenants, selectTenants, selectStatus, selectError } from "../../store/slices/tenantSlice";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";

/**
 * TenantPage component handles the display of tenant data and the form for adding new tenants.
 * It fetches tenant data from the store and displays it in a list.
 * It also provides a form for adding new tenants.
 *
 * @component
 * @returns {JSX.Element} The rendered component.
 */
export default function TenantPage() {
    const dispatch = useAppDispatch();
    const tenants = useAppSelector(selectTenants);
    const status = useAppSelector(selectStatus);
    const error = useAppSelector(selectError);

    useEffect(() => {
        dispatch(fetchTenants());
    }, [dispatch]);

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (status === 'failed') {
        return <div>Error: {error}</div>;
    }

    return (
        <>
            <TenantList tenants={tenants} />
            <NewTenantForm />
>>>>>>> e1ba930 (Improve code structure and readability)
=======
import { fetchTenants, selectTenants, selectStatus, selectError } from "../../store/slices/tenantSlice";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";

/**
 * TenantPage component handles the display of tenant data and the form for adding new tenants.
 * It fetches tenant data from the store and displays it in a list.
 * It also provides a form for adding new tenants.
 *
 * @component
 * @returns {JSX.Element} The rendered component.
 */
export default function TenantPage() {
    const dispatch = useAppDispatch();
    const tenants = useAppSelector(selectTenants);
    const status = useAppSelector(selectStatus);
    const error = useAppSelector(selectError);

    useEffect(() => {
        dispatch(fetchTenants());
    }, [dispatch]);

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (status === 'failed') {
        return <div>Error: {error}</div>;
    }

    return (
        <>
            <TenantList tenants={tenants} />
            <NewTenantForm />
>>>>>>> 310af1d374d58646c442a755e3780750c72158c2
        </>
    );
}
