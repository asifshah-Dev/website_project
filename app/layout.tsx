import type { Metadata } from 'next'
import './globals.css'
import Loader from '@/components/ui/Loader'

export const metadata: Metadata = {
  title: 'Delta Tech bridge',
  description: 'We build digital experiences that matter',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Loader />
        {children}
      </body>
    </html>
  )
}