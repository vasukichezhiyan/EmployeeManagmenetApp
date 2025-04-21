import React,{useEffect, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { listDepartments, deleteDepartment } from '../service/DepartmentService';


const ListDepartmentComponent = () => {

let dummyData = [
    {
        "id":1,
        "departmentName":"R&D",
        "departmentDescription":"ResearchAndDevelopment"
    },
    {
        "id":2,
        "departmentName":"R&D",
        "departmentDescription":"ResearchAndDevelopment"
    },
    {
        "id":3,
        "departmentName":"R&D",
        "departmentDescription":"ResearchAndDevelopment"
    }
]
    const [departments, setDepartments] = useState([]);
    const navigator = useNavigate();

    useEffect(() => {
        getAllDepartments();
    }, [])

    function getAllDepartments()
    {
        listDepartments().then((response)=>{
            console.log(response.data);
            setDepartments(response.data);
        }).catch(error => {
            console.error(error);
        })
    }

    function updateDepartment(id){
        navigator(`/edit-department/${id}`)
    }

    function removeDepartment(id){
        deleteDepartment(id).then((response) => {
            console.log(response.data);
            getAllDepartments();
        }).catch(error => {
            console.error(error);
        })
    }

  return (
    <div className='container'>
        <h2 className='text-center'>List of Departments</h2>
        <Link to='/add-department' className='btn btn-primary mb-2'>Add Department</Link>
        <table className='table table-striped table-bordered'>
            <thead>
                <tr>
                    <td>Department Id</td>
                    <td>Department Name</td>
                    <td>Department Description</td>
                </tr>
            </thead>
            <tbody>
                {
                    departments.map( department =>
                        <tr key={department.id}>
                            <td>{department.id}</td>
                            <td>{department.departmentName}</td>
                            <td>{department.departmentDescription}</td>
                            <td className='text-center'><button className='btn btn-info' onClick={() => updateDepartment(department.id)}>Update</button><button className='btn btn-danger' style={{marginLeft:'10px'}} onClick={() => removeDepartment(department.id)}>Delete</button></td>
                        </tr>
                    )
                }
            </tbody>
        </table>

    </div>
  )
}

export default ListDepartmentComponent