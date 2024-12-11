'use client'
import React from "react";
import DataList from "./data_list";
import { useAppSelector } from "../../app/lib/hooks"; 


const properties = [
  { name: "Sunset Apartments", address: "123 Main St" },
  { name: "Downtown Lofts", address: "456 Elm St" },
];
const headers = ["Property Name", "Address", "Number of Units"];

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
const PropertiesList = () => {
  const properties = useAppSelector((state) => state.properties.list);


  return (
    <DataList
      headers={headers}
      data={properties}
      renderRow={(property) => (
        [
          <td key="name" className="px-4 py-2">{property.name}</td>,
          <td key="address" className="px-4 py-2">{property.address}</td>,
          <td key="numUnits" className="px-4 py-2">{property.numUnits}</td>
        ]
      )}
    />
  );
};

export default PropertiesList;
