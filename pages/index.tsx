import Head from 'next/head'
import { Inter } from '@next/font/google'
import { getProviders, signIn, signOut, useSession } from 'next-auth/react'
import Navigation from '@/components/Navigation'
import WelcomeSplash from '@/components/WelcomeSplash'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { data: session, status } = useSession()
  const loading = status === "loading"

  return (
    <>
      <Head>
        <title>Tailwindcss</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css"></link>
      </Head>
      <div className="dark:bg-black h-screen">
        <Navigation />
        <div className="container mx-auto px-4 dark:text-white">
          <WelcomeSplash />
        </div>
      </div>
    </>
  )
}
