import { SessionProvider } from 'next-auth/react'
import getCurrentUser from './actions/getCurrentUser'
import Footer from './components/Footer/Footer'
import NavBarTwo from './components/NavBar/NavBarTwo'
import AuthContext from './context/AuthContext'
import { BurguerContextProvider } from './context/BurguersContext'
import { CategorieContextProvider } from './context/CategoriesContext'
import { IngredientesContextProvider } from './context/IngredientesContext'
import ToasterContext from './context/ToasterContext'
import './globals.css'

export const metadata = {
  title: 'El Krusta',
  description:
    'Casa de comida rapida ubicada en Lules Tucuman. Delivery de hamburguesas con papas fritas. Take a way de martes a domingos. Decis hamburguesas, decis El Krusta.',
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const currentUser = await getCurrentUser()

  return (
    <html lang='es'>
      <body className='container mx-auto'>
        <AuthContext>
          <BurguerContextProvider>
            <CategorieContextProvider>
              <IngredientesContextProvider>
                <NavBarTwo currentUser={currentUser} />
                <ToasterContext />
                {children}
                <Footer />
              </IngredientesContextProvider>
            </CategorieContextProvider>
          </BurguerContextProvider>
        </AuthContext>
      </body>
    </html>
  )
}
