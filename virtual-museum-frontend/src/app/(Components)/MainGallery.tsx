import { useTheme, Box} from '@mui/material';
import React, { useEffect, useState } from 'react'
import  {Data} from '../(Interfaces)/interfaces'
import Artworks from './Artworks'
import Video from 'next/image'

const MainGallery = () => {

    const [mainPage, setMainPage] = useState<Data[]>();
    const getRandomPage = async() => {
        const totalPages = 9964;
        const limit = 8;
        const fields = "id,title,place_of_origin,department_title,thumbnail,department_id,gallery_title,gallery_id,artist_display,image_id";
        const url = `https://api.artic.edu/api/v1/artworks?fields=${fields}&limit=${limit}&page=${Math.floor(Math.random() * totalPages)}`;

        const data = await fetch(url);
        const result = await data.json();

        setMainPage(result.data);
    }

    useEffect(() => { 
       getRandomPage()
    }, []);

  return (

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
      {mainPage?.map((element) => {
        return <Artworks
          key={element.id}
          thumbnail={element.thumbnail}
          artist_display={element.artist_display}
          title={element.title}
          place_of_origin={element.place_of_origin}
          image_id={element.image_id} />;
      })}
    </Box>
  );
}

export default MainGallery