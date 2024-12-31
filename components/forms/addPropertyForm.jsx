'use client'
import React, { useState } from "react";

import { useCreatePropertyMutation } from "../../features/properties/store/property";
import { useCreateUnitMutation } from "../../features/properties/units/store/units";
import { selectAllProperties } from "../../store/slices/propertiesSlice.js"
import { selectPropertyListResult } from "../../features/properties/store/property";

import { useAppSelector } from "../../utils/hooks.js";

const AddPropertyForm = () => {
  const [property, setProperty] = useState({ name: "", address: "", numUnits: 0 });
  const [showModal, setShowModal] = useState(false);
  const [unitForms, setUnitForms] = useState([]);
  const options = ['Occupied', 'Vacant-Not Ready', 'Vacant', 'Reserved-Deposit Received']
  const [createProperty] = useCreatePropertyMutation();
  const [createUnit] = useCreateUnitMutation();

  const handlePropertyChange = (e) => {
    if (e.target.name === "numUnits") {
      setProperty({ ...property, numUnits: Number(e.target.value) });
      return;
    }
  
    setProperty({ ...property, [e.target.name]: e.target.value });
  };

  const handleUnitsSubmit = () => {
    const unitsArray = Array.from({ length: property.numUnits }, (_, i) => ({
      unitNumber: i + 1,
      propertyId: "",
      sqft: "",
      bedrooms: 0,
      bathrooms: 0,
      propertyStatus: "",
    }));
    setUnitForms(unitsArray);
    // console.log("UnitForms:", unitForms);
    setShowModal(true);
  };

  const handleUnitChange = (index, field, value) => {
    const updatedUnits = [...unitForms];
    updatedUnits[index][field] = value;
    // console.log("Updated Units:", updatedUnits);
    setUnitForms(updatedUnits);

  };
  let unitDataArr = []

  const saveUnits =  (units,propertyId) => {
    units.forEach( (unit) => {
      const unitData = {
        propertyId: propertyId,
        unitNumber: unit.unitNumber,
        sqft: unit.sqft,
        bedrooms: unit.bedrooms,
        bathrooms: unit.bathrooms,
        propertyStatus: unit.propertyStatus,
        
      };
      // console.log("Unit Data:", unitData);
       unitDataArr.push(unitData)
    })
     
  }
  const resetProperty = () => {
    setShowModal(false);
    setProperty({ name: "", address: "", numUnits: Number(0) });
    setUnitForms([]);
  }


  
  
  const handlePropertySubmit = async () => {
   return await createProperty(property).unwrap().then((response) => {
      console.log("Response:", response);
      console.log("unitData:", unitDataArr)

     saveUnits(unitForms, response.data.id);
     unitDataArr.forEach(async (unitData) => {  
       createUnit(unitData)
      })
      console.log("unitData:", unitDataArr)
    }).catch((error) => {
      console.log("Error:", error);
    })
   
   
  };

  

  return (
    <div className="p-4 max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4">Add New Property</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Property Name</label>
          <input
            type="text"address
            name="name"
            value={property.name}
            onChange={handlePropertyChange}
            className="mt-1 block w-full border-gray-300 text-accent rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Address</label>
          <input
            type="text"
            name="address"
            value={property.address}
            onChange={handlePropertyChange}
            className="mt-1 block w-full border-gray-300 text-accent rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Number of Units</label>
          <input
            type="number"
            name="numUnits"
            value={property.numUnits}
            onChange={handlePropertyChange}
            className="mt-1 block w-full border-gray-300 text-accent rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>
        <button
          type="button"
          onClick={handleUnitsSubmit}
          className="px-4 py-2 bg-blue-600 text-white rounded-md"
        >
          Add Units
        </button>
      </div>

      {/* Modal */}
      {showModal && (
        <div className=" inset-0 z-50 flex items-center justify-center overflow-auto bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-lg text-secondary text-font-semibold mb-4">Add Unit Details</h3>
            <div className="space-y-4">
              {unitForms.map((unit, index) => (
                <div key={index} className="border-b pb-4 mb-4">
                  <h4 className="text-sm text-accent font-medium">Unit {unit.unitNumber}</h4>
                  <div>
                    <label className="block text-secondary text-sm">Unit Number</label>
                    <input  type="text" value={unit.unitNumber} className="mt-1 block w-full text-accent border-gray-300 rounded-md" disabled />
                    <label className="block text-secondary text-sm">SQFT</label>
                    <input
                      type="text"
                      value={unit.SQFT}
                      onChange={(e) =>
                        handleUnitChange(index, "sqft", e.target.value)
                      }
                      className="mt-1 block w-full text-accent border-gray-300 rounded-md"
                    />
                  </div>
                  <div>

                    <label className="block  text-secondary text-sm">Bedrooms</label>
                    <input
                      type="text"
                      value={unit.bedrooms}
                      onChange={(e) =>
                        handleUnitChange(index, "bedrooms", Number(e.target.value))
                      }
                      className="mt-1 block w-full text-accent border-gray-300 rounded-md"
                    />
                  </div>
                  <div>
                    <label className="block text-secondary text-sm">Bathrooms</label>
                    <input
                      type="text"
                      value={unit.bathrooms}
                      onChange={(e) =>
                        handleUnitChange(index, "bathrooms", Number(e.target.value))
                      }
                      className="mt-1 block w-full text-accent border-gray-300 rounded-md"
                    />
                  </div>
                  <div>
                    <label className="block  text-secondary text-sm">Property Status</label>
                    <select
                      type="select"
                      className="input input-bordered input-primary text-accent flex items center gap-2"
                      value={unit.unitStatus} 
                      onChange={(e) =>
                        handleUnitChange(index, "propertyStatus", e.target.value)
                      }
                      defaultValue="Select Status"
                    >
                      {options.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                
                
              ))}
            </div>
            <button
              type="button"
              onClick={handlePropertySubmit}
              className="px-4 py-2 bg-green-600 text-secondary rounded-md mt-4"
            >
              Save Property
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddPropertyForm;
