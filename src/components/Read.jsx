import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Read = () => {
  const deleteStudent =(id)=>{
    console.log("delete clicked" +id);
    axios.delete("http://localhost:3005/students/"+id)
    .then(response=>{
      alert("deleted")
      window.location.reload(false)
    })
  }
    var [students,setstudents] = useState([])
    useEffect(()=>{
        axios.get("http://localhost:3005/students")
        .then(respose=>{
            console.log(respose.data)
            setstudents(students=respose.data)
        })
        .catch(err=>console.log(err))
    })
  return (
    <div>
      <Typography variant='h4'>Welcome to My App </Typography>
      <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Grade</TableCell>
                </TableRow>
                </TableHead>
        <TableBody>
            {students.map((value,index)=>{
                return<TableRow>
                  <TableCell>{value.id}</TableCell>
                    <TableCell>{value.name}</TableCell>
                    <TableCell>{value.grade}</TableCell>
                    <TableCell>
                      <Button onClick={()=>deleteStudent(value.id)}>Delete </Button><></>
                      <Button>Update </Button>
                    </TableCell>
                </TableRow>
            })}
            <TableRow>
               
            </TableRow>
        </TableBody>
        </Table>
      </TableContainer>
      <br></br>
    </div>
  )
}

export default Read
