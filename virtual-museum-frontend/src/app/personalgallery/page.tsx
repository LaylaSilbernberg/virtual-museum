    'use client'

    import React, { useEffect, useState } from 'react'
    import { PersonalGallery } from '../(Interfaces)/interfaces';
    import Link from 'next/link'
import { Box, Button, Card, CardContent, CardMedia, Container, Grid } from '@mui/material';
import { useRouter } from 'next/navigation'
    
    const PersonalGalleryList = () => {
        const [page, setPage] = useState<PersonalGallery[]>();
        const url = 'http://localhost:8080/api/';
        const router = useRouter();
    
        const getGalleries = async() => {
            const data = await (await fetch(url + 'getGalleries')).json();
            setPage(data);
        }
    
        useEffect(() => {getGalleries()}, []);

        const createNewGallery = async() => {
            await fetch(url + 'createEmptyGallery', {
                method: 'POST'
            }).then(() =>router.refresh())
        }


    
      return (
        <><video
              id='background_video'
              className='background__video'
              autoPlay
              loop
              muted>
              <source src='/personalgallerycreationvideo.mp4' />
          </video><main>
                  <Container>
                      <Box
                          marginTop={'1rem'}>
                          <Button
                              onClick={() => createNewGallery()}
                              sx={{ backgroundColor: '#b50938' }}
                              variant='contained'>
                              Create Gallery
                          </Button>
                      </Box>
                      <Grid
                          sx={{ marginTop: '1rem' }}
                          justifyContent={'center'}
                          container
                          columnGap={'1rem'}
                          rowGap={'1rem'}>
                          {page?.map((element, index) => {
                              return <Grid
                                  item
                                  key={index}>
                                  <Link
                                      key={element.id}
                                      href={`/personalgallery/${element.id}`}
                                      className="gallery_links">
                                      <Card
                                          sx={{
                                              minHeight: '21.25rem',
                                              minWidth: '29.985rem'
                                          }}>
                                          <CardContent>
                                              {element.images[0] ? <CardMedia
                                                  component="img"
                                                  alt="image from gallery"
                                                  height="300"
                                                  image={`https://www.artic.edu/iiif/2/${element.images[0].imageID}/full/400,/0/default.jpg`} /> : null}
                                          </CardContent>
                                      </Card>
                                  </Link>
                              </Grid>;
                          })}
                      </Grid>
                  </Container>
              </main></>
      )
    }



export default PersonalGalleryList