"use client"
import React, {useEffect } from 'react';
import AddPropertyForm from '../../components/forms/addPropertyForm';
import PropertiesList from '../../components/data_display/properties_list';
import { fetchProperties,  } from '../../store/slices/propertiesSlice';
import { useAppDispatch, useAppSelector } from '../../utils/hooks';
import { useGetPropertyListQuery } from '../../features/properties/store/property';




export default function Propertiespage (props) {
    const dispatch = useAppDispatch();
    
    const { data, error, isLoading } = useGetPropertyListQuery({pollingInterval:3000, refetchonFocus: true, refetchOnReconnect: true, refetchOnMountOrArgChange: true, skip: false});
    return (
        <>
        
            <h1> {props.title} </h1>
            <PropertiesList properties={data?.data ?? []} />
            <AddPropertyForm />
            
        </>
    )
}