import React, { Suspense, lazy } from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import Loader from '../components/UI/Loader'

// const Header = lazy(() => import('../components/Header'));
const Dashboard = lazy(() => import('../components/Dashboard/Dashboard'));
const CreateAds = lazy(() => import('../components/CreateAds/CreateAds'));

const Routing = () => {
    return (
        <Suspense fallback={<Loader />}>
            <Routes>
                <Route path='/' element={<Outlet />} >
                    <Route index element={<Dashboard />} />
                    <Route path='/createads' element={<CreateAds />} />
                </Route>
            </Routes>
        </Suspense>
    )
}

export default Routing