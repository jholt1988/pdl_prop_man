// File: RepairRequestsList.js
'use client'
import React, { useState } from 'react';
import { useAppSelector } from '../../utils/hooks';

const RepairRequestsList = ({workOrders}) => {

  const [repairRequests, setRepairRequests] = useState(workOrders??[]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   const fetchRepairRequests = async () => {
  //     try {
  //       // Simulated API fetch
  //       const response = await fetch('/api/repair-requests'); // Replace with your API endpoint
  //       if (!response.ok) {
  //         throw new Error('Failed to fetch repair requests.');
  //       }
  //       const data = await response.json();
  //       setRepairRequests(data);
  //     } catch (err) {
  //       setError(err.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchRepairRequests();
  // }, []);

  if (loading) return <p>Loading repair requests...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="repair-requests-list">
      <h1>All Repair Requests</h1>
      {repairRequests.length === 0 ? (
        <p>No repair requests found.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Issue</th>
              <th>Image</th>
              <th>Property</th>
                <th>Unit</th>
                <th>Status</th>
                
            </tr>
          </thead>
          <tbody>
            {repairRequests.map((request) => (
              <tr key={request.id}>
                <td>{request.id}</td>
                <td>{request.name}</td>
                <td>{request.email}</td>
                <td>{request.phone}</td>
                <td>{request.issue}</td>
                <td>{request.property}</td>
                <td>{request.unit}</td>
                <td>{request.status}</td>

                <td>
                  {request.image ? (
                    <a href={request.image} target="_blank" rel="noopener noreferrer">
                      View Image
                    </a>
                  ) : (
                    'No Image'
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default RepairRequestsList;
