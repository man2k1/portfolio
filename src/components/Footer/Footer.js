import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { about } from '../../portfolio'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const { name, social } = about

  return (
    <footer className='footer'>
      <div className='footer__content'>
        {social && (
          <div className='footer__social'>
            {social.github && (
              <a
                href={social.github}
                aria-label='github'
                className='link link--icon'
                target='_blank'
                rel='noopener noreferrer'
              >
                <GitHubIcon />
              </a>
            )}
            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
                target='_blank'
                rel='noopener noreferrer'
              >
                <LinkedInIcon />
              </a>
            )}
          </div>
        )}

        <p className='footer__copyright'>
          Copyright &copy; {currentYear} {name || 'Manoj S'}.
        </p>
      </div>
    </footer>
  )
}

export default Footer
