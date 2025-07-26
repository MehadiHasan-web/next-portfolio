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

        // Method 1: Gmail compose URL (preferred)
        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(formData.recipient)}&su=${encodeURIComponent(`${formData.subject}`)}&body=${encodeURIComponent(`Hi,
I hope this message finds you well.

${formData.message}

Best regards,
${formData.name}`)}&cc=&bcc=`;

        // Method 2: Mailto fallback
        const mailtoUrl = `mailto:${formData.recipient}?subject=${encodeURIComponent(`Contact from ${formData.name}`)}&body=${encodeURIComponent(`
Hi,
I hope this message finds you well.

${formData.message}

Best regards,

${formData.name}`)}`;

        // Try Gmail first, fallback to mailto
        try {
            window.open(gmailUrl, '_blank');
        } catch (error) {
            // Fallback to mailto if Gmail fails
            window.location.href = mailtoUrl;
        }
    };

    return (
        <div>
            <article className="contact active" data-page="contact">
                <header>
                    <h2 className="h2 article-title">Contact</h2>
                </header>
                <section className="mapbox" data-mapbox="">
                    <figure>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13668.0560510232!2d90.3597103054485!3d23.7731446989747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0a880f7909d%3A0xe8d7d2484b62becc!2sShyamoli%2C%20Dhaka!5e1!3m2!1sen!2sbd!4v1750622410834!5m2!1sen!2sbd"
                            width={400}
                            height={300}
                            loading="lazy"
                        />
                    </figure>
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
                            <span>Send Message</span>
                        </button>
                    </form>
                </section>
            </article>
        </div>
    )
}

export default Contact
