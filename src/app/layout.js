import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Footer from '@/components/footer/Footer'
import Navigation from '@/components/navigation/Navigation'
import Cart from '@/components/cart/Cart'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
})

export const metadata = {
  title: 'SimpleRent.dk',
  description: 'SimpleRent.dk - Keeping film rental simple.'
}

export default function RootLayout ({ children }) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navigation />
        {children}
        <Cart />
        <Footer />
      </body>
    </html>
  )
}
