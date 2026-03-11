import React from "react";
export default function StudentTable({students,onEdit,onDelete}){
return(
<table>
<thead>
<tr><th>Name</th><th>Email</th><th>Age</th><th>Actions</th></tr>
</thead>
<tbody>
{students.map(s=>(
<tr key={s.id}>
<td>{s.name}</td>
<td>{s.email}</td>
<td>{s.age}</td>
<td>
<button onClick={()=>onEdit(s)}>Edit</button>
<button onClick={()=>onDelete(s.id)}>Delete</button>
</td>
</tr>
))}
</tbody>
</table>
)}