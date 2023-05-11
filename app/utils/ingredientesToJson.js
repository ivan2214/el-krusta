const ingredientes = [
  'Carne de vacuno',
  'Lechuga',
  'Tomate',
  'Cebolla',
  'Salsa especial',
  'Queso cheddar',
  'Bacon',
  'Cebolla caramelizada',
  'Salsa BBQ',
  'Pollo marinado',
  'Mayonesa',
  'Hamburguesa de garbanzos',
  'Mayonesa vegana',
  'Jalapeños',
  'Salsa picante',
  'Doble carne de vacuno',
  'Queso suizo',
  'Mayonesa de ajo',
]

const ingredientesConId = ingredientes.map((ingrediente, index) => {
  return {
    id: index + 1,
    nombre: ingrediente.trim(),
  }
})

const ingredientesJson = JSON.stringify(ingredientesConId)

console.log(ingredientesConId)
