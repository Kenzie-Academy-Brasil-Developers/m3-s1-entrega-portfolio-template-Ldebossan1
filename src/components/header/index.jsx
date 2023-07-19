import "../../styles/App.css"
import styles from "./styles/header.module.css"
import portfolioIMG from "../../assets/portfolio.png"

export const Header = () => {
    return (
        <>
           <header className={styles.header}>
            <img src={portfolioIMG} alt="Portfólio IMG" />
            <ul>
                <li>Sobre</li>
                <li>Stack</li>
                <li>Projetos</li>
            </ul>
            <button>Contato</button>
           </header>
        </>
    )
}