import React from "react";
import { getElement } from "../components/forms/form";
import { useForm, Controller } from "react-hook-form";



export default function ModalForm({id,  numUnits, config, title}){
let unitsFields =[] 

let units = []
const {register, handleSubmit,control, setValue, getValues} = useForm()

unitsFields = []
  
   
 const unitForm = {
  propertyID: "", 
  unitNumber: "", 
  squareFeet: 0,
  numBedrooms: 0, 
  numBathrooms: 0, 
  unitStatus: "", 
 }
    


for(let i=0 ; i <= numUnits - 1; i++){
       units.push(unitForm)
}

console.log(units)
console.log(unitForm)
console.log(unitsFields)

const onSubmit = (data) => {
  console.table(data)
}



    return(
<dialog id={id} className="modal">
  <div className="modal-box">
    <h4 className="title text-accent">{title}</h4>
 <form  method="dialog" onSubmit={handleSubmit(onSubmit)}>
 <ol role="tablist" className="tabs tabs-lifted">
 
      {units.map((unit,i) =>{
        <>
        < li type="radio" key={i} name="units" role='tab' className="tab" aria-label={`Unit ${i}`} />
        <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
          {Object.entries(unit).map(([label, field], ind) => (
            <div className="form-control" key={ind}>
            <label className='label text-accent'  htmlFor={`${id}.${i}.${label}`}>{label}</label>
            <input type="text"  {...register(`${id}.${i}.${label}`)}  className='input input-bordered input-primary text-accent flex items center gap-2' />
          </div>
          ))
        }
        </div>
        </>
        
      }
      
      )}
      </ol>
  
  
  
 

     
     
        <button type="submit"  className="btn">Close</button>
     </form>
  </div>
</dialog>
)}