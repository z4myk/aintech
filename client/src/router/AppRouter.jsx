import React from 'react'
import {Navigate, Route, Routes} from 'react-router-dom'
import Navbar from '../components/Navbar'
import { Home } from '../pages/Home'
export const AppRouter = () => {
    return (
        <>
        <Navbar />
            <Routes>
                <Route path="/" element={<Home />}/>
            </Routes>
        </>
    )
}
