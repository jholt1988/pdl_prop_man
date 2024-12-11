'use client'
import { useState, useRef } from "react";
import { useForm, Controller } from "react-hook-form";

/**
 * UnitFormModal component
 * @param {Object} props - Component props
 * @param {string} props.propID - The ID of the property
 * @param {number} props.numUnits - The number of units
 * @param {string} props.title - The title of the modal
 * @param {string} props.id - The ID of the modal
 */
const closeModal = (modalRef) => {
  if (modalRef.current) {
   console.log(modalRef.current)
  }
 
};

export default function UnitFormModal({ propID, numUnits, title,id, open, onClose }) {
  const [tabCount, setTabCount] = useState(numUnits); // Number of tabs/forms
  const [isOpen, setIsOpen] = useState(open); // Modal visibility
  const { control, handleSubmit, register, reset } = useForm(); // React Hook Form
  const options = ['Occupied', 'Vacant-Not Ready', 'Vacant', 'Reserved-Deposit Received']

  const modalRef = useRef(null);

  

  
 const generateTabs = () => {
    return Array.from({ length: tabCount }, (_, index) => ({
      id: index + 1,
      label: `Form ${index + 1}`,
    }));
  };

  const onSubmit = (data) => {
    console.log("Submitted Data:", data);
    closeModal(modalRef); // Close the modal after form validation
  };

  return (
    <>
      

      {/* Modal */}
      {isOpen && (
        <dialog id={id}method='dialog' ref={modalRef} className="modal opacity-100">
          <div className="modal-box w-full ">
            {/* Close button */}
            <button
              onClick={() => {
                closeModal(modalRef); // Close the modal
                reset(); // Reset form data
              }}
            >
              ✕
            </button>

            <h3 className="text-lg font-bold">{title}</h3>

            {/* Input to set number of tabs */}
            <div className="my-4 pointer-events-auto">
              <label htmlFor="formCount" className="label">
                <span className="label-text text-accent">Enter number of units</span>
              </label>
              <input
                name="formCount"
                type="number"
                className="input input-bordered input-primary text-accent flex items center gap-2"
                min="1"
                {...register("formCount", {
                  onChange: (e) => setTabCount(Number(e.target.value)),
                })}
              />
            </div>

            {/* Render Tabs */}
            <div role="tablist" className="tabs tabs-lifted pointer-events-auto">
              {generateTabs().map((tab) => (
                <a
                  type="radio"
                  name="my_tabs_2"
                  role="tab"
                  className="tab"
                  aria-label="Tab 1"
                  key={tab.id}
                >
                  {tab.label}
                </a>
              ))}
            </div>

            {/* Render Forms */}
            <form
              method="dialog"
              onSubmit={handleSubmit((data) => {
                onSubmit(data);
                closeModal(modalRef, setIsOpen);
              })}
              className="mt-4 space-y-4 overflow-auto"
            >
              {generateTabs().map((tab) => (
                <div key={tab.id}>
                  <h4 className="text-md font-semibold">{`Form ${tab.id}`}</h4>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-accent">Property</span>
                    </label>
                    <Controller
                      name={`form_${tab.id}_propertyID`}
                      control={control}
                      defaultValue={propID}
                      value= {propID}
                      
                      render={({ field }) => (
                        <input
                          type="text"
                          className="input input-bordered input-primary text-accent flex items center gap-2"
                          {...field}
                        />
                      )}
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-accent">Unit Number</span>
                    </label>
                    <Controller
                      name={`form_${tab.id}_unitNumber`}
                      control={control}
                      defaultValue={tab.id}
                      render={({ field }) => (
                        <input
                          type="number"
                          className="input input-bordered input-primary text-accent flex items center gap-2"
                          {...field}
                        />
                      )}
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-accent">SQFT</span>
                    </label>
                    <Controller
                      name={`form_${tab.id}_SQFT`}
                      control={control}
                      defaultValue={0}
                      render={({ field }) => (
                        <input
                          type="number"
                          className="input input-bordered input-primary text-accent flex items center gap-2"
                          {...field}
                        />
                      )}
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-accent">Bedrooms</span>
                    </label>
                    <Controller
                      name={`form_${tab.id}_numBedrooms`}
                      control={control}
                      defaultValue={0}
                      render={({ field }) => (
                        <input
                          type="number"
                          className="input input-bordered input-primary text-accent flex items center gap-2"
                          {...field}
                        />
                      )}
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-accent">Bathrooms</span>
                    </label>
                    <Controller
                      name={`form_${tab.id}_numBathrooms`}
                      control={control}
                      defaultValue={0}
                      render={({ field }) => (
                        <input
                          type="number"
                          className="input input-bordered input-primary text-accent flex items center gap-2"
                          {...field}
                        />
                      )}
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-accent">Status</span>
                    </label>
                    <Controller
                      name={`form_${tab.id}_status`}
                      control={control}
                      defaultValue={tab.id}
                      render={({ field }) => (
                        <select
                          type="select"
                          className="input input-bordered input-primary text-accent flex items center gap-2"
                          {...field}
                        >
                          {options.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      )}
                    />
                  </div>
                </div>
              ))}

              {/* Submit button */}
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
              <button
                type="button"
                className="btn"
                onClick={() => {
                  closeModal();
                  reset(); // Reset form data
                }}
              >
                Cancel
              </button>
            </form>
          </div>
        </dialog>
      )}
    </>
  );
}
