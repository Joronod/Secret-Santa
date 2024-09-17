import styles from "../styles/mystyles.module.css"
import { Link } from "react-router-dom"

const Header = () =>{

    return (
        <header className={styles.header}>
            <h1><Link to="/">Secret Santa App </Link></h1>
        </header>
    )
}

export default Header