'use client'

import React from 'react'

export default function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-black">
            <nav className="grid-12">
                <div className="col-span-12 py-6 flex items-center justify-between">
                    <div className="flex flex-col">
                        <h1 className="text-xs font-black tracking-widest">SHAUN DAWSON</h1>
                        <p className="text-xs tracking-widest text-gray-600">FILMMAKER / SOFTWARE ENGINEER</p>
                    </div>

                    <div className="flex gap-8">
                        <a href="#about" className="text-xs font-medium hover:underline">About</a>
                        <a href="#work" className="text-xs font-medium hover:underline">Work</a>
                        <a href="#contact" className="text-xs font-medium hover:underline">Contact</a>
                    </div>
                </div>
            </nav>
        </header>
    )
}
