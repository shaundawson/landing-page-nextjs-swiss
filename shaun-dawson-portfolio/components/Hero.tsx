'use client'

import React from 'react'
import Image from 'next/image'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
import { SiSubstack, SiImdb } from 'react-icons/si'

export default function Hero() {
    return (
        <div className="hero">
            {/* Background image */}
            <div className="hero-bg">
                {/* Desktop background */}
                <Image
                    src="/public/images/portrait5.jpg"
                    alt="Shaun Dawson"
                    fill
                    className="bg-image bg-desktop"
                    priority
                    quality={85}
                    sizes="100vw"
                    draggable={false}
                />
                {/* Mobile/Tablet background */}
                <Image
                    src="/public/images/mobile_bg.jpg"
                    alt="Shaun Dawson"
                    fill
                    className="bg-image bg-mobile"
                    priority
                    quality={85}
                    sizes="100vw"
                    draggable={false}
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

                    {/* Bio - constrained to title width */}
                    <p className="section-bio">
                        Storyteller through film and code. Shaun Dawson creates disruptive work at <a href="https://meshaestudios.com" target="_blank" rel="noopener noreferrer" className="bio-link">Meshae Studios</a>. Filmmaker. React developer. Technical consultant. Obsessed with stories that shift perspective, design systems with integrity, and interfaces that respect your intelligence.
                    </p>

                    {/* Buttons moved below bio */}
                    <div className="nav-actions">
                        <a href="/cv.pdf" className="download-btn">Download CV</a>
                        <a href="mailto:iamsdawson@gmail.com" className="contact-btn">Contact</a>
                    </div>
                </div>
            </div>

            {/* Social satellite - fixed bottom right */}
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
                <a href="https://www.imdb.com/name/nm17204388" target="_blank" title="IMDb">
                    <SiImdb /><span>IMDb</span>
                </a>
            </div>

            {/* Location satellite - mobile only, bottom left */}
            <div className="location-satellite">
                <span className="status-dot"></span>
                <span>Jacksonville, FL — Available for select projects</span>
            </div>
        </div>
    );
}
