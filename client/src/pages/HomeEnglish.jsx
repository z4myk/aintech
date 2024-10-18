import React from 'react'
import { EnglishAbout } from '../components/englishComponents/EnglishAbout'
import { EnglishContact } from '../components/englishComponents/EnglishContact'
import { EnglishFaq } from '../components/englishComponents/EnglishFaq'
import { EnglishFooter } from '../components/englishComponents/EnglishFooter'
import { EnglishHeader } from '../components/englishComponents/EnglishHeader'
import { EnglishPortfolio } from '../components/englishComponents/EnglishPortfolio'
import { EnglishServices } from '../components/englishComponents/EnglishServices'

export const HomeEnglish = () => {
    return (
        <>
        <EnglishHeader />
        <EnglishAbout />
        <EnglishServices />
        <EnglishPortfolio />
        <EnglishFaq />
        <EnglishContact />
        <EnglishFooter />
        </>
    )
}
