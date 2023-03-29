import { useTheme, Box} from '@mui/material';
import React, { useEffect, useState } from 'react'
import  {Data} from '../(Interfaces)/interfaces'
import Artworks from './Artworks'
import Video from 'next/image'
import { GalleryProp } from '../(Props)/props';

const MainGallery = ({pageData}: GalleryProp) => {


  return (
<main className="homepage__main">
        <Box
          className='gallery__box'
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(1, 1fr)",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
              lg: "repeat(4, 1fr)"
            }
          }}
        >
          {pageData?.map((element) => {
            return <Artworks
              key={element.id}
              thumbnail={element.thumbnail}
              artist_display={element.artist_display}
              title={element.title}
              place_of_origin={element.place_of_origin}
              image_id={element.image_id} />;
          })}
        </Box>
      </main>
  );
}

export default MainGallery