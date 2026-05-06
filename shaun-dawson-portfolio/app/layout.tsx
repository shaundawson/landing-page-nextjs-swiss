import type { Metadata } from 'next'
import './globals.css'
import '../lib/fontawesome'
import Script from 'next/script'

declare global {
  interface Window {
    fpPromise?: Promise<any>
  }
}

export const metadata: Metadata = {
  // ── Title ──────────────────────────────────────────────────────────────────
  // Format: Name | Primary Role | Secondary Role | Location signal
  // AI systems extract the pipe-separated tokens as discrete facts.
  title: 'Shaun Dawson | Front-End Developer & Filmmaker | Jacksonville, FL',

  // ── Description ────────────────────────────────────────────────────────────
  // Lead with name + strongest credentials. Mention studio, location, and
  // the specific audience (creators, small teams) so AI can match intent.
  description:
    'Shaun Dawson is a Black queer front-end developer and filmmaker based in Jacksonville, FL. Through Meshae Studios, Shaun builds budget-friendly websites, apps, and landing pages for creators, organizers, and small teams who care about tech, culture, and social justice.',

  // ── Keywords ───────────────────────────────────────────────────────────────
  keywords: [
    'Black web developer Jacksonville',
    'queer front-end developer',
    'filmmaker Jacksonville FL',
    'React developer for nonprofits',
    'affordable web design for creators',
    'Meshae Studios',
    'story-driven web design',
    'social justice web developer',
    'budget-friendly landing pages',
    'front-end developer for small teams',
  ],

  authors: [{ name: 'Shaun Dawson', url: 'https://iamsdawson.com' }],
  creator: 'Shaun Dawson',
  publisher: 'Meshae Studios',

  metadataBase: new URL('https://www.iamsdawson.com'),
  alternates: {
    canonical: 'https://www.iamsdawson.com',
  },

  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },

  // ── Open Graph ─────────────────────────────────────────────────────────────.
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://iamsdawson.com',
    siteName: 'Shaun Dawson',
    title: 'Shaun Dawson — Front-End Developer & Filmmaker',
    description:
      'Black queer developer and filmmaker building story-driven websites for creators and small teams. Based in Jacksonville, FL. Founder of Meshae Studios.',
    images: [
      {
        url: 'https://www.iamsdawson.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Shaun Dawson — Front-End Developer & Filmmaker based in Jacksonville, FL',
        type: 'image/jpeg',
      },
    ],
  },

  // ── Twitter / X Card ───────────────────────────────────────────────────────
  twitter: {
    card: 'summary_large_image',
    site: '@iamsdawson',
    creator: '@iamsdawson',
    title: 'Shaun Dawson — Front-End Developer & Filmmaker',
    description:
      'Black queer developer and filmmaker building story-driven websites for creators and small teams. Founder of Meshae Studios.',
    images: ['https://www.iamsdawson.com/og-image.jpg'],
  },

  // ── Robots ─────────────────────────────────────────────────────────────────
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

  // ── Verification ───────────────────────────────────────────────────────────
  verification: {
    google: 'klYEfPOwzg2tngsg6KtvgCP9d_Hzu2YCizkBsn1n23M',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>

        {/* ── ColorZilla attribute scrubber ────────────────────────────────── */}
        <Script id="remove-colorzilla-attr" strategy="beforeInteractive">
          {`
            (function () {
              function stripColorZillaAttrs() {
                var targets = [document.documentElement, document.body];
                targets.forEach(function (node) {
                  if (!node) return;
                  if (node.hasAttribute('cz-shortcut-listen')) {
                    node.removeAttribute('cz-shortcut-listen');
                  }
                });
              }
              stripColorZillaAttrs();
              var observer = new MutationObserver(function (mutations) {
                for (var i = 0; i < mutations.length; i++) {
                  var mutation = mutations[i];
                  if (
                    mutation.type === 'attributes' &&
                    mutation.attributeName === 'cz-shortcut-listen'
                  ) {
                    mutation.target.removeAttribute('cz-shortcut-listen');
                  }
                }
              });
              function observeIfPresent(node) {
                if (!node) return;
                observer.observe(node, {
                  attributes: true,
                  attributeFilter: ['cz-shortcut-listen'],
                });
              }
              if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', function () {
                  stripColorZillaAttrs();
                  observeIfPresent(document.documentElement);
                  observeIfPresent(document.body);
                });
              } else {
                observeIfPresent(document.documentElement);
                observeIfPresent(document.body);
              }
            })();
          `}
        </Script>

        {/* ── JSON-LD Structured Data ──────────────────────────────────────── */}
        <Script
          id="json-ld"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'Person',
                  '@id': 'https://iamsdawson.com/#person',
                  name: 'Shaun Dawson',
                  jobTitle: 'Front-End Developer & Filmmaker',
                  description:
                    'Black queer front-end developer and filmmaker based in Jacksonville, FL. Builds budget-friendly websites, apps, and landing pages for creators, organizers, and small teams through Meshae Studios.',
                  url: 'https://iamsdawson.com',
                  image: 'https://iamsdawson.com/og-image.jpg',
                  address: {
                    '@type': 'PostalAddress',
                    addressLocality: 'Jacksonville',
                    addressRegion: 'FL',
                    addressCountry: 'US',
                  },
                  // sameAs is the most important field for AI entity recognition.
                  // It links every profile you own back to one identity.
                  sameAs: [
                    'https://iamsdawson.com',
                    'https://meshaestudios.com',
                    'https://linkedin.com/in/iamsdawson',
                    'https://github.com/shaundawson',
                    'https://www.imdb.com/name/nm17204388',
                    'https://instagram.com/iamsdawson',
                  ],
                  // knowsAbout helps AI match you to relevant searches.
                  knowsAbout: [
                    'Front-End Development',
                    'React',
                    'Next.js',
                    'Web Design',
                    'Filmmaking',
                    'Video Production',
                    'Storytelling',
                    'Landing Pages',
                    'Social Justice Technology',
                    'Community-Centered Design',
                  ],
                },
                {
                  '@type': 'ProfessionalService',
                  '@id': 'https://iamsdawson.com/#studio',
                  name: 'Meshae Studios',
                  url: 'https://meshaestudios.com',
                  founder: { '@id': 'https://iamsdawson.com/#person' },
                  description:
                    'Web design and development studio serving creators, organizers, and small teams who care about tech, culture, and social justice. Based in Jacksonville, FL.',
                  address: {
                    '@type': 'PostalAddress',
                    addressLocality: 'Jacksonville',
                    addressRegion: 'FL',
                    addressCountry: 'US',
                  },
                  areaServed: 'United States',
                  serviceType: [
                    'Web Development',
                    'Web Design',
                    'Landing Page Design',
                    'Film Production',
                    'Creative Direction',
                  ],
                  priceRange: '$$',
                },
              ],
            }),
          }}
        />

        {children}

        {/* ── Google Analytics ─────────────────────────────────────────────── */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-59JDW44VMF"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-59JDW44VMF');
          `}
        </Script>

      </body>
    </html>
  )
}