import type { NextPage } from 'next'
import Head from 'next/head'
//import Image from 'next/image'
import Card from '../components/card'
import HookTest from '../components/hook'
import Layout from '../components/layout'
import TextInput from '../components/text_input'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
      <Layout>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.tsx</code>
        </p>

        <HookTest></HookTest>
        <TextInput onChange={()=>{console.log("parent handler")}}></TextInput>

        <div className={styles.grid}>

          <Card href="https://nextjs.org/learn">
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </Card>

          <Card
            href="https://github.com/vercel/next.js/tree/canary/examples"
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </Card>

          <Card
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </Card>
        </div>
      </Layout>
  )
}

export default Home
