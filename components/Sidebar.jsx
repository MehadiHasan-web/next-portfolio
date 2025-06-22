"use client";
import { useEffect } from "react";

function Sidebar() {

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
                        <img
                            src="/assets/images/my-avatar.png"
                            // src="/assets/images/profile-pic.png"
                            alt="Mehadi Hasan"
                            width={80}
                        />
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
