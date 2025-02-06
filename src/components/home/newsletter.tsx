import React, { FC } from 'react'
import Box from '@mui/material/Box'
import InputBase from '@mui/material/InputBase'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { StyledButton } from '../styled-button'

const HomeNewsLetter: FC = () => {
  return (
    <Box sx={{ backgroundColor: 'background.paper', py: { xs: 8, md: 10 } }}>
      <Container>
        <Box
          sx={{
            backgroundColor: '#F8D90F',
            borderRadius: 10,
            py: { xs: 4, md: 10 },
            px: { xs: 4, md: 8 },
            textAlign: 'center',
          }}
        >
          <Typography variant="h1" component="h2" sx={{ mb: 1, fontSize: { xs: 32, md: 42 } }}>
            Síguenos en instagram
          </Typography>
          <Typography sx={{ mb: 3 }}>para estar al tanto y apoyar de nuestro proyecto</Typography>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: { xs: 'column', md: 'row' },
              justifyContent: 'space-around',
              width: { xs: '100%', md: 560 },
              mx: 'auto',
            }}
          >
            <StyledButton
              disableHoverEffect
              size="large"
              sx={{
                backgroundColor: 'secondary.main', // Cambia el color de fondo aquí
                color: '#ffffff', // Cambia el color del texto aquí
                '&:hover': {
                  backgroundColor: 'white',
                  color: 'secondary.main', // Cambia el color del hover aquí
                },
              }}
            >
              Síguenos
            </StyledButton>
          </Box>
          <Box></Box>
        </Box>
      </Container>
    </Box>
  )
}

export default HomeNewsLetter
