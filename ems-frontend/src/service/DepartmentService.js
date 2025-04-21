import axios from "axios";

const DEPT_REST_API_BASE_URL = "http://localhost:8080/api/departments";

export const listDepartments = () => axios.get(DEPT_REST_API_BASE_URL);

export const createDepartment = (department) => axios.post(DEPT_REST_API_BASE_URL, department);

export const getDepartment = (departmentId) => axios.get(DEPT_REST_API_BASE_URL + '/' + departmentId);

export const updateDepartment = (departmentId, department) => axios.put(DEPT_REST_API_BASE_URL + '/' + departmentId, department);

export const deleteDepartment = (departmentId) => axios.delete(DEPT_REST_API_BASE_URL + '/' + departmentId);
