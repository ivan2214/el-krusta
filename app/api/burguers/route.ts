import { NextResponse } from 'next/server'

import prisma from '@/app/libs/prismadb'
import getCurrentUser from '@/app/actions/getCurrentUser'

export async function POST(request: Request) {
  const currentUser = await getCurrentUser()

  if (!currentUser?.admin) {
    return NextResponse.error()
  }

  const body = await request.json()
  const { descripcion, descuento, precio, nombre, categorias, ingredientes, pictures } = body

  const createdBurger = await prisma.burguer.create({
    data: {
      descripcion: descripcion || '',
      descuento: descuento ? Number(descuento) : 0,
      precio: precio ? Number(precio) : 0,
      titulo: nombre || '',
      categorias: {
        createMany: {
          data: categorias?.map((categoria: string) => ({
            nombre: categoria,
          })),
        },
      },
      ingredientes: {
        createMany: {
          data: ingredientes?.map((ingrediente: string) => ({
            nombre: ingrediente,
          })),
        },
      },
      pictures: {
        createMany: {
          data: pictures?.map((picture: string) => ({
            src: picture,
            alt: '',
          })),
        },
      },
    },
  })

  return NextResponse.json(createdBurger)
}
