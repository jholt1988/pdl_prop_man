'use client'
import React,{useRef, useState} from "react";
import { useAppDispatch , useAppSelector} from "../../app/lib/hooks";
import ModalForm from "../../app/modal/modal";
import { getAddUnitConfig } from "./config/addUnitFormConfig";


export default function AddUnitForm({propID, numUnits}){
    const selectProperty = useAppSelector((state) => state.properties.list)
    console.log(selectProperty[-1])
    const [propertyID, setPropertyID] = useState(selectProperty.at(-1).id )
    const [unitNum, setUnitNum] = useState(selectProperty.at(-1).numUnits)
    const formRef = useRef({})

    const handleChange = (value, dataLabel) => {
        formRef.current = {
          ...formRef.current,
           [dataLabel] : value}       
    }
    
    

return (
    <ModalForm id='' config={getAddUnitConfig(handleChange, formRef, propertyID)} ref={formRef} title={`Add Unit To ${propertyID}`} numUnits={unitNum} />

)

}