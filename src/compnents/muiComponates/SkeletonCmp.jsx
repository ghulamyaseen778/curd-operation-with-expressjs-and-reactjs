import React from 'react'
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';

const SkeletonCmp = () => {
  return (
    <Stack spacing={1}>
      <Typography variant="h1">
      <Skeleton />
      </Typography>
      <Typography variant="body1">
      <Skeleton />
      </Typography>
      <Typography variant="body1">
      <Skeleton />
      </Typography>
      <Typography variant="body1">
      <Skeleton />
      </Typography>
      <Typography variant="button">
      <Skeleton height={40} width={60}/>
      </Typography>
      <Typography variant="button">
      <Skeleton />
      </Typography>

    </Stack>
  )
}

export default SkeletonCmp