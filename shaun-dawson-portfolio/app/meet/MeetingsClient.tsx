'use client';

import { useEffect } from 'react';

export default function MeetingsClient() {
    useEffect(() => {
        const existingScript = document.querySelector(
            'script[src="https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js"]'
        );

        if (!existingScript) {
            const script = document.createElement('script');
            script.src =
                'https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js';
            script.type = 'text/javascript';
            script.async = true;
            document.body.appendChild(script);

            return () => {
                if (script.parentNode) {
                    script.parentNode.removeChild(script);
                }
            };
        }
    }, []);

    return (
        <main className="meet-page">
            <div className="meet-page__bg" />

            <section className="meet-page__inner">
                <div className="meet-page__intro">
                    <p className="meet-page__eyebrow">BOOK TIME WITH SHAUN</p>
                    <h1 className="meet-page__title">Let’s find a time that works.</h1>
                    <p className="meet-page__copy">
                        Use this link to schedule time with me. Whether you’re a recruiter,
                        collaborator, friend, or just trying to connect, this is the easiest
                        way to grab a spot on my calendar.
                    </p>
                </div>

                <div className="meet-page__panel">
                    <div
                        className="meetings-iframe-container"
                        data-src="https://meetings.hubspot.com/shaundawson/iamsdawson?embed=true"
                    />
                </div>
            </section>

            <style jsx>{`
        .meet-page {
          position: relative;
          min-height: 100vh;
          background: #0f172a;
          color: #e5e7eb;
          overflow-x: hidden;
        }

        .meet-page__bg {
          position: fixed;
          inset: 0;
          z-index: 0;
          background:
            radial-gradient(circle at top left, rgba(230, 255, 2, 0.08), transparent 30%),
            radial-gradient(circle at bottom right, rgba(230, 255, 2, 0.05), transparent 28%),
            #0f172a;
          pointer-events: none;
        }

        .meet-page__inner {
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: 1180px;
          margin: 0 auto;
          padding: 5rem 1.5rem 4rem;
          display: grid;
          gap: 2rem;
        }

        .meet-page__intro {
          max-width: 760px;
        }

        .meet-page__eyebrow {
          margin: 0 0 0.75rem;
          color: #e6ff02;
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.14em;
        }

        .meet-page__title {
          margin: 0;
          color: #e5e7eb;
          font-size: clamp(2.1rem, 5vw, 4.5rem);
          line-height: 0.95;
          letter-spacing: -0.05em;
          font-weight: 700;
          max-width: 10ch;
        }

        .meet-page__copy {
          margin: 1.25rem 0 0;
          color: #9ca3af;
          font-size: clamp(1rem, 1.15vw, 1.125rem);
          line-height: 1.7;
          max-width: 42ch;
        }

        .meet-page__panel {
          width: 100%;
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          padding: 1rem;
        }

        .meetings-iframe-container {
          width: 100%;
          background: transparent;
        }

        :global(.meet-page .meetings-iframe-container iframe) {
          width: 100% !important;
          border: 0 !important;
          background: transparent !important;
          display: block !important;
        }

        @media (max-width: 768px) {
          .meet-page__inner {
            padding: 1.25rem 0.75rem 2rem;
            gap: 1.25rem;
          }

          .meet-page__intro {
            padding: 0 0.25rem;
          }

          .meet-page__title {
            max-width: 12ch;
            font-size: clamp(1.9rem, 9vw, 3rem);
          }

          .meet-page__copy {
            max-width: 100%;
            font-size: 1rem;
            line-height: 1.6;
          }

          .meet-page__panel {
            padding: 0;
            border-radius: 0;
          }
        }

        @media (max-width: 480px) {
          .meet-page__inner {
            padding: 1rem 0.5rem 1.5rem;
          }

          .meet-page__eyebrow {
            font-size: 0.72rem;
          }
        }
      `}</style>
        </main>
    );
}
