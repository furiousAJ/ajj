import { Button, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Validation = () => {
  const [submitted, setSubmitted] = useState(false);

  const [Inputname,setInputname] = useState({
    fname:"",
  })
  var[Validation,setValidation] =useState({
    fname:""
  })

  const inputHandler   =(e)=>{
    const{ name, value }=e.target
  setInputname({ ...Inputname,[name]:value})
  }

  const checkValidation=()=>{
    let errors = Validation;
    //first name validation
    if (!Inputname.fname.trim()){
      errors.fname="First name is required";
    } else {
      errors.fname ="";
    }
    setValidation(errors);
  }

  useEffect(()=> {
    checkValidation();
  });

  const handleSubmit=(e)=> {
    e.preventDefault();
    setSubmitted(true);
  }

return (
    <div>
      <form
      id='registrationForm'
      onSubmit={handleSubmit}>
      <br/><TextField  label="First name" name="fname" variant="outlined" value={Inputname.fname} onChange={inputHandler}/>
      <br></br>
      {(Validation.fname && submitted) && <p>{Validation.fname}</p>}<b/>
      <Button type='submit' variant='contained' >save</Button>
      </form>
    </div>
  )
}

export default Validation
