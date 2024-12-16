'use client'
// File: RepairRequestForm.js
import React, { useState } from 'react';
import { addWorkOrder } from '../../app/store/repairSlice';
import { useAppDispatch } from '../../app/lib/hooks';
const RepairRequestForm = () => {
    const dispatch = useAppDispatch();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        issue: '',
        image: null,
        property: '',
        unit: '',
    });
    const [formStatus, setFormStatus] = useState({ submitted: false, error: false });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleImageUpload = (e) => {
        setFormData({ ...formData, image: e.target.files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formPayload = new FormData();
            for (let key in formData) {
                formPayload.append(key, formData[key]);
            }

            // Simulate sending data to an API
            console.log('Submitting repair request:', formData);
             dispatch(addWorkOrder(formData));
            setFormStatus({ submitted: true, error: false });
        } catch (error) {
            setFormStatus({ submitted: false, error: true });
            console.error('Failed to submit the form:', error);
        }
    };

    return (
        <div className="repair-request-form">
            <h1>Submit a Repair Request</h1>
            <form className='form p-4 border rounded-lg shadow-sm' onSubmit={handleSubmit} encType="multipart/form-data">
                <div className='form control justify-self-center'>
                    <label className='label text-accent' htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className='input input-bordered input-primary text-accent justify-self-center' 
                        required
                    />
                </div>
                <div className='form control justify-self-center'>
                    <label className='label text-accent' htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className='input input-bordered input-primary text-accent justify-self-center' 
                        required
                    />
                </div>
                <div className='form control justify-self-center'>
                    <label className='label text-accent' htmlFor="phone">Phone:</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className='input input-bordered input-primary text-accent justify-self-center' 
                        required
                    />
                </div>
                <div className='form control justify-self-center'>
                    <label className='label text-accent' htmlFor="issue">Issue Description:</label>
                    <textarea
                        id="issue"
                        name="issue"
                        value={formData.issue}
                        onChange={handleInputChange}
                        className='input 
                        required
                    ></textarea>
                </div>
                <div className='form control justify-self-center'>
                    <label className='label text-accent' htmlFor="image">Upload Image (optional):</label>
                    <input
                        type="file"
                        id="image"
                        name="image"
                        accept="image/*"
                        className='input input-bordered input-primary text-accent justify-self-center' 
                        onChange={handleImageUpload}
                    />
                </div>
                <button type="submit">Submit Request</button>
            </form>
            {formStatus.submitted && <p>Thank you! Your request has been submitted.</p>}
            {formStatus.error && <p>There was an error submitting your request. Please try again.</p>}
        </div>
    );
};

export default RepairRequestForm;
