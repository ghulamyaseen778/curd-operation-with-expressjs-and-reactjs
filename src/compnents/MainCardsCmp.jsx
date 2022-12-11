import React,{useEffect} from 'react'
import { Box, Grid } from '@mui/material';
import CardsCmp from './muiComponates/Cards';
import SkeletonCmp from './muiComponates/SkeletonCmp';
import { useDispatch,useSelector } from 'react-redux';
import { FetchingProduct } from '../store/features/ApiGetSlice';

const MainCardsCmp = () => {
    const Dispatch = useDispatch()
    const {GetStatus,products} = useSelector((state)=>state.ApiGettingReducer)
    useEffect(()=>{
        Dispatch(FetchingProduct())
    },[])
    // console.log(products)
    // const bool =true
    return (
        <>
        {GetStatus=="idle"?
            <Box sx={{ marginX: '10px' }}>
                <Grid container columnSpacing={2}>
                    {products?.map((product)=>{
                        // console.log(product)
                        return(
                    <Grid item xs={12} md={3} sm={6} key={product._id}>
                        <CardsCmp text={product.title} price={product.price} desc={product.desc} id={product._id}/>
                    </Grid>
                        )
                    })}
                    
                </Grid>
            </Box>:<Box sx={{ marginX: '10px' }}>
                <Grid container columnSpacing={2}>
                    <Grid item xs={12} md={3} sm={6}>
                        <SkeletonCmp/>
                    </Grid>
                    <Grid item xs={12} md={3} sm={6}>
                        <SkeletonCmp/>
                    </Grid>
                    <Grid item xs={12} md={3} sm={6}>
                        <SkeletonCmp/>
                    </Grid>
                    <Grid item xs={12} md={3} sm={6}>
                        <SkeletonCmp/>
                    </Grid>
                    <Grid item xs={12} md={3} sm={6}>
                        <SkeletonCmp/>
                    </Grid>
                    <Grid item xs={12} md={3} sm={6}>
                        <SkeletonCmp/>
                    </Grid>
                    <Grid item xs={12} md={3} sm={6}>
                        <SkeletonCmp/>
                    </Grid>
                    <Grid item xs={12} md={3} sm={6}>
                        <SkeletonCmp/>
                    </Grid>
                    </Grid>
                    </Box>}
            </>
    )
}

export default MainCardsCmp