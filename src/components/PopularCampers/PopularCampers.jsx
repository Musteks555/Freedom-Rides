import css from "./PopularCampers.module.css";

const PopularCampers = () => {
    const campers = [
        { id: 1, name: "Road Bear C 23-25", image: "https://ftp.goit.study/img/campers-test-task/1-1.webp", price: "€10000" },
        { id: 2, name: "Cruise America C-21", image: "https://ftp.goit.study/img/campers-test-task/2-1.webp", price: "€8000" },
        { id: 3, name: "Britz 4 Berth", image: "https://ftp.goit.study/img/campers-test-task/3-1.webp", price: "€9000" },
    ];

    return (
        <div className={css.popularCampers}>
            <h2 className={css.heading}>Popular Campers</h2>

            <div className={css.campersList}>
                {campers.map((camper) => (
                    <div key={camper.id} className={css.camperCard}>
                        <img src={camper.image} alt={camper.name} className={css.camperImage} />

                        <h3 className={css.camperName}>{camper.name}</h3>

                        <p className={css.camperPrice}>{camper.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PopularCampers;
