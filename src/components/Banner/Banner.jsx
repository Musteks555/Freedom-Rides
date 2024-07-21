import css from "./Banner.module.css";

const Banner = () => {
    return (
        <div className={css.banner}>
            <h1 className={css.bannerTitle}>Welcome to Freedom-Rides</h1>

            <p className={css.bannerDescription}>Explore the best camping adventures with our top-rated RVs.</p>
        </div>
    );
};

export default Banner;
