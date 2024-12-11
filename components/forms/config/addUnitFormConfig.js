import { type } from "os"


export const getAddUnitConfig = (onChange, formDetails, propertyID) => {
   return [
    {
        type:"text", 
        name:"propertyID", 
        label:"Property", 
        onChange: (e) => onChange(propertyID, 'propertyID'),
        value: propertyID, 
        disabled: true
    }, 
    {
        type:"text", 
        name:" unitNumber", 
        label:"Unit Number",
        onChange: (e) => onChange(e.target.value, "unitNumber"), 
        value: formDetails.unitName
    }, 
    {
        type:"number", 
        name:"SQFT", 
        label:"Square Feet", 
        onChange: (e) => onChange(e.target.value, "SQFT"),
        value: formDetails.SQFT
    }, 
    {
        type:"number", 
        name:"numBedrooms", 
        label:"Number Of Bedrooms", 
        onChange: (e) => onChange(e.target.value, "numBedrooms"),
        value: formDetails.numBedrooms
    }, 
    {
        type:"number",
        name:"numBathrooms", 
        label:"Number of Bathrooms", 
        onChange: (e) => onChange(e.target.value, "numBathrooms"),
        value: formDetails.numBathrooms
    }, 
    {
        type:"dropdown", 
        name:"unitStatus", 
        label:"Unit Status",
        onChange: (e) => onChange(e.target.value, "unitStatus"), 
        value: formDetails.unitStatus,
        options:['Occupied', 'Vacant-Not Ready', 'Vacant', 'Reserved-Deposit Received']
    }
   ]
}
