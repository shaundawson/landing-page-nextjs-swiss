'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
import { SiSubstack, SiImdb } from 'react-icons/si'
import ContactModal from './ContactModal'

export default function Hero() {
    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
        <div className="hero">
            {/* Background image */}
            <div className="hero-bg">
                {/* Desktop background */}
                <Image
                    src="/images/portrait8.jpg"
                    alt="Shaun Dawson"
                    fill
                    className="bg-image bg-desktop"
                    priority
                    quality={85}
                    sizes="100vw"
                    draggable={false}
                    unoptimized={true}
                />
                {/* Mobile/Tablet background */}
                <Image
                    src="/images/mobile_bg.jpg"
                    alt="Shaun Dawson"
                    fill
                    className="bg-image bg-mobile"
                    priority
                    quality={85}
                    sizes="100vw"
                    draggable={false}
                    unoptimized={true}
                />
                <div className="bg-overlay"></div>
            </div>

            {/* Content */}
            <div className="main-grid">
                <div className="content-column">
                    {/* Title */}
                    <div className="section-title">
                        <h1 className="title-main">
                            Storyteller<br />
                            <span className="title-highlight">Front-End Developer</span>
                        </h1>
                    </div>

                    {/* Bio */}
                    <p className="section-bio">
                        Storyteller through film and code. Shaun Dawson creates disruptive work at <a href="https://meshaestudios.com" target="_blank" rel="noopener noreferrer" className="bio-link">Meshae Studios</a>.  Filmmaker. React developer. Technical consultant. Obsessed with stories that shift perspective, design systems with integrity, and interfaces that respect your intelligence.
                    </p>

                    {/* CTA Buttons */}
                    <div className="nav-actions">
                        <a
                            href="https://5688825.fs1.hubspotusercontent-na1.net/hubfs/5688825/iamsawson.com/ShaunDawsonResume.png"
                            className="download-btn"
                            download="Shaun-Dawson-Resume.png"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Download CV
                        </a>
                        <button
                            type="button"
                            onClick={() => setIsModalOpen(true)}
                            className="contact-btn"
                        >
                            Contact
                        </button>
                    </div>
                </div>
            </div>

            {/* Social satellite  */}
            <div className="social-satellite">
                <a href="https://linkedin.com/in/iamsdawson" target="_blank" title="LinkedIn">
                    <FaLinkedin /><span>LinkedIn</span>
                </a>
                <a href="https://github.com/shaundawson" target="_blank" title="Github">
                    <FaGithub /><span>Github</span>
                </a>
                <a href="https://instagram.com/iamsdawson" target="_blank" title="Instagram">
                    <FaInstagram /><span>Instagram</span>
                </a>
                <a href="https://substack.com/@iamsdawson" target="_blank" title="Substack">
                    <SiSubstack /><span>Substack</span>
                </a>
                <a href="https://imdb.com/name/nm0225488" target="_blank" title="IMDb">
                    <SiImdb /><span>IMDb</span>
                </a>
            </div>

            {/* Location satellite */}
            <div className="location-satellite">
                <span className="status-dot"></span>
                <span>Jacksonville, FL — Available for select projects</span>
            </div>

            {/* Contact Modal */}
            <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    );
}
