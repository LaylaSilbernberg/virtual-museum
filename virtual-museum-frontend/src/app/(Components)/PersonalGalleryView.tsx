import { useTheme, Box} from '@mui/material';
import React, { useEffect, useState } from 'react'
import  {Data, PersonalGalleryViewProp} from '../(Interfaces)/interfaces'
import { GalleryProp, PersonalGalleryProp } from '../(Props)/props';
import PersonalArtworks from './PersonalArtworks';

const PersonalGalleryView = ({paramID, images}: PersonalGalleryViewProp) => {  
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
          {images?.map((element) => {
            return <PersonalArtworks
              key={element.id}
              paramId={paramID}
              id={element.id}
              thumbnail={element.thumbnail}
              artist_display={element.artistDisplay}
              title={element.title}
              place_of_origin={element.placeOfOrigin}
              image_id={element.imageID} />;
          })}
        </Box>
      </main>
  );
}

export default PersonalGalleryView