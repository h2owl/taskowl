import homeStyles from '../styles/Home.module.css'

export default function Card({children, href}: any) {
    return (
        <a href={href} className={homeStyles.card}>
            {children}
        </a>
    )
}