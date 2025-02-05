import type { Testimonial } from '@/interfaces/testimonial'

export const data: Array<Testimonial> = [
  {
    id: 1,
    title: 'Mujeres en la tecnología',
    content:
      'Somos un grupo de adolescentes que participamos en el concurso de “Technovation Girls”, el cual impulsa la incursión de jóvenes mujeres en el mundo de la ciencia y la tecnología. Como resultado de esta experiencia fué que creamos “Help Line”, como ayuda a nuestra comunidad.',
    user: {
      id: 1,
      name: 'Tecnovation Girls',
      professional: 'Conoce más',
      photo: 'technovationgirls.png',
    },
  },
]
