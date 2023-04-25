import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom';

export default function Home() {

    const [university, setUniversity] = useState([])

    const {id} = useParams();

    useEffect(() => {
        loadUniversities();
    },[]);

    const loadUniversities = async() => {
        const result = await axios.get(`https://sp-backend-university.azurewebsites.net/universities`)
        setUniversity(result.data);
    };

    const deleteUniversity = async (id) => {
        await axios.delete(`https://sp-backend-university.azurewebsites.net/university/${id}`)
        loadUniversities();
    }

  return (
    <div className="container">
        <div className="py-4">
        <table className="table border shadow">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">University Name</th>
      <th scope="col">Resident State</th>
      <th scope="col">Mascot</th>
      <th scope="col">Address</th>
      <th scope="col">Acceptance Rate Percentage</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>

        {
            university.map((university, index) => (
                <tr>
                <th scope="row" key={index}>{index + 1}</th>
                <td>{university.universityName}</td>
                <td>{university.universityState}</td>
                <td>{university.universityMascot}</td>
                <td>{university.universityAddress}</td>
                <td>{university.universityAcceptanceRate}</td>
                <td>
                    <Link
                    className="btn btn-primary mx-2"
                    to={`/viewUniversity/${university.id}`}
                    >
                    View
                  </Link>
                    <Link 
                    className="btn btn-outline-primary mx-2"
                    to={`/editUniversity/${university.id}`}
                    >
                      Edit
                    </Link>
                    <button 
                    className="btn btn-danger mx-2"
                    onClick={() => deleteUniversity(university.id)}
                    >
                      Delete
                    </button>
                </td>
              </tr>

            ))
        }

  </tbody>
</table>
        </div>
    </div>
  )
}
