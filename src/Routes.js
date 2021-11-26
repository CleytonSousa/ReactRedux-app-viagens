import React from "react";
import Home from "./pages/Home/Home";
import Reservas from "./pages/Reservas/Reservas";
import { Route, Routes } from 'react-router-dom'

const MyRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/reservas' element={<Reservas />} />
        </Routes>
    )
}

export default MyRoutes