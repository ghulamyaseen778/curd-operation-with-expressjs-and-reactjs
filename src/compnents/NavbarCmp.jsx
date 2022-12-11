import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ButtonCmp from './muiComponates/ButtonCmp';
import ModalDialog from './muiComponates/ModalDialog';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';

const NavbarCmp = () => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
      setOpen(true);
      // console.log('hello')
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Product App
        </Typography>
        <ButtonCmp Value={"Add Post"} FuncCall={handleClickOpen} variant="contained" Icon={<AddCircleOutlineRoundedIcon/>} Color="success"/>
      </Toolbar>
    </AppBar>
  </Box>
  <ModalDialog handleClose={handleClose} open={open}/>
    </>
  )
}

export default NavbarCmp