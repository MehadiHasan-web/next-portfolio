import React from 'react'

function Experience() {
    const experience = [
        {
            company: "Xcode",
            duration: "Nov 2023 – Jul 2024",
            position: "Full Stack Web Developer",
            description: "Worked on full-stack projects using Laravel and React. Developed APIs, managed databases, and collaborated with cross-functional teams.",
            link: "https://xcode.com.bd"
        },
        {
            company: "Women In Digital",
            duration: "Aug 2024 – Present",
            position: "Mid-Level Laravel Developer",
            description: "Leading backend development, building scalable Laravel apps, and integrating frontend with React.",
            link: "https://womenindigital.com"
        }
    ];

    return (
        <div>
            <section className="timeline">
                <div className="title-wrapper">
                    <div className="icon-box">
                        <ion-icon
                            name="book-outline"
                            role="img"
                            className="md hydrated"
                            aria-label="book outline"
                        />
                    </div>
                    <h3 className="h3">Experience</h3>
                </div>
                <ol className="timeline-list">

                    {experience.map((item, index) => (
                        <li className="timeline-item" key={index}>
                            <h4 className="h4 timeline-item-title">{item.company}</h4>
                            <span>{item.position} || {item.duration}</span>
                            <p className="timeline-text">
                                {item.description}
                            </p>
                        </li>
                    ))}

                </ol>
            </section>
        </div>
    )
}

export default Experience
