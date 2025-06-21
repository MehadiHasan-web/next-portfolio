import React from 'react'

function Sidebar() {
    return (
        <div>
            <aside className="sidebar" data-sidebar="">
                <div className="sidebar-info">
                    <figure className="avatar-box">
                        <img
                            src="/assets/images/my-avatar.png"
                            alt="Richard hanrick"
                            width={80}
                        />
                    </figure>
                    <div className="info-content">
                        <h1 className="name" title="Richard hanrick">
                            Richard hanrick
                        </h1>
                        <p className="title">Web developer</p>
                    </div>
                    <button className="info_more-btn" data-sidebar-btn="">
                        <span>Show Contacts</span>
                        <ion-icon
                            name="chevron-down"
                            role="img"
                            className="md hydrated"
                            aria-label="chevron down"
                        />
                    </button>
                </div>
                <div className="sidebar-info_more">
                    <div className="separator" />
                    <ul className="contacts-list">
                        <li className="contact-item">
                            <div className="icon-box">
                                <ion-icon
                                    name="mail-outline"
                                    role="img"
                                    className="md hydrated"
                                    aria-label="mail outline"
                                />
                            </div>
                            <div className="contact-info">
                                <p className="contact-title">Email</p>
                                <a href="mailto:richard@example.com" className="contact-link">
                                    richard@example.com
                                </a>
                            </div>
                        </li>
                        <li className="contact-item">
                            <div className="icon-box">
                                <ion-icon
                                    name="phone-portrait-outline"
                                    role="img"
                                    className="md hydrated"
                                    aria-label="phone portrait outline"
                                />
                            </div>
                            <div className="contact-info">
                                <p className="contact-title">Phone</p>
                                <a href="tel:+12133522795" className="contact-link">
                                    +1 (213) 352-2795
                                </a>
                            </div>
                        </li>
                        <li className="contact-item">
                            <div className="icon-box">
                                <ion-icon
                                    name="calendar-outline"
                                    role="img"
                                    className="md hydrated"
                                    aria-label="calendar outline"
                                />
                            </div>
                            <div className="contact-info">
                                <p className="contact-title">Birthday</p>
                                <time dateTime="1982-06-23">June 23, 1982</time>
                            </div>
                        </li>
                        <li className="contact-item">
                            <div className="icon-box">
                                <ion-icon
                                    name="location-outline"
                                    role="img"
                                    className="md hydrated"
                                    aria-label="location outline"
                                />
                            </div>
                            <div className="contact-info">
                                <p className="contact-title">Location</p>
                                <address>Sacramento, California, USA</address>
                            </div>
                        </li>
                    </ul>
                    <div className="separator" />
                    <ul className="social-list">
                        <li className="social-item">
                            <a href="#" className="social-link">
                                <ion-icon
                                    name="logo-facebook"
                                    role="img"
                                    className="md hydrated"
                                    aria-label="logo facebook"
                                />
                            </a>
                        </li>
                        <li className="social-item">
                            <a href="#" className="social-link">
                                <ion-icon
                                    name="logo-twitter"
                                    role="img"
                                    className="md hydrated"
                                    aria-label="logo twitter"
                                />
                            </a>
                        </li>
                        <li className="social-item">
                            <a href="#" className="social-link">
                                <ion-icon
                                    name="logo-instagram"
                                    role="img"
                                    className="md hydrated"
                                    aria-label="logo instagram"
                                />
                            </a>
                        </li>
                    </ul>
                </div>
            </aside>
        </div>
    )
}

export default Sidebar
