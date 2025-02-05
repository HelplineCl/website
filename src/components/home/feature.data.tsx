import React, { ReactNode } from 'react'
import ArtTrackIcon from '@mui/icons-material/ArtTrack'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary'
import ContactSupportIcon from '@mui/icons-material/ContactSupport'

interface Data {
  title: string
  description: string
  icon?: ReactNode
}

export const data: Data[] = [
  {
    title: 'Mensajería',
    description: 'Servicio de mensajería privada entre usuarios',
    icon: <ArtTrackIcon />,
  },
  {
    title: 'Perfil personal',
    description: 'Crea tu perfil como persona o como organización',
    icon: <AttachMoneyIcon />,
  },
  {
    title: 'Solicitudes',
    description: 'Crea solicitudes para pedir ayuda y publicalo en el muro',
    icon: <LocalLibraryIcon />,
  },
  {
    title: 'Control de calidad',
    description: 'Implementa el uso de inteligencia artificial para detectar si tus donaciones están en buen estado',
    icon: <ContactSupportIcon />,
  },
]
