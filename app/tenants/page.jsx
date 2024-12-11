import React from "react";
import NewTenantForm from "../components/forms/newTenantForm";
import TenantList from "../components/data_display/tenant_list";
export default function TenantPage(){
    return(
        <>
            <TenantList />
        <NewTenantForm/>
    
        </>
    )
}