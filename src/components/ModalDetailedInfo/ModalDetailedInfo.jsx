import FeaturesItem from "../FeaturesItem/FeaturesItem";

import { addSpace, capitalizeFirstLetter } from "../../helpers/heplers";

import css from "./ModalDetailedInfo.module.css";

const ModalDetailedInfo = ({ camperItem }) => {
    return (
        <div className={css.modalDetailedContainer}>
            <ul className={css.modalFeaturesList}>
                {camperItem.adults > 0 && (
                    <li className={css.modalFeaturesItem}>
                        <FeaturesItem icon={"icon-users"} text={`${camperItem.adults} adults`} />
                    </li>
                )}

                {camperItem.transmission !== "" && (
                    <li className={css.modalFeaturesItem}>
                        <FeaturesItem icon={"icon-automatic"} text={"Automatic"} />
                    </li>
                )}

                <li className={css.modalFeaturesItem}>
                    <FeaturesItem icon={"icon-ac"} text={"AC"} />
                </li>

                {camperItem.engine === "petrol" && (
                    <li className={css.modalFeaturesItem}>
                        <FeaturesItem icon={"icon-petrol"} text={"Petrol"} />
                    </li>
                )}

                {camperItem.details.kitchen > 0 && (
                    <li className={css.modalFeaturesItem}>
                        <FeaturesItem icon={"icon-kitchen"} text={"Kitchen"} />
                    </li>
                )}

                {camperItem.details.beds > 0 && (
                    <li className={css.modalFeaturesItem}>
                        <FeaturesItem icon={"icon-bed"} text={`${camperItem.details.beds} beds`} />
                    </li>
                )}

                {camperItem.details.airConditioner > 0 && (
                    <li className={css.modalFeaturesItem}>
                        <FeaturesItem icon={"icon-conditioner"} text={`${camperItem.details.airConditioner} air conditioner`} />
                    </li>
                )}

                {camperItem.details.CD > 0 && (
                    <li className={css.modalFeaturesItem}>
                        <FeaturesItem icon={"icon-cd"} text={"CD"} />
                    </li>
                )}

                {camperItem.details.radio > 0 && (
                    <li className={css.modalFeaturesItem}>
                        <FeaturesItem icon={"icon-radio"} text={"Radio"} />
                    </li>
                )}

                {camperItem.details.hob > 0 && (
                    <li className={css.modalFeaturesItem}>
                        <FeaturesItem icon={"icon-painted-plate"} text={`${camperItem.details.hob} hob`} />
                    </li>
                )}

                {camperItem.details.toilet > 0 && (
                    <li className={css.modalFeaturesItem}>
                        <FeaturesItem icon={"icon-toilet-paper"} text={"Toilet"} />
                    </li>
                )}

                {camperItem.details.shower > 0 && (
                    <li className={css.modalFeaturesItem}>
                        <FeaturesItem icon={"icon-shower"} text={"Shower"} />
                    </li>
                )}

                {camperItem.details.freezer > 0 && (
                    <li className={css.modalFeaturesItem}>
                        <FeaturesItem icon={"icon-freezer"} text={"Freezer"} />
                    </li>
                )}

                {camperItem.details.gas !== "" && (
                    <li className={css.modalFeaturesItem}>
                        <FeaturesItem icon={"icon-gas"} text={"Gas"} />
                    </li>
                )}

                {camperItem.details.water !== "" && (
                    <li className={css.modalFeaturesItem}>
                        <FeaturesItem icon={"icon-water"} text={"Water"} />
                    </li>
                )}

                {camperItem.details.microwave > 0 && (
                    <li className={css.modalFeaturesItem}>
                        <FeaturesItem icon={"icon-microwave"} text={"Microwave"} />
                    </li>
                )}
            </ul>

            <p className={css.modalDetailedTitle}>Vehicle details</p>

            <ul className={css.modalDetailedList}>
                <li className={css.modalDetailedItem}>
                    <span className={css.modalDetailedItemText}>Form</span>
                    <span className={css.modalDetailedItemText}>{capitalizeFirstLetter(camperItem.form)}</span>
                </li>

                <li className={css.modalDetailedItem}>
                    <span className={css.modalDetailedItemText}>Length</span>
                    <span className={css.modalDetailedItemText}>{addSpace(camperItem.length)}</span>
                </li>

                <li className={css.modalDetailedItem}>
                    <span className={css.modalDetailedItemText}>Width</span>
                    <span className={css.modalDetailedItemText}>{addSpace(camperItem.width)}</span>
                </li>

                <li className={css.modalDetailedItem}>
                    <span className={css.modalDetailedItemText}>Height</span>
                    <span className={css.modalDetailedItemText}>{addSpace(camperItem.height)}</span>
                </li>

                <li className={css.modalDetailedItem}>
                    <span className={css.modalDetailedItemText}>Tank</span>
                    <span className={css.modalDetailedItemText}>{addSpace(camperItem.tank)}</span>
                </li>

                <li className={css.modalDetailedItem}>
                    <span className={css.modalDetailedItemText}>Consumption</span>
                    <span className={css.modalDetailedItemText}>{addSpace(camperItem.consumption)}</span>
                </li>
            </ul>
        </div>
    );
};

export default ModalDetailedInfo;
