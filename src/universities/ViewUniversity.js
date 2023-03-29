import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function ViewUniversity() {
    const [university, setUniversity] = useState({
        universityName:"",
        universityState:"",
        universityMascot:"",
        universityAddress:"",
        universityAcceptanceRate:"",
    });

    const {id} = useParams()

    useEffect(() => {
        loadUniversity();
      }, []);

      const loadUniversity = async () => {
        const result = await axios.get(`http://localhost:8080/university/${id}`);
        setUniversity(result.data);
      };

  return (
    <div className="container">
        <div className="row">
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                <h2 className="text-center m-4">University Details</h2>

                <div className="card">
                    <div className="card-header">
                        Details of University ID: {university.id}
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <b>University Name:</b>
                                {university.universityName}
                            </li>
                            <li className="list-group-item">
                                <b>Residing State:</b>
                                {university.universityState}
                            </li>
                            <li className="list-group-item">
                                <b>Mascot:</b>
                                {university.universityMascot}
                            </li>
                            <li className="list-group-item">
                                <b>Address:</b>
                                {university.universityAddress}
                            </li>
                            <li className="list-group-item">
                                <b>Acceptance Rate:</b>
                                {university.universityAcceptanceRate}
                            </li>
                        </ul>
                    </div>
                </div>
                <Link className="btn btn-primary my-2" to="/">
                    Back to Home
                </Link>
                </div>
                </div>
                </div>
  );
}
