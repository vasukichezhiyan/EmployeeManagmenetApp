import React, { useEffect, useState } from 'react';
import { listEmployees, deleteEmployee} from '../service/EmployeeService';
import { useNavigate } from 'react-router-dom';

const ListEmployeeComponents = () => {

    const [employees, setEmployees] = useState([]);
    const navigator = useNavigate();

    useEffect(() => {
        getAllEmployees();
    }, [])

    function getAllEmployees(){
        listEmployees().then((response) => {
            setEmployees(response.data);
        }).catch(error => {
            console.error(error);
        });
    }
    

    function addNewEmployee(){
        navigator('/add-employee')
    }

    function updateEmployee(id){
        navigator(`/edit-employee/${id}`)
    }

    function deletemployee(id){
        console.log("delete",id);
        deleteEmployee(id).then((response) =>{
            getAllEmployees();
        }).catch(error =>  {
            console.error(error);
        });
    }

    return (
        <div className='container'>
            <h2 className='text-center'>List of All Employees</h2>
            <button className='btn btn-primary mb-2' onClick={addNewEmployee}>Add Employee</button>
            <table className='table table-striped table-bordered'>
                <thead>
                    <tr>
                        <th>Employee Id</th>
                        <th>Employee FirstName</th>
                        <th>Employee LastName</th>
                        <th>Employee Email Id</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map(employee => <tr key={employee.id}>
                        <td>{employee.id}</td>
                        <td>{employee.firstName}</td>
                        <td>{employee.lastName}</td>
                        <td>{employee.email}</td>
                        <td className='text-center'><button className='btn btn-info' onClick={() => updateEmployee(employee.id)}>Update</button><button className='btn btn-danger' style={{marginLeft:'10px'}}onClick={() => deletemployee(employee.id)}>Delete</button></td>
                    </tr>)}
                </tbody>
            </table>
        </div>
    );
};
export default ListEmployeeComponents;
