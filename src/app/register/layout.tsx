import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './register.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TM | Register',
  description: 'Page to register user for the task management app.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-Br">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
