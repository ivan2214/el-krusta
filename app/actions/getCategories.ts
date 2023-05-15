import prisma from '@/app/libs/prismadb'

export default async function getcategorias() {
  const categorias = await prisma.categoria.findMany({})

  if (!categorias?.length) {
    await prisma.categoria.createMany({
      data: [
        {
          nombre: 'Clásicas',
        },
        {
          nombre: 'Especiales',
        },
        {
          nombre: 'Pollo',
        },
        {
          nombre: 'Veganas',
        },
        {
          nombre: 'Vegetarianas',
        },
        {
          nombre: 'Carnes',
        },
        {
          nombre: 'Pescado',
        },
      ],
    })
  }

  const categoriasAfterCreate = await prisma.categoria.findMany({})

  return categoriasAfterCreate
  /* return prisma.$transaction([categorias]) */
}
