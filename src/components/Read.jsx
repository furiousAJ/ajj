import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Read = () => {
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
                    <TableCell>Name</TableCell>
                    <TableCell>Class</TableCell>
                </TableRow>
                </TableHead>
        <TableBody>
            {students.map((value,index)=>{
                return<TableRow>
                    <TableCell>{value.name}</TableCell>
                    <TableCell>{value.class}</TableCell>
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
