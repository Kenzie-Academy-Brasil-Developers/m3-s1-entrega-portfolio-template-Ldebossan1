import portfolioIMG from "../../assets/portfolio.png"

export const Header = () => {
    return (
        <>
           <header>
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