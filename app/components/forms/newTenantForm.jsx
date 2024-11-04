"use client"
import React, {useRef} from 'react';
import Form from './form';
import {getNewTenantConfig} from './config/newTenantFormConfig';
import { formatSSNInput, formatTelephoneInput } from '../../lib/utils';
 export default function NewTenantForm(){
  const ref = useRef();
  let formRef = useRef({})



 const onInput = (e) =>{
    let fieldType =  e.target.getAttribute("name")
    if(fieldType === 'ssn'){
        const formatInput=  formatSSNInput(e.target.value)
        e.target.value = formatInput
    }
    if(fieldType === 'phone'){
        const formatInput = formatTelephoneInput(e.target.value)
        e.target.value = formatInput
    }
 }





  const onChange = (value, dataLabel) => {
          formRef.current = {
            ...formRef.current,
             [dataLabel] : value}
             
             
  }

  const onSubmit= (e) => {
  console.log(formRef.current)
  
  }

  

  return(
    <Form config={getNewTenantConfig(onChange, formRef)} ref={formRef} title={"New Tenant"} onSubmit={onSubmit} onInput={onInput} />

  )
  
 }
