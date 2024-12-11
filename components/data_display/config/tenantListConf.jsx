import React from "react";

 export default function GetTenantListConfig (tenants){
    let config = {}
    config.rows = tenants


    const headerRow = ['id','firstName', "lastName", "phone", "email", "ssn", "dob"]

    config.headerRow = headerRow
    
    return config 

}

