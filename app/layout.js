import '../style/globals.css'
import { Inter } from 'next/font/google'
import Navbar from './component/Navbar'
import Footer from './component/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'From next',
  description: 'texting next freamwork',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel='icon' href='./favicon.ico' sizes='any'></link>
      <body className={inter.className} suppressHydrationWarning={true}>
        <Navbar></Navbar>
        <div className='min-h-[80vh]'>
          {children}
        </div>
        <Footer></Footer>
      </body>
    </html>
  )
}
