import React, {useState, useEffect} from 'react'
import {Navigate, Route, Routes} from 'react-router-dom'
import { Loader } from '../components/Loader'
import { LoginPage } from '../components/auth/LoginPage'
import Navbar from '../components/Navbar'
import { Home } from '../pages/Home'
import { HomeEnglish } from '../pages/HomeEnglish'
import { UserAccount } from '../components/userBilling/UserAccount'
import { Dashboard } from '../components/dashboard/Dashboard'
import { AdminCustomersDatabase } from '../components/dashboard/AdminCustomersDatabase'
import { AdminServicesDatabase } from '../components/dashboard/AdminServicesDatabase'
import { AddCustomers } from '../components/dashboard/AddCustomers'
export const AppRouter = () => {
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        setTimeout(() => {
          setIsLoading(false);
        }, 4000);
      }, []);

    return (
        <>
        {isLoading ? (
            <Loader />
        ) : (
            <>
        <Navbar />
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/english" element={<HomeEnglish />}/>



                {/* <Route path="/admin/dashboard" element={<Dashboard />} />
                <Route path="/admin/clientes" element={<AdminCustomersDatabase />} />
                <Route path="/admin/servicios" element={<AdminServicesDatabase />} />
                <Route path="/admin/agregar-cliente" element={<AddCustomers />} /> */}
{/*                 
                <Route path="/iniciar-sesion" element={<LoginPage />} />
                <Route path="/mi-cuenta" element={<UserAccount />} /> */}
            </Routes>
            </>
        )}
        </>
    )
}
