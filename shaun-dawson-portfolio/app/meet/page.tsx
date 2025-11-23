'use client';

import { useEffect } from 'react';

export default function MeetingsPage() {
    useEffect(() => {
        // Load HubSpot Meetings embed script
        const script = document.createElement('script');
        script.src = 'https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js';
        script.type = 'text/javascript';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            // Cleanup script on unmount
            if (script.parentNode) {
                script.parentNode.removeChild(script);
            }
        };
    }, []);

    return (
        <div className="meetings-page">
            <div className="container">
                <div
                    className="meetings-iframe-container"
                    data-src="https://meetings.hubspot.com/iamsdawson1?embed=true"
                />
            </div>

            <style jsx>{`
        .meetings-page {
          min-height: 100vh;
          padding: 2rem;
          background: var(--background, #fff);
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
        }
        h1 {
          margin-bottom: 2rem;
          text-align: center;
        }
        .meetings-iframe-container {
          width: 100%;
          min-height: 700px;
        }
      `}</style>
        </div>
    );
}
