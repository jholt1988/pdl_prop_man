export  const getNewTenantConfig = (onChange, formDetails) => {
  return [
    {
      type: "text",
      name: "firstName",
      label: "First Name",
      onChange: (e) => onChange(e.target.value, "firstName"),
      value: formDetails.firstName,
    },
    {
      type: "text",
      name: "lastName",
      label: "Last Name",
      onChange: (e) => onChange(e.target.value, "lastName"),
      value: formDetails.firstName,
    },
    {
        type:"text", 
        name:"email",
        label:"Email", 
        onChange: (e) => onChange(e.target.value, "Email"),
        value:formDetails.email,
        pattern:"^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g"

    },
    {
        type:"text", 
        name:"phone", 
        label:"Phone",
        onChange: (e) => onChange(e.target.value, "phone"),
        value: formDetails.phone
    },
    {
        type:"text", 
        name: "ssn",
        label: "Social Security Number", 
        onChange: (e) =>  onChange(e.target.value, "ssn"),
        value: formDetails.ssn
    },
        {
            type:"date", 
            name:"DOB", 
            label:"Date of Birth",
            onChange: (e) => onChange(e.target.value, "DOB"),
            value: formDetails.dob
        },

  ];
};
