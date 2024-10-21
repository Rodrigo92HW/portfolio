import { Outlet } from "react-router-dom"
import Header from "../base/Header"
import Footer from "../base/Footer"

function Root() {
    return (
        <>
            <header>
                <Header />
            </header>
            <Outlet />
            <footer>
                <Footer />
            </footer>
        </>
    )
}
export default Root