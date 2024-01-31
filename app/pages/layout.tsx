import './../globals.css'
import TopBar from './../components/Topbar'
import Footer from './../components/Footer'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className='flex flex-col w-full min-h-screen '>
      <TopBar />
      {children}
      <Footer />
    </div>
  )
}
