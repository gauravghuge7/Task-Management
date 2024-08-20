// src/Dashboard.js
import React from 'react';
import Componynavabar from '../navbar/Componynavabar';

const Dashboard = () => {
    return (
        <div className="container mt-4">

            
            <div className="row">
                <div className="col-md-4">
                    <div className="card text-white bg-success mb-3">
                        <div className="card-header">Completed Tasks</div>
                        <div className="card-body">
                            <h5 className="card-title">10 Tasks</h5>
                            <p className="card-text">All tasks that have been successfully completed.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card text-white bg-warning mb-3">
                        <div className="card-header">Pending Tasks</div>
                        <div className="card-body">
                            <h5 className="card-title">5 Tasks</h5>
                            <p className="card-text">Tasks that are still in progress and need to be completed.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card text-white bg-info mb-3">
                        <div className="card-header">To-Do Tasks</div>
                        <div className="card-body">
                            <h5 className="card-title">8 Tasks</h5>
                            <p className="card-text">Tasks that are planned but not yet started.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
