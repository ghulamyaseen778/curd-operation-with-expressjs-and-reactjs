import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import InputCmp from './InputCmp';
import TextAreaCmp from './TextAreaCmp';
import ButtonCmp from './ButtonCmp';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditOutlineTwoToneIcon from '@mui/icons-material/ModeEditOutlineTwoTone';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import { useDispatch } from 'react-redux';
import { DeletingProduct } from '../../store/features/ApiDeleteSlice';
import { UpdatingProduct } from '../../store/features/ApiUpdateSlice';


const CardsCmp = (props) => {
  const [bool,Setbool] = useState(false)
  const [TitleText,SetTitleText] = useState(props.text)
  const [DescriptionText,SetDescriptionText] = useState(props.desc)
  const [PriceText,SetPriceText] = useState(props.price)
  const dispatch = useDispatch()
  const obj = {
    ...props
  }
  const DeletePost = (id)=>{
    dispatch(DeletingProduct(id))
    // console.log(id)
  }
  const UpdatePost = (id)=>{
    Setbool(false)
    dispatch(UpdatingProduct({
      id: id,
      data: {
          title: TitleText,
          desc: DescriptionText,
          price: PriceText
      }
  }))
  }
  const CancelPost = ()=>{
    Setbool(false)
    SetTitleText(obj.text)
    SetDescriptionText(obj.desc)
    SetPriceText(obj.price)
  }
  // console.log(obj)
  const card = (
    <React.Fragment>
      <CardContent>
       { !bool?<Typography sx={{ fontSize: 30 }} gutterBottom>
          {obj.text}
        </Typography>:<InputCmp value={TitleText} func={(e)=>SetTitleText(e.target.value)} width='100%' label={"Title"} placeholder={"Enter Your Title"} />}
        {!bool?<Typography variant="body2" sx={{height:'145px',overflow:'hidden'}}>
          {obj.desc}
        </Typography>:<TextAreaCmp value={DescriptionText} func={(e)=>SetDescriptionText(e.target.value)} width='100%' row={3} sx={{height:'150px'}} label={"Description"} placeholder={"Enter Your Description"}/>}
        <Typography sx={{ fontSize: 15,marginTop:'10px',display:'flex',alignItems:'center' }} gutterBottom>
          <b>Price: </b> {!bool?obj.price:<InputCmp value={PriceText} func={(e)=>SetPriceText(e.target.value)} width='30%' label={"Price"} placeholder={"Enter Your Product Price"}/>}
        </Typography>
      </CardContent>
      <CardActions>
      { !bool? <>
      <ButtonCmp variant={"contained"} Color="success" FuncCall={()=>Setbool(true)} Value="Edit" Icon={<ModeEditOutlineTwoToneIcon/>}/>
      <ButtonCmp variant={"outlined"} Color="error" FuncCall={()=>DeletePost(obj.id)} Value="Delete" Icon={<DeleteIcon/>}/>
      </>
        :
        <>
        <ButtonCmp variant={"contained"} Color="success" FuncCall={()=>UpdatePost(obj.id)} Value="Update" Icon={<CheckCircleIcon/>}/>
        <ButtonCmp variant={"outlined"} Color="error" FuncCall={()=>CancelPost} Value="Cancel" Icon={<CancelIcon/>}/>
        </>
        }
      </CardActions>
    </React.Fragment>
  );
  return (
    <>
      <Box sx={{ width : '100%', marginY:'10px' }}>
        <Card variant="outlined" >{card}</Card>
      </Box>
    </>
  )
}

export default CardsCmp