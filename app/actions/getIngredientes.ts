import prisma from '@/app/libs/prismadb'

export default async function getingredientes() {
  const ingredientes = await prisma.ingrediente.findMany({})

  if (!ingredientes?.length) {
    await prisma.ingrediente.createMany({
      data: [
        { nombre: 'Carne de vaca' },
        { nombre: 'Lechuga' },
        { nombre: 'Tomate' },
        { nombre: 'Cebolla' },
        { nombre: 'Salsa especial' },
        { nombre: 'Queso cheddar' },
        { nombre: 'Bacon' },
        { nombre: 'Cebolla caramelizada' },
        { nombre: 'Salsa BBQ' },
        { nombre: 'Pollo' },
        { nombre: 'Mayonesa' },
        { nombre: 'Hamburguesa de garbanzos' },
        { nombre: 'Mayonesa vegana' },
        { nombre: 'Jalapeños' },
        { nombre: 'Salsa picante' },
        { nombre: 'Doble carne de vaca' },
        { nombre: 'Queso suizo' },
        { nombre: 'Mayonesa de ajo' },
      ],
    })
  }

  const ingredientesAfterCreate = await prisma.ingrediente.findMany({})

  return ingredientesAfterCreate
  /* return prisma.$transaction([ingredientes]) */
}
