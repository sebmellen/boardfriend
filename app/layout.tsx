import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'anyapp project',
  description: 'Created with anyapp',
  generator: 'anyapp.in',
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
