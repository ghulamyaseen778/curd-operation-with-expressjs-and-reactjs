import React from 'react'
import TextField from '@mui/material/TextField';

const TextAreaCmp = ({value,func,width,row,label,placeholder}) => {
  return (
    <TextField
          id="outlined-multiline-static"
          multiline
          rows={row}
          defaultValue={value}
          onChange={func}
          sx={{width:width,marginY:'10px'}}
          label={label}
          placeholder={placeholder}
        />
  )
}

export default TextAreaCmp