import './globals.css'

export const metadata = {
  title: 'Items Sell',
  description: 'Items Sell',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
