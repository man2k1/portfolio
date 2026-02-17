import uniqid from 'uniqid'
import CodeIcon from '@material-ui/icons/Code'
import { skills } from '../../portfolio'
import './Skills.css'

const Skills = () => {
  if (!skills.length) return null

  return (
    <section className='section skills' id='skills'>
      <h2 className='section__title'>Skills</h2>
      <ul className='skills__list'>
        {skills.map(([name, icon]) => (
          <li key={uniqid()} className='skills__list-item btn btn--plain'>
            {icon === 'code' ? (
              <CodeIcon className='skills__icon' style={{ fontSize: '1.1rem' }} />
            ) : (
              <i className={`${icon} skills__icon`} />
            )}
            {name}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Skills
