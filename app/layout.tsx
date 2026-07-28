import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hariom Dhakulkar | Cloud & NOC Engineer',
  description: 'Cloud and NOC Engineer with expertise in AWS, networking technologies, and automation. Specialized in architecting scalable cloud solutions and optimizing infrastructure.',
  keywords: 'Cloud Engineer, AWS, NOC Engineer, DevOps, Network Engineer, Automation',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

