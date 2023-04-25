import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function EditUniversity() {

    let navigate = useNavigate();

    const {id} = useParams()

    const [university, setUniversity] = useState({
        universityName:"",
        universityState:"",
        universityMascot:"",
        universityAddress:"",
        universityAcceptanceRate:"",
    });

    const { universityName, universityState, universityMascot, universityAddress, universityAcceptanceRate } = university;

    const onInputChange = (e) => {
        setUniversity({ ...university, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        loadUniversity();
    }, []);

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`https://sp-backend-university.azurewebsites.net/university/${id}`, university);
        navigate("/");
    };

    const loadUniversity = async () => {
        const result = await axios.get(`https://sp-backend-university.azurewebsites.net/university/${id}`);
        setUniversity(result.data);
    };
    
  return (
    <div className="container">
        <div className="row">
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                <h2 className="text-center m-4">Edit University</h2>

                <form onSubmit={(e)=>onSubmit(e)}>
                <div className="mb-3">
                    <label htmlFor="University Name" className="form-label">
                        University Name
                    </label>
                    <input
                    type="text"
                    className="form-control"
                    placeholder="Enter University Name"
                    name="universityName"
                    value={universityName}
                    onChange={(e) => onInputChange(e)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="University State" className="form-label">
                        Resident State
                    </label>
                    <input
                    type={"text"}
                    className="form-control"
                    placeholder="Enter State"
                    name="universityState"
                    value={universityState}
                    onChange={(e) => onInputChange(e)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="University Mascot" className="form-label">
                        Mascot
                    </label>
                    <input
                    type={"text"}
                    className="form-control"
                    placeholder="Enter Mascot"
                    name="universityMascot"
                    value={universityMascot}
                    onChange={(e) => onInputChange(e)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="University Address" className="form-label">
                        Address
                    </label>
                    <input
                    type={"text"}
                    className="form-control"
                    placeholder="Enter Address"
                    name="universityAddress"
                    value={universityAddress}
                    onChange={(e) => onInputChange(e)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="University Acceptance Rate" className="form-label">
                        Acceptance Rate
                    </label>
                    <input
                    type={"text"}
                    className="form-control"
                    placeholder="Enter Acceptance Rate"
                    name="universityAcceptanceRate"
                    value={universityAcceptanceRate}
                    onChange={(e) => onInputChange(e)}
                    />
                </div>
                <button type="submit" className="btn btn-outline-primary">Accept</button>
                <Link className="btn btn-outline-danger mx-2" to="/">Cancel</Link>
                </form>
            </div>
        </div>
    </div>
  )
}
