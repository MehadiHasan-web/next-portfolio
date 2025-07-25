import React from 'react'
import Image from 'next/image'

function WhatDo() {


    let whatsDo = [
        {
            title: 'Backend Development',
            img: '/assets/images/icon-design.svg',
            description: 'Building scalable and maintainable APIs with Laravel, focused on clean architecture and performance.'
        },
        {
            title: 'Frontend Engineering',
            img: '/assets/images/icon-dev.svg',
            description: 'Creating dynamic, responsive UIs with React.js, ensuring smooth user experiences across devices.'
        },
        {
            title: 'Database & System Design',
            img: '/assets/images/icon-app.svg',
            description: 'Designing efficient database schemas and systems that scale with business logic and data complexity.'
        },
        {
            title: 'Deployment & Optimization',
            img: '/assets/images/icon-photo.svg',
            description: 'Managing CI/CD, Docker, and performance tuning to ensure fast, secure, and stable applications.'
        }
    ];
  

  return (  
    <div>
            <section className="service">
                <h3 className="h3 service-title">What I&apos;m doing</h3>
                <ul className="service-list">
                    {whatsDo.map((item, idx) => (
                        <li className="service-item" key={idx}>
                            <div className="service-icon-box">
                                <Image
                                    src={item.img}
                                    alt={item.title + ' icon'}
                                    width={40}
                                    height={40}
                                />
                            </div>
                            <div className="service-content-box">
                                <h4 className="h4 service-item-title">{item.title}</h4>
                                <p className="service-item-text">
                                    {item.description}
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>
    </div>
  )
}

export default WhatDo
