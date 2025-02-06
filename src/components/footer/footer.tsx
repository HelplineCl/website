import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { FooterNavigation, FooterSocialLinks } from '@/components/footer'
import Image from 'next/image'

const Footer: FC = () => {
  return (
    <Box
      component="footer"
      sx={{ backgroundColor: 'primary.main', py: { xs: 6, md: 10 }, color: 'primary.contrastText' }}
    >
      <Container>
        <Grid container spacing={1}>
          <Grid item xs={12} container justifyContent="center" alignItems="center">
            <Box
              sx={{
                width: { xs: '100%', md: 360 },
                mb: { xs: 3, md: 0 },
                textAlign: 'center',
                display: 'flex', // Hace que el contenido sea un contenedor flex
                flexDirection: 'column', // Alinea los elementos de arriba a abajo
                justifyContent: 'center', // Centra los elementos verticalmente
                alignItems: 'center', // Centra los elementos horizontalmente
                height: '100%', // Si deseas que el Box ocupe toda la altura disponible
              }}
            >
              <Image src="/images/logoblanco.svg" alt="logo" width={200} height={80} />
              <Typography variant="subtitle1" sx={{ letterSpacing: 1, mb: 2 }}>
                Join Forces, Rebuild Lives.
              </Typography>
              <Typography variant="subtitle1" sx={{ letterSpacing: 1, mb: 2 }}>
                HelpLine 2025 © copyright all rights reserved
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Footer
