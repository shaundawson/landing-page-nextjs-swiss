'use client'

import React, { useState } from 'react'
import ContactModal from './ContactModal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn, faInstagram, faImdb } from '@fortawesome/free-brands-svg-icons'

export default function Hero() {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const socialLinks = [
        { name: 'LinkedIn', icon: faLinkedinIn, url: 'https://linkedin.com/in/iamsdawson' },
        { name: 'IMDB', icon: faImdb, url: 'https://www.imdb.com/name/nm17204388' },
        { name: 'Instagram', icon: faInstagram, url: 'https://instagram.com/iamsdawson' },
        { name: 'GitHub', icon: faGithub, url: 'https://github.com/shaundawson' }
    ]

    const handleContactClick = () => {
        setIsModalOpen(true)
    }

    return (
        <div className="hero">
            {/* Background */}
            <div className="hero-bg">
                <div className="bg-overlay"></div>
            </div>

            {/* TOP LEFT - Menu Icon */}
            <div className="top-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#101010" strokeWidth="2.5">
                    <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
                </svg>
            </div>

            {/* TOP CENTER - VISUAL LANGUAGE info */}
            <div className="top-center-info">
                <span className="top-label">SHAUN DAWSON</span>
                <span className="top-sub">Storyteller — Front-End Developer</span>
            </div>

            {/* TOP RIGHT - SOCIAL MEDIA ICONS */}
            <div className="top-social-links">
                {socialLinks.map((link) => (
                    <a
                        key={link.name}
                        href={link.url}
                        className="top-social-icon"
                        title={link.name}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon icon={link.icon} />
                    </a>
                ))}
            </div>

            {/* MAIN CONTENT (unchanged) */}
            <div className="main-content">
                <div className="content-section section-1">
                    <span className="tag-label">I tell stories.</span>
                </div>

                <div className="content-section section-2">
                    <h1 className="headline">
                        Storyteller at the intersection of race, technology and social justice. Shaun Dawson is an  filmmaker and web developer who crafts narratives that challenge perspective .
                    </h1>
                </div>

                <div className="content-section section-3">
                    <p className="body-text">
                        With 9 years of solving complex technical problems and deep expertise in React, AWS, and product strategy, Shaun brings both cinematic precision and technical mastery to work that actually moves something.
                    </p>
                </div>
            </div>

            {/* BOTTOM LEFT - VIEW PORTFOLIO */}
            <div className="bottom-left">
                <a
                    href="https://meshaestudios.com/"
                    className="bottom-left-link"
                    target="_blank"
                    rel="noreferrer"
                >
                    <span className="bottom-label">View Portfolio</span>
                    <span className="visit-site">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#101010" strokeWidth="2">
                            <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span>meshaestudios.com</span>
                    </span>
                </a>
            </div>

            {/* BOTTOM CENTER */}
            <div className="bottom-center">
                <span className="copyright-text">© 2025.All Rights Reserved. — Shaun Dawson.</span>
            </div>

            {/* BOTTOM RIGHT - CONTACT */}
            <div className="bottom-right">
                <button
                    onClick={handleContactClick}
                    className="contact-label-button"
                    type="button"
                >
                    <span className="bottom-label">Contact</span>
                </button>
                <button
                    onClick={handleContactClick}
                    className="visit-site"
                    type="button"
                >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#101010" strokeWidth="2">
                        <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>Send Shaun a Message</span>
                </button>
            </div>

            {/* Contact Modal */}
            <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    )
}
