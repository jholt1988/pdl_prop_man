'use client'
import React, { useState } from 'react';

import { useAppDispatch } from '../../utils/hooks';
import { useCreateLeaseMutation } from '../../features/leases/store/lease';
import { useCreateUtilitiesMutation } from '../../features/leases/store/lease';
const AddLeaseForm = ({ tenants, properties }) => {
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
        tenant: '',
        property: '',
        unit: '',
        utilities: {
            electric: false,
            gas: false,
            water: false,
        },
    });

    const selectTenant = tenants?.find((tenant) => tenant.id === formData.tenant);
    const selectProperty = properties?.find((property) => property.id === formData.property);
    const selectUnit = selectProperty?.units.find((unit) => unit.id === formData.unit)

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
            setFormData({
                ...formData,
                utilities: {
                    ...formData.utilities,
                    [name]: checked,
                },
            });
        } else {
            if (name === 'property') { 
                setPropertyId(Number(value));
                console.log(propertyId)
                setUnits(properties[value].units);
            }
            setFormData({
                ...formData,
                [name]: value,
            });
        }
    };

    const handleSubmit = (e) => {
        const createUtiltiesResponse = createUtilities(formData.utilities).unwrap();
        // Handle form submission logic here
        const newLease = {
            termOfLease: formData.termOfLease,
            beginDate: formData.beginDate,
            endDate: formData.endDate,
            monthlyRent: Number(formData.monthlyRent),
            deposit: Number(formData.deposit),
            petDeposit: Number(formData.petDeposit),
            tenantId: formData.tenant, 
            propertyId: formData.property,
            unitId: formData.unit,
            tenant: select.tenant,
            property: selectProperty,
            unit: selectUnit,
            utilitiesId: createUtiltiesResponse.id,
            utilities: formData.utilities,

        }
        createLease(formData);                                                          
      
        console.log(formData);
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
                    value={Number(formData.monthlyRent)}
                    onChange={handleChange}
                    className='input input-bordered input-primary text-accent justify-self-center' 
                />
            </div>
            <div className="form-control justify-self-center">
                <label className='label text-accent'>Deposit:</label>
                <input
                    type="number"
                    name="deposit"
                    value={Number(formData.deposit)}
                    onChange={handleChange}
                    className='input input-bordered input-primary text-accent justify-self-center' 
                />
            </div>
            <div className="form-control justify-self-center">
                <label className='label text-accent' >Pet Deposit:</label>
                <input
                    type="number"
                    name="petDeposit"
                    value={Number(formData.petDeposit)}
                    onChange={handleChange}
                    className='input input-bordered input-primary text-accent justify-self-center' 
                />
            </div>
            <div className="form-control justify-self-center">
                <label className='label text-accent'>Tenant:</label>
                <select name="tenant" className='select select-bordered input-primary text-accent justify-self-center' value={formData.tenant} onChange={handleChange}>
                    {tenants?.map((tenant) => (
                        <option key={tenant.id} value={tenant.id}>
                            {tenant.firstName + ' ' + tenant.lastName}
                        </option>
                    ))?? <option> No data available</option> }
                </select>
            </div>
            <div className="form-control justify-self-center">
                <label className='label text-accent'>Property:</label>
                <select name="property"  className='select select-bordered input-primary text-accent justify-self-center'  value={formData.property} onChange={handleChange}>
                    {properties?.map((property, i) => (
                        <option className='text-accent' key={i} value={property.id}>
                            {property.name}
                        </option>
                    ))} ?? <option> No data available</option>
                </select>
            </div>
            <div className="form-control justify-self-center">
                <label className='label text-accent'>Unit:</label>
                <select className='select select-bordered input-primary text-accent justify-self-center' name="unit" value={formData.unit} onChange={handleChange}>
                    {units.map((unit) => (
                        <option key={unit.unitNumber} value={unit.id}>
                            {unit.unitNumber}
                        </option>
                    ))}
                </select>
            </div>
            <div className="form-control justify-self-center">
                <label className='label text-accent'>Utilities:</label>
                <div>
                    <label className='label text-accent'>
                        <input
                            type="checkbox"
                            name="electric"
                            checked={formData.utilities.electric}
                            onChange={handleChange}
                            className='checkbox checkbox-md input-primary text-accent'
                        />
                        Electric
                    </label>
                    <label className='label text-accent'>
                        <input
                            type="checkbox"
                            name="gas"
                            checked={formData.utilities.gas}
                            onChange={handleChange}
                            className='checkbox checkbox-md input-primary text-accent'
                        />
                        Gas
                    </label>
                    <label className='label text-accent'>
                        <input
                            type="checkbox"
                            name="water"
                            checked={formData.utilities.water}
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