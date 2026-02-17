import uniqid from 'uniqid'
import { experience } from '../../portfolio'
import './Experience.css'

const Experience = () => {
    if (!experience.length) return null

    return (
        <section className='section experience' id='experience'>
            <h2 className='section__title'>Experience</h2>

            <div className='experience__timeline'>
                <div className='experience__line' />

                {experience.map((exp) => (
                    <div key={uniqid()} className='experience__card'>
                        <div className='experience__header'>
                            {exp.logo && (
                                <a
                                    href={exp.url}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='experience__logo-link'
                                >
                                    <img
                                        src={exp.logo}
                                        alt={`${exp.company} logo`}
                                        className='experience__logo'
                                    />
                                </a>
                            )}

                            <div className='experience__meta'>
                                <h3 className='experience__role'>{exp.role}</h3>
                                <p className='experience__company'>{exp.company}</p>
                                <p className='experience__period'>{exp.period}</p>
                            </div>
                        </div>

                        {exp.contributions && exp.contributions.length > 0 && (
                            <ul className='experience__contributions'>
                                {exp.contributions.map((item) => (
                                    <li key={uniqid()} className='experience__contribution'>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Experience
