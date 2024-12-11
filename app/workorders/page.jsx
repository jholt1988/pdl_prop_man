import React from "react";
import RepairRequestsList from "../components/data_display/repair_list";
import RepairRequestForm from "../components/forms/workOrderForm";

function WorkOrdersPage() { 
  return (
    <div>
      <RepairRequestForm />
      <RepairRequestsList />
    </div>
  );
}

export default WorkOrdersPage;