const API="http://localhost:3000/students"

export const getStudents=()=>fetch(API).then(r=>r.json())
export const addStudent=(s)=>fetch(API,{method:"POST",headers:{'Content-Type':'application/json'},body:JSON.stringify(s)})
export const updateStudent=(id,s)=>fetch(`${API}/${id}`,{method:"PUT",headers:{'Content-Type':'application/json'},body:JSON.stringify(s)})
export const deleteStudent=(id)=>fetch(`${API}/${id}`,{method:"DELETE"})
