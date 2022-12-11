import { Button } from '@mui/material'
import React from 'react'

const ButtonCmp = ({variant,Color,FuncCall,Value,Icon}) => {
  return (
    <Button size="small" variant={variant} color={Color} onClick={FuncCall} endIcon={Icon}>{Value}</Button>
  )
}

export default ButtonCmp