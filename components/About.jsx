'use client'
import { useEffect } from "react";

export default function About() {


    //     Web Development
    // Building responsive, scalable web applications using Laravel and React.

    // AI Innovation
    // Developing smart AI agents to automate and enhance workflows.

    // API Design
    // Creating secure and efficient RESTful APIs for modern apps.

    // Tech Learning
    // Continuously exploring new technologies and improving skills.

    useEffect(() => {

        // testimonials variables
        const testimonialsItem = document.querySelectorAll(
            "[data-testimonials-item]"
        );
        const modalContainer = document.querySelector("[data-modal-container]");
        const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
        const overlay = document.querySelector("[data-overlay]");

        // modal variable
        const modalImg = document.querySelector("[data-modal-img]");
        const modalTitle = document.querySelector("[data-modal-title]");
        const modalText = document.querySelector("[data-modal-text]");

        // modal toggle function
        const testimonialsModalFunc = function () {
            if (modalContainer && overlay) {
                modalContainer.classList.toggle("active");
                overlay.classList.toggle("active");
            }
        };

        // add click event to all modal items
        for (let i = 0; i < testimonialsItem.length; i++) {
            testimonialsItem[i].addEventListener("click", function () {
                if (
                    modalImg &&
                    this.querySelector("[data-testimonials-avatar]") &&
                    modalTitle &&
                    this.querySelector("[data-testimonials-title]") &&
                    modalText &&
                    this.querySelector("[data-testimonials-text]")
                ) {
                    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
                    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
                    modalTitle.innerHTML = this.querySelector(
                        "[data-testimonials-title]"
                    ).innerHTML;
                    modalText.innerHTML = this.querySelector(
                        "[data-testimonials-text]"
                    ).innerHTML;
                }

                testimonialsModalFunc();
            });
        }

        // add click event to modal close button
        if (modalCloseBtn) {
            modalCloseBtn.addEventListener("click", testimonialsModalFunc);
        }
        if (overlay) {
            overlay.addEventListener("click", testimonialsModalFunc);
        }

        // custom select variables
        const select = document.querySelector("[data-select]");
        const selectItems = document.querySelectorAll("[data-select-item]");
        const selectValue = document.querySelector("[data-selecct-value]");
        const filterBtn = document.querySelectorAll("[data-filter-btn]");

        if (select) {
            select.addEventListener("click", function () {
                elementToggleFunc(this);
            });
        }

        // filter variables
        const filterItems = document.querySelectorAll("[data-filter-item]");

        const filterFunc = function (selectedValue) {
            for (let i = 0; i < filterItems.length; i++) {
                if (selectedValue === "all") {
                    filterItems[i].classList.add("active");
                } else if (selectedValue === filterItems[i].dataset.category) {
                    filterItems[i].classList.add("active");
                } else {
                    filterItems[i].classList.remove("active");
                }
            }
        };

        // add event in all select items
        for (let i = 0; i < selectItems.length; i++) {
            selectItems[i].addEventListener("click", function () {
                let selectedValue = this.innerText.toLowerCase();
                if (selectValue) {
                    selectValue.innerText = this.innerText;
                }
                if (select) {
                    elementToggleFunc(select);
                }
                filterFunc(selectedValue);
            });
        }

        // add event in all filter button items for large screen
        let lastClickedBtn = filterBtn.length > 0 ? filterBtn[0] : null;

        for (let i = 0; i < filterBtn.length; i++) {
            filterBtn[i].addEventListener("click", function () {
                let selectedValue = this.innerText.toLowerCase();
                if (selectValue) {
                    selectValue.innerText = this.innerText;
                }
                filterFunc(selectedValue);

                if (lastClickedBtn) {
                    lastClickedBtn.classList.remove("active");
                }
                this.classList.add("active");
                lastClickedBtn = this;
            });
        }
    }, [])

    return (
        <article className="about" data-page="about">
            <header>
                <h2 className="h2 article-title">About me</h2>
            </header>
            <section className="about-text">
                <p>
                    Full-stack developer specializing in Laravel and React.js. Passionate about system design, data structures, and crafting scalable web apps. Continuously exploring AI and innovative technologies to solve real-world problems.
                </p>
                <p>
                    A dedicated developer with strong backend and frontend skills, focused on delivering clean, efficient code. Experienced in building robust APIs, optimizing performance, and integrating modern tools like AI agents. Committed to lifelong learning and leveraging new technologies to create impactful, user-friendly digital solutions.
                </p>
            </section>
            {/*
          - service
        */}
            <section className="service">
                <h3 className="h3 service-title">What i'm doing</h3>
                <ul className="service-list">
                    <li className="service-item">
                        <div className="service-icon-box">
                            <img
                                src="/assets/images/icon-design.svg"
                                alt="design icon"
                                width={40}
                            />
                        </div>
                        <div className="service-content-box">
                            <h4 className="h4 service-item-title">Web design</h4>
                            <p className="service-item-text">
                                The most modern and high-quality design made at a professional
                                level.
                            </p>
                        </div>
                    </li>
                    <li className="service-item">
                        <div className="service-icon-box">
                            <img
                                src="/assets/images/icon-dev.svg"
                                alt="Web development icon"
                                width={40}
                            />
                        </div>
                        <div className="service-content-box">
                            <h4 className="h4 service-item-title">Web development</h4>
                            <p className="service-item-text">
                                High-quality development of sites at the professional level.
                            </p>
                        </div>
                    </li>
                    <li className="service-item">
                        <div className="service-icon-box">
                            <img
                                src="/assets/images/icon-app.svg"
                                alt="mobile app icon"
                                width={40}
                            />
                        </div>
                        <div className="service-content-box">
                            <h4 className="h4 service-item-title">Mobile apps</h4>
                            <p className="service-item-text">
                                Professional development of applications for iOS and Android.
                            </p>
                        </div>
                    </li>
                    <li className="service-item">
                        <div className="service-icon-box">
                            <img
                                src="/assets/images/icon-photo.svg"
                                alt="camera icon"
                                width={40}
                            />
                        </div>
                        <div className="service-content-box">
                            <h4 className="h4 service-item-title">Photography</h4>
                            <p className="service-item-text">
                                I make high-quality photos of any category at a professional
                                level.
                            </p>
                        </div>
                    </li>
                </ul>
            </section>
            {/*
          - testimonials
        */}
            <section className="testimonials">
                <h3 className="h3 testimonials-title">Testimonials</h3>
                <ul className="testimonials-list has-scrollbar">
                    <li className="testimonials-item">
                        <div className="content-card" data-testimonials-item="">
                            <figure className="testimonials-avatar-box">
                                <img
                                    src="/assets/images/avatar-1.png"
                                    alt="Daniel lewis"
                                    width={60}
                                    data-testimonials-avatar=""
                                />
                            </figure>
                            <h4
                                className="h4 testimonials-item-title"
                                data-testimonials-title=""
                            >
                                Daniel lewis
                            </h4>
                            <div className="testimonials-text" data-testimonials-text="">
                                <p>
                                    Richard was hired to create a corporate identity. We were
                                    very pleased with the work done. She has a lot of experience
                                    and is very concerned about the needs of client. Lorem ipsum
                                    dolor sit amet, ullamcous cididt consectetur adipiscing elit,
                                    seds do et eiusmod tempor incididunt ut laborels dolore
                                    magnarels alia.
                                </p>
                            </div>
                        </div>
                    </li>
                    <li className="testimonials-item">
                        <div className="content-card" data-testimonials-item="">
                            <figure className="testimonials-avatar-box">
                                <img
                                    src="/assets/images/avatar-2.png"
                                    alt="Jessica miller"
                                    width={60}
                                    data-testimonials-avatar=""
                                />
                            </figure>
                            <h4
                                className="h4 testimonials-item-title"
                                data-testimonials-title=""
                            >
                                Jessica miller
                            </h4>
                            <div className="testimonials-text" data-testimonials-text="">
                                <p>
                                    Richard was hired to create a corporate identity. We were
                                    very pleased with the work done. She has a lot of experience
                                    and is very concerned about the needs of client. Lorem ipsum
                                    dolor sit amet, ullamcous cididt consectetur adipiscing elit,
                                    seds do et eiusmod tempor incididunt ut laborels dolore
                                    magnarels alia.
                                </p>
                            </div>
                        </div>
                    </li>
                    <li className="testimonials-item">
                        <div className="content-card" data-testimonials-item="">
                            <figure className="testimonials-avatar-box">
                                <img
                                    src="/assets/images/avatar-3.png"
                                    alt="Emily evans"
                                    width={60}
                                    data-testimonials-avatar=""
                                />
                            </figure>
                            <h4
                                className="h4 testimonials-item-title"
                                data-testimonials-title=""
                            >
                                Emily evans
                            </h4>
                            <div className="testimonials-text" data-testimonials-text="">
                                <p>
                                    Richard was hired to create a corporate identity. We were
                                    very pleased with the work done. She has a lot of experience
                                    and is very concerned about the needs of client. Lorem ipsum
                                    dolor sit amet, ullamcous cididt consectetur adipiscing elit,
                                    seds do et eiusmod tempor incididunt ut laborels dolore
                                    magnarels alia.
                                </p>
                            </div>
                        </div>
                    </li>
                    <li className="testimonials-item">
                        <div className="content-card" data-testimonials-item="">
                            <figure className="testimonials-avatar-box">
                                <img
                                    src="/assets/images/avatar-4.png"
                                    alt="Henry william"
                                    width={60}
                                    data-testimonials-avatar=""
                                />
                            </figure>
                            <h4
                                className="h4 testimonials-item-title"
                                data-testimonials-title=""
                            >
                                Henry william
                            </h4>
                            <div className="testimonials-text" data-testimonials-text="">
                                <p>
                                    Richard was hired to create a corporate identity. We were
                                    very pleased with the work done. She has a lot of experience
                                    and is very concerned about the needs of client. Lorem ipsum
                                    dolor sit amet, ullamcous cididt consectetur adipiscing elit,
                                    seds do et eiusmod tempor incididunt ut laborels dolore
                                    magnarels alia.
                                </p>
                            </div>
                        </div>
                    </li>
                </ul>
            </section>
            {/*
          - testimonials modal
        */}
            <div className="modal-container" data-modal-container="">
                <div className="overlay" data-overlay="" />
                <section className="testimonials-modal">
                    <button className="modal-close-btn" data-modal-close-btn="">
                        <ion-icon
                            name="close-outline"
                            role="img"
                            className="md hydrated"
                            aria-label="close outline"
                        />
                    </button>
                    <div className="modal-img-wrapper">
                        <figure className="modal-avatar-box">
                            <img
                                src="/assets/images/avatar-1.png"
                                alt="Daniel lewis"
                                width={80}
                                data-modal-img=""
                            />
                        </figure>
                        <img src="/assets/images/icon-quote.svg" alt="quote icon" />
                    </div>
                    <div className="modal-content">
                        <h4 className="h3 modal-title" data-modal-title="">
                            Daniel lewis
                        </h4>
                        <time dateTime="2021-06-14">14 June, 2021</time>
                        <div data-modal-text="">
                            <p>
                                Richard was hired to create a corporate identity. We were very
                                pleased with the work done. She has a lot of experience and is
                                very concerned about the needs of client. Lorem ipsum dolor sit
                                amet, ullamcous cididt consectetur adipiscing elit, seds do et
                                eiusmod tempor incididunt ut laborels dolore magnarels alia.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
            {/*
          - clients
        */}
            <section className="clients">
                <h3 className="h3 clients-title">Clients</h3>
                <ul className="clients-list has-scrollbar">
                    <li className="clients-item">
                        <a href="#">
                            <img src="/assets/images/logo-1-color.png" alt="client logo" />
                        </a>
                    </li>
                    <li className="clients-item">
                        <a href="#">
                            <img src="/assets/images/logo-2-color.png" alt="client logo" />
                        </a>
                    </li>
                    <li className="clients-item">
                        <a href="#">
                            <img src="/assets/images/logo-3-color.png" alt="client logo" />
                        </a>
                    </li>
                    <li className="clients-item">
                        <a href="#">
                            <img src="/assets/images/logo-4-color.png" alt="client logo" />
                        </a>
                    </li>
                    <li className="clients-item">
                        <a href="#">
                            <img src="/assets/images/logo-5-color.png" alt="client logo" />
                        </a>
                    </li>
                    <li className="clients-item">
                        <a href="#">
                            <img src="/assets/images/logo-6-color.png" alt="client logo" />
                        </a>
                    </li>
                </ul>
            </section>
        </article>
    );
} 