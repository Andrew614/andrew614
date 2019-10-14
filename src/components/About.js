import React from 'react'

const About = () => (
    <article className='portfolio'>
        <h2 className='portfolio__title'>ABOUT</h2>
        <p className='portfolio__desciption'>Full Stack Software Developer</p>
        <section className='portfolio__content portfolio__content--grid'>
            <p className='portfolio__about-me'>Hello, I'm Andrew. I'm a full stack software developer
                living in
                Columbus, OH.
                I am always striving to learn new things and take on new challenges. Let me turn your ideas
                into reality.
                Live. Laugh. Learn.
                <br /><br /><br /><br />
                <q>You learn more from failure than from success. Don’t let it stop you. Failure builds
                    character.</q> – Unknown
            </p>
            <figure className='portfolio__avatar'>
                <img className='portfolio__image' src='./images/profile.jpg' alt='avatar' />
            </figure>
        </section>
        <section className="portfolio__content">
            <h2 className="portfolio__title portfolio__title--margin">SKILLS</h2>
            <section className="portfolio__skills">
                <h3 className="portfolio__subtitle">Tech</h3>
                <ul className="portfolio__list">
                    <li className="portfolio__list-item"> Java, Spring, Hibernate, JPA, MVC, HTML5,
                        CSS3, Javascript, Flexbox, Grid, TDD, Agile (Scrum),
                    </li>
                    <li className="portfolio__list-item">Object Oriented Programming (OOP), AJAX, JSON,
                        Restful APIs, Responsive Design / Mobile,
                    </li>
                    <li className="portfolio__list-item">Structured Query Language (SQL), Relational
						Databases, Source Control / Git
                    </li>
                </ul>
            </section>
        </section>
    </article>
)

export default About