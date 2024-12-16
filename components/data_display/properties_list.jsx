'use client'
import React from "react";
import DataList from "./data_list";


/**
 * PropertiesList component renders a list of properties using the DataList component.
 * Each property is displayed with its name and address.
 *
 * @component
 * @example
 * return (
 *   <PropertiesList />
 * )
 */
const PropertiesList = ({properties}) => {
  const headers = ["ID","Property Name", "Address", "Number of Units"];



  return (
    <DataList
      headers={headers}
      data={properties}
      renderRow={(property) => (
        [
          <td key="id" className="px-4 py-2">{property.id}</td>,
          <td key="name" className="px-4 py-2">{property.name}</td>,
          <td key="address" className="px-4 py-2">{property.address}</td>,
          <td key="numUnits" className="px-4 py-2">{property.numUnits}</td>
        ]
      )}
    />
  );
};

export default PropertiesList;
