'use client'
import React, { useState } from 'react';
import { addLease } from '../../store/slices/leaseSlice';
import { useAppDispatch } from '../../utils/hooks';
const AddLeaseForm = ({ tenants, properties }) => {
    const dispatch = useAppDispatch();

   
    const [propertyId, setPropertyId] = useState('');
    const [units, setUnits] = useState([]);
    
       
  
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
                setPropertyId(value);
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
        e.preventDefault();
        // Handle form submission logic here
          dispatch(addLease(formData));
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
                <select name="tenant" className='select select-bordered input-primary text-accent justify-self-center' value={formData.tenant} onChange={handleChange}>
                    {tenants.map((tenant) => (
                        <option key={tenant.id} value={tenant.lastName}>
                            {tenant.firstName + ' ' + tenant.lastName}
                        </option>
                    ))}
                </select>
            </div>
            <div className="form-control justify-self-center">
                <label className='label text-accent'>Property:</label>
                <select name="property" className='select select-bordered input-primary text-accent justify-self-center'  value={formData.property} onChange={handleChange}>
                    {properties.map((property, i) => (
                        <option className='text-accent' key={i} value={i}>
                            {property.name}
                        </option>
                    ))}
                </select>
            </div>
            <div className="form-control justify-self-center">
                <label className='label text-accent'>Unit:</label>
                <select className='select select-bordered input-primary text-accent justify-self-center' name="unit" value={formData.unit} onChange={handleChange}>
                    {units.map((unit) => (
                        <option key={unit.unitNumber} value={unit.unitNumber}>
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