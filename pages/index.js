import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>KCS Consultancy Services</title>
        <meta
          name="description"
          content="Heating, Ventilation & Air Conditioning Designing Experts in Andhra Pradesh and Odisha"
          key="desc"
        />
        <meta http-equiv="Permissions-Policy" content="interest-cohort=()" />
        <meta
          property="og:title"
          content="Heating, Ventilation & Air Conditioning Designing Experts with wide range of services throught india."
        />
        <meta
          property="og:description"
          content="Heating, Ventilation & Air Conditioning Designing Experts"
        />
        <meta property="og:url" content="https://kanakadurgaconsultancyservices.com/" />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Logo.ico" />
      </Head>
      <div className='bg-gradient-to-bl from-[#151B54] to-[#0e41b9]'>
        <Nav/>
        <Hero/>
        <Services/>
        <About/>
        <Projects/>
        <Contact/>
        <Footer/>
      </div>
    </>
  )
}
