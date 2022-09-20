import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'

import styles from '../styles/Home.module.css'

import UserInput from '../components/userInput'
import Button from '../components/button'

import choose from '../utils/random'

export default function Home(window) {
  const [userInput, setUserInput] = useState('');
  const [winner, setWinner] = useState('')

  return (
    <div className={styles.container}>
      <Head>
        <title>PickMe!</title>
        <meta name="author" content="Kaycee Ingram <kazewaze>" />
        <meta name="description" content="A simple random picker" />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.heading}>
          Welcome to <span className={styles.title}>PickMe!</span>
        </h1>

        <div className={styles.grid}>
          <div className={styles.inputsContainer}>
            <UserInput userInputHandler={setUserInput} />
            <Button
              userInput={userInput}
              choose={choose}
              setWinner={setWinner}
            >
              Pick!
            </Button>
          </div>

          { winner ? (
            <div className={styles.winnerContainer}>
              <h1 className={styles.winner}>{ winner }</h1>
            </div>
            ) : ''
          }
        </div>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footer__link_wrapper}>
          <a href="https://kaycee.vercel.app"
             target="_blank"
             rel="noopener noreferrer">
            Built by <span className={styles.myHandle}>kazewaze</span>
          </a>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <span className={styles.logo}>
              <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
            </span>
          </a>
        </div>
      </footer>
    </div>
  )
}
