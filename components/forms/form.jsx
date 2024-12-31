
import React from 'react';
import { useForm } from 'react-hook-form';
export const getElement = (register, {
  type,
  name,
  label,
  errorFlag, 
  errorMsg, 
  options, 
  onChange,
  value, 
  pattern,
  id, 
  autoComplete,
  disabled, 
  onInput,
  

}) =>
{
  switch (type) {
      case "text":
        return (
          
          <div className="form-control justify-self-center" key={`${name}-text`}>
            <label className='label text-accent'  htmlFor={`${name}`}>{label}</label>
            <input type="text"  {...register(`${name}`)} autoComplete={autoComplete} disabled={disabled? true: false} pattern={pattern} className='input input-bordered input-primary text-accent justify-self-center' name={name} key={`${name}-text`} onChange={onChange}  onInput={onInput} value={value} id={id} />
            {errorFlag && <span>{errorMsg}</span>}
          </div>
        );

      case "number":
        return (
          <div className="form-control justify-self-center " key={`${name}-number`}>
            <label className= "label text-accent" htmlFor={`${name}`}>{label}</label>
            <input type="number"name={name} {...register(`${name}`)} className='input input-bordered input-primary text-accent' disabled={disabled? true: false} key={`${name}-number`} onChange={onChange} value={value} id={id}/>
            {errorFlag && <span>{errorMsg}</span>}
          </div>
        );
      case "password":
        return (
          <div key={`${name}-password`} className="form-control justify-self-center max-w-xs">
            <label className= "label" htmlFor={`${id}`}>{label}</label>
            <input type="password" {...register(`${name}`)} className='input input-bordered flex items center gap-2' name={name} key={`${name}-password`}  onChange={onChange} value={value} id={id}/>
            {errorFlag && <span>{errorMsg}</span>}
          </div>
        );
      case "date":
        return (
          <div key={`${name}-date`} className="form-control justify-self-center">
            <label className='label'  htmlFor={`${name}`}>{label}</label>
            <input type="date" {...register(`${name}`)}  className="input input-bordered flex items center text-accent gap-2 " name={name} onChange={onChange} value={value} id={id} />
            {errorFlag && <span>{errorMsg}</span>}
          </div>
        );
      case "dropdown":
        return (
          <div key={`${name}-dropdown`} className="form-control justify-self-center max-w-xs">
            <label className='label text-accent' htmlFor={`${name}`}>{label}</label>
            <select onChange={onChange} {...register(`${name}`)} className= "input input-bordered flex items-center gap-2 text-accent" name={name} value={value} id={id}>
              {options.map(option => {
                return <option key={`${name}-${option}`} defaultValue=" " value={option}>{option}</option>;
              })}
            </select>
            {errorFlag && <span>{errorMsg}</span>}
          </div>
        );
    }
  }

export default function Form ({config, title, onSubmit, onInput, id, onClick}) {

  const {register,
    watch, 
    handleSubmit,
    formState:{errors}
    } = useForm()
    



    return (
      <div id={id} className="p-4 border rounded-lg shadow-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">{title}</h2>
        <form onSubmit={(e) => handleSubmit(onSubmit(e))} className="space-y-4">
     {
           config.map(element => {
            return getElement(register, element)
           })
     }
        <button type='submit'  className='btn btn-circle text-accent' >Submit</button>
        </form>
      </div>
    );
  };

  

  

    
 