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
        { name: 'GitHub', icon: faGithub, url: 'https://github.com/shaundawson' },
    ]

    return (
        <div className="hero">
            {/* Background */}
            <div className="hero-bg">
                <div className="bg-overlay" />
            </div>

            {/* ── HEADER ────────────────────────────────────────── */}
            {/* Desktop: name left, socials far right (column).     */}
            {/* Mobile: name top, socials inline below name.        */}
            <header className="hero-header">
                {/* Left spacer — desktop grid only */}
                <div aria-hidden="true" />

                <div className="top-center-info">
                    <span className="top-label">Shaun Dawson</span>
                    {/* Subtitle: replaced em dash with slash per user preference */}
                    <span className="top-sub">Storyteller / Front-End Developer</span>

                    {/* Social icons live UNDER the name on mobile only */}
                    <div className="top-social-links--mobile">
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
                </div>

                {/* Social icons on the right — desktop only */}
                <div className="top-social-links--desktop">
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
            </header>

            {/* ── MAIN CONTENT ──────────────────────────────────── */}
            {/* Desktop: progressive right-indentation per section. */}
            {/* Mobile: uniform padding, tighter gaps.              */}
            <main className="main-content">
                <div className="content-section section-1">
                    <span className="tag-label">I tell stories.</span>
                </div>

                <div className="content-section section-2">
                    <h1 className="headline">
                        Storyteller at the intersection of technology and social justice.
                        Shaun Dawson is a filmmaker and web developer who crafts narratives
                        that challenge perspective.
                    </h1>
                </div>

                <div className="content-section section-3">
                    <p className="body-text">
                        With 9 years of solving complex technical problems and deep expertise
                        in React, AWS, and product strategy, Shaun brings both cinematic
                        precision and technical mastery to work that actually moves something.
                    </p>
                </div>
            </main>

            {/* ── FOOTER ────────────────────────────────────────── */}
            {/* Desktop: 3-column grid (left CTA / copyright / right CTA). */}
            {/* Mobile: stacked column, CTAs full-width, copyright hidden.  */}
            <footer className="hero-footer">
                <div className="bottom-left">
                    <a
                        href="https://meshaestudios.com/"
                        className="bottom-left-link"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <span className="bottom-label">View Portfolio</span>
                        <span className="visit-site">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span>meshaestudios.com</span>
                        </span>
                    </a>
                </div>

                <div className="bottom-center">
                    <span className="copyright-text">
                        © 2026. All Rights Reserved. Shaun Dawson.
                    </span>
                </div>

                <div className="bottom-right">
                    <button
                        type="button"
                        onClick={() => setIsModalOpen(true)}
                        className="bottom-left-link bottom-right-contact"
                    >
                        <span className="bottom-label">Contact</span>
                        <span className="visit-site">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span>Send Shaun a Message</span>
                        </span>
                    </button>
                </div>
            </footer>

            <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    )
}