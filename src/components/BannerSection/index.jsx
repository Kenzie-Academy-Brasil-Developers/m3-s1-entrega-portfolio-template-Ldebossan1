import bannerIMG from "../../assets/banner-img.png"
import { username } from "../../data/user"

export const BannerSection = () => {
    return (
        <section className="BannerSection">
            <p className="userName">{username}</p>
            <h2 className="BannerTitle">Bem vindo ao meu portfólio</h2>
            <p className="paragraph">Um texto interessante sobre mim</p>
            <button className="buttonBanner">Saiba mais</button>
            <img className="imgBanner" src={bannerIMG} alt="Banner-img" />
        </section>
    )
}