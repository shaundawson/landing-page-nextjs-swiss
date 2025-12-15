'use client'

import { FpjsProvider } from '@fingerprintjs/fingerprintjs-pro-react'
import React from 'react'

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <FpjsProvider
            loadOptions={{
                apiKey: 'ikoCglMSg7f74O7QVNgN', // your public API key
                // region: 'us', // add if your dashboard says a non-global region
            }}
        >
            {children}
        </FpjsProvider>
    )
}
