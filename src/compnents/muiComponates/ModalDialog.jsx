import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import InputCmp from './InputCmp';
import TextAreaCmp from './TextAreaCmp';
import ButtonCmp from './ButtonCmp';
import { useDispatch,useSelector } from 'react-redux';
import { PostingProduct } from '../../store/features/ApiPostSlice';
import { FetchingProduct } from '../../store/features/ApiGetSlice';

const ModalDialog = ({ open, handleClose }) => {
  const [TitleText, SetTitleText] = useState("")
  const [DescriptionText, SetDescriptionText] = useState("")
  const [PriceText, SetPriceText] = useState("")
  const dispatch = useDispatch()
  const {Postproduct} = useSelector(state=>state.ApiPostingReducer)

  const DataSubmission = () => {
    if (TitleText.trim() != "" && DescriptionText.trim() != "" && PriceText.trim() != "") {
      console.log("hello")
      dispatch(PostingProduct({ title: TitleText, desc: DescriptionText, price: PriceText }))
      console.log(Postproduct)
      SetTitleText("")
      SetDescriptionText("")
      SetPriceText("")
      handleClose()
      // dispatch(FetchingProduct())
    }
  }
  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>Uploading Product</DialogTitle>
        <DialogContent>
          <Box
            noValidate
            sx={{ width: '100%' }}
          >
            <InputCmp value={TitleText} func={(e) => SetTitleText(e.target.value)} width={"100%"} label={"Title"} placeholder={"Enter Your Title"} />
            <TextAreaCmp value={DescriptionText} func={(e) => SetDescriptionText(e.target.value)} width={"100%"} row={6} label={"Description"} placeholder={"Enter Your Description"} />
            <InputCmp value={PriceText} func={(e) => SetPriceText(e.target.value)} width={"100%"} label={"Price"} placeholder={"Enter Your Product Price"} />

          </Box>
        </DialogContent>
        <DialogActions>
          <ButtonCmp Color={"success"} FuncCall={DataSubmission} variant={"contained"} Value={"Add Product"} />
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  )
}

export default ModalDialog