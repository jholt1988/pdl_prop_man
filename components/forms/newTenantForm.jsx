"use client"
import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import Form from './form';
import {getNewTenantConfig} from './config/newTenantFormConfig';
import { formatSSNInput, formatTelephoneInput } from '../../lib/utils';
import { addTenant } from '../../store/tenantSlice';
import { useAppDispatch } from '../../lib/hooks';



/**
 * NewTenantForm component handles the form for adding a new tenant.
 * It uses a form reference to manage form data and dispatches an action to add a new tenant.
 *
 * @component
 * @returns {JSX.Element} The rendered component.
 *
 * @function handleInput
 * Handles input events to format SSN and phone number fields.
 * @param {Object} e - The event object.
 *
 * @function handleChange
 * Updates the form reference with the new value for a given data label.
 * @param {string} value - The new value for the form field.
 * @param {string} dataLabel - The label of the form field being updated.
 *
 * @function handleSubmit
 * Handles the form submission, dispatching an action to add a new tenant.
 * @param {Object} e - The event object.
 */
 export default function NewTenantForm(){
   const formRef = useRef({});
   const dispatch = useDispatch();


 const handleInput = (e) => {
    let fieldType = e.target.getAttribute("name");
    if (fieldType === 'ssn') {
        const formatInput = formatSSNInput(e.target.value);
        e.target.value = formatInput;
    }
    if (fieldType === 'phone') {
        const formatInput = formatTelephoneInput(e.target.value);
        e.target.value = formatInput;
    }
 }





  const handleChange = (value, dataLabel) => {
          formRef.current = {
            ...formRef.current,
             [dataLabel] : value}
             
             
  }

  const handleSubmit= (e) =>  {
const newTenantData = formRef.current;
const newTenant = new FormData(newTenantData);
dispatch(addTenant(newTenant));
  
  }

  

  return(
    
    <Form 
      id="addTenantForm" 
      config={getNewTenantConfig(handleChange, formRef)} 
      formRef={formRef} 
      title={"New Tenant"} 
      onSubmit={handleSubmit} 
      onInput={handleInput} 
    />
  
 )}
