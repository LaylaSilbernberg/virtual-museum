import { useTheme, Box, Grid} from '@mui/material';
import React, { useEffect, useState } from 'react'
import  {Data, PersonalGalleryViewProp} from '../(Interfaces)/interfaces'
import { GalleryProp, PersonalGalleryProp } from '../(Props)/props';
import PersonalArtworks from './PersonalArtworks';

const PersonalGalleryView = ({paramID, images}: PersonalGalleryViewProp) => {  
  return (
<main className="homepage__main">
        <Grid container
          className='gallery__grid'
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
        </Grid>
      </main>
  );
}

export default PersonalGalleryView