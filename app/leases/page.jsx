"use client"
import React from "react";
import NewLeaseForm from "../components/forms/addLeaseForm";
import LeasesList from "../components/data_display/lease_list"

function LeasesPage() {
    return (
        <>
            <NewLeaseForm />
            <LeasesList />
        </>
    )
}       

export default LeasesPage