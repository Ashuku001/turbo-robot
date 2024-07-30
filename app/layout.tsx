import type { Metadata } from 'next'
import './globals.css'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import ModalProvider from '@/providers/Modal-Provider'
import { ToastProvider } from '@/providers/Toast-Provider'


export const metadata: Metadata = {
  title: 'Store',
  description: 'Roselands agri marketers',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='relative px-5 sm:px-10 lg:px-20'>
        <ModalProvider />
        <ToastProvider />
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
