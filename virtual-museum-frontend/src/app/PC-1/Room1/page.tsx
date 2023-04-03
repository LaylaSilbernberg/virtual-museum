'use client'

import Artworks from '@/app/(Components)/Artworks';
import { Data } from '@/app/(Interfaces)/interfaces';
import { Box, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'

const PCRoom1 = () => {
    const [page, setPage] = useState<Data[]>();

    const getSpecificDepartment = async() => {
        const limit=16;
        const maxPages=62;
        const fields = "id,title,place_of_origin,department_title,thumbnail,department_id,artist_display,image_id";
        const url = `https://api.artic.edu/api/v1/artworks/search?q=Arts Of Africa&fields=${fields}&limit=${limit}&page=${Math.floor(Math.random() * maxPages)}`;

        const result = await (await fetch(url)).json();
        setPage(result.data)
    }

    useEffect(() => {getSpecificDepartment()}, [])

  return (
    <main
    className='PC__page'>
              <Box
      display={'flex'}
      justifyContent={'center'}
      sx={{
      textTransform: 'uppercase',
      letterSpacing: '0.15em',
      padding: '1rem 1.25rem',
      color: 'white'}}>
        <Typography
        sx={{borderBottom:'solid white 0.125rem'}}
        variant='h2'>Arts of Africa</Typography>
      </Box>
                <Grid container
          className='gallery__grid'
        >
          {page?.map((element) => {
            return <Artworks
              key={element.id}
              id={52}
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
  )
}

export default PCRoom1