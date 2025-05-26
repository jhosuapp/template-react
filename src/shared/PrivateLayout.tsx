import React from "react"
import { Outlet } from "react-router-dom"

const PrivateLayout = ():React.JSX.Element => {
    return (
        <main>
            <p>Hola mundo soy un layout privado</p>
            <Outlet></Outlet>
        </main>
    )
}

export { PrivateLayout }