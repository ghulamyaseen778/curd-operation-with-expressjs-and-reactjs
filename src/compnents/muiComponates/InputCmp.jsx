import React from 'react'
import TextField from '@mui/material/TextField';

const InputCmp = ({value,func,width,label,placeholder}) => {
  return (
    <TextField
          required
          id="outlined-required"
          defaultValue={value}
          onChange={func}
          label={label}
          placeholder={placeholder}
          sx={{width:width}}
        />
  )
}

export default InputCmp