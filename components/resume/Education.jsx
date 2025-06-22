import React from 'react'

function Education() {

    const education = [
        {
            institution: "Nizampur Govt. College",
            duration: "Degree (Ongoing)",
            description: "Studying under Chattogram Board."
        },
        {
            institution: "Nizampur Govt. College",
            duration: "HSC — 2020",
            description: "Group: Arts | Grade: A− | Chattogram Board"
        },
        {
            institution: "Moliaish High School",
            duration: "SSC — 2018",
            description: "Group: Science | Grade: A | Chattogram Board"
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
                    <h3 className="h3">Education</h3>
                </div>
                <ol className="timeline-list">

                    {education.map((item, index) => (
                        <li className="timeline-item" key={index}>
                            <h4 className="h4 timeline-item-title">
                                {item.institution}
                            </h4>
                            <span>{item.duration}</span>
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

export default Education
