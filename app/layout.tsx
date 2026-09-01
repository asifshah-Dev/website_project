import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Nexora - Modern Digital Agency',
  description: 'We build digital experiences that matter',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}