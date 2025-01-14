'use client'
import React, { useState,createRef, useRef } from 'react';

import { useAppDispatch } from '../../utils/hooks';
import { useCreateLeaseMutation } from '../../features/leases/store/lease';
import { useCreateUtilitiesMutation } from '../../features/leases/store/lease';
const AddLeaseForm = ({ tenants, properties, leases }) => {
    const dispatch = useAppDispatch();

   
    const [propertyId, setPropertyId] = useState('');
    const [units, setUnits] = useState([]);
    const [createLease, { data, error, isLoading }] = useCreateLeaseMutation();
    const [createUtilities, { data: utilitiesData, error: utilitiesError, isLoading: utilitiesLoading }] = useCreateUtilitiesMutation();
    
    ;
  
    const [formData, setFormData] = useState({
        termOfLease: '',
        beginDate: '',
        endDate: '',
        monthlyRent: '',
        deposit: '',
        petDeposit: '',
        tenant: {},
        property: {},
        unit: {},
    });

    
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
       
            if (name === 'property') {
                setPropertyId(Number(value));
                setUnits(properties.find((property) => property.id === Number(value)).units);
            }
    
            setFormData({
                ...formData,
                [name]: value,
            });
        }
    

const tenantRef = useRef(null);
    const propertyRef = useRef(null);
    const unitRef = useRef(null);
   
    const handleSubmit =  (e) => {
        const utilities = document.getElementsByName('utilities');
        let utilitiesArr = [];
        utilities.forEach((utility) => {
            if (utility.checked) {
                utilitiesArr.push(utility.value);
            }
        });
        e.preventDefault();
        const newUtilities = {
            electric: utilitiesArr.includes("electric") ? true : false,
            gas: utilitiesArr.includes("gas") ? true : false,
            water: utilitiesArr.includes("water") ? true : false,
            //  leaseId: leases ? leases.length + 1 : 1
            }
          
         
            const selectedTenant = tenantRef.current.options[tenantRef.current.selectedIndex];
            const selectedProperty = propertyRef.current.options[propertyRef.current.selectedIndex];
            const selectedUnit = unitRef.current.options[unitRef.current.selectedIndex];
        // Handle form submission logic here
        const newLease = {
            
                termOfLease: formData.termOfLease,
                beginDate: new Date(formData.beginDate),
                endDate: new Date(formData.endDate),
                monthlyRent: Number(formData.monthlyRent),
                deposit: Number(formData.deposit),
                petDeposit: Number(formData.petDeposit),
          
            tenant: Number(formData.tenant),
            property: Number(formData.property),
            unit: Number(formData.unit),    
            utilities: newUtilities
            
           

            }
            console.log(newLease);
        createLease(newLease);                                                          
      
        
    };

    return (
        
        <form className="form p-4 border rounded-lg shadow-sm" onSubmit={handleSubmit}>
            <h2 className="text-2xl font-bold mb-6 text-center">Add Lease</h2>
            <div className="form-control justify-self-center">
                <label className='label text-accent'>Term of Lease:</label>
                <input
                    type="text"
                    name="termOfLease"
                    value={formData.termOfLease}
                    onChange={handleChange}
                    className='input input-bordered input-primary text-accent justify-self-center' 
                />
            </div>
            <div className="form-control justify-self-center">
                <label className='label text-accent'>Begin Date:</label>
                <input
                    type="date"
                    name="beginDate"
                    value={formData.beginDate}
                    onChange={handleChange}
                    className='input input-bordered input-primary text-accent justify-self-center' 
                />
            </div>
            <div className="form-control justify-self-center ">
                <label className='label text-accent'>End Date:</label>
                <input
                    type="date"
                    name="endDate"
                    value={formData.endDate}
                    onChange={handleChange}
                    className='input input-bordered input-primary text-accent justify-self-center' 
                />
            </div>
            <div className="form-control justify-self-center">
                <label className='label text-accent'>Monthly Rent:</label>
                <input
                    type="number"
                    name="monthlyRent"
                    value={formData.monthlyRent}
                    onChange={handleChange}
                    className='input input-bordered input-primary text-accent justify-self-center' 
                />
            </div>
            <div className="form-control justify-self-center">
                <label className='label text-accent'>Deposit:</label>
                <input
                    type="number"
                    name="deposit"
                    value={formData.deposit}
                    onChange={handleChange}
                    className='input input-bordered input-primary text-accent justify-self-center' 
                />
            </div>
            <div className="form-control justify-self-center">
                <label className='label text-accent' >Pet Deposit:</label>
                <input
                    type="number"
                    name="petDeposit"
                    value={formData.petDeposit}
                    onChange={handleChange}
                    className='input input-bordered input-primary text-accent justify-self-center' 
                />
            </div>
            <div className="form-control justify-self-center">
                <label className='label text-accent'>Tenant:</label>
                <select name="tenant" id='tenantSelect' ref={tenantRef} className='select select-bordered input-primary text-accent justify-self-center' value={formData.tenant} onChange={handleChange}>
                    {tenants?.map((tenant) => (
                        <option key={tenant.id}  value={tenant.id} data-tenant-obj={JSON.stringify(tenant)}>
                            {tenant.firstName + ' ' + tenant.lastName}
                        </option>
                    ))?? <option> No data available</option> }
                </select>
            </div>
            <div className="form-control justify-self-center">
                <label className='label text-accent'>Property:</label>
                <select name="property" id='propertySelect' ref={ propertyRef} className='select select-bordered input-primary text-accent justify-self-center'  value={formData.property} onChange={handleChange}>
                    {properties?.map((property, i) => (
                        <option className='text-accent' key={i} data-property-obj={JSON.stringify(property)} value={property.id}>
                            {property.name}
                        </option>
                    ))} ?? <option> No data available</option>
                </select>
            </div>
            <div className="form-control justify-self-center">
                <label className='label text-accent'>Unit:</label>
                <select id='unitSelect' ref={unitRef} className='select select-bordered input-primary text-accent justify-self-center' name="unit" value={formData.unit} onChange={handleChange}>
                    {units.map((unit) => (
                        <option key={unit.unitNumber} data-unit-obj={JSON.stringify(unit)} value={unit.id}>
                            {unit.unitNumber}
                        </option>
                    ))}
                </select>
            </div>7
            <div className="form-control justify-self-center">
                <label className='label text-accent'>Utilities:</label>
                <div>
                    <label className='label text-accent'>
                        <input
                            type="checkbox"
                            name="utilities"
                            value="electric"
                            onChange={handleChange}

                            className='checkbox checkbox-md input-primary text-accent'
                        />
                        Electric
                    </label>
                    <label className='label text-accent'>
                        <input
                            type="checkbox"
                            name="utilities"
                            value="gas"
                            onChange={handleChange}
                            className='checkbox checkbox-md input-primary text-accent'
                        />
                        Gas
                    </label>
                    <label className='label text-accent'>
                        <input
                            type="checkbox"
                            name={"utilities"}
                            value="water"
                            onChange={handleChange}
                            className='checkbox checkbox-md input-primary text-accent'
                        />
                        Water
                    </label>
                </div>
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default AddLeaseForm;