import { emailRegex } from "../../../utils/utils";
export  const getNewTenantConfig = (onChange, formDetails) => {
  
  return [
    {
      type: "text",
      name: "firstName",
      label: "First Name",
      onChange: (e) => onChange(e.target.value, "firstName"),
      value: formDetails.firstName,
      id:"firstName",
      autocomplete:"first name"
    },
    {
      type: "text",
      name: "lastName",
      label: "Last Name",
      onChange: (e) => onChange(e.target.value, "lastName"),
      value: formDetails.lastName,
      id:"lastName",
      autocomplete:"last name"
    },
    {
        type:"text", 
        name:"email",
        label:"Email", 
        onChange: (e) => onChange(e.target.value, "Email"),
        value:formDetails.email,
        // pattern: emailRegex,
        id:"email", 
        autocomplete:"email"

    },
    {
        type:"text", 
        name:"phone", 
        label:"Phone",
        onChange: (e) => onChange(e.target.value, "phone"),
        value: formDetails.phone, 
        id:"phone", 
        autocomplete:"phone"
    },
    {
        type:"text", 
        name: "ssn",
        label: "Social Security Number", 
        onChange: (e) =>  onChange(e.target.value, "ssn"),
        value: formDetails.ssn, 
        id:"ssn"
    },
        {
            type:"date",  
            name:"DOB", 
            label:"Date of Birth",
            onChange: (e) => onChange(e.target.value, "DOB"),
            value: formDetails.dob, 
            id:"dob", 
            autocomplete:"DOB"
        },
    {
      type: "tex",
      name: "driverslicense",
      label: "Drivers License",
      onChange: (e) => onChange(e.target.value, "Drivers License"),
      value: formDetails.driverslicense,
      id: "driverslicense",
      autocomplete: "drivers license"
    },
    {
      type: "text",
      name: "emergencycontact",
      label: "Emergency Contact",
      onChange: (e) => onChange(e.target.value, "Emergency Contact"),
      value: formDetails.emergencycontact,
      id: "emergencycontact",
      
    },
    {
      type: "text",
      name: "EmergencyContactPhone",
      label: "Emergency Contact Phone",
      onChange: (e) => onChange(e.target.value, "Emergency Contact Phone"),
      value: formDetails.EmergencyContactPhone,
      id: "EmergencyContactPhone",
    
    },
  ];
};
