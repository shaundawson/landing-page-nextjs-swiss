import type { Metadata } from 'next'
import './globals.css'

export const meta: Metadata = {
  title: 'Shaun Dawson | Storyteller & Front-End Developer | Web Design & Video',
  description: 'Shaun Dawson is an award-winning filmmaker and front-end web developer specializing in React, web design, and storytelling. Creative director at Meshae Studios. Available for film production and web development projects.',
  keywords: 'filmmaker, front-end developer, web developer, web designer, React developer, video production, design systems, creative director, technical consultant, web development Jacksonville',
  authors: [{ name: 'Shaun Dawson' }],
  creator: 'Shaun Dawson',
  metadataBase: new URL('https://iamsdawson.com'),
  alternates: {
    canonical: 'https://iamsdawson.com',
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://iamsdawson.com',
    siteName: 'Shaun Dawson',
    title: 'Shaun Dawson | Storyteller & Front-End Developer',
    description: 'Award-winning filmmaker and front-end web developer creating disruptive digital experiences and compelling visual stories.',
    images: [
      {
        url: 'https://iamsdawson.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Shaun Dawson - Storyteller & Front-End Developer',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@iamsdawson',
    creator: '@iamsdawson',
    title: 'Shaun Dawson | Storyteller & Front-End Developer',
    description: 'Award-winning filmmaker and front-end web developer creating disruptive digital experiences and compelling visual stories',
    images: ['https://iamsdawson.com/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-white text-black">
        {children}
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-59JDW44VMF"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-59JDW44VMF');
        </script>
      </body>
    </html>
  )
}
