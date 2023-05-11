import getCurrentUser from './actions/getCurrentUser'
import Footer from './components/Footer/Footer'
import NavBarTwo from './components/NavBar/NavBarTwo'
import AuthContext from './context/AuthContext'
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
      <AuthContext>
        <body className='container mx-auto'>
          <NavBarTwo currentUser={currentUser} />
          <ToasterContext />
          {children}
          <Footer />
        </body>
      </AuthContext>
    </html>
  )
}
