import { useState, useEffect, useCallback } from 'react'
import uniqid from 'uniqid'
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import CloseIcon from '@material-ui/icons/Close'
import './ProjectContainer.css'

const resolveImage = (img) =>
  img.startsWith('http')
    ? img
    : `${process.env.PUBLIC_URL}/images/${img}`

const ProjectContainer = ({ project }) => {
  const images = project.images || []
  const primaryImage = images.length > 0 ? images[0] : null
  const [showModal, setShowModal] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [imagesLoaded, setImagesLoaded] = useState(false)

  // preload all images when modal opens
  useEffect(() => {
    if (!showModal || images.length === 0) return
    setImagesLoaded(false)
    let loaded = 0
    images.forEach((src) => {
      const img = new Image()
      img.src = resolveImage(src)
      img.onload = () => {
        loaded += 1
        if (loaded === images.length) setImagesLoaded(true)
      }
      img.onerror = () => {
        loaded += 1
        if (loaded === images.length) setImagesLoaded(true)
      }
    })
  }, [showModal, images])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length)
  }, [images.length])

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % images.length)
  }, [images.length])

  // close modal on Escape key, navigate with arrows
  useEffect(() => {
    if (!showModal) return undefined
    const handleKey = (e) => {
      if (e.key === 'Escape') setShowModal(false)
      if (e.key === 'ArrowLeft') prevSlide()
      if (e.key === 'ArrowRight') nextSlide()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [showModal, prevSlide, nextSlide])

  const openModal = () => {
    if (images.length > 0) {
      setCurrentSlide(0)
      setShowModal(true)
    }
  }

  return (
    <>
      <div className='project' role='button' tabIndex={0} onClick={openModal} onKeyDown={(e) => e.key === 'Enter' && openModal()}>
        {primaryImage && (
          <div className='project__image'>
            <img
              src={resolveImage(primaryImage)}
              alt={`${project.name} screenshot`}
            />
          </div>
        )}

        <div className='project__body'>
          <h3>{project.name}</h3>

          <p className='project__description'>{project.description}</p>
          {project.stack && (
            <ul className='project__stack'>
              {project.stack.map((item) => (
                <li key={uniqid()} className='project__stack-item'>
                  {item}
                </li>
              ))}
            </ul>
          )}

          <div className='project__links'>
            {project.sourceCode && (
              <a
                href={project.sourceCode}
                aria-label='source code'
                className='link link--icon'
                target='_blank'
                rel='noopener noreferrer'
                onClick={(e) => e.stopPropagation()}
              >
                <GitHubIcon />
              </a>
            )}

            {project.livePreview && (
              <a
                href={project.livePreview}
                aria-label='live preview'
                className='link link--icon'
                target='_blank'
                rel='noopener noreferrer'
                onClick={(e) => e.stopPropagation()}
              >
                <LaunchIcon />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Modal with image slideshow */}
      {showModal && (
        // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
        <div className='project-modal__overlay' role='dialog' aria-modal='true' onClick={() => setShowModal(false)} onKeyDown={(e) => e.key === 'Escape' && setShowModal(false)}>
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
          <div className='project-modal' onClick={(e) => e.stopPropagation()}>
            <button
              type='button'
              className='project-modal__close'
              onClick={() => setShowModal(false)}
              aria-label='Close modal'
            >
              <CloseIcon />
            </button>

            <div className='project-modal__slideshow'>
              {!imagesLoaded && (
                <div className='project-modal__loading'>Loading…</div>
              )}
              {imagesLoaded && images.map((img, idx) => (
                <img
                  key={uniqid()}
                  src={resolveImage(img)}
                  alt={`${project.name} screenshot ${idx + 1}`}
                  className={`project-modal__slide ${idx === currentSlide ? 'project-modal__slide--active' : ''}`}
                />
              ))}

              {images.length > 1 && imagesLoaded && (
                <>
                  <button
                    type='button'
                    className='project-modal__arrow project-modal__arrow--left'
                    onClick={prevSlide}
                    aria-label='Previous slide'
                  >
                    <ChevronLeftIcon />
                  </button>
                  <button
                    type='button'
                    className='project-modal__arrow project-modal__arrow--right'
                    onClick={nextSlide}
                    aria-label='Next slide'
                  >
                    <ChevronRightIcon />
                  </button>

                  <div className='project-modal__dots'>
                    {images.map((_, idx) => (
                      <button
                        key={uniqid()}
                        type='button'
                        className={`project-modal__dot ${idx === currentSlide ? 'project-modal__dot--active' : ''}`}
                        onClick={() => setCurrentSlide(idx)}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            <div className='project-modal__info'>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ProjectContainer
