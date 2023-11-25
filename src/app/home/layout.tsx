import dotenv from "dotenv";
dotenv.config();

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './home.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TM | Home',
  description: 'Home screen to Task Management System by Nicolas Castro.',
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
