import React, { Suspense, lazy } from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import Loader from '../components/UI/Loader'

// const Header = lazy(() => import('../components/Header'));
const Dashboard = lazy(() => import('../components/Dashboard/Dashboard'));
const CreateAds = lazy(() => import('../components/CreateAds/CreateAds'));
const TextAdForm = lazy(() => import('../components/CreateAds/TextAdForm'));
const MediaAdForm = lazy(() => import('../components/CreateAds/MediaAdForm'));

const Routing = () => {
    return (
        <Suspense fallback={<Loader />}>
            <Routes>
                <Route path='/' element={<Outlet />} >
                    <Route index element={<Dashboard />} />
                </Route>

                <Route path='/create' element={<Outlet />} >
                    <Route path='ads' element={<CreateAds />} />
                    <Route path='ad-text' element={<TextAdForm />} />
                    <Route path='ad-media' element={<MediaAdForm />} />
                </Route>
            </Routes>
        </Suspense>
    )
}

export default Routing