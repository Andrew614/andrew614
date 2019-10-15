import React from 'react'

const Projects = () => (
    <div className='projects'>
        <h2 className='projects__title'>PROJECTS</h2>
        <article className='projects__list'>
            <section className='project-card'>
                <h3 className='project-card__title'>Virtual Vinyl</h3>
                <figure className='project-card__figure'>
                    <img className='project-card__img' src='./images/projects/virtual-vinyl.PNG'
                        alt='Virtual Vinyl' />
                </figure>
                <div className='project-card__info'>
                    <p className='project-card__info-overview'>
                        A music collection web app that was created to emulate a user's music library. This is a SPA where the back
                        end was created using Java & the front end was rendered with vanilla JavaScript.
                        This was created using a REST API design.
                    </p>
                    <section className='project-card__info-button'>
                        <a href='https://github.com/Andrew614/album-collection-restful-api' target='_blank' rel='noopener noreferrer'>
                            <button className='project-card__info-button__github'>Github</button>
                        </a>
                    </section>
                </div>
            </section>
            <section className='project-card'>
                <h3 className='project-card__title'>Acquisitions Inc.</h3>
                <figure className='project-card__figure'>
                    <img className='project-card__img' src='./images/projects/acquisitions-inc.PNG'
                        alt='Acquisitions Inc.' />
                </figure>
                <div className='project-card__info'>
                    <p className='project-card__info-overview'>
                        Full stack review site of products that was created using a Java tech stack. A user can read/ add reviews of products.
                        This was a collaborative project with a team of 5 people where agile, clean code and TDD methodology was utilized.
                        This was created using a MVC design.
                    </p>
                    <section className='project-card__info-button'>
                        <a href='https://github.com/Andrew614/acquisitions-inc-mvc' target='_blank' rel='noopener noreferrer'>
                            <button className='project-card__info-button__github'>Github</button>
                        </a>
                    </section>
                </div>
            </section>
            <section className='project-card'>
                <h3 className='project-card__title'>Blog It</h3>
                <figure className='project-card__figure'>
                    <img className='project-card__img' src='./images/projects/blog-it.PNG'
                        alt='Blog It' />
                </figure>
                <div className='project-card__info'>
                    <p className='project-card__info-overview'>
                        Full stack blog app that was created using a Java tech stack. It allows a user to create, read, and update posts
                        on a blog. This was a collaborative project of 2 people/ pair programming where TDD, agile and
                        version control was utilized. This was created using a MVC design
                    </p>
                    <section className='project-card__info-button'>
                        <a href='https://github.com/Andrew614/blog-mvc-thymeleaf' target='_blank' rel='noopener noreferrer'>
                            <button className='project-card__info-button__github'>Github</button>
                        </a>
                    </section>
                </div>
            </section>
            <section className='project-card'>
                <h3 className='project-card__title'>1-800-Movies</h3>
                <figure className='project-card__figure'>
                    <img className='project-card__img' src='./images/projects/1-800-movies.PNG'
                        alt='1-800-Movies' />
                </figure>
                <div className='project-card__info'>
                    <p className='project-card__info-overview'>A mobile responsive web app that was created to keep track of a user's movies.
                    This is a SPA where the backend was created using Java & the front end was rendered with vanilla JavaScript.
                    This was created using a REST API design.
                    </p>
                    <section className='project-card__info-button'>
                        <a href='https://github.com/Andrew614/movies-restful-api' target='_blank' rel='noopener noreferrer'>
                            <button className='project-card__info-button__github'>Github</button>
                        </a>
                    </section>
                </div>
            </section>
            <section className='project-card'>
                <h3 className='project-card__title'>In-Line Connect</h3>
                <figure className='project-card__figure'>
                    <img className='project-card__img' src='./images/projects/inline-connect.PNG'
                        alt='In-Line Connect' />
                </figure>
                <div className='project-card__info'>
                    <p className='project-card__info-overview'>
                        A mobile responsive web application designed for use by hospitals/ EMS first responders to
                        streamline the reporting and receiving process of an emergency. This is a SPA where the back end was created
                        using Java & the front end was rendered with vanilla JavaScript. This was created using a REST API design.
                    </p>
                    <section className='project-card__info-button'>
                        <a href='https://github.com/orgs/in-line-connection/teams/in-line-connector/repositories' target='_blank'
                            rel='noopener noreferrer'>
                            <button className='project-card__info-button__github'>Github</button>
                        </a>
                    </section>
                </div>
            </section>
            <section className='project-card'>
                <h3 className='project-card__title'>Github Usercard</h3>
                <figure className='project-card__figure'>
                    <img className='project-card__img' src='./images/projects/github-usercard.PNG'
                        alt='Github Usercard' />
                </figure>
                <div className='project-card__info'>
                    <p className='project-card__info-overview'>
                        This is a react application that is used to see a github user's info. I created this to get a better
                        understanding of react's component life cycle methods.
                    </p>
                    <section className='project-card__info-button'>
                        <a href='https://github.com/Andrew614/github-user-card' target='_blank' rel='noopener noreferrer'>
                            <button className='project-card__info-button__github'>Github</button>
                        </a>
                        <a href='https://githubusercard.netlify.com' target='_blank' rel='noopener noreferrer'>
                            <button className='project-card__info-button__site'>View App</button>
                        </a>
                    </section>
                </div>
            </section>
            <section className='project-card'>
                <h3 className='project-card__title'>Todo App</h3>
                <figure className='project-card__figure'>
                    <img className='project-card__img' src='./images/projects/todo-app.PNG'
                        alt='Todo App' />
                </figure>
                <div className='project-card__info'>
                    <p className='project-card__info-overview'>
                        This is a react application that is used to keep track of a users tasks. It allows a user to create, update, and
                        delete tasks as necessary. I created this to get a better understanding of react components, props, state, event
                        handling, and forms.
                    </p>
                    <section className='project-card__info-button'>
                        <a href='https://github.com/Andrew614/todo-list-react' target='_blank' rel='noopener noreferrer'>
                            <button className='project-card__info-button__github'>Github</button>
                        </a>
                        <a href='https://to-do-application.netlify.com/' target='_blank' rel='noopener noreferrer'>
                            <button className='project-card__info-button__site'>View App</button>
                        </a>
                    </section>
                </div>
            </section>
        </article>
    </div>
)

export default Projects