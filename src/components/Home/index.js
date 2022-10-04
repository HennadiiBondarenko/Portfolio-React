import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
import LogoTitle from '../../assets/images/logo-s.png'
import Cube from '../About/cube'
import './index.scss'
import Loader from 'react-loaders'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const jobArray = ['o', 'f', 't', 'w', 'a', 'r', 'e', ' ']
  const jobArrayDev = ['D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.']
  const nameArray = [
    'H',
    'e',
    'n',
    'n',
    'a',
    'd',
    'i',
    'i',
    ' ',
    'B',
    'o',
    'n',
    'd',
    'a',
    'r',
    'e',
    'n',
    'k',
    'o',
  ]

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <span className={`${letterClass} _15`}></span>

            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={16}
            />
            <br />
            <br />
            <img src={LogoTitle} alt="developer" />

            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />

            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArrayDev}
              idx={23}
            />
          </h1>
          <h2>Frontend Web Developer / React / JavaScript </h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <Cube />
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Home
