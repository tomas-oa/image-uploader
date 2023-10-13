import Footer from './components/Footer'
import './globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  style: 'normal',
  subsets: ['latin-ext'],
  display: 'swap'
})

export const metadata = {
  title: 'Image Uploader',
  description: 'Created by tomas-oa - devChallenges.io',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} relative min-h-[dvh]`}>
        {children}
        <Footer />
      </body>
    </html>
  )
}
