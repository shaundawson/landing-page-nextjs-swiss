import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
            },
        ],
        sitemap: 'https://iamsdawson.com/sitemap.xml',
        host: 'https://iamsdawson.com',
    }
}