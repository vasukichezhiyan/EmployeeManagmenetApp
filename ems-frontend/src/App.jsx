import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ListEmployeeComponents from './components/ListEmployeeComponents'
import { HeaderComponent } from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import { EmployeeComponent } from './components/EmployeeComponent'
import { Routes, Route } from "react-router-dom";
import ListDepartmentComponent from './components/ListDepartmentComponent'
import DepartmentComponent from './components/DepartmentComponent'

function App() {
  return (
    <>
      <HeaderComponent/>
        <div className='main'>
        <Routes>
          <Route path='/' element = { <ListEmployeeComponents/> }></Route>
          <Route path='/employees' element = { <ListEmployeeComponents/> }></Route>
          <Route path='/add-employee' element = { <EmployeeComponent/> }></Route>
          <Route path='/edit-employee/:id' element = { <EmployeeComponent/> }></Route>
          <Route path='/departments' element = { <ListDepartmentComponent/> }></Route>
          <Route path='/add-department' element = { <DepartmentComponent/> }></Route>
          <Route path='/edit-department/:id' element = { <DepartmentComponent/> }></Route>
        </Routes>
        </div>
      <FooterComponent/>
    </>
  );
}

export default App
