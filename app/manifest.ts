/* eslint-disable prettier/prettier */

import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'PiggyPal',
        short_name: 'PiggyPal',
        description: '',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        icons: [
            {
                src: '/piggy-bank.png',
                sizes: '192x192',
                type: 'image/png',
            },
            {
                src: '/piggy-bank.png',
                sizes: '512x512',
                type: 'image/png',
            },
        ],
    }
}