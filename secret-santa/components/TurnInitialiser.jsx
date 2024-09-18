import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "../styles/mystyles.module.css";

const TurnInitialiser = () => {
    const location = useLocation();
    const { santas } = location.state || {};
    const [remainingSantas, setRemainingSantas] = useState([]);
    const [currentSanta, setCurrentSanta] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (santas) {
            setRemainingSantas([...santas]);
        }
    }, [santas]);

    const handleNextTurn = () => {
        if (remainingSantas.length > 0) {
            const randomIndex = Math.floor(Math.random() * remainingSantas.length);
            const selectedSanta = remainingSantas[randomIndex];
            const updatedSantas = remainingSantas.filter((_, index) => index !== randomIndex);
            setRemainingSantas(updatedSantas);
            setCurrentSanta(selectedSanta);
            navigate("/reveal", { state: { selectedSanta, remainingSantas: updatedSantas } });
        }
    };

    return (
        <section className={styles.turnInitialiser}>
            <h3>Let's Begin</h3>
            {remainingSantas.length > 0 ? (
                <button onClick={handleNextTurn}>Pick a Santa</button>
            ) : (
                <p>All Santas have been assigned!</p>
            )}
        </section>
    );
};

export default TurnInitialiser;
