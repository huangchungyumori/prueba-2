import './globals.css'
import LandingPage from './page'

export const metadata = {
  title: 'Items Sell',
  description: 'Items Sell',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <LandingPage/>
        </body>
    </html>
  )
}
