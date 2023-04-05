import { Box, CircularProgress } from '@mui/material'
import React from 'react'

const Loading = () => {
  return (
    <Box
    justifyContent={'center'}
    alignItems={'center'}>
        <CircularProgress sx={{backgroundColor: '#b50938'}} />
    </Box>
  )
}

export default Loading