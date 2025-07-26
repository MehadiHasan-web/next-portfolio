"use client";
import { useEffect, useState } from "react";

function Sidebar() {
    const [showProfile, setShowProfile] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        // Show profile image after 2 seconds
        const timer = setTimeout(() => {
            setShowProfile(true);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        // element toggle function
        const elementToggleFunc = function (elem) {
            elem.classList.toggle("active");
        };
        // sidebar variables
        const sidebar = document.querySelector("[data-sidebar]");
        const sidebarBtn = document.querySelector("[data-sidebar-btn]");

        // sidebar toggle functionality for mobile
        if (sidebar && sidebarBtn) {
            sidebarBtn.addEventListener("click", function () {
                elementToggleFunc(sidebar);
            });
        }
    }, []);

    return (
        <div>
            <aside className="sidebar" data-sidebar="">
                <div className="sidebar-info">
                    <figure className="avatar-box">
                        {mounted && !showProfile ? (
                            <div className="hi-animation">
                                <svg
                                    className="hi-svg"
                                    width="150"
                                    height="146"
                                    viewBox="0 0 200 100"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <text
                                        x="110"
                                        y="80"
                                        textAnchor="middle"
                                        fontSize="60"
                                        fontWeight="bold"
                                        fill="#007bff"
                                        className="hi-text"
                                    >
                                        Hi!
                                    </text>
                                    <circle
                                        cx="50"
                                        cy="30"
                                        r="8"
                                        fill="#007bff"
                                        className="wave-dot"
                                    >
                                        <animate
                                            attributeName="cy"
                                            values="30;20;30"
                                            dur="1s"
                                            repeatCount="indefinite"
                                        />
                                    </circle>
                                    <circle
                                        cx="70"
                                        cy="30"
                                        r="8"
                                        fill="#007bff"
                                        className="wave-dot"
                                    >
                                        <animate
                                            attributeName="cy"
                                            values="30;20;30"
                                            dur="1s"
                                            begin="0.2s"
                                            repeatCount="indefinite"
                                        />
                                    </circle>
                                    <circle
                                        cx="90"
                                        cy="30"
                                        r="8"
                                        fill="#007bff"
                                        className="wave-dot"
                                    >
                                        <animate
                                            attributeName="cy"
                                            values="30;20;30"
                                            dur="1s"
                                            begin="0.4s"
                                            repeatCount="indefinite"
                                        />
                                    </circle>
                                </svg>
                            </div>
                        ) : (
                            <img
                                // src="/assets/images/my-avatar.png"
                                src="/assets/images/profile-pic.png"
                                alt="Mehadi Hasan"
                                width={80}
                                className="profile-image"
                            />
                        )}
                    </figure>
                    <div className="info-content">
                        <h1 className="name" title="Mehadi Hasan">
                            Mehadi Hasan
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
                                <a href="mailto:mhshakil06@gmail.com" className="contact-link">
                                    mhshakil06@gmail.com
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
                                <a href="tel:+8801642872846" className="contact-link">
                                    +8801642872846
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
                                <time dateTime="01-18">Jan 18</time>
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
                                <address>Chittagong, Bangladesh</address>
                            </div>
                        </li>
                    </ul>
                    <div className="separator" />
                    <ul className="social-list">
                        <li className="social-item">
                            <a href="https://www.facebook.com/mehadi.hasan.314721" className="social-link" target="_blank">
                                <ion-icon
                                    name="logo-facebook"
                                    role="img"
                                    className="md hydrated"
                                    aria-label="logo facebook"
                                />
                            </a>
                        </li>
                        <li className="social-item">
                            <a href="https://www.linkedin.com/in/mehedi-hasan-919771185/" className="social-link" target="_blank" >
                                <ion-icon
                                    name="logo-linkedin"
                                    role="img"
                                    className="md hydrated"
                                    aria-label="logo linkedin"
                                />
                            </a>
                        </li>
                        <li className="social-item">
                            <a href="https://github.com/MehadiHasan-web" className="social-link" target="_blank">
                                <ion-icon
                                    name="logo-github"
                                    role="img"
                                    className="md hydrated"
                                    aria-label="logo github"
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
