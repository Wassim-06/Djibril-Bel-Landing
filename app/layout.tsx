import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Djibril Bel',
  description: 'J’aide les entrepreneurs à briller sur LinkedIn.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
