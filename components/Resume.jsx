
import Education from "./resume/Education"
import Experience from "./resume/Experience"
import Skill from "./resume/Skill"

function Resume() {


    return (
        <div>
            <article className="resume" data-page="resume">
                <header>
                    <h2 className="h2 article-title">Resume</h2>
                </header>
                <Education />

                <Experience />

                <Skill />
            </article>
        </div>
    )
}

export default Resume
