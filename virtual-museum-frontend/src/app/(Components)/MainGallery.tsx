import {Box, Grid, IconButton} from '@mui/material';
import { ArrowBackIos, ArrowForwardIos} from '@mui/icons-material';
import React, { useEffect, useState } from 'react'
import Artworks from './Artworks'
import { GalleryProp } from '../(Props)/props';
import { useRouter } from 'next/navigation';

const MainGallery = ({pageData}: GalleryProp) => {
  const router = useRouter()
  return (
<main className="homepage__main">
  <Box
  sx={{position: 'sticky',
  flexDirection: 'row',
  width: '100vw',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  top: '50%'}}>
  <IconButton
  sx={{color: 'white',
position:'absolute'}}
  size='large'
  onClick={() => router.push('/PC-1')}>
    <ArrowForwardIos
    fontSize='inherit'/>
  </IconButton>
  </Box>
        <Grid container
          className='gallery__grid'
        >
          {pageData?.filter((element) => element.image_id).map((element) => {
            return <Artworks
              key={element.id}
              id={1}
              department_title={element.department_title}
              department_id={element.department_id}
              thumbnail={element.thumbnail}
              artist_display={element.artist_display}
              title={element.title}
              place_of_origin={element.place_of_origin}
              image_id={element.image_id} />;
          })}
        </Grid>
      </main>
  );
}

export default MainGallery