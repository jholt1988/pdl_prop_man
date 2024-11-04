
import React from 'react';

export default function Form ({config, title, onSubmit, onInput}) {
const getElement = ({
    type,
    name,
    label,
    errorFlag, 
    errorMsg, 
    options, 
    onChange,
    value, 
    pattern,
  
}) =>
{
    switch (type) {
        case "text":
          return (
            <div className="form-control" key={`${name}-text`}>
              <label className='label '>{label}</label>
              <input type="text" pattern={pattern} className='input input-bordered input-primary text-accent flex items center gap-2' name={name} key={`${name}-text`} onChange={onChange}  onInput={onInput} value={value} />
              {errorFlag && <span>{errorMsg}</span>}
            </div>
          );
  
        case "number":
          return (
            <div className="form-control " key={`${name}-number`}>
              <label className= "input input-bordered flex items-center gap-2">{label}</label>
              <input type="number" className='input input-bordered flex items center gap-2' name={name} key={`${name}-number`} onChange={onChange} value={value} />
              {errorFlag && <span>{errorMsg}</span>}
            </div>
          );
        case "password":
          return (
            <div  key={`${name}-password`} className="form-control w-full max-w-xs">
              <label className= "label">{label}</label>
              <input type="password" className='input input-bordered flex items center gap-2' name={name} key={`${name}-password`}  onChange={onChange} value={value} />
              {errorFlag && <span>{errorMsg}</span>}
            </div>
          );
        case "date":
          return (
            <div  key={`${name}-date`}className="form-control">
              <label className='label' >{label}</label>
              <input type="date"  className="input input-bordered flex items center text-accent gap-2 " name={name} onChange={onChange} value={value} />
              {errorFlag && <span>{errorMsg}</span>}
            </div>
          );
        case "dropdown":
          return (
            <div key={`${name}-dropdown`} className="form-control w-full max-w-xs">
              <label className='label'>{label}</label>
              <select onChange={onChange} className= "input input-bordered flex items-center gap-2" name={name} value={value}>
                {options.map(option => {
                  return <option key={`${name}-${option}`} value={option}>{option}</option>;
                })}
              </select>
              {errorFlag && <span>{errorMsg}</span>}
            </div>
          );
      }
    }

    return (
      <div className="p-6 max-w-lg mx-auto bg-primary-100 shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">{title}</h2>
        <form  className="space-y-4">
        {config.map(element => {
          return getElement(element);
        })}
        <button type='submit' className='btn btn-circle text-accent' onSubmit={onSubmit}>Submit</button>
        </form>
      </div>
    );
  };

  
 
  

    