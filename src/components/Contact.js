import React from 'react'

const Contact = () => (
    <>
        <article className='contact'>
            <h2 className='contact__title'><strong>CONTACT</strong></h2>
            <ul className='contact__list'>
                <li className='contact__list-item'>
                    <a href='https://www.linkedin.com/in/drew-zhang/' target='_blank' rel='noopener noreferrer'>
                        <img src="images/linkedin.png" alt="linkedin" />
                    </a>
                </li>
                <li className='contact__list-item'>
                    <a href='https://github.com/Andrew614' target="_blank" rel='noopener noreferrer'>
                        <img src="images/github.png" alt="github" />
                    </a>
                </li>
                <li className='contact__list-item'>
                    <a href='mailto:AZhang213@gmail.com'>
                        <img src="images/email.png" alt="email" />
                    </a>
                </li>
                <li className='contact__list-item'>
                    <a href='tel:+1-614-289-8893'>
                        <img src="images/phone.png" alt="phone" />
                    </a>
                </li>
            </ul>

            <div className="contact__form">
                <h4>SEND ME A MESSAGE!</h4>
                <form>
                    <div className='contact__form-data'>
                        <div className='info'>
                            <input type="text" name="name" id="name" placeholder="Name" />
                            <input type="text" name="email" id="email" placeholder="Email" />
                        </div>
                        <div className='subject'>
                            <input type="text" name="subject" id="subject" placeholder="Subject" />
                        </div>
                        <div className='message'>
                            <textarea name="message" id="message" placeholder="Message"></textarea>
                        </div>
                        <div className='action'>
                            <input type="submit" value="Send" />
                            <input type="reset" value="Clear" />
                        </div>
                    </div>
                </form>
            </div>
        </article>
    </>
)

export default Contact