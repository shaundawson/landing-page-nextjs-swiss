import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://iamsdawson.com',
            lastModified: '2026-05-06',
            changeFrequency: 'monthly',
            priority: 1,
        },
    ]
}
