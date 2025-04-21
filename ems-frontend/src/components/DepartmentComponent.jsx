import React, { useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { createDepartment, getDepartment, updateDepartment } from '../service/DepartmentService';
import { use } from 'react';

const DepartmentComponent = () => {
    const [departmentName, setDepartmentName] = useState('');
    const [departmentDescription, setDepartmentDescription] = useState('');
    const navigator = useNavigate();

    const [errors, setErros] = useState({
            departmentName : '',
            departmentDescription : ''
        })
    
    const {id} = useParams();

    function validateForm(){
        let valid = true;
        const errorsCopy = {...errors}

        if(departmentName.trim()){
            errorsCopy.departmentName = '';
        }else {
            errorsCopy.departmentName = 'Department Name is required';
            valid = false;
        }

        if(departmentDescription.trim()){
            errorsCopy.departmentDescription = '';
        }else {
            errorsCopy.departmentDescription = 'Department Description is required';
            valid = false;
        }

        
        setErros(errorsCopy);

        return valid;
    }
    function saveorUpdateDepartment(e){
        e.preventDefault();
         
        const department = {departmentName,departmentDescription}
        console.log(department);

        if(validateForm()){
            if(id){
                updateDepartment(id, department).then((response) => {
                    console.log(response.data);
                    navigator("/departments")
                }).catch(error => {
                    console.error(error);
                })
            }else{
            createDepartment(department).then((response) => {
                console.log(response.data);
                navigator("/departments")
            }).catch(error => {
                console.error(error);
            })
            }
        }
    }

    function pageTitle(){ 
            if(id){
                return <h2 className='text-center'>Update Department</h2>
            }
            else{
                return <h2 className='text-center'>Add Department</h2>
            }
        }

    useEffect(() => {
        if(id){
            getDepartment(id).then((response) => {
                setDepartmentName(response.data.departmentName);
                setDepartmentDescription(response.data.departmentDescription);
            }).catch(error => {
                console.error(error);
            })
        }
    }, [id]);

  return (
    <div className='container'>
        <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
                {pageTitle()}
                <div className='card-body'>
                    <form>
                        <div className='form-group mb-2'>
                            <label className='form-label'>Department Name</label>
                            <input
                                type="text"
                                placeholder='Enter Department Name'
                                name='departmentName'
                                value={departmentName}
                                className={`form-control ${errors.departmentName ? 'is-invalid' : ''}`}
                                onChange={(e) => setDepartmentName(e.target.value)}
                            >                                
                            </input>
                            { errors.departmentName && <div className='invalid-feedback'>{errors.departmentName}</div> }
                        </div>
                        <div className='form-group mb-2'>
                            <label className='form-label'>Department Description</label>
                            <input
                                type="text"
                                placeholder='Enter Department Description'
                                name='departmentDescription'
                                value={departmentDescription}
                                className={`form-control ${errors.departmentDescription ? 'is-invalid' : ''}`}
                                onChange={(e) => setDepartmentDescription(e.target.value)}
                            ></input>
                            { errors.departmentDescription && <div className='invalid-feedback'>{errors.departmentDescription}</div> }
                        </div>
                        <button className='btn btn-success' onClick={saveorUpdateDepartment}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DepartmentComponent