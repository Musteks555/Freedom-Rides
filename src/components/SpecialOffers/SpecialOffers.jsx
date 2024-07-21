import css from "./SpecialOffers.module.css";

const SpecialOffers = () => {
    const offers = [
        { id: 1, title: "Summer Discount", description: "Get 20% off on summer bookings!" },
        { id: 2, title: "Weekend Deal", description: "Camper for 3 days, pay for 2!" },
    ];

    return (
        <div className={css.specialOffers}>
            <h2 className={css.heading}>Special Offers</h2>

            <ul className={css.offerList}>
                {offers.map((offer) => (
                    <li key={offer.id} className={css.offerItem}>
                        <h3 className={css.offerTitle}>{offer.title}</h3>

                        <p className={css.offerDescription}>{offer.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SpecialOffers;
