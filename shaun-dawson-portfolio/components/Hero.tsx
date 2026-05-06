'use client'

import React, { useState } from 'react'
import ContactModal from './ContactModal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn, faInstagram, faImdb } from '@fortawesome/free-brands-svg-icons'

// ── Shared sub-components ────────────────────────────────────────────────────

// ArrowIcon: extracted so it's not copy-pasted 3 times in the footer.
const ArrowIcon = () => (
    <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        aria-hidden="true"
    >
        <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
)

// SocialLinks: extracted so the same map isn't written twice (mobile + desktop).
// The visually-hidden <span> gives crawlers and screen readers readable text
// like "Shaun Dawson on LinkedIn" instead of an empty icon link.
const socialLinks = [
    { name: 'LinkedIn', icon: faLinkedinIn, url: 'https://linkedin.com/in/iamsdawson' },
    { name: 'IMDB', icon: faImdb, url: 'https://www.imdb.com/name/nm17204388' },
    { name: 'Instagram', icon: faInstagram, url: 'https://instagram.com/iamsdawson' },
    { name: 'GitHub', icon: faGithub, url: 'https://github.com/shaundawson' },
]

const SocialLinks = () => (
    <>
        {socialLinks.map((link) => (
            <a
                key={link.name}
                href={link.url}
                className="top-social-icon"
                target="_blank"
                rel="noreferrer"
                aria-label={`Shaun Dawson on ${link.name}`}
            >
                {/* Icon is decorative — label is on the <a> above */}
                <FontAwesomeIcon icon={link.icon} aria-hidden="true" />
            </a>
        ))}
    </>
)

// ── Hero ─────────────────────────────────────────────────────────────────────

export default function Hero() {
    const [isModalOpen, setIsModalOpen] = useState(false)

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
                    {/*
                        SEO note: this is a visible name + title treatment,
                        not a heading — the H1 in main content carries that role.
                        aria-label on the <header> covers the landmark.
                    */}
                    <span className="top-label">Shaun Dawson</span>
                    <span className="top-sub">Front-End Developer &amp; Filmmaker</span>

                    {/* Social icons — mobile only (horizontal row under name) */}
                    <div className="top-social-links--mobile">
                        <SocialLinks />
                    </div>
                </div>

                {/* Social icons — desktop only (vertical column, far right) */}
                <div className="top-social-links--desktop">
                    <SocialLinks />
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
                    {/*
                        H1 SEO note: name leads so AI systems identify the subject
                        immediately. "filmmaker and web developer" + location give
                        the two most-searched entity signals after the name.
                    */}
                    <h1 className="headline">
                        Shaun Dawson is a storyteller at the intersection of technology
                        and social justice. Filmmaker and front-end developer who crafts
                        narratives that challenge perspective.
                    </h1>
                </div>

                <div className="content-section section-3">
                    {/*
                        Body copy SEO note: "Meshae Studios" is now a link so crawlers
                        build an explicit entity connection between Shaun and the studio.
                        Credentials (9 years, React, AWS) appear once, here, not in the H1.
                    */}
                    <p className="body-text">
                        With 9 years of solving complex technical problems and deep expertise
                        in React, AWS, and product strategy, Shaun brings cinematic precision
                        and technical mastery to work that actually moves something. Built
                        through{' '}
                        <a
                            href="https://meshaestudios.com"
                            target="_blank"
                            rel="noreferrer"
                            className="body-link"
                        >
                            Meshae Studios
                        </a>
                        .
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
                            <ArrowIcon />
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
                        className="bottom-right-contact"
                    >
                        <span className="bottom-label">Contact</span>
                        <span className="visit-site">
                            <ArrowIcon />
                            <span>Send Shaun a Message</span>
                        </span>
                    </button>
                </div>
            </footer>

            <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    )
}