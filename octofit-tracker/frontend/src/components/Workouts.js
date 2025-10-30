import React, { useEffect, useState } from 'react';

const Workouts = () => {
  const [workouts, setWorkouts] = useState([]);
  const endpoint = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/workouts/`;

  useEffect(() => {
    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        console.log('Workouts API endpoint:', endpoint);
        console.log('Fetched workouts data:', data);
        setWorkouts(data.results || data);
      });
  }, [endpoint]);

  return (
    <div className="card shadow mb-4">
      <div className="card-body">
        <h2 className="card-title mb-4 text-danger">Workouts</h2>
        <table className="table table-striped table-bordered">
          <thead className="table-dark">
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {workouts.map((workout, idx) => (
              <tr key={workout.id || idx}>
                <td>{workout.name || '-'}</td>
                <td>{workout.type || '-'}</td>
                <td>
                  <button className="btn btn-info btn-sm mx-1">View</button>
                  <button className="btn btn-warning btn-sm mx-1">Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* Example Bootstrap Modal */}
        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#workoutModal">Show Modal</button>
        <div className="modal fade" id="workoutModal" tabIndex="-1" aria-labelledby="workoutModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="workoutModalLabel">Workout Details</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">Modal content here...</div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workouts;
