import styles from "./styles/banner.module.css";
import bannerIMG from "../../assets/banner-img.png";
import { username } from "../../data/user";
import "../../styles/App.css";

export const BannerSection = () => {
  return (
    <div className="container">
      <section className={styles.BannerSection}>
        <div className={styles.BannerText}>
          <p className={styles.userName}>{username}</p>
          <h2 className={styles.BannerTitle}>Bem vindo ao meu portfólio</h2>
          <p className="paragraph">Um texto interessante sobre mim</p>
          <button className={styles.buttonBanner}>Saiba mais</button>
        </div>
        <img className={styles.imgBanner} src={bannerIMG} alt="Banner-img" />
      </section>
    </div>
  );
};
