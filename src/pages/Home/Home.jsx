import Banner from "../../components/Banner/Banner";
import DocumentTitle from "../../components/DocumentTitle/DocumentTitle";
import PopularCampers from "../../components/PopularCampers/PopularCampers";
import SpecialOffers from "../../components/SpecialOffers/SpecialOffers";

import css from "./Home.module.css";

const Home = () => {
    return (
        <>
            <DocumentTitle>Home</DocumentTitle>

            <div className={css.container}>
                <Banner />
                <PopularCampers />
                <SpecialOffers />
            </div>
        </>
    );
};

export default Home;
