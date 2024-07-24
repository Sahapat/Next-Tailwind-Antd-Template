import 'animate.css'
import '../styles/main.scss'
import '../styles/main.css'

export default function RootLayout({
  children
}: Readonly<{children: React.ReactNode }> ) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
