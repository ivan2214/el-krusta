import prisma from '@/app/libs/prismadb'

export default async function getBurguers() {
  const burguers = await prisma.burguer.findMany({
    include: {
      ingredientes: true,
      categorias: true,
      pictures: true,
      reviews: true,
    },
  })

  /*   if (!burguers?.length) {
    await prisma.burguer.create({
      data: {
        titulo: 'Hamburguesa clásica',
        descripcion:
          'La hamburguesa más tradicional de todas, con carne de vacuno, lechuga, tomate, cebolla y salsa especial.',
        categorias: {
          create: {
            nombre: 'Hamburguesa clásica',
          },
        },
        precio: 1500,
        ingredientes: {
          create: {
            nombre: 'Lechuga',
          },
        },
        descuento: 10,
        rating: 4.4,
        reviews: {
          create: {
            comentario: 'muy godd',
            estrellas: 4,
          },
        },
        pictures: {
          create: {
            src: 'https://st3.depositphotos.com/22576762/31985/i/600/depositphotos_319859568-stock-photo-homemade-cheeseburger-on-white-background.jpg',
            alt: '',
          },
        },
      },
    })
  } */

  return burguers
  /* return prisma.$transaction([burguers]) */
}
