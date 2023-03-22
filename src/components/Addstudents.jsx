import { Button, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const Addstudents = () => {
        var [students,setstudents] = useState({
            id:"",
            name:"",
            grade:""
        })
        const handleChange   =(e)=>{
            const { name, value }=e.target
          setstudents({ ...students,[name]:value})
          console.log(students) 
        }
        const saveData= () => {
            console.log("Button Clicked")
            axios.post("http://localhost:3005/students",students)
            .then(response=>{ 
                alert("Successfully added")
            })
            .catch(error=>{
                alert("Failed")
            })
        }
  return (
    <div>
      <Typography>New Students</Typography>
      <TextField label="Id" variant="outlined" name='id' value={students.id} onChange={handleChange}/><br></br>
      <br></br>
      <TextField label="Name" variant="outlined" name='name' value={students.name} onChange={handleChange}/><br></br>
      <br></br>
      <TextField label="Grade" variant="outlined" name='grade' value={students.grade} onChange={handleChange}/><br></br>
      <br></br>
      <Button variant="contained" onClick={saveData}>Sumbit</Button>
    </div>
  )
}

export default Addstudents
