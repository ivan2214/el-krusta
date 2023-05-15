import SideNavAdmin from './components/SideNavAdmin'

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <section className='flex'>
      <SideNavAdmin />
      {children}
    </section>
  )
}
