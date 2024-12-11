import React from 'react';
import AddPropertyForm from '../components/forms/addPropertyForm';
import PropertiesList from '../components/data_display/properties_list';


export default function Propertiespage (props) {

    return (
        <>
        
            <h1> {props.title} </h1>
            <PropertiesList />
            <AddPropertyForm />
            
        </>
    )
}