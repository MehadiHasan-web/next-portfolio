'use client';
import React, { useState } from 'react'

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        subject: '',
        message: '',
        recipient: 'mhshakil06@gmail.com'
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Detect if user is on mobile device
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        const isAndroid = /Android/i.test(navigator.userAgent);
        const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

        // Create email content
        const emailSubject = formData.subject || `Contact from ${formData.name}`;
        const emailBody = `Hi,

I hope this message finds you well.

${formData.message}

Best regards,
${formData.name}`;

        if (isMobile) {
            if (isAndroid) {
                // Android: Use a more reliable approach
                const gmailAppUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(formData.recipient)}&su=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

                // Method 1: Try Gmail web first (works better on mobile)
                window.location.href = gmailAppUrl;

                // Method 2: Fallback to mailto after delay
                setTimeout(() => {
                    const mailtoUrl = `mailto:${formData.recipient}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
                    window.location.href = mailtoUrl;
                }, 3000);
            } else if (isIOS) {
                // iOS: Use Gmail app URL scheme with fallback
                const gmailAppUrl = `googlegmail://co?to=${encodeURIComponent(formData.recipient)}&subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

                // Try Gmail app first
                window.location.href = gmailAppUrl;

                // Fallback to mailto after delay
                setTimeout(() => {
                    const mailtoUrl = `mailto:${formData.recipient}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
                    window.location.href = mailtoUrl;
                }, 2000);
            } else {
                // Other mobile: Use Gmail web with mobile optimization
                const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(formData.recipient)}&su=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
                window.location.href = gmailUrl;
            }
        } else {
            // Desktop: Use Gmail web interface
            const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(formData.recipient)}&su=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}&cc=&bcc=`;

            // Try Gmail first, fallback to mailto
            try {
                window.open(gmailUrl, '_blank');
            } catch (error) {
                // Fallback to mailto if Gmail fails
                const mailtoUrl = `mailto:${formData.recipient}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
                window.location.href = mailtoUrl;
            }
        }
    };

    return (
        <div>
            <article className="contact" data-page="contact">
                <header>
                    <h2 className="h2 article-title">Contact</h2>
                </header>
                <section className="mapbox" data-mapbox="">
                    <figure>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.902442430136!2d90.3563!3d23.8103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c1d915066275%3A0xcc3bcff9cbf82d0f!2sDhaka%2C%20Bangladesh!5e0!3m2!1sen!2sbd!4v1647608789441!5m2!1sen!2sbd&t=m&z=20"
                            width={400}
                            height={300}
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </figure>

                    {/* Map Options */}
                    <div className="map-options" style={{ marginTop: '15px', display: 'flex', gap: '10px', justifyContent: 'center' }}>
                        <button
                            onClick={() => {
                                const iframe = document.querySelector('[data-mapbox] iframe');
                                if (iframe) {
                                    iframe.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13668.0560510232!2d90.3597103054485!3d23.7731446989747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0a880f7909d%3A0xe8d7d2484b62becc!2sShyamoli%2C%20Dhaka!5e1!3m2!1sen!2sbd!4v1750622410834!5m2!1sen!2sbd&t=m&z=16";
                                }
                            }}
                            style={{
                                padding: '8px 16px',
                                background: 'var(--border-gradient-onyx)',
                                border: '1px solid var(--jet)',
                                borderRadius: '8px',
                                color: 'var(--orange-yellow-crayola)',
                                cursor: 'pointer',
                                fontSize: '12px'
                            }}
                        >
                            Street View
                        </button>
                        <button
                            onClick={() => {
                                const iframe = document.querySelector('[data-mapbox] iframe');
                                if (iframe) {
                                    iframe.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13668.0560510232!2d90.3597103054485!3d23.7731446989747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0a880f7909d%3A0xe8d7d2484b62becc!2sShyamoli%2C%20Dhaka!5e1!3m2!1sen!2sbd!4v1750622410834!5m2!1sen!2sbd&t=s&z=16";
                                }
                            }}
                            style={{
                                padding: '8px 16px',
                                background: 'var(--border-gradient-onyx)',
                                border: '1px solid var(--jet)',
                                borderRadius: '8px',
                                color: 'var(--orange-yellow-crayola)',
                                cursor: 'pointer',
                                fontSize: '12px'
                            }}
                        >
                            Satellite
                        </button>
                        <button
                            onClick={() => {
                                const iframe = document.querySelector('[data-mapbox] iframe');
                                if (iframe) {
                                    iframe.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13668.0560510232!2d90.3597103054485!3d23.7731446989747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0a880f7909d%3A0xe8d7d2484b62becc!2sShyamoli%2C%20Dhaka!5e1!3m2!1sen!2sbd!4v1750622410834!5m2!1sen!2sbd&t=h&z=16";
                                }
                            }}
                            style={{
                                padding: '8px 16px',
                                background: 'var(--border-gradient-onyx)',
                                border: '1px solid var(--jet)',
                                borderRadius: '8px',
                                color: 'var(--orange-yellow-crayola)',
                                cursor: 'pointer',
                                fontSize: '12px'
                            }}
                        >
                            Hybrid
                        </button>
                    </div>

                    {/* Direct Google Maps Link */}
                    <div style={{ marginTop: '15px', textAlign: 'center' }}>
                        <a
                            href="https://www.google.com/maps?q=Shyamoli,Dhaka,Bangladesh"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                color: 'var(--orange-yellow-crayola)',
                                textDecoration: 'none',
                                fontSize: '14px',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '5px'
                            }}
                        >
                            <ion-icon name="open-outline" style={{ fontSize: '16px' }}></ion-icon>
                            Open in Google Maps
                        </a>
                    </div>
                </section>
                <section className="contact-form">
                    <h3 className="h3 form-title">Contact Form</h3>
                    <form onSubmit={handleSubmit} className="form">
                        <div className="input-wrapper">
                            <input
                                type="text"
                                name="name"
                                className="form-input"
                                placeholder="Full name"
                                required
                                value={formData.name}
                                onChange={handleInputChange}
                            />
                            <input
                                type="text"
                                name="subject"
                                className="form-input"
                                placeholder="Email subject"
                                required
                                value={formData.subject}
                                onChange={handleInputChange}
                            />
                        </div>
                        <textarea
                            name="message"
                            className="form-input"
                            placeholder="Your Message"
                            required
                            value={formData.message}
                            onChange={handleInputChange}
                        />
                        <input
                            type="hidden"
                            name="recipient"
                            value={formData.recipient}
                        />
                        <button
                            className="form-btn"
                            type="submit"
                        >
                            <ion-icon
                                name="paper-plane"
                                role="img"
                                className="md hydrated"
                                aria-label="paper plane"
                            />
                            <span>
                                {/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
                                    ? "Open Gmail App"
                                    : "Send Message"
                                }
                            </span>
                        </button>

                        {/* Mobile indicator */}
                        {/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && (
                            <div style={{
                                marginTop: '10px',
                                textAlign: 'center',
                                fontSize: '12px',
                                color: 'var(--light-gray-70)',
                                fontStyle: 'italic'
                            }}>
                                📱 Will open Gmail app with pre-filled data
                            </div>
                        )}
                    </form>
                </section>
            </article>
        </div>
    )
}

export default Contact
