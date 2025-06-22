'use client'

import { useState, useEffect, useRef } from 'react';

const SkillBar = ({ name, percentage, isInView }) => {
    const [currentPercentage, setCurrentPercentage] = useState(0);

    useEffect(() => {
        if (isInView) {
            let start = 0;
            const end = parseInt(percentage, 10);
            if (start === end) return;

            const duration = 1200; // ms
            const incrementTime = Math.max(duration / end, 10);

            const timer = setInterval(() => {
                start += 1;
                setCurrentPercentage(prev => (prev < end ? start : end));
                if (start >= end) {
                    clearInterval(timer);
                }
            }, incrementTime);

            return () => clearInterval(timer);
        }
    }, [isInView, percentage]);

    return (
        <li className="skills-item">
            <div className="title-wrapper">
                <h5 className="h5">{name}</h5>
                <data value={currentPercentage}>{currentPercentage}%</data>
            </div>
            <div className="skill-progress-bg">
                <div
                    className="skill-progress-fill"
                    style={{
                        width: isInView ? `${percentage}%` : '0%',
                        transition: 'width 1.2s ease-out'
                    }}
                />
            </div>
        </li>
    );
};

function Skill() {
    const [skillsInView, setSkillsInView] = useState(false);
    const skillsRef = useRef(null);

    let skills = [
        { name: 'JavaScript', percentage: 90 },
        { name: 'React.js', percentage: 85 },
        { name: 'Laravel', percentage: 92 },
        { name: 'OOP Design Patterns', percentage: 80 },
        { name: 'RESTful API', percentage: 90 },
        { name: 'SQL Injection Prevention', percentage: 85 },
        { name: 'Git & GitHub', percentage: 85 },
        { name: 'Problem-solving', percentage: 88 },
        { name: 'AI Agent Development', percentage: 70 }
    ];



    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setSkillsInView(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        const currentRef = skillsRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);
    return (
        <div>
            <section className="skill" ref={skillsRef}>
                <h3 className="h3 skills-title">My skills</h3>
                <ul className="skills-list content-card">
                    {skills.map((skill, index) => (
                        <SkillBar key={index} name={skill.name} percentage={skill.percentage} isInView={skillsInView} />
                    ))}
                </ul>
            </section>
        </div>
    )
}

export default Skill
