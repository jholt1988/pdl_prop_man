'use client'
import React, { useState } from "react";
import { addProperty } from "../../store/slices/propertiesSlice";
import { useAppDispatch } from "../../utils/hooks"
const AddPropertyForm = () => {
  const [property, setProperty] = useState({ name: "", address: "", numUnits: 0 });
  const [showModal, setShowModal] = useState(false);
  const [unitForms, setUnitForms] = useState([]);
  const options = ['Occupied', 'Vacant-Not Ready', 'Vacant', 'Reserved-Deposit Received']
const dispatch = useAppDispatch();

  const handlePropertyChange = (e) => {
    setProperty({ ...property, [e.target.name]: e.target.value });
  };

  const handleUnitsSubmit = () => {
    const unitsArray = Array.from({ length: property.numUnits }, (_, i) => ({
      unitNumber: i + 1,
      SQFT: "",
      bedrooms: 0,
      bathrooms: 0,
      propertyStatus: "",
    }));
    setUnitForms(unitsArray);
    setShowModal(true);
  };

  const handleUnitChange = (index, field, value) => {
    const updatedUnits = [...unitForms];
    updatedUnits[index][field] = value;
    setUnitForms(updatedUnits);
  };

  const saveProperty = () => {
    console.log("Property:", property);
    console.log("Units:", unitForms);
    property.units = unitForms;
    console.log("Property:", property);
    dispatch(addProperty(property));
    setShowModal(false);
    setProperty({ name: "", address: "", numUnits: 0 });
    setUnitForms([]);
  };

  return (
    <div className="p-4 max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4">Add New Property</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Property Name</label>
          <input
            type="text"
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
                    <label className="block text-secondary text-sm">SQFT</label>
                    <input
                      type="text"
                      value={unit.SQFT}
                      onChange={(e) =>
                        handleUnitChange(index, "SQFT", e.target.value)
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
                        handleUnitChange(index, "bedrooms", e.target.value)
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
                        handleUnitChange(index, "bathrooms", e.target.value)
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
                        handleUnitChange(index, "unitStatus", e.target.value)
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
              onClick={saveProperty}
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
