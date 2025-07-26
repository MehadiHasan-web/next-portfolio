'use client'
import React, { useEffect } from 'react'

function Navbar() {
    useEffect(() => {
        // page navigation variables
        const navigationLinks = document.querySelectorAll("[data-nav-link]");
        const pages = document.querySelectorAll("[data-page]");

        // add event to all nav link
        for (let i = 0; i < navigationLinks.length; i++) {
            navigationLinks[i].addEventListener("click", function () {
                for (let j = 0; j < pages.length; j++) {
                    if (this.innerHTML.toLowerCase() === pages[j].dataset.page) {
                        pages[j].classList.add("active");
                        navigationLinks[i].classList.add("active");
                        window.scrollTo(0, 0);
                    } else {
                        pages[j].classList.remove("active");
                        // Also remove active class from the corresponding nav link
                        if (
                            navigationLinks[j] &&
                            pages[j].dataset.page === navigationLinks[j].innerHTML.toLowerCase()
                        ) {
                            navigationLinks[j].classList.remove("active");
                        }
                    }
                }
                // Special handling for the clicked link in case the loop above doesn't handle it
                for (let k = 0; k < navigationLinks.length; k++) {
                    if (navigationLinks[k] !== this) {
                        navigationLinks[k].classList.remove("active");
                    }
                }
                this.classList.add("active");
            });
        }
    }, []);
    return (
        <div>
            <nav className="navbar">
                <ul className="navbar-list">
                    <li className="navbar-item">
                        <button className="navbar-link active" data-nav-link="">
                            About
                        </button>
                    </li>
                    <li className="navbar-item">
                        <button className="navbar-link" data-nav-link="">
                            Resume
                        </button>
                    </li>
                    <li className="navbar-item">
                        <button className="navbar-link" data-nav-link="">
                            Portfolio
                        </button>
                    </li>
                    <li className="navbar-item">
                        <button className="navbar-link" data-nav-link="">
                            Blog
                        </button>
                    </li>
                    <li className="navbar-item">
                        <button className="navbar-link" data-nav-link="">
                            Contact
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
