import Head from 'next/head'
import React from 'react'
import AudioPlayer from '../components/AudioPlayer'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Shushr</title>
        <meta name="description" content="Shushr" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AudioPlayer file="/audio/shush1.ogg" />
    </Layout>
  )
}
