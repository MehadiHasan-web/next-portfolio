'use client';
import React, { useEffect } from 'react'

function Contact() {

    useEffect(() => {

        // contact form variables
        const form = document.querySelector("[data-form]");
        const formInputs = document.querySelectorAll("[data-form-input]");
        const formBtn = document.querySelector("[data-form-btn]");

        // add event to all form input field
        for (let i = 0; i < formInputs.length; i++) {
            formInputs[i].addEventListener("input", function () {
                // check form validation
                if (form && form.checkValidity()) {
                    formBtn.removeAttribute("disabled");
                } else {
                    formBtn.setAttribute("disabled", "");
                }
            });
        }
    }, [])

    return (
        <div>
            <article className="contact" data-page="contact">
                <header>
                    <h2 className="h2 article-title">Contact</h2>
                </header>
                <section className="mapbox" data-mapbox="">
                    <figure>
                        <iframe
                            // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d199666.5651251294!2d-121.58334177520186!3d38.56165006739519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809ac672b28397f9%3A0x921f6aaa74197fdb!2sSacramento%2C%20CA%2C%20USA!5e0!3m2!1sen!2sbd!4v1647608789441!5m2!1sen!2sbd"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13668.0560510232!2d90.3597103054485!3d23.7731446989747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0a880f7909d%3A0xe8d7d2484b62becc!2sShyamoli%2C%20Dhaka!5e1!3m2!1sen!2sbd!4v1750622410834!5m2!1sen!2sbd"
                            width={400}
                            height={300}
                            loading="lazy"
                        />

                    </figure>
                </section>
                <section className="contact-form">
                    <h3 className="h3 form-title">Contact Form</h3>
                    <form action="#" className="form" data-form="">
                        <div className="input-wrapper">
                            <input
                                type="text"
                                name="fullname"
                                className="form-input"
                                placeholder="Full name"
                                required
                                data-form-input=""
                            />
                            <input
                                type="email"
                                name="email"
                                className="form-input"
                                placeholder="Email address"
                                required
                                data-form-input=""
                            />
                        </div>
                        <textarea
                            name="message"
                            className="form-input"
                            placeholder="Your Message"
                            required
                            data-form-input=""
                        />
                        <button
                            className="form-btn"
                            type="submit"
                            disabled
                            data-form-btn=""
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
