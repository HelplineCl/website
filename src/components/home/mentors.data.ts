import type { Mentor } from '@/interfaces/mentor'

export const data: Array<Mentor> = [
  {
    id: 1,
    photo: '/images/teachable.jpg',
    name: 'Teacheble Machine',
    category: 'Inteligencia Artificial',
    description:
      'Es una herramienta de Google que nos permitió entrenar modelos de aprendizaje automático (machine learning) para pode crear nuestra modelo de inteligencia artificial.',
    company: {
      name: 'Grab',
      logo: '/images/logo1.png',
    },
  },
  {
    id: 2,
    photo: '/images/mitappinventor.png',
    name: 'Mit App Inventor',
    category: 'Creación de app',
    description:
      'Esta plataforma de desarrollo de aplicaciones móviles nos sirvió para la creación de la apps en sistema Android sin necesidad de saber programar, usando bloques visuales y de manera sencilla.',
    company: {
      name: 'Creación de apps',
      logo: '/images/logo2.png',
    },
  },
  {
    id: 3,
    photo: '/images/canva.png',
    name: 'Canva',
    category: 'Diseño',
    description: 'Con esta plataforma pudimos crear imágenes, presentaciones, infografías y más.',
    company: {
      name: 'Diseño',
      logo: '/images/logo3.png',
    },
  },
  {
    id: 4,
    photo: '/images/figma.png',
    name: 'Figma',
    category: 'Diseño y experiencia de usuario',
    description:
      'Esta herramienta de diseño de interfaces y prototipado colaborativo nos permitió diseñar, crear el prototipo e iterar sobre interfaces de usuario (UI) en tiempo real, todo en la nube.',
    company: {
      name: 'Diseño y experiencia de usuario',
      logo: '/images/logo4.png',
    },
  },
]
