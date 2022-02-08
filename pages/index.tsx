import type { NextPage } from 'next'
import Head from 'next/head'

import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { aluxioners } from '../public/aluxioners'
import Card from '../components/Card'
import { Subtitle } from '../components/Card'
import useScrollPosition from '@react-hook/window-scroll'
import { useState, useCallback, useEffect, useRef } from 'react'
import useWindowDimensions from './hooks'
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from 'react-spring'

import axios from 'axios'

const Home: NextPage = () => {
  const scrollY = useScrollPosition(60 /*fps*/)
  const { height, width } = useWindowDimensions();
  const mySect = useRef()
  const myRef = useRef()


  const [ref, inView, entry] = useInView({ threshold: 0 });

  const [show, setShow] = useState(true)
  const [buscar, setBuscar] = useState(true)
  const props = useSpring({
    width: show ? width : 0
  })


  const headers = {
    'Content-Type': 'text/plain',

  };
  const config = {
    url: 'https://openapi.emtmadrid.es/v?/mobilitylabs/user/login/    ',
    method: 'get',
    baseURL: 'https://localhost:3000',
    headers: {
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest'
    }
  };

  useEffect(() => {
    console.log(inView)
   // const margin = mySect.current.clientHeight - 450;
    if (!inView) {
      setShow(true)
    } else {
      setShow(false)
    }
    axios.defaults.baseURL = 'http://myurl';
    axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    axios.request(config)
      .then(response => {
        console.log(response)
      })
      .catch(e => {
        // Capturamos los errores
        console.log(e)
      })


    console.log(myRef.current)
  }, [scrollY, mySect]);




  return (
    <div className={styles.container}>

      <header>
        <nav className={styles.nav__}>
          <div ref={ref} className={styles.aux}></div>

          <h1 className={styles.nav__logo}>Aluxion</h1>

          <ul className={styles.nav__menu}>
            <li>metros</li>
            <li>cercanias</li>
            <li>carsharing</li>
          </ul>



        </nav>
      </header>
      <section className={styles.section__one} >




        <article className={styles.section__one_item1} >
          <h1 className={inView ? styles.h1 : styles.h1_aux} >Dont be later, aluxioner</h1>
        </article>







        <article className={styles.section__one_item2}>
          <input type="text" placeholder="¿Cual es tu parada?" className={styles.input} />
          <label htmlFor="" >
            <svg className={styles.icon} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.8504 17.1295L13.4557 12.7365C14.6418 11.3849 15.3626 9.6146 15.3626 7.67878C15.3626 3.44458 11.9164 1.56887e-07 7.68132 1.56887e-07C3.44543 -0.00084889 0 3.44458 0 7.67793C0 11.9113 3.44628 15.3567 7.68132 15.3567C9.6146 15.3567 11.3832 14.6384 12.7348 13.4557L17.1304 17.8495C17.2297 17.9497 17.3605 17.9989 17.4904 17.9989C17.6211 17.9989 17.751 17.9488 17.8504 17.8495C18.0499 17.6508 18.0499 17.3282 17.8504 17.1295ZM7.68132 14.3379C4.0075 14.3379 1.01886 11.3501 1.01886 7.67793C1.01886 4.0058 4.0075 1.01801 7.68132 1.01801C11.3551 1.01801 14.3438 4.0058 14.3438 7.67793C14.3438 11.3501 11.3551 14.3379 7.68132 14.3379Z" fill="#8993A4" />
            </svg>

          </label>
        </article>




      </section>


      <div className={styles.section__text}>
        <Subtitle>Team</Subtitle>

        <h3 id={styles.h3}>Aluxioners</h3>
      </div>

      <section ref={mySect} className={styles.section__two}>





        {aluxioners.map((aluxioner, i) => {
          return (
            <Card aluxioner={aluxioner} key={i} />
          )
        })

        }





      </section>
    </div>

  )
}

export default Home
