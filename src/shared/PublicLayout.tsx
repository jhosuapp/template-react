import React from "react"
import { Outlet } from "react-router-dom"

const PublicLayout = ():React.JSX.Element => {
    return (
        <main>
            <p>Hola mundo soy un layout public</p>
            <Outlet />
        </main>
    )
}

export { PublicLayout }