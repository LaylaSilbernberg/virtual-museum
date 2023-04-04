'use client'

import Artworks from '@/app/(Components)/Artworks';
import { Data } from '@/app/(Interfaces)/interfaces';
import { ArrowForwardIos, East, NorthEast, SouthWest, West } from '@mui/icons-material';
import { Box, Grid, IconButton, Typography } from '@mui/material';
import Link from 'next/link';
import {useRouter} from 'next/navigation';
import React, { useEffect, useState } from 'react'

const PCRoom1 = () => {
    const [page, setPage] = useState<Data[]>();

    const getSpecificDepartment = async() => {
        const limit=16;
        const maxPages=62;
        const fields = "id,title,place_of_origin,department_title,thumbnail,department_id,artist_display,image_id";
        const url = `https://api.artic.edu/api/v1/artworks/search?q=Arts Of The Americas&fields=${fields}&limit=${limit}&page=${Math.floor(Math.random() * maxPages)}`;

        const result = await (await fetch(url)).json();
        setPage(result.data)
    }

    useEffect(() => {getSpecificDepartment()}, [])
const router = useRouter();
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
        variant='h2'><Link
        style={{textDecoration: 'none',
      color: 'white'}}
         href={'/PC-3'}>Arts Of The Americas</Link></Typography>

      </Box>


      <Box
        sx={{
          position: 'absolute',
          flexDirection: 'row',
          width: '100vw',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          top: '90vh'
        }}>
        <IconButton
          sx={{
            color: 'white',
            position: 'absolute', fontSize: 'xxx-large'
          }}
          size='large'
          onClick={() => router.push('/PC-4')}>
          <ArrowForwardIos
            fontSize='inherit' />
        </IconButton>
      </Box>
                <Grid container
          className='gallery__grid'
        >
          {page?.filter((element) => element.image_id).map((element) => {
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
        <Box
  sx={{position: 'absolute',
  flexDirection: 'row',
  width: '100vw',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',}}>
  <IconButton
  sx={{color: 'white',
position:'absolute', fontSize: 'xxx-large'}}
  size='large'
  onClick={() => router.push('/PC-3')}>
    <SouthWest
    fontSize='inherit'/>
  </IconButton>
  </Box>
    </main>
  )
}

export default PCRoom1