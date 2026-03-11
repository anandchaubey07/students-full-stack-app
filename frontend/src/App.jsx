import React from "react";
import {useEffect,useState} from "react"
import StudentTable from "./components/StudentTable"
import StudentForm from "./components/StudentForm"
import {getStudents,addStudent,updateStudent,deleteStudent} from "./utils/api"
import {exportToExcel} from "./utils/exportExcel"

export default function App(){

const[students,setStudents]=useState([])
const[editing,setEditing]=useState(null)
const[loading,setLoading]=useState(true)

useEffect(()=>{
getStudents().then(d=>{setStudents(d);setLoading(false)})
},[])

const add=async(s)=>{
await addStudent(s)
const data=await getStudents()
setStudents(data)
}

const update=async(s)=>{
await updateStudent(editing.id,s)
setEditing(null)
const data=await getStudents()
setStudents(data)
}

const remove=async(id)=>{
if(!confirm("Delete student?"))return
await deleteStudent(id)
setStudents(await getStudents())
}

if(loading)return <h2>Loading...</h2>

return(
<div>
<h1>Students Table</h1>

<StudentForm
onSubmit={editing?update:add}
editing={editing}
/>

<button onClick={()=>exportToExcel(students)}>Download Excel</button>

<StudentTable
students={students}
onEdit={setEditing}
onDelete={remove}
/>

</div>
)}