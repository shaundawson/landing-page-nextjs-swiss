'use client'

import { useEffect } from 'react'

interface ContactModalProps {
    isOpen: boolean
    onClose: () => void
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
    useEffect(() => {
        if (isOpen && typeof window !== 'undefined') {
            // Load HubSpot script
            const script = document.createElement('script')
            script.src = '//js.hsforms.net/forms/embed/v2.js'
            script.charset = 'utf-8'
            script.type = 'text/javascript'
            script.async = true

            script.onload = () => {
                // Create the form once script loads
                if (window.hbspt) {
                    window.hbspt.forms.create({
                        portalId: '5688825',
                        formId: 'f68adca1-d2bb-4c53-99f7-08ef51e76a8c',
                        target: '#hubspot-form-container',
                        region: 'na1'
                    })
                }
            }

            document.body.appendChild(script)

            // Prevent body scroll when modal is open
            document.body.style.overflow = 'hidden'

            return () => {
                document.body.style.overflow = 'unset'
            }
        }
    }, [isOpen])

    if (!isOpen) return null

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>

                <h2 className="modal-title">Contact Shaun</h2>

                <div id="hubspot-form-container"></div>
            </div>
        </div>
    )
}

// TypeScript declaration for HubSpot
declare global {
    interface Window {
        hbspt?: {
            forms: {
                create: (options: {
                    portalId: string
                    formId: string
                    target?: string
                    region: string
                }) => void
            }
        }
    }
}
