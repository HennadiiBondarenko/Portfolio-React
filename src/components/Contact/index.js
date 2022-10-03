import { useEffect, useState } from 'react'
import { useRef } from 'react'
import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetter from '../AnimatedLetters'
import emailjs from '@emailjs/browser'
import Forms from './form'
import Map from './map'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const refForm = useRef()

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_voyrh1c',
        'template_piw4ls2',
        refForm.current,
        '3ZBbLe4D1qHWXlam6'
      )
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetter
              letterClass={letterClass}
              strArray={'Contact me'.split('')}
              idx={15}
            />
          </h1>
          <p>You can contact me using the form below</p>

          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <Forms />
            </form>
          </div>
        </div>
        <Map />
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
