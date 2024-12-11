

export const getNewPropertyFormConfig = (onChange,formDetails) =>{
    return[
        {
            type:"text", 
            name:"propertyNickname", 
            label:"Property",
            onChange:(e) => onChange(e.target.value, "propertyNickname"),
            value: formDetails.propertyNickname, 
            id:"propertyNickname",

        }, 
        {
            type:"text",
            name:"address", 
            label:"Address", 
            onChange:(e) => onChange(e.target.value, "address"),
            value: formDetails.address, 
            id:"address", 
            autocomplete:"address"
        }, 
        {
            type:"text", 
            name:"numUnits",
            label:"Number of Units", 
            onChange:(e) => onChange(e.target.value, "numUnits"), 
            value:formDetails.numUnits,
            id:"numUnits"
        }, 
        {
            type:"dropdown",
            name:"propertyStatus", 
            label:"Property Status",
            onChange:(e) => onChange(e.target.value, "propertyStatus"), 
            value:formDetails.propertyStatus, 
            options:["Fully Occupied", "Partially Occupied", "Vacant-Ready", "Under-Maintenance "], 
            id:"propertyStatus"
        },
        
    ]
}
    
