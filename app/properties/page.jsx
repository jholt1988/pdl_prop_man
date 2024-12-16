"use client"
import React, {useEffect } from 'react';
import AddPropertyForm from '../../components/forms/addPropertyForm';
import PropertiesList from '../../components/data_display/properties_list';
import { fetchProperties,  } from '../../store/slices/propertiesSlice';
import { useAppDispatch, useAppSelector } from '../../utils/hooks';



export default function Propertiespage (props) {
    const dispatch = useAppDispatch();
    const properties = useAppSelector((state) => state.properties.list);
    useEffect(() => {
        dispatch(fetchProperties());
    }, []);
    return (
        <>
        
            <h1> {props.title} </h1>
            <PropertiesList properties={properties} />
            <AddPropertyForm />
            
        </>
    )
}