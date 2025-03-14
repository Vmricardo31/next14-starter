import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from '@/components/navbar/navBar'
import Footer from '@/components/footer/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Next App',
  description: 'Next.js starter app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        
        {children}

        <Footer />
      </body>
    </html>
  )
}