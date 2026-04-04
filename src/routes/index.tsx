// Ou Tanstack
// ou use useEffect
// ou compenente so para API

import { Route, Routes } from "react-router-dom"
import { Layout } from "../components/Layout"
import { Home } from "../pages/Home"

export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<Home/>} />
                {/* <Route path="/film/:id" element={<FilmDetail/>} /> */}
            </Route>
        </Routes>
    )
}