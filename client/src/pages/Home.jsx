import React from 'react'
import { About } from '../components/About'
import { Contact } from '../components/Contact'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Plans } from '../components/Plans'
import { Services } from '../components/Services'

export const Home = () => {
    return (
        <>
        <Header />
        <About />
        <Services />
        <Plans />
        <Contact />
        <Footer />
        </>
    )
}
