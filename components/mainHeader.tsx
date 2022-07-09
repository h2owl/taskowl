import Link from "next/link";
import styles from '../styles/Home.module.css'
import LoginButton from './login-btn'

function MainHeader () {
    return (
    <header>
        <div className={`d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom`}>
            <Link href="/" className={`d-flex align-items-center text-dark text-decoration-none`}>
                <span className="fs-4">Hoge</span>
            </Link>
            <nav className={`d-inline-flex mt-2 mt-md-0 ms-md-auto`} >
                <a href="#" className={`me-3 py-2 text-dark text-decoration-none`}>menu1</a>
                <a href="#" className={`me-3 py-2 text-dark text-decoration-none`}>menu2</a>
                <LoginButton />
            </nav>
        </div>
    </header>
    )
}
export default MainHeader