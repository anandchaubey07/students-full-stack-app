import React from "react";
import {useState,useEffect} from "react"

export default function StudentForm({onSubmit,editing}){

const[name,setName]=useState("")
const[email,setEmail]=useState("")
const[age,setAge]=useState("")

useEffect(()=>{
if(editing){
setName(editing.name)
setEmail(editing.email)
setAge(editing.age)
}
},[editing])

const handle=(e)=>{
e.preventDefault()
if(!name||!email||!age){alert("All fields required");return}
if(!/\S+@\S+\.\S+/.test(email)){alert("Invalid email");return}
onSubmit({name,email,age})
setName("");setEmail("");setAge("")
}

return(
<form onSubmit={handle}>
<input placeholder="Name" value={name} onChange={e=>setName(e.target.value)}/>
<input placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)}/>
<input placeholder="Age" value={age} onChange={e=>setAge(e.target.value)}/>
<button type="submit">{editing?"Update":"Add"} Student</button>
</form>
)}