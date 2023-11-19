import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './login.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TM | Login',
  description: 'Page to authenticate user for the task management app.',
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
