import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home, PairAddress } from '../pages'


const MainRoute = () => {
    return (

        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/pairs' element={<PairAddress/>} />
        </Routes>
    )
}

export default MainRoute
